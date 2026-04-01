# Functional Folders

## Overview

The Functional Folder system is the heart of the Forge Framework's organizational structure. Every department ("office") contains the same five folders, each serving a specific purpose in the lifecycle of work. This consistency means that anyone, in any department, immediately knows where to find and file things.

## The Folders as a State Machine

**The functional folders are not just a filing system — they are states in a state machine.** A work item's physical location in the folder structure tells you exactly where it is in the FORGE cycle. We're not simply organizing files for storage; this is an operational process for every action taken.

| Folder | FORGE State | What It Means |
|--------|-------------|---------------|
| **Action Log** | Feed + Organize | Input received, being planned and assigned |
| **Queue** | React | Actively being executed, monitored, and controlled |
| **Projects** | React (ongoing) | Complex work in sustained execution |
| **Binder** | Express | Evidence captured, reference material, communicated results |
| **Archive** | Cycle complete | Work finished, preserved for history and audit |

If you look at any department's folder structure, you can immediately **read the operational state of every piece of work**. The folder *is* the status. The drive *is* the operation. No separate dashboard needed — the structure itself tells the story.

## The Five Functional Folders

```
Department Drive
├── Action Log ........... (Whiteboard)    — What needs to happen?
├── Queue ................ (Desk)          — What am I working on now?
├── Projects ............. (File Cabinet)  — What's big and ongoing?
├── Binder ............... (Reference)     — What do I need at my fingertips?
└── Archive .............. (Storage Room)  — What's done but worth keeping?
```

---

## 1. Action Log (The Whiteboard)

> "What do I want to do today?"

**Metaphor:** A whiteboard in the office — the central place everyone looks at to see what's going on.

**Purpose:**
- Priority reference for all active and planned work
- Keep track of projects and tasks
- See what is a priority and currently being worked
- **Team communication cornerstone** — the single source of truth for what the department is doing

**Structure:**

| Field | Description |
|-------|-------------|
| Index | Sequential number (1.0, 2.0, 3.0...) |
| % | Completion percentage |
| Date | Date created or last updated (YYYYMMDD) |
| Scope | Department or functional area |
| Task | Description of the work |
| POC / Lead | Point of contact / responsible person |
| Note | Additional context |
| Status | Current status |
| Target Date | Expected completion |
| Date Completed | Actual completion date |
| Filing: Primary | Primary functional folder destination |
| Filing: Secondary | Secondary filing location |

**Filing Categories:**
- Queue — Active task folder
- Project — Part of a larger project
- Filed — Completed and archived

**Classification:** Action Logs may carry security classifications (e.g., `CLASSIFICATION: RESTRICTED`)

### Action Log Maintenance: The Staleness Problem

An Action Log that only grows will eventually stop working. As items accumulate over weeks and months, older entries create noise — they're technically "open" but have lost urgency or relevance. The whiteboard becomes cluttered. The signal-to-noise ratio degrades, and the Action Log shifts from a priority reference into a guilt-inducing backlog.

This is not a flaw in the framework — it is an operational reality that requires deliberate maintenance.

**The MON lifecycle already provides the mechanism.** Action Logs are Monitor documents. When a Monitor document is superseded, it becomes Evidence. Apply this to the Action Log itself:

- **Cycle the log periodically** — `HomeForge_ActionLog_2026Q1` becomes dated evidence when `HomeForge_ActionLog_2026Q2` takes its place. The new log starts clean, carrying forward only items that still warrant active attention.
- **Review before cycling** — When creating a new Action Log, deliberately assess each open item from the prior log. Items that are still relevant carry forward. Items that have gone stale are either closed, moved to the Void Forge as do-not-do's, or archived as evidence of what was considered.
- **The cycle period depends on operational tempo** — A high-volume department might cycle monthly. A personal Forge might cycle quarterly. The right interval is whenever the log starts feeling heavy rather than useful.

The principle: **an Action Log should always feel like a whiteboard, not a ledger.** If it feels like a ledger, it's time to cycle it.

### Action Log Scope: Why Each Forge Gets Its Own

A single-person system could reasonably consolidate everything into one root Action Log with Forges as process folders beneath it. This is a valid architecture — and it's wrong for most people.

The reason is cognitive, not organizational.

When you sit down to work in RaihnForge, you don't want to see your medical appointments, your mortgage tasks, and your client deliverables. Those belong to other Forges. If they're visible, they compete for working memory — even passively. The mind doesn't ignore open items on a list just because they're in a different category. It processes them, worries about them, and loses capacity for the work at hand.

**Each Forge gets its own Action Log because each Forge is a cognitive context.** When you enter a Forge, you narrow your mental aperture to that domain. The Action Log for that Forge shows only that domain's work. Your working memory isn't competing with the other domains — it's fully allocated to this one.

