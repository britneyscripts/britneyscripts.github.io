---
title: "Web performance is a tragedy of the commons (and AI agents are the ones enforcing the rules)"
date: 2026-05-21T10:00:00-03:00
draft: false
tags: ["agentic-commerce","agent-readiness", "ai-agents","schema-org","core-web-vitals","ecommerce-seo","product-management"]
categories: ["Agentic Commerce","Product Management","Research Notes"]
cover:
  image: "/images/mario-von-rotz.jpg"
  alt: "Playa Maderas, Nicaragua by Mario von Rotz - Unsplash"
  caption: "Playa Maderas, Nicaragua by Mario von Rotz - Unsplash"
description: "A deep dive into how Google's historical search criteria shape modern AI agents, and why web performance is now a critical agent-readiness metric."
---

Quick reminder: I’m migrating my miles of posts (3) from substack to my brand new blog built with Antigravity, Hugo and Github Pages. This post was originally written in Portuguese and I translated it to English. You can read the original in Portuguese here: https://evadepaula.substack.com/p/google-agentes-ia-ecommerce

I posted this article (25/03) before the Google I/O 2026 and I tried to maintain it just like it was written primarily. 

## Chapter 1: I do what I want because I don’t have enough context. 

Imagine a hypothetical situation where a Walmart team is showcasing an automated assistant to its stakeholders, and the agent answers a routine query by stating that Target's products are superior. That is exactly what happened. In my previous article, I told you about an AI product demo where the listed results were all competitor links, not a single product link belonged to the company that built the agent. They had a well-designed AI agent. They had a task that seemed simple at first.

But a result no one expected. The stakeholder's first reaction focused only on the technical dimension: block competitor domains. But the question I held onto was: how, exactly, did the agent view a competitor's page if in theory it was trained with scope-company data? What did it read from the page? What did it ignore? And what hypotheses or variables do we need to measure this behavior? (This became the foundation of my research at USP.) 

I’m ignoring the fact that in an obvious way the frame that trained the agent never got an instruction just to search products IN that website. 

To answer these questions, I come back to the future, better say to the past and to my experience working with SEO (in fact I never stopped working with SEO, just priority changed). AI hasn't invented a new way to read web content. It inherited what existed and it is using this legacy to force the companies to rethink from discovery to monetization strategies and, why not, the business models on its own. 

A single note before we go straight to the article’s core: The title I announced in the previous article was different. I needed to change it because, when I started to write it, I noticed that the core argument wasn’t about how the AI agents work today, but, why they work the way it works. The answer lies in 25 years of decisions from Google because they invented the search as we know today. The title of this article follows the argument. 

## Chapter 2: The logic that Google spent years building. 

Who did remember the famous meta tag keywords? Before 2011, back when the internet was still the Wild West (I’m exaggerating, I know) you could saturated the pages with keywords that didn’t related with the real topic and Google’s crawler read this and linked your website to this keywords, the keywords to a topic and it created a chain reaction.

The repetition counted. Buy links counted, and so much. For many companies the standard was a SEO strategy based in Black Hat SEO. Do you remember these old days? Cloaking, hidden text, doorway pages, link farms, content scraping, link schemes, keywords stuffing, and maybe other tactics I don’t even know. It was like the Dark Side vs the Light Side of the search force. 

In 2011, Google's Panda algorithm changed the rules completely. It wasn’t just a ranking update; it was a change in ‘search philosophy’. The algorithm started to penalize content created solely to manipulate the system. Around the same period, Yoast SEO popularized its famous readability and density signals using traffic-light colors in WordPress (what a naive world we lost). They used visual gamification to grade content quality for independent creators. It marked a massive shift: Google began prioritizing structural layout quality over raw keyword volume.

Storytelling courses arise in the digital world like food trucks in the spring. But the storytelling that saved brands in 2011 is the same fluff that today blinded the AI agents? Because storytelling became the most mainstream word of that Seo-era and the difference between a storytelling masterpiece and creating a non-sense fluffy content is very delicate. 

In 2013, the Hummingbird algorithms transformed Google from a keywords dictionary into an answer engine. Previously, search engines matched isolated keywords: Black + t-shirt, after Hummingbird it started to understand the intention behind the query. In which stage/phase of the funnel conversation the customer is using this query. 

A query like “what is the best cheapest sneaker to run in the rain?” began to be interpreted by the complete intention context. It laid the groundwork for conversational search. If you work with SEO or marketing… Do you remember the first time you visited Answer the Public? And how beautiful it was to see the queries appearing there? Well both emerged from the exact same era.

