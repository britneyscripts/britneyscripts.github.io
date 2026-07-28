---
title: "Building Alexandria: How My RAG System Failed Wonderfully, Terrifically, Miserably (And What I Learned Rebuilding It)"
description: "What happened when I attempted to build my own Karpathy-style 'Second Brain' with ChromaDB, PyMuPDF, and dual multilingual collections to index 1.44 GB of research."
date: 2026-07-28T09:40:00-03:00
draft: false
tags: ["rag", "ai", "chromadb", "python", "personal-knowledge-management"]
author: "Bê Acosta"
---

> The big question of the week is: was Matthew McConaughey adjusting TARS’s humor setting in Interstellar?

When I started building my MBA project, I had a feeling I was missing a crucial piece: building something directly connected with RAG to truly understand NLP, retrieval, prompt engineering, agent orchestration, and everything in between. After a brief deliberation, I decided to take an IBM course on Coursera: the *IBM RAG and Agentic AI Professional Certificate*. What drew me to IBM was that the specialization provided a solid theoretical and statistical foundation (something I directly needed for my MBA).

However, applying everything I learned from the course directly to my MBA thesis didn't make sense. I couldn't overengineer a project whose primary focus is data science rather than agent orchestration or pure RAG. Thinking about how I could apply these concepts, I came up with an idea (not groundbreaking, but immensely practical): building a new project called **Alexandria**. The goal? Helping me organize and precisely query the knowledge library I’m building using Obsidian + Linear (yes, Linear!) + Zotero.

*(A quick note on the name: Alexandria is a personal tribute to the great Brazilian writer Luis Fernando Verissimo. For months, I’ve been hunting the internet for a specific short story of his that includes a line about the Lighthouse of Alexandria, a story I’m still actively searching for today!).*

The product itself is my take on building the famous "Karpathy Second Brain", but without relying on a black-box magic solution or cloning a template forked from GitHub. I really wanted to deeply understand every moving part of building a RAG system: chunking strategies, embeddings, transformers, vector databases, text splitters, and the whole ecosystem.

### The Content Context 

