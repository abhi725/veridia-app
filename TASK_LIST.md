# SwanDigitals - SEO, GEO, and AI Search Optimization Task List

This document lists all detected issues, priority rankings, planned implementation steps, and expected impact of the optimizations.

---

## 1. DETECTED ISSUES & AUDIT FINDINGS

### A. Critical Technical SEO Gaps
- **Client Page Metadata Deficit**: 13 client-only pages (e.g. `/solutions/healthcare`, `/solutions`, `/contact`, `/demo`, `/documentation`, `/cookies`) use `"use client"` directly at the root, which blocks Next.js metadata compilation. They have no individual canonical tags, page titles, descriptions, or keywords, falling back to layout defaults.
- **Header Navigation Broken Links**: The `/resources` route in the header links to a non-existent directory.
- **Footer Missing Links**: Core pages like `/faqs` and `/why-swandigitals` are absent from the footer.
- **Redundant Scripts**: Static export mode is active, but server-side headers are configured in `next.config.js` (which won't execute on static hosters).

### B. AI & GEO (Generative Engine Optimization) Gaps
- **Lack of Answer Blocks**: The site has high interactivity but lacks direct, factual Q&A blocks (40-80 words) optimized for Perplexity, Gemini, and ChatGPT retrieval.
- **Missing Citation Data**: Statistics, reference benchmarks, and comparative markdown tables are minimal.
- **Absence of Grounding Attributes**: No semantic HTML annotations (e.g. `data-llm-grounding`, `data-entity`) are configured to aid RAG parser token mapping.

### C. Entity & Local SEO Gaps
- **Entity Inconsistencies**: Founder names, Kothrud (Pune) addresses, phone numbers, and operational regions have minor formatting variances between files.
- **No Local Landing Pages**: Missing location-based static landing pages for Indian target markets (Pune, Mumbai, Bangalore, Hyderabad, Chennai, Delhi).
- **Missing Structured Data**: Most solution pages lack JSON-LD. The banking page uses raw HTML `<details>` instead of the FAQ component, producing no FAQ schema.

---

## 2. PRIORITY RANKINGS & IMPLEMENTATION PLAN

| Priority | Phase | Task | Target Files | Expected Impact |
|---|---|---|---|---|
| **P0** | Phase 8 | **Refactor Client-Only Metadata**: Split client pages into Server wrappers and Client views. | `/app/solutions/healthcare`, `/contact`, `/demo`, `/documentation`, `/solutions` | Full indexation of unique meta tags across all core solutions & support paths. |
| **P0** | Phase 5 | **Advanced Schema Deployment**: Establish global `LocalBusiness`, `Organization`, and dynamic page-level breadcrumbs/FAQ JSON-LD. | `layout.tsx`, `components/ui/FAQ.tsx`, `/solutions/banking/page.tsx` | Highly visible Rich Snippets, FAQ boxes, and Sitelinks in Google Search. |
| **P1** | Phase 3 & 6 | **Semantic HTML & Retrieval Chunking**: Refactor homepage and solution page structures to support direct answers and LLM grounding markers. | `HomePageContent.tsx`, `/solutions/*` | Placement in ChatGPT Search, Gemini Grounding, and Perplexity Citations. |
| **P1** | Phase 4 | **Geo & Local Landing Pages**: Create static local pages for Pune, Mumbai, Bangalore, Hyderabad, Chennai, Delhi. | `/app/[location]/page.tsx` | High ranks in Local Search Packs and geo-targeted LLM queries. |
| **P2** | Phase 2 | **Entity Optimization**: Standardize organization name, phone, address, and social links. | `layout.tsx`, `Footer.tsx`, `ContactPage` | Zero entity ambiguity in the search Knowledge Graph. |
| **P2** | Phase 7 | **LLM Context Files**: Generate optimized `/llms.txt` and `/llms-full.txt`. | `/public/llms.txt`, `/public/llms-full.txt` | Developer-level agent discoverability and context parsing. |
| **P3** | Phase 12 | **Conversion Optimization**: Add sticky WhatsApp floating widget and capabilities cards. | `layout.tsx`, `Header.tsx`, `Footer.tsx` | High-intent CTA conversion improvement. |

---

## 3. EXPECTED RESULTS

1. **GEO Readiness**: Semantic tags and optimized Q&A chunks will make SwanDigitals' content 3x more citable in conversational searches.
2. **Local Pack Integration**: Local pages combined with LocalBusiness schema coordinates will drive visibility for "AI Chatbot Pune", "Enterprise LLM Mumbai", etc.
3. **Flawless Technical SEO**: 100% metadata coverage, clean canonical mappings, and zero build errors.