> **Technical Note:** There was a lot of confusion between semantic search and conversational search at that time. They operated in different layers: the semantic search focuses on the meaning by embeddings (vectors that represented concepts in n-dimensional space), while the conversational search was the flow interface layer. We have evolved from static terms vectors to representations that, today in the agents, seamlessly capture multiple speaking turns in today’s autonomous agents. 

> **PM Tip:** Attention mechanism is one of the reasons that AI agents process technical tables (Pure Signal, High Density) in a more efficient way than they process marketing paragraphs (High Noise, Low Density). Structured data reduces semantic ambiguity and creates clearer attribute-value relationships than free-flowing product description text. 

In each update, the pattern that emerged was always the same: verifiable data is more valuable than the well-written marketing text. What agents inherited today is nothing other than the hierarchy built by Google through 25 years and absorbed from Common Crawl during LLM’s training. 

## Chapter 3: The customer’s experience is all that matters: CrUX and Actual User Performance

In 2017, Google launched the Chrome User Experience Report, the famous CrUX. It was confirmation that Google had stopped believing what websites said about themselves and had started measuring the actual user experience. It was through this initiative that your best performance friends emerged as the most important technical metrics: LCP, INP, CLS, and TTFB. This experience is measured using real data from a real customer in Porto Alegre (my hometown) with a bad 5G signal at 6:00 PM on a Monday during a wonderful stormy day.

The CrUX report was the moment Google announced that it didn't matter how much you optimized your website; what mattered was the actual customer's experience. In 2021, Core Web Vitals became an official ranking signal. Technical performance was no longer the exclusive responsibility of engineering; it became a core product metric to e-commerce websites for example.

Later, we can talk about the internal organizational politics of performance. If you are a PM responsible for this area, you know exactly what I mean. Web performance is a classic tragedy of the commons. Every team wants to add just 'one more' analytics pixel or 'one more' high-res image banner, thinking their single change won't hurt. But when those choices accumulate, the user experiences total system failure and you as a PM need to respond about it.

## Chapter 4: The silent switch. When Google started stopping to send traffic

Do you remember the last time that you asked something to Google and the answer wasn't an AI overview? May 14th we celebrated (sure?) two years since this silent (?) revolution started.  But Am I using silent revolution in a sarcastic way? No, because that day the announcement was about the product not the consequence. As a company Google never loses right?. Today, the AI overview appears in more than 50% search results. The organic CTR dropped to 61% (references at the end). The customer asks something; Google answers using your website data, but it doesn't send the user to your website. 

There is a clear separation here:  for transactional queries, those where the customer has a clear buy intention, the AI overview simply doesn’t appear. Google transferred the answers to the informational request queries to the AI overview, where it never had direct monetization and Google Shopping and Ads were fully kept as a ‘transactional space’. 

Whose that paid for clicks just continue paying for it. Whose depended on organic traffic just lost. This is the most profitable separation of the search history executed without an official announcement or better, yes, it had an announcement but we can announce every change as a victory to all. 

There is no shortage of people documenting this: antitrust lawsuits, European Union investigations, and publishers losing between 50% and 90% of their traffic. The central accusation is always the same: Google used open-web content to train the very models that now answer user queries without ever sending traffic back to that open web. Meanwhile, it carefully preserved the high-value real estate for paid ads. It’s the same old business model, except now Google doesn’t need to send you traffic to monetize your presence.

Google isn’t sending you less traffic because your SEO got worse. It’s because Google learned how to answer queries without you. The SEO improvements that you can make today are the same you could make yesterday. 

## Chapter 5: What an Agent Actually Reads When It Accesses Your Site

A Level 1 agent, the kind of agent that I analyzed in my previous article, which curates and compares products without executing transactions, does not navigate like a human user. It requests the rendered HTML, interprets the structured data, and evaluates the completeness of the available information.

During my testing using Playwright across Brazilian beauty e-commerce platforms, a clear pattern emerged. I analyzed an industry giant operating on a stack of VTEX IO. For traditional Google search, brand authority and direct search volume still guarantee a spot on page one, but they no longer secure the absolute top position. For an autonomous agent, this technical architecture creates three cascading bottlenecks:

