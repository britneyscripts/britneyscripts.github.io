Hi, I\'m back. In my last article I said that I was going to talk about
split brains in Agents. For this let's use our old friend - in the AI
era 4 years seems like 40 - Gemini. I used it in the last article, check
it out if you need.

How we know Gemini shows, in a discovery-product query, the answers in
the body of the chat but the gemini shopping bar too. I used comparison
queries to do the examples and if you remember I got this answer:

![Article content](media/image5.png){width="4.973958880139983in"
height="3.6427865266841644in"}

First let's remember that I'm running my Pipeline on GCP. This pipeline
is responsible for collecting data from product urls: content + schema,
pagespeed and crux, all these scripts run 3x per day except crux because
it's not necessary. Once each 28 days is good enough to run it. Let's
start analyzing the results, remember I'm doing it for my MBA at USP 🙂.
I collected data for 21 days so far and remember I'm extracting data
from 7 skus from 15 different stores divided between electronics and
skincare.

For this article obviously I'm not showing all my information ok? And
just for the matter of fact all this data that I'm going to show is
public data - I swear - you can verify all this by yourself. Let's start
with what blocked my crawler. Just a little reminder: I explained in my
last article, my pipeline uses static HTML extraction, no JavaScript
rendering, no browser fingerprint. If my scraper gets a 403, a direct
agent probably does too.

![](media/image3.png){width="4.901042213473316in"
height="3.3972101924759404in"}

Woow Magazine Luiza what happened here? Well if you look at first image
Magalu appears as the recommended store in the chat but, remember, it
appears at the position #40 in the Gemini Shopping Bar. Ah, just forget
to mention I have 7 skus but the same sku is requested in several stores
and the same store has more than 1 sku in more than one case. But Magalu
what happens.

We can infer, using wappalyzer, that Magalu has two two overlapping
protective layers - Security and Akamai - maybe Akamai Bot Manager
(CDN/WAF). Securiti has a specific module to bot detect e consent
enforcement. Then we can infer that the block is intentionally, deeper
and based on an architectural decision. They invested really hard to
block crawlers and this is a very good decision in a country where fraud
rate is high. But the same invisibility that I got with my humble
crawler could explain why Magalu appears in the #40 positions in Gemini
Shopping Bar?

The answer is: probably yes. But to understand why, we need to talk
about how LLMs actually split their memory. You probably know what RAG
is, so let's go to the next point. What matters here is the tension
between the two memories: what the model learned during training
(parametric) and what it retrieves in real time (non-parametric). They
don\'t always agree - and that disagreement is exactly what we\'re
seeing with Magalu.

Google is the sir and owner of search - ads - shopping right? Ads and
shopping feeds the gemini shopping bar. Magalu appears in first place in
Google Shopping but #40 in Gemini Shopping Bar.

![Article content](media/image1.png){width="6.203125546806649in"
height="2.9822714348206474in"}

The parametric memory knows that Magalu is a giant store in Brazil and
this parametric memory uses grounding to enrich the results. Magalu is
amazing with SEO and with autorithy, maybe Hannibal Lecter searching for
his mask could find it in Magalu . But the non-parametric memory uses
the *Google Shopping Graph API* or the Merchant Center structured data.
And voila our two brains are on the same platform.

The Gemini Shopping Bar is a deterministic environment if the
GoogleStoreBot is blocked for Akamai, for example, when it is trying to
validate the product's price in realtime in the PDP the offers 'falls'
in the Preemptive Item Disapproval.

We saw that Magalu has a strong anti-bot protection and let's infer that
the GoogleStoreBot tried to do the crawler looking for price and stock
and got a block. But is blocked GoogleStoreBot possible? I don't know
really, is a theory but yesterday (06/24) I got this results to Magalu:

![](media/image4.png){width="6.5in" height="3.7083333333333335in"}

Magazine Luiza appears three times past position #20: twice as the same
product with the same price but different delivery information, and once
as a bundle incorrectly grouped with the standalone device. The same
product, ingested at different moments, produces three inconsistent
entries a feed that Google cannot reliably validate.

This is not a Magalu-specific bug. Multiple stores show duplicated
entries in the Shopping Graph. The difference is that stores with open
access produce consistent duplicates, same data, same state. Magalu\'s
duplicates tell a different story: same product, same price, different
delivery data. A feed being read at different moments, never fully
validated.

![](media/image2.png){width="3.0259405074365704in"
height="6.755208880139983in"}

Six Magazine Luiza entries for the same query. Two products, three
snapshots each. This is not a bug, this is what a partially validated
feed looks like inside the Shopping Graph.

We are seeing all the discussion about SEO/GEO in the linkedin feed, my
two cents of opinion is that: GEO/AEO exposed the silos between
e-commerces. The security teams reinforce the WAF; the frontend team is
focusing on client-side rendering killing the crux with high-latency,
and the SEO team creates a marvellous schema.org that the agents are
never going to read because they were blocked in the door. When we
cross-reference the data from the pipeline, these silos become
empirically visible. We can categorize this into two distinct phenomena.
First, the \"WAF Wall\": stores like Magazine Luiza and Vivo presented a
100% block rate for static requests in my dataset. They are structurally
closed to simple agents. Second, we have what we could call the \"CSR
Illusion\": stores that left the door open (0% block rate) but delivered
0% of their schema.org markup to the static crawler. The SEO team did
their job perfectly, but because the schema is likely injected via
Client-Side Rendering (JavaScript), the static agent still sees a blank
skeleton.

And just to give a little taste of the performance side-without diving
too deep into the metrics- when we look at the CrUX and PageSpeed data,
we can see that complex architectures sometimes come with a cost. For
example, in our dataset, Vivo presented a mobile PageSpeed score of 9.1
and a CrUX Mobile LCP of over 6 seconds. This suggests that heavy
security or complex rendering strategies can occasionally impact not
just the agent\'s ability to parse the site, but also the overall user
experience. Who is responsible for that? Who is responsible for the
continuous loss of revenue when the AI started to grow on this?
E-commerce needs a unified product engineering approach.

Historically, enforcing severe firewall (WAF) or CDN rules to block
crawlers generated a manageable corporate friction: your e-commerce bled
a few organic positions on the SERP, but the Growth team compensated for
the invisibility by injecting massive budgets into Ad campaigns. That
playbook is broken. In the dynamics of Agentic Commerce, RAG-based
retrieval systems depend on the real-time ingestion of deterministic
data to formulate factual answers. The logs from my GCP extraction
pipeline expose exactly this schism in the Brazilian market: while
Magazine Luiza presents a 100% block rate for static requests,
competitors like Kabum operate with a 0% block rate.

The operational outcome of this infrastructure decision? The autonomous
agent can cleanly parse Kabum\'s page, retrieve the technical attributes
via Schema, and assemble the comparison shelf recommending the store.
The consumer makes the purchasing decision directly within the
generative interface, resolving their intent without ever clicking on a
traditional blue link. Today, a blind security policy in favor of
blocking bots doesn\'t just tank your ranking; it erases you from
mathematical existence in the era of Zero-Click traffic.

Next time I\'ll bring the CrUX and PageSpeed data into this. Because
what I\'m seeing on the performance side is just as interesting and just
as uncomfortable and my research started with Crux Data.
