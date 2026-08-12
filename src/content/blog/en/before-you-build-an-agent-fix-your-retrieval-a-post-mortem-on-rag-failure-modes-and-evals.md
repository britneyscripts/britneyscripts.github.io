---
title: "Before You Build an Agent, Fix Your Retrieval: A Post-Mortem on RAG Failure Modes and Evals"
description: "A post-mortem on real-world RAG failure modes in Alexandria: vector dilution, keyword priority eviction, and why fixing retrieval must precede agent orchestration."
date: 2026-08-12T07:31:00-03:00
draft: false
tags: ["rag", "retrieval", "ai", "vector-database", "chromadb", "search", "evals"]
author: "Bê Acosta"
---

## The Intro or Vent

Most of the posts about Agentic AI, Retrieval-Augmented Generation (RAG), and Foundation Models concentrate on how to build agents, agent architecture, multi-agent systems, and RAG pipelines. Believe me, I save a lot of posts here about these subjects, so I could easily write a BuzzFeed-style list: *Take the test to know the type of RAG architecture you are!*

What I wanted was practical, hands-on content from people facing and trying to solve real problems in production. I miss Stack Overflow a lot. It was the right tool to find answers to every problem. But now, in this new AI era, something is quietly (or not so quietly) being thrown away: people writing deeply about solutions they actually built and tested against real-world failures.

Some of you might have thought: *Did you search in dev.to?* Yes, I searched there, but if you are complaining about AI-written articles or posts here, it is because I don’t visit dev.to periodically.

---

## The Context & Recap

I kept this section as concise as possible so we can dive straight into the technical meat, but some background is necessary. Alexandria is a RAG system I’m building to optimize access to my knowledge hub. As I explained previously in other articles, I’m trying to tame a massive information overload across several sources (academic textbooks, papers, Zotero highlights, and Obsidian notes across Portuguese, Spanish, and English). 

Alexandria is my sandbox for both my MBA in Data Science and a course I’m currently enrolled in on Coursera. I use this course as a guide. In this sandbox I simulate retrieval architectures, observe system failure modes, and get hands-on experience with production trade-offs.

Right now, everyone is rushing to build agentic workflows, multi-agent frameworks, and complex reasoning loops. And I need to be honest: I haven’t even touched agent orchestration in my project yet, only in theory. Why? Because my core retrieval layer was broken, and fixing that comes first. Layering an autonomous agent on top of an unstable vector search doesn’t make a system smarter, it just makes hallucinations harder to trace. I needed to fix the retrieval bottleneck before worrying about agent orchestration.

---

## A Brief Review

Alexandria retrieves documents through a Hybrid Search strategy: combining exact substring keyword matching (for exact term matching) with dense vector search (which uses embeddings to capture semantic meaning rather than relying solely on literal words). As a DB, I use ChromaDB as my Vector Database, configured with a dual-collection architecture:

1. `user_notes`: Containing my Obsidian Markdown files (grifos, mental links, and questions, a lot of questions).
2. `academic_library`: Containing dense PDF textbooks and papers.

My Obsidian vault lives in a local folder that Google Drive syncs in the background, holding hundreds of pages of research documents. I’m turning the ‘I bought books that are impossible to read in one life’ syndrome into a digital library.

After this recap, let’s dive into the situation that got me here writing this article.

---

## The Failure

The system worked really well for a week. Every query got an accurate answer, giving me a false sense of confidence in the pipeline. I felt that I could launch a Google Search competitor after two days of work. Speaking of which, I wrote an article about vibe coding, you can find it in the Featured section on my LinkedIn profile. This confidence didn’t last long. I queried the system looking for a specific paper:

> *"Could you find a paper called QueryGym?"*

Instead of retrieving the paper, Alexandria returned a confident negative response, citing generic academic research methodology books (NBR 6023 Referências Bibliográficas) instead. I got no code crashes, no exception was thrown, but inspecting the raw logs (this is my favourite part in coding, reading raw logs—debugging could reveal what actually happened or give you a hint).

Let’s start analyzing the model:

The embedding model that I use in my project, `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2`, turns a sentence like *"Could you find a paper called QueryGym?"* into one fixed-length vector by mean-pooling.

Basically, what mean-pooling does is take a query that has 8 to 10 tokens, where most of them ("could", "you", "find", "a", "paper", "called") are generic conversational fillers that show up in thousands of unrelated queries. The remaining tokens are "QueryGym", which itself is a rare proper-noun entity. Mean-pooling averages all token vectors together across the entire prompt, causing the generic filler words to dilute the vector weight.

As a result, the dense vector shifted toward general methodology literature, pushing the actual "QueryGym" paper down past the top-k budget limit ($k=7$) completely evicting it from the prompt context sent to the LLM.

This highlights a critical **Production AI Risk**: pure vector search has a severe blind spot for exact proper nouns inside natural, conversational prompts. Left unchecked, it directly compromises Model Reliability and increases the need for explicit Hallucination Reduction strategies. This is a well-known issue called keyword mismatch or exact-match blind spot.

