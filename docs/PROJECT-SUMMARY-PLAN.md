# Project Summary Plan: Forge Framework Publication

**Document Type:** Control (CON)
**Project Prefix:** PRJ
**Last Updated:** 2026-03-01

---

## Project Overview

### Sponsor

| Field | Description |
|-------|-------------|
| Entity | Joshua Keyes |
| Type | Self (creator/author) |
| Info | joshua.keyes@gmail.com |

### Stakeholders

| Entity | Type | Info |
|--------|------|------|
| Joshua Keyes | Author / Owner | Primary decision-maker |
| Future readers/adopters | End users | The audience for the published guide |

### Objective

- **Deliverable:** Published guide/book on the Forge Framework
- **Mission:** Codify a proven organizational management theory into an accessible, actionable publication
- **Intent:** Provide anyone — individual or organization — with a practical system for structuring their world

---

## Scope Management

### In Scope

- Master Reference documentation (`docs/`)
- Evidence Collection — stories, proofs, studies (`evidence/`)
- Published Guide — reader-facing book (`guide/`)
- Source document adaptation (`resources/source-documents/`)
- Research tools (surveys for implementation feedback)

### Out Scope

- Software implementation of the framework
- SaaS product or web application
- Consulting services or paid engagements

### Change Scope

| Date | Change | Impact |
|------|--------|--------|
| 2026-03-01 | Restructured milestones from MS 0–7 to MS 0–8 | Merged old MS 1 + MS 2 → new MS 1; renumbered MS 3–4 → MS 2–3; expanded forward milestones into 5 distinct phases (MS 4–8) |

---

## Schedule Management

### Milestones & Work Breakdown Structure

