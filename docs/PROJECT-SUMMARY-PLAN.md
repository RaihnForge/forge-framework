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
PRJ | MS 0 | Planning and Assessment
    PRJ | WBS 0.1 | Establish three-tier doc strategy .................. DONE
    PRJ | WBS 0.2 | Adapt source documents from Google Drive .......... DONE
    PRJ | WBS 0.3 | Initialize git repo + push to GitHub .............. DONE
    PRJ | WBS 0.4 | Create Project Summary Plan (this document) ....... DONE
    PRJ | WBS 0.5 | Resolve all known doc inconsistencies ............. DONE

PRJ | MS 1 | Master Reference Completion
    PRJ | WBS 1.1 | Fix 4→5 personal forges inconsistency ............ DONE
    PRJ | WBS 1.2 | Fix "Fundings"→"Findings" typo ................... DONE
    PRJ | WBS 1.3 | Add Zachary Rankin placeholder .................... DONE
    PRJ | WBS 1.4 | Fill RBAC Matrix stub ............................. DONE
    PRJ | WBS 1.5 | Update guide/README.md status ..................... DONE
    PRJ | WBS 1.6 | Generalize project classification examples ........ DONE

PRJ | MS 2 | Evidence Collection (Phase 1)
    PRJ | WBS 2.1 | Create research survey (Google Forms) for implementation feedback
    PRJ | WBS 2.2 | Write first evidence file (game studio collapse story)
    PRJ | WBS 2.3 | Write Marine Corps decision story
    PRJ | WBS 2.4 | Conduct Zachary Rankin interview + write up

PRJ | MS 3 | Guide Enhancement
    PRJ | WBS 3.1 | Write foreword (drawing from 00a-philosophy.md)
    PRJ | WBS 3.2 | Add Part VI: Stories (from evidence files)
    PRJ | WBS 3.3 | Strengthen with visual aids / demonstrative language
    PRJ | WBS 3.4 | Academic reinforcement from CWU coursework

PRJ | MS 4 | Publication Preparation
    PRJ | WBS 4.1 | Full editorial pass
    PRJ | WBS 4.2 | Peer review cycle
    PRJ | WBS 4.3 | Format for publication medium
```

---

## Cost Management

### Operational Capacity Limitation

- **Personnel:** Solo author + AI collaboration
- **Time:** Evenings and weekends
- **Primary constraint:** Joshua's available time
- **Budget:** Minimal — no external costs anticipated until publication formatting (MS 4)

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
| Evidence collection depends on third-party interviews (Zach, others) | Delays to MS 2 | Begin outreach early; write solo-sourced evidence first |
| Academic rigor goal may require research beyond personal experience | Quality gap in guide | Leverage CWU coursework corpus; cite established frameworks |
| Publication format TBD (book, website, both?) | Delays to MS 4 | Defer format decision; write content-first in markdown |
| Solo author bandwidth | Slow progress | AI collaboration; maintain sustainable pace; track via this PSP |

---

## Change Management

### Change Log

| Date | Change | Rationale |
|------|--------|-----------|
| 2026-03-01 | Initial PSP created | Dogfooding the framework — managing the framework project with its own tools |

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
