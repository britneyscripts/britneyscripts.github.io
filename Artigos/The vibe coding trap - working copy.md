---
title: "The vibe coding trap: Why AI Product Management is Getting Harder, Not Easier"
description: "Vibe coding is touted as a superpower, but for Product Managers, it exposes the fragile foundation of 'fast' delivery and the critical need for deeper evaluation."
date: 2026-07-22T16:55:00-03:00
draft: false
tags: ["ai", "product-management", "vibe-coding"]
---

I truly believe that the Product Management discipline has become our very own version of Taylor Swift's Eras Tour.

First, we survived the UX Era, when it was strictly demanded that PMs know absolutely everything about UX/UI, wireframing, user flows and tools (if you were there you know that I'm talking about that Figma course you took in your vacation). Then, and predictably, the industry shifted into the Data Era (I've been in love with this era since back then), where the new baseline requirement was to know everything possible about data-SQL, Python, Pandas, scikit-learn, and A/B testing methodologies, sometimes we needed to understand a little about the statistics behind it. 

Now, as you already know, we are in the AI Era and in this era a PM is expected to be a Swiss Army knife of accumulated knowledge, carrying all the baggage from the previous eras while somehow mastering Large Language Models, hypothesis validation workflows, agents, skills, and understanding the nuances between Claude, Gemini, ChatGPT, Cursor, IDEs and Lovable. Ah, I almost forgot that while PMs need to master all this AI stuff they need to know the latest news about AI. 

It is a very exhausting and dangerous era, both for companies and for us. Because right now, there is a massive white elephant in the middle of the office: the urgent, unspoken need to know and understand everything behind 'vibe coding'. If you, like me, meticulously analyze the job description for a PM opportunity you notice that increasingly the words vibe coding, skills, claude are showing up in almost every posting.

---

## The illusion of the Perfect Prompt

Andrej Karpathy is often called the father of prompt engineering. Lately, he's changed his mind about it not once, but twice.

A few months ago, Karpathy stood in front of a room at Sequoia's AI Ascent event and declared vibe coding obsolete. The question that remains, for me, was: for whom? The future, he said, is "agentic engineering": writing design specs, supervising plans, inspecting diffs, writing tests, building evaluation loops, managing permissions, preserving quality. Jeff Gothelf made the connection that it's impossible not to think a lot about once you read it: strip the engineering vocabulary from that list, and you're left describing product management. Deciding what's worth building, and judging whether what got built actually delivered on it.

But look closer at that list and it stops being fully PM-friendly territory. Let's take first "inspecting diffs", you can't read a diff, a wall of added and removed lines of code, without already being able to read code. There's no non-technical version of that one. "Writing tests" is trickier, because it's really two things wearing the same name: defining what "correct" should look like for the feature, which is a spec a PM can absolutely write, and actually coding the test that checks for it, which can't be faked without technical fluency. Whether Karpathy meant to or not, that seam is the exact line separating technical from non-technical vibe coding and it's the ceiling on how far a PM can go alone, right now.

Then, this week, the same Karpathy went viral, again, this time explaining that he's started passing instructions to LLMs through voice messages, rambling for ten minutes instead of typing out a careful prompt. Someone in the replies called it "the death of prompt engineering". Give it two weeks and you or your colleagues will be scheduling a 1:1 with Claude to do the same because that's just how the AI-hype-of-the-week works and I believe we find our new hype.

Prompt engineering is the way we communicate our ideas or needs to an LLM. Long before LLMs existed, anthropologist Edward Hall wrote about the same tension between people: high-context communication, where meaning lives in shared background and can stay implicit, versus low-context communication, where nothing is assumed and everything has to be spelled out. *(As a side note: I first studied both Hall and sociologist Geert Hofstede back during my Tourism graduation, and I never imagined these cross-cultural communication theories would apply so perfectly to prompting machines).* Prompting an LLM is about as low-context as communication gets. There's no shared history to lean on, so if you don't say it, it isn't there. There are entire courses on prompt engineering, and extensive research on how to improve prompts and responses. It's worth quoting what the man, the myth, the legend, Karpathy actually said: "Sometimes the LLM needs more bits to understand what you're trying to achieve, but you're too lazy to type them." Highly ironic, since the Brazilian poet Mario Quintana got there first: "Laziness is the mother of progress."

