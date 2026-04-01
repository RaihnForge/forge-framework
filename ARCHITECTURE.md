# Forge Framework — Architecture

## What This Is

Not a codebase — a documentation project. The Forge Framework is a theory of organizational management. This repo contains the master reference, evidence collection, and a work-in-progress published guide.

## File Structure

```
forge-framework/
├── CLAUDE.md                          ← AI instructions, framework conventions
├── ARCHITECTURE.md                    ← This file
├── README.md                          ← Project overview, structure, doc strategy
├── docs/                              ← Master Reference (source of truth)
│   ├── 00-overview.md                     What the framework is
│   ├── 00a-philosophy.md                  Why "Forge" — self-determination
│   ├── 00b-origin-story.md                Journey behind the framework
│   ├── 00c-core-concepts.md               Miller's Law, Plot of Land, Chaos/Order
│   ├── 01-forge-cycle.md                  F.O.R.G.E. cycle with wisdom principles
│   ├── 02-organizational-structure.md     Flexible departments (business + personal)
│   ├── 03-functional-folders.md           State machine folders, Process vs. Project
│   ├── 04-project-management.md           Project Summary Plan template
│   ├── 05-controls-and-security.md        RBAC, SOC 2, CMMC, compliance
│   ├── 06-naming-conventions.md           Standards and formats
│   ├── 07-implementations.md             Real-world applications
│   ├── 08-getting-started.md              Minimum viable Forge + scaling
│   └── PROJECT-SUMMARY-PLAN.md            Standalone PSP template
├── evidence/                          ← Stories, proofs, studies, anecdotes
│   └── README.md                          Collection checklist
├── guide/                             ← Published guide (work in progress)
│   ├── README.md                          Guide status
│   └── forge-framework-guide-draft-v1.md  Draft v1
└── resources/
    ├── raw/                           ← Original binaries (gitignored)
    │   └── README.md                      Index note
    └── source-documents/              ← Adapted text extracts (.md + .csv)
        └── INDEX.md                       Full index of all source documents
```

## Three-Tier Documentation Strategy

```
docs/ (Master Reference)
  │
  │  Controls structure and concepts
  │
  ▼
guide/ (Published Guide) ◄── evidence/ (Evidence Collection)
  │                              │
  │  Reader-facing publication   │  Raw material: stories,
  │  Draws from both sources     │  experiences, case studies
  └──────────────────────────────┘
```

1. **Master Reference** (`docs/`) — Extended outline, core concepts. Always most complete and current. Source of truth.
2. **Evidence Collection** (`evidence/`) — Stories, experiences, proofs, studies. Feeds the guide with real-world material.
3. **Published Guide** (`guide/`) — Polished, reader-facing publication. Structured for clarity, enriched with evidence.

The Master Reference controls the Guide. The Evidence Collection feeds the Guide.

## Content Organization

The `docs/` files follow a deliberate progression:

| # | Document | Layer |
|---|----------|-------|
| 00-series | Overview, philosophy, origin, core concepts | Foundation — what and why |
| 01 | FORGE Cycle | Cycle — the operational heartbeat |
| 02 | Organizational Structure | Structure — departments and forges |
| 03 | Functional Folders | Folders — state machine operations |
| 04 | Project Management | Projects — PSP template |
| 05 | Controls and Security | Controls — RBAC, compliance |
| 06 | Naming Conventions | Standards — naming formats |
| 07 | Implementations | Practice — real-world applications |
| 08 | Getting Started | Onboarding — minimum viable Forge |

## Key Framework Concepts

- **FORGE Cycle:** Feed, Organize, React, Generate, Express — each with a wisdom principle
- **Miller's Law:** 7 +/- 2 as a design constraint for groupings
- **Folders as State Machine:** Action Log, Queue, Projects, Binder, Archive — location = operational state
- **Personal Forges:** Maslow-mapped: HomeForge, HealthForge, UnchosenForge, RaihnForge, PaladinForge
- **Business Template:** Admin, Clientele, Product, Resources
- **Four C's Maturation:** Competence, Confidence, Comfort, Compliance — universal capability maturation sequence
- **Doc Types:** Monitor (MON), Control (CON), Evidence
- **Fractal Architecture:** Same patterns repeat at every scale; entity is always the lens; framework sovereignty
- **Information Flow:** State machine is source of truth; Action Log is dashboard; decisions are controls instantly; evidence is always dead
- **Temporal Rhythms:** Framework doesn't prescribe tempo; calendar is universal instrument; domains wither by design in crisis
- **Failure Modes:** Over-ambition, over-consolidation, staleness, skipping Express, structure as overhead, folder decay, permanent crisis, judging before operating, director buy-in, stakeholder adoption

## Resources

`resources/source-documents/` contains adapted text extracts from original materials:

- Presentation slide decks (4th State Communications, Kelvin Education)
- Project management templates (Project Summary Plan, schedules)
- Organizational controls (RBAC, action logs, asset inventory, budgets)
- Handwritten theory notes

See `resources/source-documents/INDEX.md` for the full catalog with descriptions and original file mappings.

## Ecosystem Position

The Forge Framework is a non-code project in the development portfolio. Keeper monitors its docs for freshness. It has no runtime, no ports, no services — just documentation.
