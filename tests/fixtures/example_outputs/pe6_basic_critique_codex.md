# ERC StG/CoG critique

**Declared stage:** Full proposal

**Content actually supplied:** B1 plus complete B2: cover page, Extended Synopsis, CV and Track Record, detailed methodology, work plan, resources, budget justification, and risks.

**Step-1 risk if submitted unchanged:** high
The main Step-1 risk is that the scientific question and cross-panel fit are not stated with enough precision in B1, while the ambition is not matched by an objective-specific contingency structure.

**Provisional Criterion 1 sub-question marks (1-5 in halves):**
- 1.1 (important scientific questions): 3
- 1.2 (ambitious / advance frontier of knowledge): 3
- 1.3 (methodology / working arrangements): 3.5
- 1.4 (timescales / resources): 3

**Provisional Criterion 2 qualitative assessments:**
- 2.1 (ability to conduct groundbreaking research): Excellent
- 2.2 (creative and original thinking): Very Good
- 2.3 (scientific expertise and capacity to execute): Very Good

**Score caps triggered:** CAP-A, CAP-B, CAP-E

---

## Findings

### Finding 1 — Secondary-panel justification is generic and triggers CAP-E
- **Quote:** "We declare PE7 (Systems and Communication Engineering) as a secondary panel because the project has **broad applicability across the engineering sciences** and the methodology is expected to be of **policy relevance** to standardisation bodies."
- **Type:** misstatement
- **Locator:** Part B1, Cover page, Cross-panel justification
- **Criterion sub-question:** 1.1
- **Severity:** HIGH
- **Score consequence:** this triggers CAP-E and caps the 1.1 mark at 3.
- **Concrete repair:** Either remove PE7 as a secondary panel or add a PE7-specific justification naming the exact systems, signal-processing, identification, control, or communications debates where the result would change expert judgement.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 2 — Part I does not state a falsifiable scientific question on its first page
- **Quote:** "The community has identified the *symptom* (confident hallucination) but lacks a *mechanism* for understanding when and why it occurs."
- **Type:** omission
- **Locator:** Part B1, Extended Synopsis, §1 State of the art
- **Criterion sub-question:** 1.1
- **Severity:** HIGH
- **Score consequence:** this triggers CAP-A and caps the 1.1 mark at 3; combined with CAP-E, 1.1 remains at 3.
- **Concrete repair:** Add one first-page sentence stating the central falsifiable scientific question or hypothesis, plus the observation that would count against it. Keep it about scientific mechanism, not outputs or applications.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 3 — Ambition is asserted without a project-level contingency for central scientific failure
- **Quote:** "These objectives are ambitious and **transformative**."
- **Type:** omission
- **Locator:** Part B1, Extended Synopsis, §2 Research objectives
- **Criterion sub-question:** 1.2
- **Severity:** HIGH
- **Score consequence:** this triggers CAP-B and caps the 1.2 mark at 3.
- **Concrete repair:** Add objective-specific contingencies for O1, O2, O3, and O4: decision point, failure signal, fallback route, and what scientific knowledge remains if the risky route fails.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 4 — The B2 risk section lists generic project-management risks rather than the core scientific risks
- **Quote:** "- **Project delays:** As with any five-year project, milestones may slip. We will mitigate this through quarterly internal reviews."
- **Type:** omission
- **Locator:** Part B2, §4 Risks
- **Criterion sub-question:** 1.3
- **Severity:** MEDIUM
- **Score consequence:** this does not trigger CAP-D because B2 contains some risk and mitigation material, but it keeps the 1.3 mark at 3.5 rather than 4 or 5.
- **Concrete repair:** Replace the generic risk list with a table covering the main scientific and methodological risks: uninterpretable SAE features, non-identifiable failure circuits, unstable circuits across seeds, theory predictions failing, partner validation failing, and model-access failure.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 5 — The target model set is not specified tightly enough for a Full proposal methodology
- **Quote:** "the three target models: a protein structure model in the AlphaFold-3 lineage (henceforth *PF-3*), an RNA structure model based on RhoFold-Next (*RF-N*), and the small-molecule property predictor MoleculeFormer-XL (*MF-XL*)"
- **Type:** omission
- **Locator:** Part B2, §1.1 Pillar A
- **Criterion sub-question:** 1.3
- **Severity:** HIGH
- **Score consequence:** this holds the 1.3 mark at 3.5 because the core methodology depends on models whose exact checkpoints, architectures, layer counts, and access conditions are not fully specified.
- **Concrete repair:** Add a model table naming each checkpoint, licence, access route, layer structure, activation interface, expected storage footprint, and pre-approved fallback model.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 6 — Compute feasibility depends on unsecured in-kind allocation and an unquantified scientific descoping plan
- **Quote:** "with in-kind allocation expected for the remainder. If the in-kind allocation is not granted at the requested scale, we will reduce the SAE expansion factor from 32 to 16 for the most expensive layers"
- **Type:** omission
- **Locator:** Part B2, §3 Resources and budget justification
- **Criterion sub-question:** 1.4
- **Severity:** HIGH
- **Score consequence:** this drops the 1.4 mark from 4 to 3 because the resource plan does not show that the proposed scale is secured or that the reduced scale would still answer O1 and O2.
- **Concrete repair:** Add a compute budget by model, layer, activation volume, SAE training run, circuit sweep, and controlled-training experiment; state which allocation is secured, which is requested, and which objective is descoped under each fallback.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 7 — The feature-annotation bottleneck is named but not resourced or quality-controlled
- **Quote:** "Annotation of features is the principal labour bottleneck."
- **Type:** omission
- **Locator:** Part B2, §1.1 Pillar A
- **Criterion sub-question:** 1.4
- **Severity:** MEDIUM
- **Score consequence:** this reinforces the 1.4 mark of 3 because the personnel plan does not quantify the dominant labour task.
- **Concrete repair:** Add the planned annotation sample size, person-month estimate, inter-annotator agreement target, expert-review protocol, error-rate audit, and stopping rule for each model family.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 8 — The CV foregrounds JIFs, acceptance rates, and venue labels instead of PI-attributable scientific contributions
- **Quote:** "(*Impact factors quoted from Journal Citation Reports 2024 where available.*)"
- **Type:** misstatement
- **Locator:** CV and Track Record, Research outputs
- **Criterion sub-question:** 2.2
- **Severity:** MEDIUM
- **Score consequence:** this does not trigger CAP-C because the CV includes first-author and sole-author outputs, but it keeps 2.2 at Very Good rather than Excellent because originality is not explained through contribution statements.
- **Concrete repair:** Cut JIFs, acceptance rates, and venue-framing sentences; add a PI-contribution line for each selected output stating the method, idea, or dataset attributable to the PI and its link to MECHBIO.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 9 — Partner-dependent validation is asserted, but the supplied text does not show the commitments or responsibilities
- **Quote:** "We will validate this tool through case studies with three external partner laboratories (commitments attached)."
- **Type:** omission
- **Locator:** Part B1, Extended Synopsis, §2 Research objectives
- **Criterion sub-question:** 1.3
- **Severity:** MEDIUM
- **Score consequence:** this further limits 1.3 to 3.5 because the operational validation route depends on evidence not present in the supplied material.
- **Concrete repair:** Add the partner role, named benchmark, expected input data, access conditions, responsible contact, and failure fallback for each case study inside B2. If separate letters exist, make the B2 text independently understandable.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