```
PRJ | MS 0 | Project Charter & Initiation                               ✓ COMPLETE
    PRJ | WBS 0.1 | Define project objective (codify framework as
                     published guide) ..................................... DONE
    PRJ | WBS 0.2 | Define project scope (in: docs, evidence, guide;
                     out: software, SaaS, consulting) ..................... DONE
    PRJ | WBS 0.3 | Establish AI collaboration workflow (Claude Code) .... DONE

PRJ | MS 1 | Preparation Strategy & Curation                            ✓ COMPLETE
    PRJ | WBS 1.1 | Identify source materials in Google Drive ........... DONE
    PRJ | WBS 1.2 | Adapt handwritten FORGE cycle notes to markdown ..... DONE
    PRJ | WBS 1.3 | Adapt presentations to markdown
                     (4S 28 slides + Kelvin/Longhorn 30 slides) ......... DONE
    PRJ | WBS 1.4 | Adapt project management templates to markdown
                     (PSP template, mind maps, schedule) ................. DONE
    PRJ | WBS 1.5 | Adapt organizational controls to markdown/CSV
                     (4S Index, Security Master Control, RBAC, Action
                     Logs, asset/employee/budget trackers) ............... DONE
    PRJ | WBS 1.6 | Create source documents index (INDEX.md) ........... DONE
    PRJ | WBS 1.7 | Design three-tier doc strategy
                     (docs/, evidence/, guide/) .......................... DONE
    PRJ | WBS 1.8 | Design master reference outline
                     (00-overview through 08-getting-started) ............ DONE
    PRJ | WBS 1.9 | Design guide structure
                     (Parts I–VI, 13 chapters, Appendices A–D) .......... DONE

PRJ | MS 2 | Rough Draft v1 & Version Control                           ✓ COMPLETE
    PRJ | WBS 2.1 | Write master reference — foundation docs
                     (overview, philosophy, origin story,
                     core concepts) ...................................... DONE
    PRJ | WBS 2.2 | Write master reference — operational docs
                     (FORGE cycle, org structure, functional folders) .... DONE
    PRJ | WBS 2.3 | Write master reference — management docs
                     (project management, controls & security,
                     naming conventions) ................................. DONE
    PRJ | WBS 2.4 | Write master reference — application docs
                     (implementations, getting started) .................. DONE
    PRJ | WBS 2.5 | Write guide — Parts I–II
                     (Introduction + Getting Started, Ch. 1–3) .......... DONE
    PRJ | WBS 2.6 | Write guide — Parts III–IV
                     (Structure + FORGE Cycle, Ch. 4–8) ................. DONE
    PRJ | WBS 2.7 | Write guide — Parts V–VI + Closing
                     (Mindset + Organizations, Ch. 9–13) ................ DONE
    PRJ | WBS 2.8 | Write guide — Appendices A–D ...................... DONE
    PRJ | WBS 2.9 | Set up repo infrastructure, tier scaffolding,
                     initial commit, push to GitHub ...................... DONE

PRJ | MS 3 | Polish & MVP Completion                                    ✓ COMPLETE
    PRJ | WBS 3.1 | Fix 4→5 personal forges inconsistency
                     (07-implementations, 00b-origin-story) ............. DONE
    PRJ | WBS 3.2 | Fix "Fundings"→"Findings" typo
                     (01-forge-cycle, 00c-core-concepts) ................ DONE
    PRJ | WBS 3.3 | Add Zachary Rankin implementation placeholder ....... DONE
    PRJ | WBS 3.4 | Fill RBAC Matrix stub with representative roles .... DONE
    PRJ | WBS 3.5 | Update guide/README.md status ...................... DONE
    PRJ | WBS 3.6 | Generalize project classification examples ......... DONE
    PRJ | WBS 3.7 | Create Project Summary Plan (this document) ........ DONE

PRJ | MS 4 | Core Evidence Collection
    PRJ | WBS 4.1 | Create research survey (Google Forms)
                     for implementation feedback
    PRJ | WBS 4.2 | Write game studio collapse case study
                     (failure as key to success)
    PRJ | WBS 4.3 | Write Marine Corps decision & leadership story
    PRJ | WBS 4.4 | Write Kelvin Education "Longhorn" rollout
                     case study
    PRJ | WBS 4.5 | Write 4th State Communications / CMMC
                     implementation case study
    PRJ | WBS 4.6 | Conduct Zachary Rankin interview + write up
    PRJ | WBS 4.7 | Compile academic references and supporting
                     literature (CWU coursework mining)

PRJ | MS 5 | Human Story Enhancements & Narrative Hooks
    PRJ | WBS 5.1 | Write foreword (drawing from 00a-philosophy.md
                     and origin story)
    PRJ | WBS 5.2 | Write daughter/open adoption motivation story
    PRJ | WBS 5.3 | Write COVID / rock bottom survival narrative
    PRJ | WBS 5.4 | Develop Plot of Land allegory as standalone
                     narrative piece (water allocation gone wrong)
    PRJ | WBS 5.5 | Write before/after transformation examples
                     (pre-Forge vs. post-Forge)
    PRJ | WBS 5.6 | Create chapter-opening vignettes and hooks
                     from evidence files
    PRJ | WBS 5.7 | Cross-domain design principle examples
                     (art, engineering, military, biology)

PRJ | MS 6 | Complete Draft Compilation
    PRJ | WBS 6.1 | Integrate core evidence into guide chapters
    PRJ | WBS 6.2 | Weave human story hooks into existing chapters
    PRJ | WBS 6.3 | Add Part VII: Stories (from evidence files)
    PRJ | WBS 6.4 | Full continuity and consistency pass
                     across all chapters
    PRJ | WBS 6.5 | Update master reference from any guide
                     discoveries or refinements
    PRJ | WBS 6.6 | Strengthen demonstrative language throughout

PRJ | MS 7 | Final Draft Polish — Graphics, Diagrams & Layout
    PRJ | WBS 7.1 | Design FORGE cycle diagram
    PRJ | WBS 7.2 | Design functional folders state machine diagram
    PRJ | WBS 7.3 | Design Maslow-to-Forge mapping visual
    PRJ | WBS 7.4 | Design Plot of Land / Fiefdom illustration
    PRJ | WBS 7.5 | Layout formatting and typography pass
    PRJ | WBS 7.6 | Full editorial pass (language, tone, clarity)

PRJ | MS 8 | Publication & Project Closing
    PRJ | WBS 8.1 | Peer review cycle
    PRJ | WBS 8.2 | Determine publication medium
                     (book, website, or both)
    PRJ | WBS 8.3 | Format for chosen publication medium
    PRJ | WBS 8.4 | ISBN / publication registration (if applicable)
    PRJ | WBS 8.5 | After-action review (Express phase — dogfooding)
    PRJ | WBS 8.6 | Archive project artifacts + project closing
```

