/**
 * Forge Framework — Reference Cards
 * ===================================
 * Portable concept reference cards for the Forge Framework.
 * Copy this folder to any project to carry the framework knowledge with you.
 *
 * Each card is a self-contained mini-reference with rich HTML content
 * designed to be rendered in a drawer, popup, or standalone viewer.
 *
 * Usage: Load via <script> tag. Access via FORGE_REFERENCE_CARDS global
 */

var FORGE_REFERENCE_CARDS = {
  meta: {
    name: "Forge Framework Reference Cards",
    version: "1.0.0",
    description: "Core concept reference cards for the Forge Framework",
    source: "https://github.com/RaihnForge/forge-framework"
  },

  cards: [
    // ─────────────────────────────────────────────
    // 1. FORGE Cycle
    // ─────────────────────────────────────────────
    {
      id: "forge-cycle",
      label: "FORGE Cycle",
      subtitle: "The operational heartbeat",
      sourceDoc: "docs/01-forge-cycle.md",
      html: `
        <p class="rc-intro">Every piece of work — from a 5-minute task to a multi-year initiative — flows through five phases. The cycle can be triggered <strong>proactively</strong> (planned concept) or <strong>reactively</strong> (in response to an event).</p>

        <pre class="rc-diagram">  FEED ──► ORGANIZE ──► REACT ──► GENERATE ──► EXPRESS ─┐
(Input)    (Plan)     (Execute)   (Output)    (Deliver)  │
  ▲                                                       │
  └───────────────────────────────────────────────────────┘</pre>

        <table class="rc-table">
          <thead>
            <tr><th>Phase</th><th>Action</th><th>Wisdom Principle</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Feed</strong></td>
              <td>Receive input</td>
              <td>"Failure: Key to Success" — Failures are stepping stones. Embrace the volume.</td>
            </tr>
            <tr>
              <td><strong>Organize</strong></td>
              <td>Plan the response</td>
              <td>"Vision + Mission + Values" — Temper decisions with ethics and purpose.</td>
            </tr>
            <tr>
              <td><strong>React</strong></td>
              <td>Execute the work</td>
              <td>"Leadership (Admin/Manage)" — Monitor, control, and lead actively.</td>
            </tr>
            <tr>
              <td><strong>Generate</strong></td>
              <td>Produce the result</td>
              <td>"Walk softly, carry a big stick. Know them by fruits of labor."</td>
            </tr>
            <tr>
              <td><strong>Express</strong></td>
              <td>Communicate &amp; document</td>
              <td>"Who are you? What do you do? How do you do?" — Tell your story.</td>
            </tr>
          </tbody>
        </table>

        <h4>Trigger Types</h4>
        <ul>
          <li><strong>Proaction (Concept)</strong> — Deliberate, strategy-driven. "We should do X."</li>
          <li><strong>Reaction (Event)</strong> — Response to something that happened. "X happened."</li>
        </ul>

        <h4>Express Domains</h4>
        <p>Outgoing, Compliance, Reports, Findings, Product — the five channels through which the cycle's output is communicated and preserved.</p>

        <h4>Key Insight</h4>
        <p class="rc-callout">Express feeds back into Feed. Lessons learned, new requirements, and after-action insights restart the cycle. Every iteration makes the next one stronger.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 2. Functional Folders
    // ─────────────────────────────────────────────
    {
      id: "functional-folders",
      label: "Functional Folders",
      subtitle: "Folders as a state machine",
      sourceDoc: "docs/03-functional-folders.md",
      html: `
        <p class="rc-intro">The five functional folders are not just a filing system — they are <strong>states in a state machine</strong>. A work item's location tells you exactly where it is in the FORGE cycle.</p>

        <pre class="rc-diagram">Department Drive
├── Action Log ... (Whiteboard)   — What needs to happen?
├── Queue ........ (Desk)         — What am I working on now?
├── Projects ..... (File Cabinet) — What's big and ongoing?
├── Binder ....... (Reference)    — What do I need at my fingertips?
└── Archive ...... (Storage Room) — What's done but worth keeping?</pre>

        <table class="rc-table">
          <thead>
            <tr><th>Folder</th><th>FORGE State</th><th>What It Means</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Action Log</strong></td><td>Feed + Organize</td><td>Input received, being planned</td></tr>
            <tr><td><strong>Queue</strong></td><td>React</td><td>Actively being executed</td></tr>
            <tr><td><strong>Projects</strong></td><td>React (ongoing)</td><td>Complex work in sustained execution</td></tr>
            <tr><td><strong>Binder</strong></td><td>Express</td><td>Evidence captured, reference material</td></tr>
            <tr><td><strong>Archive</strong></td><td>Cycle complete</td><td>Work finished, preserved for history</td></tr>
          </tbody>
        </table>

        <h4>Projects vs. Processes</h4>
        <table class="rc-table rc-table-compact">
          <thead><tr><th></th><th>Projects</th><th>Processes</th></tr></thead>
          <tbody>
            <tr><td><strong>Nature</strong></td><td>Finite</td><td>Continuous</td></tr>
            <tr><td><strong>Lifecycle</strong></td><td>Born &rarr; lives &rarr; concludes</td><td>Born &rarr; runs indefinitely</td></tr>
            <tr><td><strong>Goal</strong></td><td>Reach a defined end state</td><td>Maintain ongoing rhythm</td></tr>
          </tbody>
        </table>

        <h4>Key Insight</h4>
        <p class="rc-callout">The folder <em>is</em> the status. The drive <em>is</em> the operation. No separate dashboard needed — the structure itself tells the story.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 3. Miller's Law
    // ─────────────────────────────────────────────
    {
      id: "millers-law",
      label: "Miller's Law",
      subtitle: "The cognitive design constraint",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <blockquote class="rc-quote">"Human working memory can handle approximately <strong>seven, plus or minus two</strong> chunks of information at a time."<br><span class="rc-attribution">— George A. Miller, 1956</span></blockquote>

        <p class="rc-intro">Miller's Law is not incidental — it is a <strong>conscious design constraint</strong> that shapes the entire Forge Framework.</p>

        <h4>Application in the Framework</h4>
        <table class="rc-table rc-table-compact">
          <thead><tr><th>Element</th><th>Count</th></tr></thead>
          <tbody>
            <tr><td>Personal Forges</td><td>5</td></tr>
            <tr><td>Business Departments</td><td>4 – 5</td></tr>
            <tr><td>Functional Folders</td><td>5</td></tr>
            <tr><td>Action Ticket Fields</td><td>6</td></tr>
            <tr><td>Express Domains</td><td>5</td></tr>
            <tr><td>FORGE Phases</td><td>5</td></tr>
          </tbody>
        </table>

        <h4>The "Virtual RAM" Principle</h4>
        <p>The framework acts as <strong>external cognitive infrastructure</strong> — "virtual RAM" for the brain. By externalizing structure into folders, logs, and trackers, the mind is freed to focus on the current task while the system holds everything else.</p>

        <h4>Design Test</h4>
        <ul>
          <li>Can you hold all child nodes of a branch in your head at once? If not — too many children.</li>
          <li>Can you zoom out one level and hold sibling branches? If not — too many siblings.</li>
          <li>The framework should be <strong>vertically traversable</strong> in your mind.</li>
        </ul>

        <p class="rc-callout">This is not about being organized for the sake of organization. It is about <strong>expanding human capability beyond biological limits</strong>.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 4. Personal Forges
    // ─────────────────────────────────────────────
    {
      id: "personal-forges",
      label: "Personal Forges",
      subtitle: "Maslow-mapped life domains",
      sourceDoc: "docs/02-organizational-structure.md",
      html: `
        <p class="rc-intro">The Personal Forge model maps life domains to Maslow's Hierarchy of Needs — ensuring the full spectrum of human needs is deliberately structured and managed.</p>

        <table class="rc-table">
          <thead>
            <tr><th>Forge</th><th>Domain</th><th>Maslow's Layer</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HomeForge</strong><br><span class="rc-muted">(HearthForge)</span></td>
              <td>Shelter, Food, Household</td>
              <td>Physiological</td>
            </tr>
            <tr>
              <td><strong>HealthForge</strong></td>
              <td>Health, Wellness, Medical</td>
              <td>Safety</td>
            </tr>
            <tr>
              <td><strong>UnchosenForge</strong></td>
              <td>Work, Business, Freelance</td>
              <td>Belonging &amp; Esteem</td>
            </tr>
            <tr>
              <td><strong>RaihnForge</strong></td>
              <td>Art, Career, Skills</td>
              <td>Esteem through craft</td>
            </tr>
            <tr>
              <td><strong>PaladinForge</strong></td>
              <td>Athletics, Social, Spiritual</td>
              <td>Self-Actualization</td>
            </tr>
          </tbody>
        </table>

        <h4>Forge Details</h4>
        <dl class="rc-deflist">
          <dt>HomeForge</dt>
          <dd>The foundation. Non-negotiable needs everything else is built upon. Shelter, sustenance, physical security, household management.</dd>
          <dt>HealthForge</dt>
          <dd>The body. Basic health maintenance — not peak performance (that's PaladinForge). Medical care, nutrition, sleep, mental health.</dd>
          <dt>UnchosenForge</dt>
          <dd>The engine. Business operations, freelance projects, client work. Named for paths less chosen — and for the unchosen tasks required for survival.</dd>
          <dt>RaihnForge</dt>
          <dd>The craft. Creative expression, professional growth, skill development. Where craft and identity intersect.</dd>
          <dt>PaladinForge</dt>
          <dd>The higher calling. Peak physical, social, and spiritual performance. The drive toward self-actualization.</dd>
        </dl>

        <p class="rc-callout">Just as an individual cannot self-actualize when their base needs are unmet, the hierarchy holds: <strong>secure the foundation before reaching higher</strong>.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 5. Maslow Hypothesis
    // ─────────────────────────────────────────────
    {
      id: "maslow-hypothesis",
      label: "Maslow Hypothesis",
      subtitle: "Any entity's needs map to hierarchy",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <blockquote class="rc-quote">"Any entity's needs — whether an individual, a family, an organization, or a system — can be mapped to a hierarchical structure that mirrors Maslow's Hierarchy."</blockquote>

        <p class="rc-intro">Entities are entities in existence. They are born, they have needs in priority order, they grow, they can be neglected or nurtured, and they die. Systems are systems.</p>

        <table class="rc-table">
          <thead>
            <tr><th>Maslow's Level</th><th>Individual</th><th>Organization</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Physiological</strong></td>
              <td>Shelter, food (HomeForge)</td>
              <td>Legal, finance, HR (Administration)</td>
            </tr>
            <tr>
              <td><strong>Safety</strong></td>
              <td>Health, wellness (HealthForge)</td>
              <td>Security, compliance (Admin/Resources)</td>
            </tr>
            <tr>
              <td><strong>Belonging</strong></td>
              <td>Work, livelihood (UnchosenForge)</td>
              <td>Infrastructure, tools (Resources)</td>
            </tr>
            <tr>
              <td><strong>Esteem</strong></td>
              <td>Art, career (RaihnForge)</td>
              <td>Core value creation (Product)</td>
            </tr>
            <tr>
              <td><strong>Self-Actualization</strong></td>
              <td>Athletics, spiritual (PaladinForge)</td>
              <td>External impact (Clientele)</td>
            </tr>
          </tbody>
        </table>

        <p class="rc-callout">This is presented not as proven universal law but as an <strong>observed pattern</strong> — tested across multiple implementations — that invites you to examine whether it holds in your own context.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 6. Design Principles
    // ─────────────────────────────────────────────
    {
      id: "design-principles",
      label: "Design Principles",
      subtitle: "Scalability, maintainability, reliability",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <p class="rc-intro">The book <em>Designing Data-Intensive Applications</em> (Martin Kleppmann) identifies three pillars of sound system design. These three are not specific to database architecture — they are <strong>core to any sound design</strong>.</p>

        <table class="rc-table">
          <thead>
            <tr><th>Principle</th><th>Software</th><th>Organization</th><th>Personal Life</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Scalability</strong></td>
              <td>Handles growing data/traffic</td>
              <td>Grows from 2 to 200 without breaking</td>
              <td>Adapts from single life to family to career</td>
            </tr>
            <tr>
              <td><strong>Maintainability</strong></td>
              <td>Can be understood, updated, extended</td>
              <td>Operated day-to-day without heroics</td>
              <td>Can actually be kept up with sustainably</td>
            </tr>
            <tr>
              <td><strong>Reliability</strong></td>
              <td>Works correctly when things go wrong</td>
              <td>Functions under stress and turnover</td>
              <td>Works when you need it most — at rock bottom</td>
            </tr>
          </tbody>
        </table>

        <h4>Applied to the Forge Framework</h4>
        <ul>
          <li><strong>Scalable</strong> — Same patterns work for a solo freelancer or a 500-person company; same FORGE cycle works for a 5-minute task or a 5-year project</li>
          <li><strong>Maintainable</strong> — Structure is simple enough to sustain without heroic effort; Miller's Law keeps cognitive load manageable</li>
          <li><strong>Reliable</strong> — Works under stress, through failure, at scale; tested through personal collapse, startup chaos, and compliance audits</li>
        </ul>

        <h4>Methodology-Agnostic Infrastructure</h4>
        <p>Academic language (PMP, ITIL, Agile, OODA, ETTO) helps describe real-world conflicts and wisdom. That language is <strong>subject to change</strong> — but the universal truths of design and the existential constraints of life do not.</p>
        <ul>
          <li>Use all you can manage to <strong>increase clarity and understanding</strong></li>
          <li>If over-complication mitigates clarity — <strong>do quickly away with it</strong></li>
          <li>The framework is the scaffolding; methodologies are tools you hang on it</li>
        </ul>

        <p class="rc-callout">The Forge Framework is <strong>methodology-agnostic infrastructure</strong>. It is the organizational structure within which any appropriate methodology can operate.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 7. Chaos & Order
    // ─────────────────────────────────────────────
    {
      id: "chaos-and-order",
      label: "Chaos & Order",
      subtitle: "The creative principle",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <p class="rc-intro">Structure and creativity are not opposites — they are <strong>coordinates on a graph</strong>.</p>

        <p>Chaos (creation) is one axis. Order (structure) is the other. <strong>You</strong> — the human who interprets them — are the Z axis. You exist at the intersection, and you navigate between them constantly.</p>

        <p>This duality recurs throughout existence: nature and law, inspiration and discipline, freedom and form.</p>

        <h4>For Those Who Fear Structure Kills Creativity</h4>
        <p>The Forge Framework is not a restraint. It is a <strong>purposeful catalyst</strong>. It allows you to:</p>
        <ul>
          <li><strong>Create in the direction you want, when and how you want</strong> — The structure holds everything else in place so you can dive into whatever inspires you</li>
          <li><strong>Pick up and put down freely</strong> — Every domain's state is preserved. The "virtual RAM" holds your place.</li>
          <li><strong>Avoid sunk cost fallacy</strong> — Structure makes it visible when something consumes resources without results</li>
          <li><strong>Prioritize creations for impact</strong> — Direct creative energy toward what matters rather than scattering it</li>
        </ul>

        <h4>Decision Methods for Creative Input</h4>
        <ul>
          <li><strong>ETTO (Efficiency-Thoroughness Trade-Off)</strong> — When to be thorough vs. efficient with creative energy</li>
          <li><strong>Value/Effort Matrix</strong> — Evaluate ideas and initiatives to reduce wasted energy, burnout, and loss of purpose</li>
        </ul>

        <p class="rc-callout">Creative chaos is not diminished by structured order. It is <strong>aimed</strong> by it.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 8. Plot of Land
    // ─────────────────────────────────────────────
    {
      id: "plot-of-land",
      label: "Plot of Land",
      subtitle: "The fiefdom allegory",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <blockquote class="rc-quote">"Every domain of your life or organization is a plot of land that needs watering. But water is finite. Nurturing one plot necessarily costs water to another."</blockquote>

        <p class="rc-intro">You have a finite supply of water (time, energy, attention, resources). The question is not <em>whether</em> trade-offs exist, but whether you are making them <strong>consciously or unconsciously</strong>.</p>

        <h4>The Fiefdom</h4>
        <table class="rc-table">
          <thead><tr><th>Allegory</th><th>Framework Concept</th></tr></thead>
          <tbody>
            <tr><td><strong>The Lord</strong></td><td>Control document — governing authority</td></tr>
            <tr><td><strong>The Scribe</strong></td><td>Monitor — recording what happens</td></tr>
            <tr><td><strong>The Castle</strong></td><td>Functional Folders — the operational office</td></tr>
            <tr><td><strong>The Village</strong></td><td>Processes — living operations with their own rhythm</td></tr>
            <tr><td><strong>The Output</strong></td><td>Evidence — crops, exports, the tangible product</td></tr>
          </tbody>
        </table>

        <h4>Making Water Visible</h4>
        <ul>
          <li>Color-coded calendars per domain reveal time allocation at a glance</li>
          <li>Action Logs show where active tasks are concentrated</li>
          <li>Queue folders show what's actually being worked on <em>right now</em></li>
          <li>The folder state machine shows which domains have stalled vs. flowing</li>
        </ul>

        <h4>The Hard Lesson</h4>
        <p>During an eight-year game studio period, the creative enterprise consumed so much water that other plots — marriage, health, stability — withered. The studio collapsed. The marriage ended. Life collapsed.</p>

        <p class="rc-callout">The lesson is not "don't pursue big dreams." The lesson is: <strong>be brutally honest about water allocation, and check your plots regularly.</strong></p>
      `
    },

    // ─────────────────────────────────────────────
    // 7. Four C's Gate
    // ─────────────────────────────────────────────
    {
      id: "four-cs",
      label: "Four C's Gate",
      subtitle: "The readiness check before scaling",
      sourceDoc: "docs/08-getting-started.md",
      html: `
        <p class="rc-intro">The number one failure mode in implementing the Forge Framework is <strong>over-ambition from the start</strong> — trying to build the entire system at full complexity on day one.</p>

        <h4>The Gate</h4>
        <table class="rc-table">
          <thead><tr><th>C</th><th>Question</th></tr></thead>
          <tbody>
            <tr><td><strong>Comfort</strong></td><td>Am I comfortable with the current level? Does it feel natural?</td></tr>
            <tr><td><strong>Confidence</strong></td><td>Do I trust the system? Am I using it consistently?</td></tr>
            <tr><td><strong>Competence</strong></td><td>Am I skilled enough with current tools to add more without confusion?</td></tr>
            <tr><td><strong>Compliance</strong></td><td>Am I actually following the system I've built? Or ignoring parts?</td></tr>
          </tbody>
        </table>

        <h4>If Any Answer Is "No"</h4>
        <p>Don't add more. <strong>Strengthen what you have.</strong> The framework at its simplest — domains on paper, a to-do list, and a calendar — is more powerful than a complex system that isn't used.</p>

        <h4>Scaling Path</h4>
        <ol>
          <li>Domains + Action Log + Calendar + Basic folders</li>
          <li>Queue / Binder / Archive folder distinction</li>
          <li>Projects folder for multi-task efforts</li>
          <li>Process folders for recurring operations</li>
          <li>Trackers and Tracker-Logs</li>
          <li>Control documents linking everything</li>
          <li>Naming conventions and date-stamping</li>
          <li>Wisdom principles as active decision filters</li>
        </ol>

        <h4>Minimum Viable Forge</h4>
        <p class="rc-callout">Pencil, paper, 5-9 domains, a to-do list, and a calendar. <strong>Everything else is refinement.</strong></p>
      `
    },

    // ─────────────────────────────────────────────
    // 8. Doc Types
    // ─────────────────────────────────────────────
    {
      id: "doc-types",
      label: "Doc Types",
      subtitle: "Monitor, Control, Evidence",
      sourceDoc: "docs/03-functional-folders.md",
      html: `
        <p class="rc-intro">In any managed system, documentation always falls into three categories. Asking "Am I tracking or controlling here?" normalizes how you think about documentation.</p>

        <table class="rc-table">
          <thead><tr><th>Type</th><th>Label</th><th>Purpose</th><th>Example</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Monitor</strong></td>
              <td>MON</td>
              <td>A log or tracker — records what <em>is</em> happening</td>
              <td>RaihnForge_ActionLog_MON</td>
            </tr>
            <tr>
              <td><strong>Control</strong></td>
              <td>CON</td>
              <td>A policy or process master — defines what <em>should</em> happen</td>
              <td>RaihnForge_Index_CON</td>
            </tr>
            <tr>
              <td><strong>Evidence</strong></td>
              <td>—</td>
              <td>Any other output — the product of work</td>
              <td>Reports, deliverables, artifacts</td>
            </tr>
          </tbody>
        </table>

        <h4>Lifecycle Rule</h4>
        <p>An outdated Monitor or Control document becomes <strong>Evidence</strong> once superseded. <code>HomeForge_ActionLog_2026Q1</code> becomes historical evidence when <code>Q2</code> takes its place. This ensures you can trace back to how the system was configured at any point in time.</p>

        <h4>Process Folder Essentials</h4>
        <p>For every Process folder, there should always be:</p>
        <ul>
          <li>A <strong>Control document</strong> — the "why and how" (the README)</li>
          <li>A <strong>Monitor document</strong> — the "what and when" (the tracker)</li>
          <li><strong>Functional folders</strong> within the process ecosystem</li>
          <li><strong>Seeded process folders</strong> for nested sub-processes</li>
        </ul>

        <p class="rc-callout">Even a department or Forge folder is a Process folder in essence — a continuous operational module. The MON/CON/Evidence pattern applies <strong>at every level</strong>.</p>
      `
    },

    // ─────────────────────────────────────────────
    // 9. Void Forge
    // ─────────────────────────────────────────────
    {
      id: "void-forge",
      label: "Void Forge",
      subtitle: "The space for the unformed",
      sourceDoc: "docs/00c-core-concepts.md",
      html: `
        <blockquote class="rc-quote">"A holding space for the unformed, the undecided, and the deliberately declined."</blockquote>

        <p class="rc-intro">Not every responsibility, idea, or obligation arrives fully formed. The Void Forge addresses the ambiguous edges — things that don't yet belong anywhere, or that you've deliberately chosen not to pursue.</p>

        <h4>Three Categories</h4>
        <table class="rc-table">
          <thead><tr><th>Category</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Penciled-in Potentials</strong></td>
              <td>Ideas in a pre-discovery phase. May become real domains or projects, but haven't taken shape yet.</td>
            </tr>
            <tr>
              <td><strong>Forever-Backlogged</strong></td>
              <td>Things that never rise to priority. Acknowledged but not warranting active attention.</td>
            </tr>
            <tr>
              <td><strong>Do-Not-Do's</strong></td>
              <td>Items deliberately assessed through a value/effort matrix and rejected.</td>
            </tr>
          </tbody>
        </table>

        <h4>Why Track What You Won't Do?</h4>
        <ol>
          <li><strong>Re-assessment churn</strong> — Without a record, the same ideas resurface cycle after cycle, consuming decision energy each time.</li>
          <li><strong>Lost context</strong> — If circumstances change, you can re-access the item from where it was parked rather than waiting for organic rediscovery.</li>
        </ol>

        <h4>When to Use It</h4>
        <p>The Void Forge is an <strong>advanced concept</strong>. Beginners should focus on defining core domains. As the framework matures and you encounter persistent edge cases — ideas that don't fit, recurring deferrals, decisions you keep re-making — the Void gives those a structured home.</p>

        <p class="rc-callout">The Void Forge ensures that truly <strong>no aspect of life is left out</strong> — including the aspects you've consciously chosen to leave alone.</p>
      `
    }
  ]
};