Maybe at this point you could have thought: *if she knew about the problem, why didn't she prevent it?* This is a playground for me. As PM I had two options: implementing a solution before I had the complete picture of the system, or just letting the system fail to know with more accuracy the real trade-offs I could have based on my reality. I chose the second option. The first could have led me to overengineering a system with heuristics for edge cases that could never happen in the system.

And how did I know about the problem? When I was choosing a model for the first version, I prioritized multilanguage capability over other fine-grained exact-match precision. But mean-pooling inherently averages token representations across the sequence. When a specific, low-frequency proper noun like QueryGym gets smoothed into a 384-dimensional vector alongside generic words, its unique signal gets diluted. I gained seamless cross-lingual semantic discovery, but I paid for it in exact-title retrieval, proving once again why a dense vector search cannot survive on its own without a sparse keyword safety net.

---

## The Diagnosis

Building upon the initial logging system, I had the retriever instrumented with full AI Observability logging to trace the exact document ranking at each stage. If you’re asking about the fusion method, I haven’t implemented Reciprocal Rank Fusion (RRF) yet, that’s planned for an upcoming version (right now I’m thinking about testing another model). Currently, I use priority fusion with hard-coded precedence logic.

Fixing the dense vector blind spot actually triggered a classic snowball effect. That Root Cause Analysis and Retrieval Debugging revealed a second, counter-intuitive failure mode: **Keyword Priority Eviction**. In the initial implementation of our retriever, the keyword extractor naively pulled all non-stopword tokens from a query regardless of letter casing. When executing the test query *"What is HNSW indexing in vector databases?"*, it pulled `['HNSW', 'indexing', 'vector', 'databases']`.

The exact substring matcher (`$contains`) matched generic code lines for "indexing" and "vector" inside a general programming textbook (`A Primer on Scientific Programming with Python.pdf`, matching Python list indexing like `a.index('run.py')`).

Because Keyword matches were hard-coded to sit at the top of the combined context list (`keyword_docs + vector_docs`), 9 noisy keyword matches filled slots #1 through #9 of the context window budget.

As a result, the #1 true vector match, the actual PDF titled `Similarity Search and HNSW in Chroma DB.pdf`, was completely evicted from the top-10 prompt context sent to Gemini.

Long story short: my rule-based search found 9 pages of basic Python tutorial code that happened to contain the word "indexing", placed them at the top of my prompt, and pushed the actual HNSW paper completely out of the context window. Much better explanation, right?

Without systematic RAG evaluation and detailed retrieval documentation, this bug would have been misdiagnosed as an LLM hallucination or embedding flaw.

---

## The Fix (And the Road Ahead)

To close the loop on this retrieval failure mode, we implemented key engineering Guardrails for AI Reliability Engineering:

- **Entity Extraction Refinement**: Refactored the `extract_keywords` helper method in rag file to enforce strict casing guardrails. It now ignores generic lowercase words ("indexing", "vector", "find") and only triggers `$contains` matching for explicit quoted terms ("QueryGym"), CamelCase tokens, or uppercase acronyms ("HNSW", "BERT"), preventing generic programming terms from polluting the keyword results.
- **Replacing Hard Priority with Reciprocal Rank Fusion (RRF)**: Transitioning from naive list concatenation (`keyword_docs + vector_docs`) to score-aware RRF ranking:

![Reciprocal Rank Fusion (RRF)](/images/RRF.png)

to prevent keyword noise from overwhelming high-confidence vector matches.
- **Guaranteed Slot Allocation**: Establishing fixed context budgeting across notes, vector library matches, and exact keyword matches so no single retrieval pass can starve the others.

---

## The Bigger Point

My Retrieval-Augmented Generation (RAG) System is a small setup. Humble and small. This failure was a clear reality check and to be honest, if you read my previous articles, this is exactly what I was hoping for. It is easy to get excited about agentic workflows, reasoning loops, and multi-agent systems and I get tempted by that tech hype too. Who doesn't when you don’t have a background in software engineering, and now you can ask an LLM to build a system for you to apply everything you’re learning?

However, if your retrieval layer drops the target document past the context window budget limit due to vector dilution or keyword noise, no agent in the world can fix the missing information.

As I wrote in my previous article on the Ratatouille Myth, I don’t learn by blindly following AI recipes, rather I learn by poking the system until it breaks. Building this humble prototype was a deliberate choice to test basic information retrieval foundations by starting with a simple substring match instead of a statistical keyword algorithm like BM25. As I study Data Science, I find that breaking things in my own sandbox teaches me far more than reading textbooks (I love reading but I need the practical case). Experiencing these bugs firsthand made the necessity of Hybrid Search crystal clear.

Before chasing complex agent orchestration, I needed to set up basic AI Observability and a curated evaluation set of test queries. That was the only way to measure whether architectural improvements like Reciprocal Rank Fusion (RRF) actually improve retrieval accuracy or simply shift the failure mode somewhere else.

---

## Short Final

As I keep building Alexandria in public, my immediate next step is figuring out how to set up simple test queries and evaluation rules without overengineering my stack.

If you’ve run into similar keyword eviction issues or vector dilution in your own projects, I’d love to hear how you approached it. Drop a comment below or reach out to swap notes.
