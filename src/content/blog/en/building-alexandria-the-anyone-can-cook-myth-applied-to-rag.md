---
title: "Building Alexandria: The 'Anyone Can Cook' Myth, Applied to RAG"
description: "Why LLMs won't turn non-coders into engineers without curiosity, humility, and rigorous problem-solving: lessons learned from converting Jupyter notebooks to Obsidian in a multilingual RAG system."
date: 2026-08-05T08:30:00-03:00
draft: false
tags: ["rag", "ai", "llm", "obsidian", "python", "vibe-coding"]
author: "Bê Acosta"
---

### **Context**

In my previous article I started a series of articles about building a RAG system. In summary, I'm building a RAG system to apply new concepts that I'm learning in my Data Science MBA at USP (you can see my project [here](https://github.com/britneyscripts/ghostprod)) and to get more hands-on experience with it, I started an IBM specialization in Coursera. I wrote an article about vibe coding too, you can find it [here](https://britneyscripts.github.io/blog/en/the-vibe-coding-trap/). The article that you’re reading is a synthesis of both. 

So, in my favourite side project (Alexandria, I could name it RAGlexandria, but I thought it wasn't an elegant name for LinkedIn) I needed to walk through two tasks that became a deep dive into how to think about the RAG project itself and how to improve every communication with my partner in Code:

The first was to transform Jupyter files (.ipynb files) into Markdown Obsidian files. Jupyter notebooks are JSON files, and Obsidian can't render JSON as readable notes. I have several Jupyter files from my course, and I use Jupyter to quickly run data analysis.

The second one was to create a multilanguage capability to handle notes and documents in different languages stored in Obsidian. This requirement emerged because I read many articles in Portuguese, and when Zotero extracts my annotations from the highlights I make, they appear in the language of the original source. Since I write my own notes in three different languages, it became clear that I need to design this system to operate in a truly multilanguage space.

It is crucial to highlight my process of building this system using Gemini. After I wrote this [article](https://britneyscripts.github.io/blog/en/the-vibe-coding-trap/), I decided to name this sense of "anyone can code" as the Ratatouille Myth. Months ago I read this amazing [article](https://testdouble.com/insights/anyone-can-code-software-is-having-its-ratatouille-moment) and fell in love with the connection about the belief that anyone can code with an LLM.

Even though I have a different idea of using an LLM to build something, this article is worth reading. I'm not going into a very detailed debate about this here. But I guess you remember that in Ratatouille Linguini is blindly guided by Remy. Linguini never asks about a recipe, ingredient, or process. Nothing. Who holds the knowledge, curiosity and the willingness to cook something amazing is Remy. Linguini never uses Remy to learn something.

This isn't just a movie metaphor. A [systematic review](https://arxiv.org/abs/2510.00328) of 101 practitioner accounts found that 68% describe AI-generated code as "fast but flawed," and the authors coined a term for exactly this problem: "vulnerable developers," people capable of building but unable to debug what they built.

Before proceeding I want to warn you that I'm going to be very detailist describing the processes here because I'm not writing just about building a RAG system, but about how interacting with an LLM, like Gemini, could be the most awful experience of working with an Agent or a great opportunity to sharpen your knowledge about what you're building. Gemini really pushes you to interact with the process of building it and not just typing everything and approving all of Gemini's requests.

Let's go through another chapter in my toxic relationship with Gemini.

---

## **Solving technical debts before moving forward:** 

When I asked Gemini how ‘we’ could solve the first task, the Jupyter files conversion task, it deliberately suggested [nbconvert](https://nbconvert.readthedocs.io/en/latest/) to convert the ipynb files into md notes without any further explanation. It just generated the implementation plan, and asked me to proceed, as always. Good boy. 

The problem with nbconvert is that the image/output extraction isn’t automatic by default. I needed to explicitly wire nbconvert up to pull binary outputs into a separate assets folder and rewrite the image references to point there. I need to keep the folder structure as clean as possible, avoiding more than two subfolders to ensure efficient traversal and low latency.

I’m not delving into the more technical nbconvert details for this feature, such as binary outputs, base64 blobs, and so on. The focus here is on the process of negotiating trade-offs and weighing the pros and cons when choosing a tool suggested by an LLM. The tool needs to satisfy the explicit requirements the system demands to work as expected. As we saw, nbconvert delivered an undesired output.

I switched to Claude (as I was in the middle of a crisis with Gemini) to audit the nbconvert process. It immediately identified that the approach Gemini suggested was fundamentally flawed: it simply threw away the images from the output, which completely disregarded my requirements. Furthermore, Claude caught two additional logical errors in the implementation:

**First** was that the script doesn’t scale in efficiency. The script goes through every folder in the Obsidian vault, finds any ipynb file, and turns it into a md file unless that’s already been done and it is shouting out loud every single time it checks a file that was already converted. Even though checking every file is quick, having the script yell it out and pause to do so, hundreds of times, is eating up the time. My terminal was filled with a lot of messages starting with \[skipped\]. 

**Second** was that Gemini built the process, explained above, by processing one file at a time. There was no signal of parallelism in sight. With 143 notebook files, this isn’t a problem at all, but thinking about scaling the process, it could turn into a latency nightmare.

We fixed both these sub-issues before implementing Quarto; it was a deliberate decision on my own. I want to understand the logic within the code. 

I checked the options to solve it with Claude solely. We decided to start by solving the first one. Now, the script checks everything the same way but only speaks up when it actually does something new (converting or catching an error) and it just announces something after the run is done with a tiny summary. Another check was also added, because sometimes I could change something in a file, now I am also checking if the file changed more recently than its markdown copy. 

For the second one, rather than convert one notebook at a time we built a logic that handles converting a small crowd of 4 at a time. When one is converted the next in the line is added in the crowd batch. This way I don’t have to wait for a single-file conversion. In other words I don’t have a strictly sequential process. 

---

### **Adding Quarto to my RAG System**

Following along with the solution of the main issue (remember that it was how to handle the images output from Jupyter notebooks runnable cells without generating endless subfolders creation), Gemini deliberately suggested, as I explained above, that I could just ignore the image. This is not the logic that I thought when I planned the system. 

Due to my previous (awful, this is a toxic relationship) experience working with Gemini on these kinds of trade-offs, I asked another Gemini instance about what similar options to nbconvert are. The AI Overview gave me two options: [Jupytext](https://jupytext.org/) and [Quarto](https://quarto.org/). This suggestion list came with an explanation of how each one could be used in my project. 

Immediately afterwards I went to check both documentation but, regarding the Gemini (AI Overview) explanation, I read Quarto first and I assumed I had already chosen one of them.

*Side note: This has become my everyday process with LLMs like Gemini. I’m aware that I could just ask it to give me options, explain trade-offs, and pros and cons. However, sometimes I prefer this paleolithic way of doing research. It forces me to investigate, think and come up with a better approach by ‘myself’. This way I use Gemini as a guide in my learning process and not just like that scene where Michael and Dwight drive into the lake because Michael just blindly followed the GPS instructions without reasoning. It is worth mentioning that I follow along with this toxic relationship because Gemini is my object of study in my MBA project.* 

I skimmed the documentation focusing on the parameters that I can pass through Quarto. It was because, as a PM, I need to control my own system’s behaviour and not have a deeper understanding of how everything works behind the scenes. Quarto is supposed to be a gear in the engine rather than the core of my system.  
Claude was responsible for integrating Quarto. The requirements were the same as when Gemini implemented nbconvert. As Quarto is an open-source publishing engine rather than a Python library, I wasted one second to notice that I don’t need to call an import method because this is not an implementation but an integration. The scare is totally on me. The system just needs to invoke it correctly and orchestrate the Quarto process, i.e., the rendering happens entirely inside the separate Quarto process. Just for comparison, nbconvert’s (a Python library) process runs entirely within the code written by Gemini. 

*Side Note: The first thought that came to my mind reading the documentation that Claude created for this integration was: Why don’t I just implement Pandoc? This is the kind of learning process that is worth following using LLMs.*

When I tested the Quarto implementation, to follow along with the test phase, it seemed to be a good integration looking at it purely from the user’s side. But, I chose to implement a log system for every process in my system. Reading from logs is a way to learn about processes too. The first run was good enough. 

But a problem arose due to warnings of presumably duplicate files. Claude verified the Chroma DB collection metadata and grouped chunks by source file and found a few files duplicated. But the process to flag it as a duplicated file found very similar chunks, note that I’m using similar, not identical. After that we ran a ground-truth check: hashed all the files byte-for-byte (SHA256, grouped by file size first to avoid re-hashing everything), and compared.

Thank God it just found 3 duplicated files. At this point I started to pray that everything would run smoothly and perfectly. But it was a good opportunity to verify if I need guardrails to avoid duplicate files. But not right now. We just deduplicated the files in both layers: Obsidian vault and ChromaDB. 

Another point to add but not to go deeper is that I learned that to query ChromaDB using SQLite I need to add, in queries that can return a significant number of rows, limit or offset. I know that it could be a straightforward rule, but when I started this I didn't even know that I could query Chroma using SQL. 

 Let’s advance with another part of my daily diary, Gemini and I.

---

### **The hard work is maintaining the information organized** 

After the Quarto integration and before sending all these amazing, marvellous version 2.0 to GitHub, It was very obvious that I needed to re-organize my files. Why? I need to improve the efficiency of the system. This was the issue with nbconvert, right? Think about hundreds of files in different forms distributed in a huge sub-folder structure. It was the very first requirement. 

A messy folder could be considered easy-peasy for an AI because people believe that AI can do everything and reason totally by itself. But in fact, other factors must be considered to organize a DB. It is worth noting here that I’m considering Obsidian as a DB in this context, even with Chroma DB as a vector DB.

Obsidian is my primary data repository or a central hub aggregator where I add my courses material, pdfs, papers, books, images, video transcriptions and thoughts in notes. 

I need to manually curate, edit, reorganize my knowledge in an easy way using Obsidian like a management layer focusing on its core feature (semantic interconnectivity). For that, it is fundamental to maintain it clean and as organized as possible. This is about the folders and files structure. Now, for someone new to managing vector databases and metadata, apps like Obsidian are an oasis in the desert.

In this reorganizing process, I need to review all the frontmatter blocks in each file carefully. Semantic cleanliness in the frontmatter is the base to traverse related ideas and concepts naturally. I can’t make a mistake in my MBA project citing a paper that is inaccurate. Then, I revised the frontmatter attentively.

I can’t skip an important detail in my base knowledge: the multilanguage factor. My life always equilibrates between two languages and English as a side language. My vault is organized mostly in one lecture-note-per-file in the language of the source. I had two approaches that could work separately or together: atomic concept notes and aliases. 

An Atomic note (Zettelkasten method. You can read more about that [here](https://yu-wenhao.com/en/blog/karpathy-zettelkasten-comparison/)) holds exactly one central idea, small enough to link cleanly from anywhere. I was applying the opposite, filling one note with all the concepts from a class or lecture. I decided to use both together to have citation accuracy and manual curation control. 

As this process of generating the atomic notes and changing every frontmatter in Obsidian may take so long, Claude executed this part by breaking down my notes into atomic notes and adding the frontmatter correctly. So, organizing this management files layer to transform it into an organized layer makes things easier to me and to the system itself. Up to this point I organized the structure and the semantics. 

---

**Final Thoughts**

We went through a lot together here: nbconvert's tantrum, Quarto's quiet integration, a toxic relationship with Gemini I have no intention of ending anytime soon. Let's break all of it down into the actual framework driving this relationship with Gemini and Claude:

1. Prior knowledge. Do I already know this subject? If yes, skip straight to point four and curiosity will carry the rest. If no, that's fine too, it just means points two and three are about to do more of the heavy lifting, and I'm moving in slower and more carefully.  
2. Connective ability. Can I connect this to something I already understand? It could be a concept from my MBA, a bug I've hit before, a completely unrelated field that happens to rhyme with this one. This is the muscle that turns "I have no idea" into "I know something close enough to start."  
3. Humility. This is what keeps me from spiraling. Every answer an LLM gives can trigger another question, and another, until I've talked myself into an answer-response loop where I'm convinced I know nothing at all. Humility is what lets "I don't know yet" stay "yet," instead of becoming "never."  
4. Curiosity. The most important one. This is what drags my projects forward. The thing that turns a bug into an investigation instead of a shrug. Without it, the other three pillars just sit there, unused.

It's not "anyone can code." We already established that: Linguini never once asks Remy a question. It's "not everyone can code" unless they're passionate enough about the subject to stay in the kitchen, curious enough to keep asking why, and humble enough to admit what they don't know yet.

---

### **References**

1. Yu Hao, 'Karpathy Zettelkasten Comparison', [https://yu-wenhao.com/en/blog/karpathy-zettelkasten-comparison/](https://yu-wenhao.com/en/blog/karpathy-zettelkasten-comparison/)  
2. TestDouble, 'Anyone Can Code? Software Is Having Its Ratatouille Moment', [https://testdouble.com/insights/anyone-can-code-software-is-having-its-ratatouille-moment](https://testdouble.com/insights/anyone-can-code-software-is-having-its-ratatouille-moment)  
3. Fawzy, A., Tahir, A., & Blincoe, K., 'Vibe Coding in Practice: Motivations, Challenges, and a Future Outlook -- a Grey Literature Review', [https://arxiv.org/abs/2510.00328](https://arxiv.org/abs/2510.00328)
   

