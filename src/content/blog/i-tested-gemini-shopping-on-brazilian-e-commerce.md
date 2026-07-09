---
title: "I Tested Gemini Shopping on Brazilian E-Commerce"
description: "How Google's Shopping Graph, merchant feeds, and product schemas interact in Gemini's recommendations."
date: 2026-06-09T10:00:00-03:00
draft: false
tags: ["agentic-commerce", "gemini", "shopping-graph", "e-commerce", "seo"]
author: "Bê Acosta"
---

*This is Google's system working as designed.*

As you know, I'm currently building my MBA thesis at USP around a
framework we could call the Agent-Readiness Score (ARS) , a way to
measure how readable a product page is for AI agents. To collect the
data, I built a pipeline in GCP that runs 3x daily across 7 fixed SKUs
and multiple Brazilian e-commerce stores, storing everything in
BigQuery. Just a little recap: I chose two specific product categories
for my research (skincare and electronics) due to differences in the
entities that each one holds.

I dedicated this past weekend to organizing my pipeline in GCP and
running the simplest test I could to verify if the data I'm collecting
mirrored the actual behaviour in the storefronts. I queried Gemini using
the Flash model and my own account to do that. I need to register that I
use my everyday Gemini account, which could theoretically generate a
bias in my research. Why is it important to mention that? I had an
amazing talk last week with someone who mentioned how an AI agent could
ignore structured data and recommend something based purely on our chat
history instead.

But for this example, I used Gemini and Google Search as we used to
search in the past: the Flintstones era. In this article, I want to
share what I found, being clear about what I can claim vs. what is a
hypothesis.

### We need to talk about queries

As we know, people search in different ways, and there are different
types of queries when it comes to traditional SEO: informational,
navigational, transactional, and commercial investigation queries. In
this article, let's call investigation queries comparison queries.

When I was choosing the URLs to use in my research, I chose the exact
same product in every store. Let's use this example: *iPhone 17 Pro
orange 256GB*. Remember that my research is focused on the Brazilian
market, so "orange" becomes "laranja" in Portuguese. Let's call
this a very specific comparison query:

*"Compare iPhone 17 Pro laranja 256GB nas principais lojas brasileiras:
preço, disponibilidade e frete."* *(In English: Compare the price,
availability, and shipping costs of the orange iPhone 17 Pro 256GB at
major Brazilian retailers.)*

This was not a buying query yet; we aren't talking about the bottom of
the funnel, but more about the middle stage of transactional intent. For
retailers, however, it is an opportunity to be discovered by the
customer. Why did I choose this type of query specifically? Because this
is the exact kind of task that AI shopping agents are explicitly built
to handle. It is one of the first and most natural tasks in this early
stage of agentic commerce integration, where Google Shopping Graph, MCP,
and other protocols are still maturing. The evidence is right there in
the sidebar Gemini just showed me.

In this stage, the user's goal is comparing products using the most
important features they care about. It is a tedious task that humans
often get wrong, but agents do it exceptionally well. The customer knows
what they want to buy and is asking for the best channel to do it.But
what happens if your store doesn't allow a crawler to do its job?
Agents need to parse your content. If we don't allow these crawlers\...
What can they recommend?

### Well, let's see the result

As we can observe above, Gemini opened that amazing sidebar. Google
launched it in the US in November 2025, and in Brazil in May 2026.
Google calls it *Gemini Shopping* (or AI-powered shopping assistant),
and it relies heavily on the Google Shopping Graph.

![Article content](/images/tested-gemini/image8.png)

Magazine Luiza vs Casas Bahia :-O

It pulled structured product data: price, stock, shipping time, and a
filter for capacity (remember, I specified 256GB). We can see data from
multiple stores simultaneously. It's not a simple list of links like a
traditional SERP; it's actual structured comparison data rendered in a
wonderful panel next to the text response.

But we can observe a massive difference between the answer in the chat
and the sidebar. Can you see Magazine Luiza at the top of the chat, but
Casas Bahia as the first store on the sidebar?

![Article content](/images/tested-gemini/image5.png)

Ops, in conversational chat Magalu is the recommended store.

