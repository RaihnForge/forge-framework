/**
 * Forge Framework — Project Dashboard Configuration
 * ====================================================
 * Project-specific data for the dashboard.
 * Edit this file to update status, milestones, and WBS items.
 * The dashboard shell (dashboard.html) never changes.
 *
 * To mark a WBS item done:   Change status: "pending" → "done"
 * To add an evidence file:   Add file path, change status
 * For a new project:         Copy dashboard.html + reference-cards/, write new config
 */

var FORGE_PSP_CONFIG = {

  // ═══════════════════════════════════════════════
  // PROJECT METADATA
  // ═══════════════════════════════════════════════

  project: {
    name: "Forge Framework Publication",
    prefix: "PRJ",
    sponsor: "Joshua Keyes",
    deliverable: "Published guide/book on the Forge Framework",
    mission: "Codify a proven organizational management theory into an accessible, actionable publication",
    lastUpdated: "2026-03-01",
    docType: "CON",
    repo: "RaihnForge/forge-framework"
  },

  // ═══════════════════════════════════════════════
  // MILESTONES & WBS
  // ═══════════════════════════════════════════════

  milestones: [
    {
      id: "ms-0",
      label: "MS 0",
      name: "Project Charter & Initiation",
      status: "complete",
      wbs: [
        { id: "0.1", description: "Define project objective (codify framework as published guide)", status: "done" },
        { id: "0.2", description: "Define project scope (in: docs, evidence, guide; out: software, SaaS, consulting)", status: "done" },
        { id: "0.3", description: "Establish AI collaboration workflow (Claude Code)", status: "done" }
      ]
    },
    {
      id: "ms-1",
      label: "MS 1",
      name: "Preparation Strategy & Curation",
      status: "complete",
      wbs: [
        { id: "1.1", description: "Identify source materials in Google Drive", status: "done" },
        { id: "1.2", description: "Adapt handwritten FORGE cycle notes to markdown", status: "done" },
        { id: "1.3", description: "Adapt presentations to markdown (4S 28 slides + Kelvin/Longhorn 30 slides)", status: "done" },
        { id: "1.4", description: "Adapt project management templates to markdown (PSP template, mind maps, schedule)", status: "done" },
        { id: "1.5", description: "Adapt organizational controls to markdown/CSV (4S Index, Security, RBAC, Action Logs, trackers)", status: "done" },
        { id: "1.6", description: "Create source documents index (INDEX.md)", status: "done" },
        { id: "1.7", description: "Design three-tier doc strategy (docs/, evidence/, guide/)", status: "done" },
        { id: "1.8", description: "Design master reference outline (00-overview through 08-getting-started)", status: "done" },
        { id: "1.9", description: "Design guide structure (Parts I-VI, 13 chapters, Appendices A-D)", status: "done" }
      ]
    },
    {
      id: "ms-2",
      label: "MS 2",
      name: "Rough Draft v1 & Version Control",
      status: "complete",
      wbs: [
        { id: "2.1", description: "Write master reference -- foundation docs (overview, philosophy, origin story, core concepts)", status: "done" },
        { id: "2.2", description: "Write master reference -- operational docs (FORGE cycle, org structure, functional folders)", status: "done" },
        { id: "2.3", description: "Write master reference -- management docs (project management, controls & security, naming conventions)", status: "done" },
        { id: "2.4", description: "Write master reference -- application docs (implementations, getting started)", status: "done" },
        { id: "2.5", description: "Write guide -- Parts I-II (Introduction + Getting Started, Ch. 1-3)", status: "done" },
        { id: "2.6", description: "Write guide -- Parts III-IV (Structure + FORGE Cycle, Ch. 4-8)", status: "done" },
        { id: "2.7", description: "Write guide -- Parts V-VI + Closing (Mindset + Organizations, Ch. 9-13)", status: "done" },
        { id: "2.8", description: "Write guide -- Appendices A-D", status: "done" },
        { id: "2.9", description: "Set up repo infrastructure, tier scaffolding, initial commit, push to GitHub", status: "done" }
      ]
    },
    {
      id: "ms-3",
      label: "MS 3",
      name: "Polish & MVP Completion",
      status: "complete",
      wbs: [
        { id: "3.1", description: "Fix 4->5 personal forges inconsistency (07-implementations, 00b-origin-story)", status: "done" },
        { id: "3.2", description: 'Fix "Fundings"->"Findings" typo (01-forge-cycle, 00c-core-concepts)', status: "done" },
        { id: "3.3", description: "Add Zachary Rankin implementation placeholder", status: "done" },
        { id: "3.4", description: "Fill RBAC Matrix stub with representative roles", status: "done" },
        { id: "3.5", description: "Update guide/README.md status", status: "done" },
        { id: "3.6", description: "Generalize project classification examples", status: "done" },
        { id: "3.7", description: "Create Project Summary Plan (PSP document)", status: "done" }
      ]
    },
    {
      id: "ms-4",
      label: "MS 4",
      name: "Core Evidence Collection",
      status: "pending",
      wbs: [
        { id: "4.1", description: "Create research survey (Google Forms) for implementation feedback", status: "pending" },
        { id: "4.2", description: "Write game studio collapse case study (failure as key to success)", status: "pending" },
        { id: "4.3", description: "Write Marine Corps decision & leadership story", status: "pending" },
        { id: "4.4", description: 'Write Kelvin Education "Longhorn" rollout case study', status: "pending" },
        { id: "4.5", description: "Write 4th State Communications / CMMC implementation case study", status: "pending" },
        { id: "4.6", description: "Conduct Zachary Rankin interview + write up", status: "pending" },
        { id: "4.7", description: "Compile academic references and supporting literature (CWU coursework mining)", status: "pending" }
      ]
    },
    {
      id: "ms-5",
      label: "MS 5",
      name: "Human Story Enhancements & Narrative Hooks",
      status: "pending",
      wbs: [
        { id: "5.1", description: "Write foreword (drawing from 00a-philosophy.md and origin story)", status: "pending" },
        { id: "5.2", description: "Write daughter/open adoption motivation story", status: "pending" },
        { id: "5.3", description: "Write COVID / rock bottom survival narrative", status: "pending" },
        { id: "5.4", description: "Develop Plot of Land allegory as standalone narrative piece (water allocation gone wrong)", status: "pending" },
        { id: "5.5", description: "Write before/after transformation examples (pre-Forge vs. post-Forge)", status: "pending" },
        { id: "5.6", description: "Create chapter-opening vignettes and hooks from evidence files", status: "pending" },
        { id: "5.7", description: "Cross-domain design principle examples (art, engineering, military, biology)", status: "pending" }
      ]
    },
    {
      id: "ms-6",
      label: "MS 6",
      name: "Complete Draft Compilation",
      status: "pending",
      wbs: [
        { id: "6.1", description: "Integrate core evidence into guide chapters", status: "pending" },
        { id: "6.2", description: "Weave human story hooks into existing chapters", status: "pending" },
        { id: "6.3", description: "Add Part VII: Stories (from evidence files)", status: "pending" },
        { id: "6.4", description: "Full continuity and consistency pass across all chapters", status: "pending" },
        { id: "6.5", description: "Update master reference from any guide discoveries or refinements", status: "pending" },
        { id: "6.6", description: "Strengthen demonstrative language throughout", status: "pending" }
      ]
    },
    {
      id: "ms-7",
      label: "MS 7",
      name: "Final Draft Polish -- Graphics, Diagrams & Layout",
      status: "pending",
      wbs: [
        { id: "7.1", description: "Design FORGE cycle diagram", status: "pending" },
        { id: "7.2", description: "Design functional folders state machine diagram", status: "pending" },
        { id: "7.3", description: "Design Maslow-to-Forge mapping visual", status: "pending" },
        { id: "7.4", description: "Design Plot of Land / Fiefdom illustration", status: "pending" },
        { id: "7.5", description: "Layout formatting and typography pass", status: "pending" },
        { id: "7.6", description: "Full editorial pass (language, tone, clarity)", status: "pending" }
      ]
    },
    {
      id: "ms-8",
      label: "MS 8",
      name: "Publication & Project Closing",
      status: "pending",
      wbs: [
        { id: "8.1", description: "Peer review cycle", status: "pending" },
        { id: "8.2", description: "Determine publication medium (book, website, or both)", status: "pending" },
        { id: "8.3", description: "Format for chosen publication medium", status: "pending" },
        { id: "8.4", description: "ISBN / publication registration (if applicable)", status: "pending" },
        { id: "8.5", description: "After-action review (Express phase -- dogfooding)", status: "pending" },
        { id: "8.6", description: "Archive project artifacts + project closing", status: "pending" }
      ]
    }
  ],

  // ═══════════════════════════════════════════════
  // DOCUMENTATION TIERS
  // ═══════════════════════════════════════════════

  docTiers: [
    {
      id: "docs",
      label: "Master Reference",
      path: "docs/",
      description: "Source of truth -- extended outline and core concepts",
      status: "complete",
      items: [
        { label: "Overview", file: "docs/00-overview.md", status: "done" },
        { label: "Philosophy", file: "docs/00a-philosophy.md", status: "done" },
        { label: "Origin Story", file: "docs/00b-origin-story.md", status: "done" },
        { label: "Core Concepts", file: "docs/00c-core-concepts.md", status: "done" },
        { label: "FORGE Cycle", file: "docs/01-forge-cycle.md", status: "done" },
        { label: "Organizational Structure", file: "docs/02-organizational-structure.md", status: "done" },
        { label: "Functional Folders", file: "docs/03-functional-folders.md", status: "done" },
        { label: "Project Management", file: "docs/04-project-management.md", status: "done" },
        { label: "Controls & Security", file: "docs/05-controls-and-security.md", status: "done" },
        { label: "Naming Conventions", file: "docs/06-naming-conventions.md", status: "done" },
        { label: "Implementations", file: "docs/07-implementations.md", status: "done" },
        { label: "Getting Started", file: "docs/08-getting-started.md", status: "done" },
        { label: "Project Summary Plan", file: "docs/PROJECT-SUMMARY-PLAN.md", status: "done" }
      ]
    },
    {
      id: "evidence",
      label: "Evidence Collection",
      path: "evidence/",
      description: "Stories, proofs, studies, anecdotes -- feeds into the guide",
      status: "pending",
      items: [
        { label: "Kelvin Education implementation stories", file: null, status: "pending" },
        { label: "4th State Communications implementation", file: null, status: "pending" },
        { label: "Personal life implementation", file: null, status: "pending" },
        { label: "Game studio collapse (failure as key to success)", file: null, status: "pending" },
        { label: "Marine Corps decision story", file: null, status: "pending" },
        { label: "Daughter / open adoption story", file: null, status: "pending" },
        { label: "Miller's Law in practice examples", file: null, status: "pending" },
        { label: "Plot of Land -- water allocation examples", file: null, status: "pending" },
        { label: "SOC 2 certification journey", file: null, status: "pending" },
        { label: 'Kelvin "Longhorn" rollout case study', file: null, status: "pending" },
        { label: "Before/after transformation examples", file: null, status: "pending" },
        { label: "Academic references and literature", file: null, status: "pending" },
        { label: "Cross-domain design principle examples", file: null, status: "pending" },
        { label: "Zachary Rankin family implementation", file: null, status: "pending" },
        { label: "COVID / rock bottom survival narrative", file: null, status: "pending" }
      ]
    },
    {
      id: "guide",
      label: "Published Guide",
      path: "guide/",
      description: "Reader-facing publication drawn from docs + evidence",
      status: "in-progress",
      items: [
        { label: "Draft v1 (Parts I-VI, 13 chapters, Appendices A-D)", file: "guide/forge-framework-guide-draft-v1.md", status: "done" },
        { label: "Evidence integration pass", file: null, status: "pending" },
        { label: "Human story hooks pass", file: null, status: "pending" },
        { label: "Part VII: Stories", file: null, status: "pending" },
        { label: "Continuity & consistency pass", file: null, status: "pending" },
        { label: "Editorial pass", file: null, status: "pending" }
      ]
    }
  ],

  // ═══════════════════════════════════════════════
  // FRAMEWORK CONCEPTS
  // (references card IDs from forge-reference-cards.js)
  // ═══════════════════════════════════════════════

  concepts: [
    "forge-cycle",
    "functional-folders",
    "millers-law",
    "personal-forges",
    "maslow-hypothesis",
    "design-principles",
    "chaos-and-order",
    "plot-of-land",
    "four-cs",
    "doc-types",
    "void-forge"
  ],

  // ═══════════════════════════════════════════════
  // SOURCE DOCUMENTS
  // ═══════════════════════════════════════════════

  sourceDocuments: [
    { label: "Handwritten Notes", file: "resources/source-documents/Forge-Framework-Handwritten-Notes.md" },
    { label: "4S Presentation (28 slides)", file: "resources/source-documents/ForgeFramework-Presentation-4S.md" },
    { label: "Kelvin/Longhorn Presentation (30 slides)", file: "resources/source-documents/ForgeFramework-Presentation-Kelvin-Longhorn.md" },
    { label: "PSP Mind Map", file: "resources/source-documents/Project-Summary-Plan-MindMap.md" },
    { label: "PSP Detail", file: "resources/source-documents/Project-Summary-Plan-Detail.md" },
    { label: "Project Template", file: "resources/source-documents/Project-Template.md" },
    { label: "Schedule Template", file: "resources/source-documents/Forge-Framework-Schedule.md" },
    { label: "4S Index", file: "resources/source-documents/4S-Index.md" },
    { label: "4S Security Master Control", file: "resources/source-documents/4S-Security-MasterControl.md" },
    { label: "RBAC Control", file: "resources/source-documents/RBAC-Control.md" },
    { label: "RBAC Matrix", file: "resources/source-documents/RBAC-Matrix.csv" },
    { label: "Action Log Template", file: "resources/source-documents/4S-Admin-Action-Log--_TaskItem-Log.csv" },
    { label: "Budget Monitor", file: "resources/source-documents/Budget-Update-Log-Monitor.csv" },
    { label: "Asset Inventory", file: "resources/source-documents/Corporate-Asset-Inventory.csv" },
    { label: "Employee Tracker", file: "resources/source-documents/Employee-Information-Status.csv" },
    { label: "Meeting Notes (John/Josh)", file: "resources/source-documents/Notes-John-Josh-Sync.md" }
  ]
};