- **Rendering Latency:** The site triggers hundreds of API calls via Client-Side Rendering (CSR) just to assemble the page layout. The agent times out before the hundredth call even resolves.
- **Data Trapped in the ERP:** Critical technical attributes like milliliters (ml), active ingredients, or skin type classification remain locked inside SAP or other ERP and never flow down to Schema.org markup. All that is left for the agent to scrape is pure marketing fluff: "immediate lifting effect" or "94% firmer and more elastic skin." This copy is completely useless for an objective comparison engine.
- **What I Call "Semantic Invisibility"¹:** Without structured technical attributes, the agent cannot parse the product into a comparative matrix. The website is technically rich in content, but entirely starved of machine-readable information.

> **¹ Author's Note / Proprietary Terminology:** I use the phrase "semantic invisibility" to describe the condition where a product physically exists on a server but lacks sufficient structured data to be located and compared by an automated retrieval system. This isn't just about a developer forgetting to add a tag; it means that without deterministic parameters, a probabilistic model is forced to guess the product's coordinates in vector space, rendering it invisible to precise multi-agent workflows. This is the central hypothesis I am currently testing empirically through my research at ICMC/USP.

In traditional e-commerce, we optimize information architecture exclusively for the human eye: category branches, collections, and breadcrumbs always following the structure of the e-commerce platform or in other cases the structure of the catalog management platform.

I propose that in Agentic Commerce, this entire architecture must be redesigned or improved for what I call agent legibility (Yes I know that last month a lot of articles and posts are using the same term) the systemic capacity of an automated workflow to locate, interpret, and compare a product without ambiguity. In this environment, Schema.org operates as a factual anchor, separating deterministic data from the probabilistic inferences of an LLM.

Every single structured attribute is, technically speaking, a coordinate in the product's embedding space: volume, active ingredients, skin type, and sun protection factor (SPF). When these attributes are present, the agent locates the product with surgical precision. Without them, the agent is forced to estimate what it doesn't know and a bad estimation turns into a failed product recommendation. Hallucination.. is this you? Here I’m not talking of how the agent parameters are configured. 

> **PM to PM (and Tech Lead) Tip:** If you are trying to solve agent legibility by generating separate AI summaries or creating heavy semantic caches for every single PDP, stop right there. You are about to inherit a massive synchronization nightmare and an astronomical token bill. Instead, use Schema.org as your native, zero-cost factual cache. Leave the emotional copywriting for the humans, and ensure that your deterministic attributes (data that requires absolutely no model inference to be understood) are cleanly baked into your JSON-LD payloads. It is the cheapest, most scalable way to open paths for agents without blowing up your infrastructure budget. If you test this setup, let me know!

## Chapter 6: How a Product Manager Measures Real Impact

The question I hear most often from PMs who finally grasp this problem is: "Fine, but how do I actually measure it?" I believe that the answer has three operational layers, and it starts with data assets you likely already possess.

- **Layer 1 - Search Console and Google Analytics:** Your Core Web Vitals dashboard already displays page statuses grouped by performance health. The real problem is that most product teams never unpack these clusters to identify the exact URLs dragging the score down. The metric that matters most as a gatekeeper for bots is Time to First Byte (TTFB). A sluggish server gets discarded before any content analysis even takes place.
- **Layer 2 - The CrUX API:** By utilizing programmatic access to Google's public Chrome User Experience Report API, you can benchmark your real-user performance metrics directly against your competition without needing access to their private servers. An LCP of 6 seconds versus a competitor's 2 seconds isn't just an engineering issue anymore it is a massive penalty to your agent visibility. I’m doing it right now to evaluate the same product on different platforms as Vtex, Shopify, etc..
- **Layer 3 - The Rich Results Test:** This validates whether your Schema.org implementation is syntactically correct. However, completeness matters far more than mere presence. How many of the expected fields for a standard product PDP are actually populated? Name and price are just the baseline. Skin type, ingredient lists, volume, and aggregate rating arrays are the actual attributes an agent uses to compare products in a meaningful way.

If you can track the performance of a Cost-Per-Click (CPC) campaign down to the exact cent, you can measure the visibility of your catalog tokens for autonomous agents. The data is public, structured, and entirely free but you need to look at this seriously. 

> **Side Note:** When I wrote this article I just used all data I have concerning skincare Product Details Page. I changed it later to build a comparison between skincare PDPs vs Electronics PDPs. 

## Chapter 7: The New Reality

The underlying logic that Google engineered over two decades indexation, structured data layers, technical performance optimizations, and verifiable content integrity has not been replaced by AI agents but It has been magnified by them.

Googlebot used to read your site to rank you in an array of blue links, remember? Now, AI Overviews read your site to formulate immediate answers. Level 1 agents read your site to decide whether your product qualifies for the curated shortlists consumers see before making a buying decision.

