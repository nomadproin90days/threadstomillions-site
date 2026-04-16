# GEO Audit: threadstomillions.com
**Date:** April 15, 2026

## Executive Summary

The site has a stronger GEO foundation than most affiliate sites: `llms.txt` and `llms-full.txt` are both live, AI crawlers are explicitly permitted, structured schema is implemented, and 33 substantive blog posts exist with real tactical depth. The gaps are specific and fixable.

The five most impactful problems are:

1. No external cross-platform presence (Reddit, YouTube, podcasts) — AI tools cannot find corroborating sources to confirm the brand entity is real
2. Blog posts lack "Quick Answer" summary blocks — AI cannot extract crisp 2-3 sentence answers from prose-heavy introductions
3. Comparison tables are missing from the comparison posts — AI Overviews default to competitors who have them
4. The STAR Method has no `DefinedTerm` schema — the site's most citable proprietary concept is not machine-readable as a defined entity
5. `dateModified` equals `datePublished` on every post — AI crawlers read the content as never updated

## 1. AI Crawler Accessibility — PASS

robots.txt explicitly permits GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, Amazonbot, anthropic-ai.

Missing crawlers to add: Bytespider, meta-externalagent, OAI-SearchBot, YouBot, DuckAssistBot, cohere-ai.

## 2. llms.txt — EXISTS, NEEDS FIXES

- llms.txt is in the sitemap (wrong — remove it)
- llms-full.txt is not linked from llms.txt
- No `Link:` HTTP header pointing to llms.txt
- llms-full.txt has no pre-packaged Q&A section

## 3. Brand Mention Signals — GOOD, STRUCTURAL GAPS

- 57 occurrences of "Threads to Millions" across 33 articles
- No standardized attribution paragraph per article
- Organization.sameAs has only one URL (Threads profile)

## 4. Passage-Level Citability — MIXED

Strong: Algorithm post, STAR Method post have clear definitions.
Weak: Top monetization post uses vague phrasing. Multiple posts bury answers after 3-4 paragraphs.

Fix: Add "Quick Answer" blocks immediately after intro on top 5 posts.

## 5. Content Structure for AI — PARTIALLY OPTIMIZED

- No comparison tables (threads-vs-x, threads-ads posts use prose)
- No HowTo schema on step-by-step posts
- No speakable schema
- remarkGfm already supports markdown tables — zero code changes needed

## 6. Entity Clarity — GOOD FOUNDATION, NEEDS ADDITIONS

- sameAs is thin (one URL)
- Person entity for Lexie missing jobTitle, description, knowsAbout
- No DefinedTerm schema for STAR Method

## 7. Topical Authority — STRONG BREADTH, DEPTH GAPS

- Adam Mosseri (head of Threads) appears zero times
- No glossary page
- Major statistics are unsourced

## 8. Cross-Platform Presence — CRITICAL GAP (HIGHEST IMPACT)

- No Reddit presence (Perplexity/ChatGPT heavily cite Reddit)
- No YouTube presence (Gemini/Google AI Overviews index YouTube)
- No podcast appearances
- No press mentions or directory listings
- Skool community URL not confirmed in schema

## Priority Matrix

| Issue | GEO Impact | Effort | Priority |
|-------|-----------|--------|----------|
| Get external mentions: Reddit, podcast, YouTube | Very High | High | P0 |
| Add "Quick Answer" blocks to top 5 blog posts | Very High | Low | P0 |
| Add comparison tables to comparison posts | High | Low | P1 |
| Add DefinedTerm schema for STAR Method | High | Low | P1 |
| Expand sameAs in Organization schema | High | Low | P1 |
| Add HowTo schema to step-by-step posts | High | Medium | P1 |
| Add speakable schema to blog posts | Medium | Medium | P2 |
| Fix dateModified to reflect actual update dates | Medium | Low | P2 |
| Add attribution paragraph to blog posts | Medium | Low | P2 |
| Link llms-full.txt from llms.txt | Medium | Low | P2 |
| Add Key Q&A section to llms-full.txt | Medium | Low | P2 |
| Add Threads glossary page | Medium | Medium | P2 |
| Add Adam Mosseri citation to algorithm post | Medium | Low | P2 |

## What AI Tools Will Recommend This Site For

**Currently:** STAR Method, 3/8/12 rule, brand queries, algorithm reset steps
**After fixes:** Threads vs X comparison, monetization requirements, how to reset algorithm, Threads ads CPM
**Requires off-site work:** "best course for growing on Threads", reviews, "is TTM worth it"