### Finding 10 — B1 spends scoring space on industry and policy relevance, which is not an ERC scoring axis
- **Quote:** "Beyond academic impact, the work is **highly relevant for industry**, with direct application to the drug discovery pipelines now built around foundation-model predictions."
- **Type:** misstatement
- **Locator:** Part B1, Extended Synopsis, §4 Expected outcomes and impact
- **Criterion sub-question:** 1.1
- **Severity:** MEDIUM
- **Score consequence:** this does not raise any mark and contributes to the 1.1 mark remaining at 3 because B1 space is diverted from scientific question framing and field-level knowledge advance.
- **Concrete repair:** Cut the industry and policy-relevance claims from B1 or reframe only as scientific users, scientific benchmarks, and evidentiary standards in molecular modelling.
- **Workshop value:** YES — would be caught by a human reviewer in 60 seconds, so I save them time

---

## What the next stage of the draft needs to add

(This section answers "what's next" without complaining about what's "missing now". Only include the items the applicant has not yet written, given their declared stage and supplied content.)

- No further stage-specific document category remains; the supplied material is already B1 plus B2.
- Before submission, add the missing first-page scientific question, PE7-specific cross-panel rationale, objective-level contingency structure, exact model-access table, compute/resource calculation, annotation quality-control plan, partner-responsibility evidence, and PI-contribution lines in the CV.

---

## Workshop hand-off (one paragraph)

"AI pre-review flagged 5 HIGH-severity issues (CAPs triggered: CAP-A, CAP-B, CAP-E) and 5 MEDIUM. The applicant has independently addressed [items]. The applicant requests human judgement on up to three of: [first-page scientific question; PE7 panel fit; feasibility of the model-access and compute plan]."

(Applicant fills brackets before sending.)

## Pilot self-assessment

- Triggered CAP-A because the first page of Part I gives the gap around confident hallucination but does not state a falsifiable scientific question.
- Triggered CAP-B because the draft asserts transformative ambition and provides only partial fallbacks, with no objective-level contingency structure for the central scientific routes failing.
- Triggered CAP-E because the PE7 justification relies on broad applicability and policy relevance rather than naming specific PE7 debates or readers.
- I did not trigger CAP-C because the CV includes first-author and sole-author outputs and therefore is not merely a publication list with no attributable contribution signal. I did not trigger CAP-D because B2 contains some risk and mitigation material, although it is too generic. I did not trigger CAP-F because the CV and project text do link the PI to sparse autoencoders, equivariant patching, AlphaFold attention, and molecular pre-training.
- I avoided every banned phrase from Section 5 and did not use industry, policy, JIFs, venue labels, or host prestige as positive scoring proxies.
- The main tension is that the output schema demands exact structure, while the user also requested a maintainer-facing self-assessment appended below it. I kept the critique schema intact and placed the self-assessment after it. A second ambiguity is CAP-D: the B2 risk section is weak, but the proposal does contain some mitigation text, so I treated it as a scoring weakness rather than a triggered cap.
- Total wall-clock time spent on this critique: about 22 minutes.