In every single case, the baseline criteria remain identical: structure, velocity, and completeness. The only variable that changed is the financial cost of not being there. Previously, missing the mark meant dropping a few positions in the SERP ranking. Today, it means you simply do not exist in the response, AI Agents are used to compare products you’re losing customers who are in the bottom of the conversion funnel with a real intention of buying your product. 

When we talk about product microdata we found that: prices fluctuate, promotions expire. stock runs out. If your Schema.org data hasn't been updated since yesterday, an agent will confidently recommend a product to a user for R89whentheactualcheckoutpricetodayisR136. This is a legibility false positive: the site passed all technical syntax validations, but delivered an incorrect business outcome. This friction defines the limit of Level 1 agents, and it serves as the exact starting point for why deeper integration protocols are emerging.

There is a consequence here that stretches far beyond product design. If an agent mediates discovery and consideration before a user ever lands on your domain, or worse, if the user never lands there at all your entire martech infrastructure goes completely blind. (If you're reading this after the Google I/O we got there quickly isn't it?)

### The Attribution Blindspot

Take LLM traffic attribution via UTM codes as a core example: ChatGPT started appending UTM parameters in June 2025 (and we may see a completely new UTM infrastructure emerge alongside OpenAI's ad networks), but Gemini still does not pass them consistently. Google's AI Overviews often mask themselves as standard organic traffic, and the ChatGPT mobile app frequently hits servers as direct traffic. The last-click attribution model has fundamentally changed because AI agents now route traffic directly to the specific PDP or straight into the shopping cart.

### The LatAm Reality Check

I am intentionally not talking about agents closing the complete purchase loop within general consumer behavior yet. Why? Because I am focusing on the Brazilian market. Each Latin American market exhibits different levels of AI adoption, distinct legal frameworks, varied payment architectures, and, most importantly, a completely unique purchase culture.

We are likely going to see entirely new attribution models emerge that are closely attached to this regional AI adoption. Entire marketing automation ecosystems will have to be rethought to capture this new customer journey—or, as I highly recommend, we must carefully study what happens during this transition before executing blind infrastructure changes.

Whew... we made it to the end...

In my next article, I will dive deep into Common Crawl mechanics and Harmonic Centrality calculations to unpack why the foundational knowledge layer of modern LLMs is a direct reflection of what Google deemed relevant for a quarter of a century. (I swear I tried, but every day is a new day in the agent/ai world and I have to revisited my thesis)

### In the Next Article:

The Internet the Agents Learned From: Common Crawl, graph theory, and why the knowledge substrate of modern LLMs is a mirror image of the criteria Google validated for decades.

### References

- Vaswani et al. (2017) – "Attention Is All You Need." arXiv:1706.03762.
- Google Search Central – A complete history of algorithm updates from SEO nerds, for SEO nerds: searchengineland.com/library/platforms/google/google-algorithm-updates
- Pew Research Center (2025) – "Google users are less likely to click on links when an AI summary appears in the results."
- Semrush (2025) – "AI Overviews Study: Inside Google’s New Search Reality." (Requires registration to access full report).
- Seer Interactive (2025) – "AIO Impact on Google CTR."
- Google Chrome Developers – "CrUX Tools | Chrome UX Report." developer.chrome.com/docs/crux/methodology/tools.
- Mozilla Foundation (2024) – "Training Data for the Price of a Sandwich: Common Crawl’s Impact on Generative AI."
- Penske Media Corporation, Chegg Inc. – Antitrust lawsuits against Google (2025). Public legal documentation available via US Federal Courts:
  - Chegg, Inc. v. Google LLC and Alphabet Inc., No. 1:25-cv-00543 (D.D.C., Feb. 2025). courtlistener.com/docket/69668109/chegg-inc-v-google-llc
  - Penske Media Corporation v. Google LLC, U.S. District Court, D.C. (Sept. 2025). axios.com/2025/09/14/penske-media-sues-google-ai
- European Commission – €2.95 billion fine issued to Google for abusive adtech market practices, September 2025.
- Proprietary testing telemetry collected across Brazilian beauty e-commerce PDPs via Playwright + Schema.org parsing engines, March 2026.

*This article is the second installment in a series examining agentic commerce and the author's Data Science MBA thesis development at ICMC/USP. These articles are designed to establish the structural and strategic context of the research; they do not explicitly detail methodology or empirical data outcomes.*