More than four months ago, I started using the Linear + Obsidian combo, inspired by the hype around Karpathy’s second brain and a tweet explaining how to set it up. At first, my Obsidian vault was populated with required reading from my postgraduate program and a few random notes. Then I started using Zotero (a tool I strongly recommend) to automatically sync PDF highlights directly into Obsidian (I won't delve into the setup details here, as there are plenty of tutorials on that).

Linear entered the picture as a way to link my MBA project tasks to lectures, books, PDFs, and notes. So: Zotero is the extractor, Obsidian is the library, and Linear is the task organizer. (And sometimes, I use Linear to break down Gemini's implementation plans when they start looking like Marvin the Martian's over-ambitious schemes from Looney Tunes). My Obsidian vault is synced via Google Drive, housing 1.44 GB of PDFs (nearly 35,000 pages), which eventually translated into almost 100,000 vector embeddings between papers and notes.

A major detail here is that my notes aren't traditional summaries: they are mostly highlights, open questions, and informal 'mental links'. Another detail is that the notes are written in three different languages at complete random. Depending on my mood, I might be thinking in Portuguese or Spanish, or pushing myself to write in English because it's easier to build knowledge when I remember a paper excerpt directly without translating it first.

I'm mentioned that because understanding the nuances of my own dataset is essential, after all, this is the data entering my knowledge base in ChromaDB. My folder architecture isn't hyper-structured: Obsidian has one folder per MBA class and another for papers, with a dedicated, organized folder for required readings.

### The MVP Base (Or When Everything Started to Fall Apart)

With that context out of the way, let’s talk about the process of designing the system. As I mentioned, I started the IBM specialization with the third course, which focuses on Chroma. The course has great supporting material, but like most Coursera courses, the projects are self-contained within the platform. To really learn, you have to build something hands-on on your own machine.

Naturally, the tech stack for Version 1 of Alexandria was frighteningly similar to the IBM course stack. 

The first thing I did was draft a lightweight, explanatory PRD. I deliberately didn't write a full technical spec (mostly because you can't write a technical spec for a domain whose technical details you don't fully know yet). I wanted to learn by making mistakes rather than guessing architecture upfront. Gemini generated an implementation plan for V1, I asked a few clarifying questions driven by curiosity from my MBA research, and we jumped straight into execution.

*Side Note: I won't detail the full PRD here: the goal was to learn by doing, reading errors line by line, and understanding the code directly.*

The primary MVP goal was simple: ingest data from my Obsidian folder focusing on two formats: Markdown (`.md`) and PDFs. (Future versions will support additional file types, but this was plenty for a start). Gemini generated three files: `ingest.py`, `agent.py`, and `app.py`. The role of `ingest.py` was to parse and index the files. I opened `ingest.py` to review the code.

And that’s when I hit my first real brick wall or my first Marvin looney tunes plot.

The original `ingest.py` used standard `PyPDFLoader`. On small sample PDFs, it worked smoothly. But the moment I pointed it to my actual 1.44 GB library (over 200 academic PDFs and nearly 35,000 pages of dense textbooks), the script collapsed with `LimitReachedError` and `zlib` stream decompression crashes. Python’s native PDF parsers simply couldn’t handle the memory footprint of reading 500-page textbooks at once. RAM spiked, the terminal froze, and the pipeline died. But here's the catch: because it successfully parsed the first few small files, it initially returned a misleading success message before crashing mid-way!

That was my first lesson: It's great to provoke errors to learn, but you need to have a trick up your sleeve when guiding an LLM. Before diving into how we fixed this, let's talk about the other two 'discoveries' I made during V1.

### The Single-Collection & Monolingual Traps

Even on the small subset of files that *did* ingest, Version 1 had two massive architectural flaws:

1. **The Single-Collection Mess:** I had dumped my informal trilingual notes (`.md` files) and 500-page textbooks into a single ChromaDB collection. When I asked a quick question about a personal mental link written weeks ago, vector search completely buried my note under heavy textbook chapters. Gemini gave me an answer that was a bizarre hybrid of my personal notes and random academic papers, which was definitely not what I wanted.
2. **The Monolingual Embedding Trap:** The default embedding model from the IBM course (which I used initially) was trained primarily on English text. But since I jump between Portuguese, Spanish, and English depending on my mood, querying a note in Portuguese against an English paper yielded terrible similarity scores.

### The Pivot: PyMuPDF Streaming & Dual Multilingual Collections

That's when I had my first "relationship talk" (DR) with Gemini on this project. *"Why didn't you tell me about PyMuPDF? Why didn't you tell me about chunk size limits? Why didn't you warn me about the single-collection mess?"* Gemini gave the ultimate AI response: *"Because you set up this project to learn, not to shortcut the process. Find the best option yourself."* Honestly, I had to agree with Gemini. So we sat down for our first real architectural trade-off session:

First, we replaced `PyPDFLoader` with **PyMuPDF (`fitz`)**, a high-performance C++ engine. Instead of loading whole books into memory, we built a file-by-file streaming pipeline with a lightweight RAM footprint (<512 MB). Suddenly, all 207 PDFs (~99,000 text chunks) and 106 Markdown notes were parsed and vectorized in under 3 minutes, with zero false-positive success messages.

Second, we upgraded our embedding model to `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2`. This model maps Portuguese, Spanish, and English into a shared 384-dimensional joint vector space, allowing me to query in Spanish and seamlessly retrieve relevant chunks from an English paper.

Third, we partitioned ChromaDB into two separate collections: `user_notes` (my personal highlights and mental links) and `academic_library` (the PDFs).


### The Ghost Bugs: Cache Stale Handles & The "QueryGym Mystery"

Just when I thought Alexandria was MVP-ready, we hit two "ghost bugs" that almost made me question my sanity:

* **The 65-Hour Streamlit Cache Bug:** After updating `rag.py`, the web UI kept serving old answers and throwing "collection not found" errors. Streamlit’s `@st.cache_resource` decorator had frozen stale SQLite database handles in RAM for 65 hours of continuous server uptime! We built a dedicated `"🧹 Limpar Cache"` button and restarted the process to flush it.
* **The Conversational Vector Fallacy:** One afternoon, I asked Alexandria: *"Could you find a paper called QueryGym?"* To my shock, it replied: *"No, QueryGym was not found."* But I *knew* the PDF was in the folder! Inspecting raw logs (yes, I have a log system this is my favorite part, read the error logs) revealed a fascinating failure mode: conversational filler words (*"could you find a paper called..."*) matched methodology textbooks (`NBR 6023 Referências Bibliográficas`) higher than the proper noun "QueryGym", pushing the target paper down to Rank #15 where it got cut off.

To solve this, we (or rather, Gemini executing my requirements) designed the **`DualHybridRetriever`**: a custom retriever that extracts proper-noun keywords (like `QueryGym`) and runs exact substring matching in parallel with dense vector search. When an exact title or proper noun match is found, it automatically boosts the document to **Rank #1** in Gemini's context window.

I have so much more to share about this topic, but I don't want to make this post too long. I'll write a follow-up on retrieval mechanics soon!

### What I Learned From Building My Own Second Brain

Building Alexandria from scratch (instead of cloning a cookie-cutter tutorial template) was easily the best detour I took in my MBA journey. In fact, this project now has its own roadmap leading to V4. I already have a queue of ideas, even if I don't have enough hours in the day to implement all of them yet!

The biggest takeaway for me wasn't just fixing bugs, but realizing how many hidden decisions happen under the hood of a search engine. When you watch a basic RAG tutorial, it looks like a neat 5-line script. But in reality, every single step forces you to make a choice:

* **Chunking & Parsers Matter:** If your PDF loader chokes on a 500-page book, your entire system fails before it even starts. High-performance C++ parsers like PyMuPDF saved my pipeline.
* **Pure Vector Search Has Blind Spots:** Vector embeddings are amazing for fuzzy semantic concepts, but surprisingly terrible at exact proper nouns like paper titles. Real-world RAG needs hybrid search (vectors + exact keywords).
* **Multilingual Embeddings Are Essential:** Being able to write a note in Portuguese or Spanish and retrieve an English paper without translating it first felt like unlocking a superpower.

Today, Alexandria seamlessly indexes almost 100,000 vectors across 1.44 GB of my research, answering queries in seconds across three languages. Next up? We're looking at evolving Alexandria V3 into a **Hybrid GraphRAG system**, connecting Obsidian `[[wikilinks]]` and Zotero citations into a traversable knowledge graph.

If you’re building your own RAG systems or navigating the messy world of personal knowledge management, don't be afraid to break things and read the raw logs. That’s where the real learning happens! 🚀🧠✨

*(P.S. I'm cleaning up the repo this week; V2 will be public soon, and I'll share it here when it's ready!).*
