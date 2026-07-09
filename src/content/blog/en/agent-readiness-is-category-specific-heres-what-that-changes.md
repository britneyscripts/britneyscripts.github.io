---
title: "Agent Readiness is Category-Specific. Here's What That Changes."
date: 2026-05-13T10:00:00-03:00
draft: false
tags: ["agentic-commerce", "agent-readiness", "data-extraction", "crawler", "academic-research"]
description: "Diving into the first stage of my research: separating product facts from platform metrics, calibrating measurement instruments, and choosing the right extraction architecture."
author: "Bê Acosta"
---

I know, I know. I promised to write about a different matter, but my research took a turn, so I modified my Substack backlog. Today, we are diving into the first stage of my research: Extracting Data.

(Side note: I hope I can talk in English as well as I write in it. My English teacher says I’m working on it!)

Let’s get straight to it. I’m focusing on how an AI agent (Gemini, ChatGPT, etc.) reads a Product Detail Page (PDP). This encompasses several dimensions: information architecture, schema completeness, readable content, and performance. And obviously, how Google Search reads a PDP matters here, though I’m not taking the traditional SEO approach. Domain authority, internal links, relevance scores; that’s not what this is about.

Just a quick reminder: Google Shopping data is on my radar too, but I’m not including it in this research iteration.

Google built the standard on how we think about crawler content from a page. This was my starting point when building my research framework: How Google works. After years working with SEO, and mostly with technical SEO, this is not mysterious or magic for me.

Then I needed to add MCP and A2A protocols to my research framework. Why? Because Shopify just changed the rules. In December 2025, Shopify shipped native MCP support in its Winter ‘26 Edition. On March 24, 2026, Agentic Storefronts went live by default; 5.6 million Shopify stores became automatically discoverable inside ChatGPT, Microsoft Copilot, Google AI Mode, and the Gemini app. And on March 3, Shopify and Google jointly announced the Universal Commerce Protocol, an open standard that lets AI agents complete real purchases across platforms. Shopify is not waiting for the market to catch up; it is building the infrastructure layer and pulling everyone else into it.

One methodological note: Shopify is setting the pace globally for agent-ready commerce (Agentic Storefronts, UCP, MCP native). But in Brazil, the dominant platforms for mid and large e-commerces are VTEX, proprietary solutions, and Magento. Shopify here is mostly small and medium DTC brands. This gap between where the protocol standard is being built and where Brazilian commerce actually runs is itself part of what I am measuring. A Shopify baseline will come in a future iteration, likely using a US market equivalent for comparison.

But here is the thing: MCP and A2A operate at the bottom of the funnel: cart, checkout, transaction. My research lives at the top: discovery. Can the agent find your product? Can it read it? Can it be compared without ambiguity?

The honest answer, at least for the Brazilian market right now, is: not yet. And that is not a criticism; it is the research gap. Most e-commerces globally are still figuring out Schema.org completeness and Core Web Vitals. Brazil is no exception. Putting MCP on a PDP with invisible semantics is like installing a checkout lane before building the store. This is a subject for another article, but it is why I did not start at the protocol layer.

### Separating Product from Platform

Coming back to my research, my first approach was searching for 30 products on different platforms, but this approach generated a question: what was I really measuring? Because performance depends on the platform: it is an infrastructure metric; it is not a variable attached to the product itself. User experience (CrUX data) is about the platform too. Information architecture? Yes, you guessed it. Platform again.

This separation of concerns - product versus platform - changed my approach. I switched to just 7 SKUs across multiple platforms using the *Ceteris Paribus* technique:

> **Ceteris Paribus** (Latin for “all other things being equal”) is an analytical technique used to isolate the impact of one variable on another by holding all other influencing factors constant. It is fundamental for determining causality in economics, finance, and predictive machine learning models.

For my first test, I chose the iPhone 16 Pro 128GB Titânio Preto (yes, in Portuguese) and 5 platforms where this product is available in Brazil: Apple Brasil, iPlace, Mercado Livre, Amazon Brasil, and Fast Shop. I also included 6 more products: 2 in the electronics category and 3 in skincare.

This split was deliberate. I needed to understand how agents handle two fundamentally different types of entities.

### Skincare vs. Electronics: The Context Dependency

In skincare, the attributes are product-level facts, but their relevance is user-dependent. Volume, SPF, ingredients, and shade exist independently of who is buying. The product has 30ml. The product contains retinol. Those are objective statements.

But whether retinol is right for you depends on your skin type, your sensitivity, your routine. The agent needs both the product data and the user context to make a correct recommendation. Without `skin_type` declared in Schema as `additionalProperty`, it either infers or ignores—and inference here has real consequences. A wrong shade recommendation is an inconvenience. A wrong ingredient recommendation for sensitive skin is a return, a bad review, or worse.

*   **Skin type:** oily, dry, combination, sensitive
*   **Shade:** rosy beige, nude 03, porcelain
*   **Benefit:** hydration, coverage, firmness
*   **Ingredient:** hyaluronic acid, retinol, niacinamide
*   **How to use:** morning, night, pre-makeup
*   **SPF:** 30, 50+
*   **Volume:** 30ml, 50g

The central entity is Product + extensible `additionalProperty`. It is an open schema by necessity because the matching logic lives outside the product, in the user profile the agent builds through conversation.

And that conversational layer is not uniform. When you ask Claude or ChatGPT to help find a skincare product, they ask clarifying questions: *What is your skin type? Do you have sensitivities?* That dialogue compensates for missing structured data. Gemini, in shopping mode, does not consistently do this; it reads what is there and moves on. Which means the same PDP with the same missing attributes produces different outcomes depending on which agent is reading it. That asymmetry is part of what I am measuring.

