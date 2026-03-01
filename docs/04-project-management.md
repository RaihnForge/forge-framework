# Project Management

## Overview

The Forge Framework provides a standardized **Project Summary Plan** template for managing projects of any size. This template ensures every project, regardless of department or complexity, is documented consistently and completely.

## Project Summary Plan Structure

```
Project Summary Plan
├── Project Overview
│   ├── Sponsor
│   ├── Stakeholders
│   └── Objective
│       ├── Deliverable
│       ├── Mission
│       └── Intent
├── Scope Management
│   ├── In Scope
│   ├── Out Scope
│   └── Change Scope
├── Schedule Management
│   ├── Expected Delivery
│   └── Milestones
├── Cost Management
│   └── Operational Capacity Limitation
├── Strategy & Approach
│   ├── Execution
│   └── Components
├── Issues & Risks
├── Change Management
│   ├── Change Log
│   └── Notation
└── Appendices
    ├── Terminology
    ├── Posterity
    ├── Resources
    └── References
```

---

## Section Details

### Project Overview

**Sponsor**
| Field | Description |
|-------|-------------|
| Entity | Person or organization sponsoring the project |
| Type | Relationship type (self, client, internal, etc.) |
| Info | Contact information |

**Stakeholders**
| Field | Description |
|-------|-------------|
| Entity | Person or organization with stake in the outcome |
| Type | Relationship type |
| Info | Contact information |

**Objective**
- **Deliverable**: The tangible output — what will be produced
- **Mission**: The purpose — why this project exists
- **Intent**: The broader goal — what success looks like beyond the deliverable

---

### Scope Management

- **In Scope**: What is explicitly included in this project
- **Out Scope**: What is explicitly excluded (prevents scope creep)
- **Change Scope**: Documented scope changes that have been approved

---

### Schedule Management

- **Expected Delivery**: Target completion date
- **Milestones**: The project milestones are segmented into distinct stages, each encompassing various tasks and components to be accomplished

**Milestone Format:**
```
PRJ | MS [#] | [Milestone Name]
    PRJ | WBS [#.#] | [Work Breakdown Structure Item]
```

**Standard Milestone Stages:**
1. `PRJ | MS 0 | Planning and Assessment`
2. `PRJ | MS 1 | Execution 1`
3. `PRJ | MS 2 | Completion`

Each milestone contains Work Breakdown Structure (WBS) items that detail the specific tasks.

---

### Cost Management

- **Operational Capacity Limitation**: Documents the constraints on resources, budget, and capacity that affect the project

---

### Strategy & Approach

- **Execution**: How the work will be performed — methodology, approach, workflow
- **Components**: The building blocks or modules that make up the deliverable

| Component | Description |
|-----------|-------------|
| [Name] | [What this component is and does] |

---

### Issues & Risks

Document known issues, potential risks, and mitigation strategies. This section is intentionally flexible — it grows as the project progresses.

---

### Change Management

- **Change Log**: Record of all approved changes to the project
- **Notation** (Annotation): Explanatory notes on change log entries

| Annotation | Update Notes |
|------------|-------------|
| [Change ID/Date] | [What changed and why] |

---

### Appendices

- **Terminology**: Definitions of project-specific terms
- **Posterity**: Notes for future reference — lessons learned, context for future readers
- **Resources**: Tools, links, assets used in the project
- **References**: External documents, standards, or materials referenced

---

## Project Classification

Projects are categorized by the department they serve. The categories and examples will vary by organization — adapt to your own departments.

**General pattern:**

| Category | Description | Example |
|----------|-------------|---------|
| **Administration** | Internal operations, compliance, HR | Policy overhaul, SOC 2 certification |
| **Product** | Core value creation and development | Feature release, product redesign |
| **Clientele** | Client-facing initiatives | Onboarding program, branding refresh |
| **Resources** | Infrastructure and tooling | System migration, vendor evaluation |

**Real-world example (from a SaaS education company):**

| Category | Description | Examples |
|----------|-------------|----------|
| **Data** | Data-related projects | Clever Liberation, Data Documentation Standardization |
| **Dev** | Development projects | Data Transparency, KC3 |
| **Clientele** | Client-facing projects | Branding Kit 2024 |

---

## Relationship to Functional Folders

Projects live in the **Projects** functional folder of their department. Active tasks within a project may also have corresponding **Queue** folders for day-to-day execution.

```
Department
├── Projects/
│   └── [Project Name]/
│       ├── Project Summary Plan
│       ├── [Project Files]
│       └── [Sub-folders as needed]
├── Queue/
│   └── YYYYMMDD - [Active Task from Project]/
│       └── [Working files]
└── Action Log (tracks all project tasks)
```

The Action Log serves as the bridge — every active project task appears in the Action Log, linking the Project folder to Queue execution.