This is the "Virtual RAM" principle made operational. You're not just organizing files — you're managing cognitive load by controlling what's *visible* at any given time. Each Forge is a context switch with a clean workspace.

**The scaling rule:** An Action Log exists wherever a decision-maker needs an independent view of work.

| Scale | Action Log Placement | Reasoning |
|-------|---------------------|-----------|
| **Single person, personal life** | One per Forge (5-9 logs) | Each Forge is a cognitive context requiring dedicated focus |
| **Single person, one business** | One per department (4-5 logs) | Same principle — each department is a context |
| **Team with managers** | One per manager's scope | Each manager needs an independent view of their domain |
| **Organization** | One per department + sub-logs per process as needed | Logs multiply with decision-making authority |

The temptation to consolidate into fewer logs is understandable — it feels simpler. But it trades organizational simplicity for cognitive overload. The deliberate splintering of attention across dedicated contexts is what enables expanded consciousness within each one. Instead of wrestling your entire life at once, you drop all other considerations for dedicated effort in one domain, expanding your cognitive capacity within that slice.

This is not duplication. It is leverage.

---

## 2. Queue (The Desk)

> "Let's get goin' on this!"

**Metaphor:** Your desk — the active workspace where current tasks live.

**Purpose:**
- Hold active task folders for work currently being executed
- 1:1 relationship with open items in the Action Log
- Centralize all materials for a task in one place

**Rules:**
- Every open task in the Action Log should have a corresponding folder in the Queue
- Folders are **date-stamped** using the format: `YYYYMMDD` (e.g., `20220809`)
- Full naming format: `YYYYMMDD - Task Description`
- All task-related files go in the task folder:
  - Trackers
  - Notes
  - Emails (saved as PDF)
  - Documents, presentations
  - Screenshots, reference material

**Lifecycle:**
1. Task appears in Action Log
2. Queue folder is created with date stamp
3. Work is performed, files accumulate in the folder
4. Task completes
5. Queue folder moves to **Archive**

---

## 3. Projects (The File Cabinet)

> "Ooof, there is a lot to this thing!"

**Metaphor:** A file cabinet — for the big, complex, multi-faceted efforts.

**Purpose:**
- Hold complex work that spans multiple tasks and extended timelines
- Things that don't end quickly or easily
- Multi-phase initiatives requiring ongoing coordination

**Characteristics:**
- Will have multiple tasks (which may each appear in Queue)
- Don't end for a while or very easily
- May contain sub-projects or work streams
- Follow the Project Summary Plan template

**Examples:**
- Onboarding programs (documents, webinars, agreements in progress)
- State Registration processes (multiple states, documents, emails, trackers)
- Product development initiatives
- Compliance certification efforts (SOC 2, CMMC)

**Relationship to Queue:**
Projects contain the *big picture*. Individual tasks within a project may still get Queue folders for active execution. The Project folder is the persistent home; Queue folders are the temporary workbench.

---

## 4. Binder (Priority Reference)

> "Aha! We should all know this!"

**Metaphor:** A reference binder kept at your desk — the things you grab constantly.

**Purpose:**
- Quick access to frequently referenced information
- Top-level information that needs to be passed forward
- Things you want "at your desk" at all times

**What goes here:**
Ask yourself:
- *"Is this something I will want at my desk?"*
- *"Is this top-level information to pass forward?"*
- *"Do I use or reference this often?"*

**Examples:**
- State Registration IDs
- Business licenses
- Key contact information
- Standard operating procedures
- Quick-reference guides
- Policy summaries

**Key distinction:** Binder is for *living reference material* — things you need today and tomorrow. Not historical (that's Archive) and not active work (that's Queue/Projects).

**Cross-department role:** The Binder also serves as an **airlock or API port** for the department. When information needs to be exported to external departments, stakeholders, or audiences, it passes through the Binder. Internal utility tools and support processes (e.g., a shared code library) are Process folders, not Binder material — they serve internal operations. But a *report about* that library for an external stakeholder would live in the Binder. The Binder is where internal work becomes externally visible.

*Implementation note (Keyes Dev Studio, 2026-03-25): When applying the Forge Framework to a software development department, the shared tools repository (sanctum) was initially mapped to the Binder. On closer analysis, sanctum is a Process folder — an internal utility product consumed by other projects. The Binder distinction became clear when considering: "If the CEO asked for a report on our dependency vs proprietary ecosystem, where would it live?" The report would pull data FROM sanctum but exist IN the Binder. Sanctum is the workshop; the Binder is the export dock.*

---

## 5. Archive (The Storage Room)

> "So much clutter, let's focus!"

**Metaphor:** The storage room — things you don't need day-to-day but can't throw away.

**Purpose:**
- Store completed work that isn't actively needed
- Maintain audit trail and institutional history
- Keep the active workspace clean and focused