But look at what happened between those two moments. First, Karpathy told us the real work isn't writing code, right? It's specs, judgment, and evaluation, the output and outcome side of the equation. Then, months later, he casually admits that even his own input has gotten looser, because rambling by voice is faster than typing. Read together, the two moments say the same thing from opposite ends: the input layer (the prompt) is becoming less precious, not because it stopped mattering, but because the actual bottleneck moved somewhere else, to orchestrating agents and judging what they produce. Whether you call that the output, if you're looking at the code, or the outcome, if you're looking at the product, that's the layer PMs have to go chase down themselves, nobody hands it to you unless your company happens to train for it, and that's exactly where the discussion about the role of a PM in the AI era lies.

PMs need to build the output independently of the input they use.

---

## The PM vs. Software Engineer Divide

When I tried to 'vibe code' my first project, I poured in everything I had learned from 10 years of working alongside engineers, my postgraduate studies, and every technical video I had ever watched. It made me reflect on my entire life as an e-commerce PM, student and manager.

The initial result seemed good enough. I was really proud of myself. But then, I asked Claude to analyze the code acting as a panel of senior engineers. It caught 6 errors. While that sounds like a success, the errors it found were incredibly basic. They were basic for a Software Engineer, but I never thought to write that level of specification into the spec I sent to Gemini in the first place. What was missing wasn't PRD-level detail, the kind of spec I've always known how to write. It was a technical spec: the kind of document that translates requirements into implementation constraints, edge cases, and failure modes. That's an engineer's skill, not a PM's, and vibe coding quietly expects you to have both.

So, it is critical to understand that "vibe coding" means two very different things depending on whether you are a PM or a Software Engineer. Maybe the difference is this: for a PM, vibe coding is about building something; for a Software Engineer, it's about guiding how something gets built. Progressively, we see PM job descriptions without the word "technical" in the title, yet they demand a deep and clear understanding of complex technical concepts even if some of it is just AI fluff.

Honestly, I don't think anyone has fully figured out what vibe coding means for a PM yet, companies included. What's probably coming is more of a fusion, roles blurring into each other, something Alan Wright touches on too. But surviving that fusion as a PM means climbing a real learning curve into technical fundamentals. I don't know if that makes the job harder, exactly. I know it makes it more complex. Since coming to Brazil, I've been talking with colleagues, and our concerns are fundamentally the same: Okay, I can vibe code a prototype. But what happens next? Do I need to scale this? Am I equipped to discuss the technical implications of this architecture? Can this even be considered a functional, scalable product? Or is it just doing what PMs have always done, aligning the room, dressed up as something more visual and interactive than a wireframe? There's nothing wrong with that on its own; vibe coding as the new "draw it for me" is a legitimate use of the tool. The trouble starts when nobody remembers to ask which one it was.

Ultimately, as PMs, we must understand where in the product cycle AI is actually needed. If we fall into the hype and try to force AI into every part of a product unnecessarily, we risk repeating the mistakes of the past. Just like in the previous eras, if we obsess over the shiny new tools, we lose focus on why we are building what we build in the first place.

---

## The Fragile Foundation

The first naive thought that comes to mind is: I just need to understand LLMs and prompt engineering. People love to joke that something like "Claude, build a CRM, make no mistakes" isn't a real prompt. Technically, it is one: a zero-shot prompt, just a catastrophically underspecified one. I've seen worse, believe me.