In electronics, the dependency is different. Choosing 128GB over 256GB reflects a user preference, but it is not a compatibility question. The iPhone has 128GB. That is true regardless of who is buying, what their routine is, or what they had for breakfast. The agent compares and filters without needing to know anything about the person asking.

*   **RAM:** 8GB, 16GB
*   **Storage:** 256GB SSD
*   **Processor:** Apple M4, Snapdragon 8 Gen 3
*   **Resolution:** 6.7” AMOLED 120Hz
*   **Battery:** 5000mAh
*   **Connectivity:** 5G, Wi-Fi 6E, Bluetooth 5.3

“Has more RAM” is either true or false. “Better for oily skin” is an inference. The central entity for electronics is Product + specs via `TechArticle` or `ItemList`, a more standardized schema, which makes electronics a cleaner test case for a first extraction.

One last note on extraction logic before we get to the data: the crawler script is the same for both categories. CrUX, PageSpeed, Schema.org presence, field completeness. That does not change. What changes is the list of expected fields *per category*. For electronics, I am checking for technical specs. For skincare, I am checking for `additionalProperty` fields. Same infrastructure audit, different field map.

This is not a workaround; it is a methodological choice. Agent readiness is category-specific. A PDP that scores well for an iPhone and a PDP that scores well for a retinol serum are solving different legibility problems. Treating them with the same field checklist would produce scores that look comparable but measure different things. The script receives the category as a parameter and validates accordingly.

In academic terms: the measurement instrument is calibrated per category. In practical terms: one extra line of code.

### Crawler vs Agent: An architectural decision disguised as a technical one

The next thing to decide was: what is the better approach to collect data from a website, an agent or a simple crawler? Let’s be honest here, I just needed to push the data for a test, verify if the API key is working, and get all the data I need. Just that.

But then I started thinking. And thinking led me to five dimensions that changed what looked like a simple technical choice into an architectural decision. Let me walk you through each one.

*(My Software Engineering degree is finally justifying its existence).*

#### 1. Maintainability
A simple crawler breaks when the HTML changes. That sounds like a weakness until you realize: in a longitudinal study, a broken crawler is a signal. It means the site changed something. With structured error logging, every failure becomes a data point. My script generates an `extraction_log_YYYYMMDD.json` on every run. If a Schema.org field that was present in June is missing in August, the log registers `schema_change_detected: true`. I don’t need to babysit the process; the process tells me when something changed.

An agent could do this too, theoretically. You can build a Human-in-the-Loop (HITL) step where the agent detects a divergence, pauses, shows you the diff, and waits for your decision. That is actually elegant. But HITL doesn’t scale in production and, more importantly, it doesn’t run at 3am when your GitHub Action triggers the weekly collection. For a 90-day automated study, you want your judgment baked into the code, not waiting in an approval queue.

#### 2. Scalability
This one is straightforward. A crawler with a well-structured error handler runs the same way on 5 URLs or 500. An agent with HITL requires a human to close the loop—and that human is me, alone, with a thesis deadline. Scalability for a one-person research project means: how much of this can run without me watching it? The answer with a crawler is: almost all of it.

#### 3. Auditability
Here is where it gets interesting for academic research specifically. A crawler is explicit by design. Every extraction decision lives in the code: “field X expected, field X absent, log error.” You can read the script and understand exactly what was collected and how. An agent introduces a layer of interpretation that lives inside the model. Even with a well-structured skill, the decision about what a change means still passes through the LLM. That is not auditable in the same way that if `field_missing: log_error()` is auditable. A thesis reviewer can question results generated by an agent in a way they cannot question a Python script published on GitHub. The code is the methodology.

#### 4. Cost
A crawler is free beyond the API keys you already have. An agent running on an LLM has token costs per execution. For 7 SKUs × 5 platforms × 90 days of longitudinal collection, that is a real number. I am not saying agents are expensive in absolute terms; I am saying that for a research project with no budget, free wins. Every time.

*(If someone wants to lend me a credit card, I will absolutely use every single Google Cloud tool available for this research. No questions asked.)*

#### 5. Reproducibility
This is the strongest argument, and the one I did not expect when I started thinking about this decision. If another researcher wants to replicate my study two years from now, a crawler with explicit code published on GitHub is fully reproducible. An agent depends on the model, the version, the prompt, and the infrastructure. The model I use today may not exist in 2028. Reproducibility is a pillar of the scientific method. I cannot ask a thesis committee to trust results that depend on a system that cannot be fully described in a methodology section.

So here is the conclusion I arrived at: not because a crawler is simpler, but because every single dimension points in the same direction when the context is solo academic research:

> The real architectural question is not crawler vs. agent. It is: **where do you want human judgment to live in the pipeline?** Baked into the code you write upfront, or waiting in a loop you close at runtime?

For production at scale, an agent with HITL is powerful. For a 90-day longitudinal study running automated collections, you want your judgment in the code: explicit, auditable, and reproducible by anyone with a Python environment and your API keys.

I use a crawler to collect because I need to explain every data point in my thesis defense. I will use an agent to interpret because that is where flexibility beats precision.

Next article: The first extraction results. iPhone 16 Pro, 5 platforms, one product. What the data actually looks like and what it already tells us about how Brazilian e-commerce is (not) ready for agents.

#### References & Further Reading:
*   [Shopify MCP Explained (Charle)](https://www.charleagency.com)
*   [Shopify MCP Model Context Protocol (Ecommerce Fastlane)](https://ecommercefastlane.com)
*   [Agentic Commerce: AI Tools, Protocol, Retailers & Platforms (Google Blog)](https://blog.google)
*   [AI Commerce at Scale (Shopify News)](https://news.shopify.com)