Look closely at the conversational text: Gemini explicitly recommends
Magazine Luiza as the best choice for "cost-benefit and delivery
security." The LLM clearly recognizes Magalu's brand authority and
historical reliability. Yet, in the actionable-clickable-filtered
Shopping sidebar right next to it, the space designed to drive the
actual transaction, they plummeted past position #40.

This is like a Split-Brain Paradox of AI: brand authority wins the
semantic chat, but data architecture loses the transactional shelf
space. It proves that SEO and GEO/AEO are completely different games (Is
this true?). But let's hold that thought; I am going to deep dive into
this specific paradox and explain how LLMs split their "brains"
between history and real-time data in my next article.

![Article content](/images/tested-gemini/image2.png)

Two-brains?

Interesting, right? Let's focus on
[[Magalu]{.underline}](https://www.linkedin.com/company/magazine-luiza/).
This is a massive, giant store in Brazil. If we use the exact same query
on Google Shopping, nobody beats them there:

![Article content](/images/tested-gemini/image1.png)

Google Shopping results to the same query

Magazine Luiza holds the first four results. But in the Gemini sidebar,
Magazine Luiza appears in\... well, I don't know exactly, I stopped
counting at position #40. It is not the best customer experience.

Play

Magalu sideber results

I'm mentioning this because the first time I ran the query on Gemini
(Saturday), Magazine Luiza appeared at #47. Today (Monday), it appears
past #60. We can infer that this ranking is dynamic. Without fresh data,
the ranking gets progressively worse. I need to monitor this over time
as another dimension within my historical data series. In the SERP,
Magazine Luiza appears in the first position in ads, but it doesn't
even appear on the first page of organic results.

But we can try to cheat Gemini, right? If I use a less specific query,
could Magazine Luiza appear in the results in a better position?

![Article content](/images/tested-gemini/image7.png)

Apple wins

The "favorite store" label changed when I used another query. Apple
appeared at the top of the sidebar result. Now we know it is dynamic and
heavily dependent on the query. Because this last query was less
specific about the product itself, I initially thought Magazine Luiza
didn't appear because they didn't stock the orange iPhone. I had to
check their site to verify I wasn't hallucinating:

![Article content](/images/tested-gemini/image3.png)

Everything fine with the product. I guess.

Magazine Luiza had the product available to purchase on the site, and
everything was fine.

### The Google Merchant Center Rules at Play

It seems we are finally seeing the Google Merchant Center guidelines
working in the wild. The documentation explicitly explains that Google
crawlers - specifically *Googlebot* (general web) and *GoogleStoreBot*
(inventory validation, price, and checkout) - cannot be blocked on
Product Detail Pages (PDPs).

Disclaimer: I use ( - ) because I'm very tired trying to figure out how
to write in a better way in a language that is not my mother tongue. It
is not AI, it is me, tired.

Google warns that blocking its bots (whether via robots.txt, IP blocks,
or anti-bot systems like Akamai) generates destination page errors. If
the bot can't access the page, it cannot validate the offer. Another
crucial point in their documentation is the *"Allow Merchant Center to
update product information automatically"* feature. This is the
definitive proof of their dependency on
[[Schema.org]{.underline}](http://schema.org/). Google affirms that it
uses structured annotations directly in the website's code to verify
the price provided in the feed.

Google also has a policy for Preemptive Item Disapproval. Translated
into plain English, this means the information in the Merchant Center
must match exactly what is on the website for that product. But what
happens if the crawler gets a 403 Forbidden error, like the one (two,
three, four and counted) I received from Magazine Luiza? The product
could be totally removed from the Shopping Graph and, consequently, from
the AI-powered-I-have-power-and-all-your-data Gemini Shopping
experience. I believe I am observing an active Google penalization on
Magazine Luiza due to crawler failure.

A huge disclaimer here: I used just Gemini for this first test because
Google has the richest data environment in the universe. Google's
products are like Infinity Stones: Merchant Center, Manufacturer Center,
Search Console, CrUX, Knowledge Graph, Shopping Graph, GA4, YouTube,
Google Ads, Business Profiles. Each one feeds the others. An agent
inside this ecosystem sees a completely different world than an agent
outside it. Every company creates its own Ads ecosystem, but we know the
uphill battle required to compete against Google.

Claude, ChatGPT, and Perplexity cannot access the Shopping Graph or
Merchant Center. They depend on their own APIs and crawlers, or
third-party search APIs like Bing. When a store implements rigid
anti-bot rules or whitelist access permissions just for Google, it
becomes invisible to the other agents outside the Google ecosystem. My
humble test with BeautifulSoup simulates the exact barrier that an
autonomous, independent agent hits when it tries to make a direct HTTP
request. Because of that, I added another layer to my research regarding
access hierarchy.

### The Access Hierarchy My Pipeline Reveals

When I built my data collection pipeline, I discovered that Brazilian
e-commerce sites fall into distinct categories based on how accessible
their product data is to non-Google crawlers. I split the e-commerce
sites into three categories:

- Category 1: Openly accessible (The researcher's best friend):
  Americanas, Kabum, Samsung D2C.
  [[Schema.org]{.underline}](http://schema.org/) is captured by my
  scraper, validated by the
  [[schema.org]{.underline}](http://schema.org/) validator, and indexed
  by Google with Rich Results. These stores are readable by any agent,
  inside or outside the Google ecosystem.

- Category 2: Accessible to Googlebot only: Vivo, Boticário.
  [[Schema.org]{.underline}](http://schema.org/) exists (I can see it in
  DevTools), but the site blocks any request that doesn't come from a
  real browser. The [[schema.org]{.underline}](http://schema.org/)
  validator returns "URL not found," and my scraper returns nothing.
  Yet, Rich Results appear in the SERP, meaning Googlebot successfully
  reads the schema. These stores are invisible to direct agents but
  visible inside the Google ecosystem.

- Category 3: Blocked entirely (The anti-research team): Magazine Luiza.
  Returns a 403 page with the message "Não é possível acessar a
  página." Their robots.txt returns 403 for all user agents. Schema?
  None. Rich Results? Also none.. It was so heartbreaking, Magalu. I put
  all my bets on you.

Let's recap my approach to crawling these pages. My pipeline uses
static HTML extraction: requests + BeautifulSoup. No JavaScript
rendering, no browser fingerprint, no session cookies. It gets
identified and blocked immediately by any serious anti-bot system.
Magazine Luiza uses Akamai as a CDN, so I believe they are using Akamai
Bot Manager for enterprise anti-bot protection *(cries in Python)*.

I'm using this approach because I'm not trying to bypass anything. I
need to simulate what a direct AI agent does when it accesses a page: a
plain HTTP request, no full browser stack. If my scraper gets a 403, a
direct agent probably does too. I asked my security oracle, my amazing
ex-colleague [[Daniel
Daniele]{.underline}](https://www.linkedin.com/in/danieldaniele/) , if
there could be another approach I could use legally 😛. He mentioned
tools like Browserless, ZenRows, and ScrapingBee can get around this.
But they simulate a human browser, which is not how AI agents access
pages today.

### Brand Authority vs. Transactional Data

Apple appears first. But why not always? The label *"Favorito do
público"* is not fixed. When I searched generically for the iPhone 17
Pro across Brazilian stores, Apple appeared first. Brand authority wins
here: iPhone = Apple in the Knowledge Graph, and all historical signals
point to [[apple.com]{.underline}](http://apple.com/). Traditional SEO
is not dead. We're so back after all the hype with "new SEO
approaches".

But this isn't because [[apple.com]{.underline}](http://apple.com/)
loads fast. My data shows Apple's LCP on mobile is 6,184ms, which is
"Poor" by Google's Core Web Vitals standards. Performance did not
determine this ranking. When I added specific transactional dimensions
to the query (color, storage, price, availability, and shipping), Casas
Bahia moved to the top. This pattern is consistent with Google's own
guidelines for rich results: for commercial investigation queries, the
AI prioritizes entity accuracy, price, and availability extracted from
structured data *over* brand authority and page performance metrics.

The closer we are to a transaction, the more structured data wins over
brand recognition. Five days of data (I set up two dollars in GCP,
hoping these two dollars could make miracles a real thing) and two
queries, and the pattern consistently holds up to Google's
documentation.

*As of June 9, 2026, I have more data: the pattern holds.*

### Specialist Stores vs. Generalists

iPlace, Horizon Play, and Claro Brasil appeared consistently in the top
results of the Gemini sidebar before Brazil's largest retailers. Why?

They are specialists: iPlace is Brazil's largest authorized Apple
reseller, Claro is a telecom giant, and Horizon Play is a premium Apple
specialist. None of them have the traffic volume or product breadth of
Amazon, Magazine Luiza, or Mercado Livre.

What I can observe is the outcome: specialized retailers with deep
product focus ranked above generalist marketplaces with significantly
more overall traffic and brand recognition. The hypothesis that open
crawler access correlates with higher visibility in agent-powered
comparisons remains to be fully tested on these specific stores, but
it's a gap worth closing in the next research iteration.

### The Coordination Problem Nobody is Talking About

As a Product Manager, I can't stop thinking about agent visibility as
the outcome of decisions made across teams that probably never sat in
the same room: the security team configuring Akamai Bot Manager, the
frontend team building the PDP, the data/commercial team managing the
catalog, the SEO team implementing
[[Schema.org]{.underline}](http://schema.org/), and the platform team
controlling CDN rules.

It took me a lot of time to stop thinking I was a storefront PM and
realize I was actually a
*coordinator-staff-every-team-necessary-to-do-the-front-works-right*
manager.

None of these teams made a deliberate decision called "block AI
agents." They made isolated decisions that, in combination, produced
that outcome. It is a crime without suspects.

![Article content](/images/tested-gemini/image4.png)

Without suspects?

There is a broader shift happening here that product and data teams need
to internalize. Organic search results are losing real estate. Every
SERP has more ads, more AI Overviews, more Shopping carousels, and more
features that push the ten blue links further down the page. The fight
for organic visibility is getting more expensive and less predictable.

![Article content](/images/tested-gemini/image6.png)

It Is almost impossible find organic results

If the customer is in the middle of the funnel, if they know exactly
what they want to buy, they are looking for dimensions that live in your
schema: price, delivery, offers, installments. If agents can't parse
that, you're losing revenue.

A new entry point for commercial intent is emerging. It is not paid, not
based on backlinks, and not determined by content volume. It is
determined by data architecture. How structured is your product data?
How accessible is it to crawlers? How complete are your transactional
fields?

Technical teams have always been the unsung heroes of e-commerce revenue
( I love you team). But the paradigm is shifting because in the past,
marketing teams could compensate for technical debt with massive content
output, backlinks, and brand authority. In the agentic era, those
workarounds don't exist. If your platform's CDN blocks a bot, or if
your frontend doesn't render
[[Schema.org]{.underline}](http://schema.org/) cleanly, your brand
authority is completely useless. The architectural decisions made by
data engineers, frontend developers, and platform teams are no longer
just supporting the marketing strategy, they are the strategy for
AI-powered comparison surfaces. The force is with you.

This is not traditional SEO even though it is not performance marketing.
It does not have a name yet that everyone agrees on. But treating data
accessibility as a core product feature is becoming one of the most
important levers for online revenue that most e-commerce organizations
are not measuring.

### The Product Management Opportunity

If you can measure agent-readiness systematically (which is what my
pipeline does), you can integrate that measurement into your CI/CD
pipeline. Every frontend deploy should be tested not just for visual
regression and performance, but for agent-readiness.

Did this deploy break [[Schema.org]{.underline}](http://schema.org/)
parsing? Did it introduce a crawler rule that now blocks direct agents?
Did it reduce the structured data fields that the Shopping Graph depends
on?

That test suite does not exist yet for most teams. Building it is not an
engineering problem; it is a product problem. It requires someone to
define what "agent-ready" means, measure it continuously, create
accountability across teams, and start the loop over again. We have a
whole new ecosystem of AIs to think about now, and each one is
different.

What a time to be alive. What a topic to wake up to every day.

The Honest Disclaimer: This is exploratory research. My pipeline has 5
days of data. I used Gemini Flash, not Pro. My account had no prior
smartphone search history, which means the agent was not biased by my
personal purchase history, strengthening the validity of what I
observed. The query was in Portuguese. All of these variables matter.

What I can say with confidence: the data from my pipeline reveals a
clear pattern of how access architecture dictates visibility. That's
what the next 4 months of systematic collection are for.

I'm publishing this as part of an ongoing series on Agentic Commerce
Optimization, the research behind my thesis. Follow along if you want to
see where the data leads.

*"In case I don't see ya\... good afternoon, good evening, and good
night!" Truman Burbank*

Eva de Paula