Most vibe coding tools do ask clarifying questions before they run off with your credits (I know you tried Fable and burned a month's worth of credits in three prompts, tops). Alan Wright, in his article Vibe Coding as a Product Manager: Risks and Opportunities, lists this as one of the real strengths of tools like Lovable, Bolt and Replit: they stop and ask, and they even handle hosting, databases, authentication, and deployment for you, things he says he'd struggle to build from scratch himself.

I believe that's exactly where the real risk hides. The questions these tools ask are the easy ones, and are trade-offs that you can solve without googling it. The ones that actually matter, really matter, an event-loop blocking fallback, for example, the kind of issue I only caught on a recent project never come up as a prompt. No tool asks "have you considered what happens when this blocks the event loop under load?" That question only surfaces when a PM sits down and reviews the output line by line, at the evaluation stage, with the same rigor a senior engineer would bring. Nowadays we have countless tools to choose from to vibe code, but very few that teach us how to build (or interrogate) a foundation. 

---

## The A/B Testing Trap

What I see most often in the market right now is teams using vibe coding to quickly test value hypotheses directly with users. While some, like Alan Wright, point to this as one of the great opportunities of vibe coding, I have a strong feeling that this is a trap.

Even when running an A/B test with just 2% to 10% of users, we risk collecting false positives. Why? Because the user's response might be reacting to how rough the build feels rather than to the actual value of the feature. And that roughness usually isn't a failure of execution, it's exactly what was asked for: build it fast, it's just a test, it's not going to production anyway.

Vibe coding is a fantastic tool for brainstorming, but it cannot replace technical foundations. Because at the end of the day, if the architecture is brittle, the data you collect is dirty. And no amount of vibe coding can fix a broken foundation.

---

## The Illusion of "Fast" Delivery

The words most commonly associated with vibe coding are "delivery" and "fast." But delivering fast is not synonymous with delivering well, even when the deliverable is just a prototype to test a hypothesis in a single feature.

In reality, "fast" only applies to the LLM generating the initial output. As a PM, you will likely spend an immense amount of time trying to understand and untangle that code before it becomes a viable product. The speed is an illusion reserved for the first draft, not the final release.

---

## Where Did the Time Go?

There's a question underneath all of this that I keep coming back to: if AI genuinely made delivery faster, where did that time go?

In theory, speed should get reinvested. Teams ship a first draft faster, so they should have more time left over for the things that were always in short supply like deeper discovery, more rigorous validation, and actually understanding the user before building for them. That's the optimistic version.

But look at any consumer app you use daily and it's hard to believe that's what's happening. Home screens are more crowded, not less. Every product seems to be adding banners, widgets, and cross-sells at a pace that has nothing to do with user need and everything to do with how cheap it has become to ship one more thing. If speed doesn't translate into better judgment about what to leave out, it just translates into more stuff, and more stuff is not the same as more value.

That's the real test of the AI Era for PMs. Not whether we can vibe code a prototype, but whether we spend the time we bought back deciding what not to build.

For me, that's become a daily practice, not a one-off reflection. It means going past the code that ships and into a project's actual dependencies. It means, when an LLM like Gemini picks path A over path B to solve something, stopping to ask why and whether there was a path C nobody considered. To do that well, I have to understand what the product actually delivers, how it behaves once it's mine to live with, and what trade-offs sit underneath all of it, measured against the real need of the person the product is for. Sometimes, on my own side projects, that person is just me which turns out to be the strictest client I've ever had.

---

### References
1. Gothelf, J. (2025). *Karpathy said vibe coding is obsolete. What he described instead is product management.* [Jeff Gothelf](https://jeffgothelf.com/blog/karpathy-said-vibe-coding-is-obsolete-what-he-described-instead-is-product-management/)
2. Wright, A. (2025). *Vibe Coding as a Product Manager: Risks and Opportunities.* [Alanis Wright](https://alaniswright.com/blog/vibe-coding-as-a-product-manager-risks-and-opportunities/)
3. Wikipedia. *Edward T. Hall*. [Wikipedia](https://en.wikipedia.org/wiki/Edward_T._Hall)
4. Wikipedia. *High- and low-context cultures*. [Wikipedia](https://en.wikipedia.org/wiki/High-_and_low-context_cultures)
5. Wikipedia. *Geert Hofstede*. [Wikipedia](https://en.wikipedia.org/wiki/Geert_Hofstede)
