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

*(No changes yet — first version of this document.)*

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

PRJ | MS 1 | Resource Collection & Adaptation                           ✓ COMPLETE
    PRJ | WBS 1.1 | Identify source materials in Google Drive ........... DONE
    PRJ | WBS 1.2 | Adapt handwritten FORGE cycle notes to markdown ..... DONE
    PRJ | WBS 1.3 | Adapt 4th State presentation (28 slides) to md ..... DONE
    PRJ | WBS 1.4 | Adapt Kelvin/Longhorn presentation (30 slides)
                     to markdown ......................................... DONE
    PRJ | WBS 1.5 | Adapt project management templates to markdown
                     (PSP template, mind maps, schedule) ................. DONE
    PRJ | WBS 1.6 | Adapt organizational controls to markdown/CSV
                     (4S Index, Security Master Control, RBAC, Action
                     Logs, asset/employee/budget trackers) ............... DONE
    PRJ | WBS 1.7 | Create source documents index (INDEX.md) ........... DONE

PRJ | MS 2 | Schema Design & Project Infrastructure                     ✓ COMPLETE
    PRJ | WBS 2.1 | Design three-tier doc strategy
                     (docs/, evidence/, guide/) .......................... DONE
    PRJ | WBS 2.2 | Design master reference outline
                     (00-overview through 08-getting-started) ............ DONE
    PRJ | WBS 2.3 | Design guide structure
                     (Parts I–VI, 13 chapters, Appendices A–D) .......... DONE
    PRJ | WBS 2.4 | Set up repo infrastructure
                     (.gitignore, README.md, CLAUDE.md) .................. DONE
    PRJ | WBS 2.5 | Create tier scaffolding
                     (evidence/README.md, guide/README.md) ............... DONE

PRJ | MS 3 | Draft v1 Completion                                        ✓ COMPLETE
    PRJ | WBS 3.1 | Write master reference — foundation docs
                     (overview, philosophy, origin story,
                     core concepts) ...................................... DONE
    PRJ | WBS 3.2 | Write master reference — operational docs
                     (FORGE cycle, org structure, functional folders) .... DONE
    PRJ | WBS 3.3 | Write master reference — management docs
                     (project management, controls & security,
                     naming conventions) ................................. DONE
    PRJ | WBS 3.4 | Write master reference — application docs
                     (implementations, getting started) .................. DONE
    PRJ | WBS 3.5 | Write guide — Parts I–II
                     (Introduction + Getting Started, Ch. 1–3) .......... DONE
    PRJ | WBS 3.6 | Write guide — Parts III–IV
                     (Structure + FORGE Cycle, Ch. 4–8) ................. DONE
    PRJ | WBS 3.7 | Write guide — Parts V–VI + Closing
                     (Mindset + Organizations, Ch. 9–13) ................ DONE
    PRJ | WBS 3.8 | Write guide — Appendices A–D ...................... DONE
    PRJ | WBS 3.9 | Initialize git repo, commit draft v1,
                     push to GitHub (RaihnForge/forge-framework) ........ DONE

PRJ | MS 4 | Quality Pass & Project Controls                            ✓ COMPLETE
    PRJ | WBS 4.1 | Fix 4→5 personal forges inconsistency
                     (07-implementations, 00b-origin-story) ............. DONE
    PRJ | WBS 4.2 | Fix "Fundings"→"Findings" typo
                     (01-forge-cycle, 00c-core-concepts) ................ DONE
    PRJ | WBS 4.3 | Add Zachary Rankin implementation placeholder ....... DONE
    PRJ | WBS 4.4 | Fill RBAC Matrix stub with representative roles .... DONE
    PRJ | WBS 4.5 | Update guide/README.md status ...................... DONE
    PRJ | WBS 4.6 | Generalize project classification examples ......... DONE
    PRJ | WBS 4.7 | Create Project Summary Plan (this document) ........ DONE

PRJ | MS 5 | Evidence Collection (Phase 1)
    PRJ | WBS 5.1 | Create research survey (Google Forms)
                     for implementation feedback
    PRJ | WBS 5.2 | Write first evidence file
                     (game studio collapse story)
    PRJ | WBS 5.3 | Write Marine Corps decision story
    PRJ | WBS 5.4 | Conduct Zachary Rankin interview + write up

PRJ | MS 6 | Guide Enhancement
    PRJ | WBS 6.1 | Write foreword (drawing from 00a-philosophy.md)
    PRJ | WBS 6.2 | Add Part VII: Stories (from evidence files)
    PRJ | WBS 6.3 | Strengthen with visual aids /
                     demonstrative language
    PRJ | WBS 6.4 | Academic reinforcement from CWU coursework

PRJ | MS 7 | Publication Preparation
    PRJ | WBS 7.1 | Full editorial pass
    PRJ | WBS 7.2 | Peer review cycle
    PRJ | WBS 7.3 | Format for publication medium
```

---

## Cost Management

### Operational Capacity Limitation

- **Personnel:** Solo author + AI collaboration
- **Time:** Evenings and weekends
- **Primary constraint:** Joshua's available time
- **Budget:** Minimal — no external costs anticipated until publication formatting (MS 7)

---

## Strategy & Approach

### Execution

Iterative — build docs first, then evidence, then guide. Each tier feeds forward:

1. **Master Reference** establishes the source of truth
2. **Evidence Collection** grounds the theory in real stories and data
3. **Published Guide** synthesizes both into a reader-facing work

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
| Evidence collection depends on third-party interviews (Zach, others) | Delays to MS 5 | Begin outreach early; write solo-sourced evidence first |
| Academic rigor goal may require research beyond personal experience | Quality gap in guide | Leverage CWU coursework corpus; cite established frameworks |
| Publication format TBD (book, website, both?) | Delays to MS 7 | Defer format decision; write content-first in markdown |
| Solo author bandwidth | Slow progress | AI collaboration; maintain sustainable pace; track via this PSP |

---

## Change Management

### Change Log

| Date | Change | Rationale |
|------|--------|-----------|
| 2026-03-01 | Initial PSP created | Dogfooding the framework — managing the framework project with its own tools |
| 2026-03-01 | Restructured WBS to account for all prior work (MS 0–4) | Original WBS started midstream; backfilled charter, resource collection, schema design, and draft v1 milestones |

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