---

## Cost Management

### Operational Capacity Limitation

- **Personnel:** Solo author + AI collaboration
- **Time:** Evenings and weekends
- **Primary constraint:** Joshua's available time
- **Budget:** Minimal — no external costs anticipated until publication formatting (MS 8)

---

## Strategy & Approach

### Execution

Layered — each phase builds on the last, with distinct creative stages:

1. **Master Reference** establishes the source of truth (MS 0–3)
2. **Core Evidence** grounds the theory in factual case studies and data (MS 4)
3. **Human Stories** adds the narrative layer — motivation, transformation, hooks (MS 5)
4. **Draft Compilation** integrates evidence and stories into the guide (MS 6)
5. **Visual Polish** adds diagrams, illustrations, and editorial refinement (MS 7)
6. **Publication** formats, reviews, and closes the project (MS 8)

### Components

| Component | Description |
|-----------|-------------|
| Master Reference (`docs/`) | Extended outline and core concepts — the source of truth |
| Evidence Collection (`evidence/`) | Stories, proofs, studies, anecdotes from real implementations |
| Published Guide (`guide/`) | Reader-facing publication drawn from docs + evidence |
| Research Tools | Surveys and interview materials for gathering implementation data |
| Source Documents (`resources/`) | Adapted originals from Google Drive — historical reference |

---

## Issues & Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Evidence collection depends on third-party interviews (Zach, others) | Delays to MS 4 | Begin outreach early; write solo-sourced evidence first |
| Academic rigor goal may require research beyond personal experience | Quality gap in guide | Leverage CWU coursework corpus; cite established frameworks |
| Publication format TBD (book, website, both?) | Delays to MS 8 | Defer format decision; write content-first in markdown |
| Solo author bandwidth | Slow progress | AI collaboration; maintain sustainable pace; track via this PSP |

---

## Change Management

### Change Log

| Date | Change | Rationale |
|------|--------|-----------|
| 2026-03-01 | Initial PSP created | Dogfooding the framework — managing the framework project with its own tools |
| 2026-03-01 | Restructured WBS to account for all prior work (MS 0–4) | Original WBS started midstream; backfilled charter, resource collection, schema design, and draft v1 milestones |
| 2026-03-01 | Restructured milestones from 8 (MS 0–7) to 9 (MS 0–8) | Merged old MS 1 + MS 2 into new MS 1; expanded forward milestones into distinct phases: core evidence, human stories, compilation, visual polish, publication + closing |

### Notation

This document is itself a demonstration of the Forge Framework in practice. The Project Summary Plan template (defined in `docs/04-project-management.md`) is being used to manage the project that produces the framework's documentation. This recursive application — the framework managing itself — is intentional and serves as both a working control document and a proof of concept.

---

## Appendices

### Terminology

| Term | Definition |
|------|-----------|
| CON | Control document — governs a domain or project |
| MON | Monitor document — tracks state and progress |
| PSP | Project Summary Plan — this document type |
| WBS | Work Breakdown Structure — task decomposition within milestones |
| FORGE | Feed, Organize, React, Generate, Express — the operational cycle |

### Posterity

This project began as a personal organizational system developed over 20+ years through military service, entrepreneurship, academic study, and professional implementation. The decision to formalize it as a published framework was driven by repeated validation across contexts — from personal life management to DoD-facing compliance — and encouragement from colleagues who adopted and benefited from the system.

### Resources

| Resource | Location |
|----------|----------|
| Google Drive (source) | `_UnchosenForge/_Projects/Forge Framework/` |
| CWU Coursework | `_RaihnForge/Education/CWU/` (33 courses: IT Admin Mgmt, PM specialization) |
| GitHub Repository | `RaihnForge/forge-framework` (private) |

### References

- Source documents: `resources/source-documents/`
- Project Management template: `docs/04-project-management.md`
- Forge Cycle: `docs/01-forge-cycle.md`
- Miller's Law & Core Concepts: `docs/00c-core-concepts.md`