**What goes here:**
- Finished Queue tasks (completed task folders move here)
- Historical documents
- Completed project documentation
- Anything needed for audit or history purposes but not for daily reference

**Key distinction:** Archive is not a trash can. Everything here was once active and may be needed again for audits, legal purposes, or historical reference.

---

## Process Folders

In addition to the functional folders, each department contains **Process Folders** for managing continuous operational procedures.

### Projects vs. Processes

This is a critical distinction in the Forge Framework:

| | Projects | Processes |
|---|---|---|
| **Nature** | Finite | Continuous |
| **Lifecycle** | Born → lives → concludes | Born → runs indefinitely |
| **Goal** | Reach a defined end state | Maintain an ongoing operational rhythm |
| **Location** | Projects folder | Process folders |
| **FORGE cycle** | Runs once (or a defined number of iterations) | Cycles repeatedly, each iteration flowing through FORGE |

Both Projects and Processes use the FORGE cycle internally. The difference is that a Project's folder eventually moves to Archive when complete, while a Process folder persists as a **living operational module** for the department.

### How Process Folders Work

A Process folder becomes both the **instructions** and the **evidence** for a recurring departmental operation. It serves as a dashboard, dial, or module for whatever ongoing responsibility it represents.

**Example:** A Client Service Management department might have a process called "Client Status" — periodic check-ins with each client to see how they're doing.

The "Client Status" process folder would contain:
- The defined procedure (how and when to check in)
- Completed action items from each check-in cycle (work evidence)
- Trackers that get updated over time (the live dashboard)
- The accumulated history of that process running

Each check-in cycle flows through the FORGE cycle as normal — Feed (client needs input), Organize (plan the check-in), React (conduct it), Generate (produce status update), Express (communicate and document). The finished action items and their work land within the process folder, updating tracker information along the way.

### The Three Types of Documentation

In any managed system, documentation always falls into three categories:

| Type | Label | Purpose | Example |
|------|-------|---------|---------|
| **Monitor** | MON | A log or tracker — records what is happening over time | `RaihnForge_ActionLog_MON` |
| **Control** | CON | A policy or process master — defines what *should* happen | `RaihnForge_Index_CON` |
| **Evidence** | — | Any other output — the product of work | Reports, deliverables, completed artifacts |

**Lifecycle rule:** An outdated Monitor or Control document becomes Evidence once superseded. `HomeForge_ActionLog_2026Q1` becomes historical evidence when `HomeForge_ActionLog_2026Q2` takes its place. Superseded policies get date-stamped and filed as evidence. This ensures you can always trace back to how the system was configured at any point in time.

The MON/CON labels in naming are optional but valuable as an exercise — asking "Am I tracking or controlling here?" normalizes how you think about documentation.

### Process Folder Structure

The items within any Process folder fall into distinct categories:

| Item | Type | Purpose |
|------|------|---------|
| **Functional Folders** | Folders | The 5 state-machined folders (Action Log, Queue, Projects, Binder, Archive) within the ecosystem of any process |
| **Seeded Process Folders** | Folders | Sub-processes nested within the domain when complexity requires it |
| **Control Document** | Documentation (CON) | The process/policy master — the README that defines and justifies the existence of the folder it's seeded to |
| **Action Log / Tracker** | Documentation (MON) | The monitoring instrument — tracks what's happening, what's been done, what's next |

For every Process folder, there should always be a Monitor and a Control document if things are set up correctly. The Control is the "why and how." The Monitor is the "what and when."

Note: From the fractal perspective, even a department or Forge folder is a Process folder in essence — it is a continuous operational module. The same MON/CON/Evidence pattern applies at every level.

---

## Root Control Documents

At the root of each department drive, alongside the functional folders, live the root-level documentation:

- **Control Document (CON)** — The department-level governance document linking to all department resources. The README that defines and justifies the department.
- **Action Log (MON)** — The master task tracker (may be a spreadsheet)
- **Trackers (MON)** — Department-level monitoring instruments

These root documents serve as the "index" or "table of contents" for the entire department.

---

## Best Practices

### Filing Discipline
- **Save emails to PDF** — Makes them searchable in Drive and consolidates information
- **Screen capture webpages** — For tickets, confirmations, long pages (tools like GoFullPage)
- **Ask yourself: "Would anyone ever need access to this?"** — If yes, file it in the shared drive. If truly personal, keep in My Drive.

### My Drive vs. Shared Drive
- **Shared Drive (Department)**: Default location. Most things belong here.
- **My Drive**: Only for things that truly make sense being seen only by you. Use shortcuts to link to shared drive content when needed.

### Date Stamping
All time-sensitive files and folders use: `YYYYMMDD` format (e.g., `20240711`)

### Make It Work for You
The framework is a guide, not a cage. Adapt it to your context while maintaining the core structure. Ask questions, share wins, and recommend changes.
