# Expected findings — `pe6_synthetic_full_proposal.md`

> Companion annotation for the synthetic PE6 fixture. Tells the test harness what a well-calibrated review of the draft should — and should not — produce. Authored 2026-05-27 for the `erc-ai-feedback` test suite.

---

## 1. Expected score caps

The draft is constructed so that **all six caps (A–F)** are seeded
to fire — but in *weak* forms rather than as outright absences (see
the calibration interpretation in [`README.md`](README.md) for why
this matters). A well-calibrated tool may legitimately fire each cap
*or* read the weak signal as a scoring weakness rather than as a
cap-triggering absence; both are defensible under the prompt's
conjunctive cap definitions. The Codex pilot in
[`example_outputs/pe6_basic_critique_codex.md`](example_outputs/pe6_basic_critique_codex.md)
fired three of the six (A, B, E) and correctly read C, D, F as
scoring weaknesses rather than as cap absences.

This section therefore documents what *could* fire under a strict
reading; it is an **upper bound oracle**, not a guarantee that
every well-calibrated tool will fire all six.

### CAP-A — Vague scientific question — **EXPECTED TO FIRE**
- **Where:** Part I §2 Objectives, opening sentence: *"We will develop a better understanding of how neural network behaviour emerges from training dynamics in the era of large foundation models, with a focus on molecular prediction tasks."*
- **Why:** No falsifiable hypothesis, no specific quantitative target, no statement of what would count as success or failure. The four sub-objectives are concrete but the overarching scientific question is not.
- **Caps:** Criterion 1.1 ("important scientific questions") at **Very Good**.

### CAP-B — Ambition without contingency — **EXPECTED TO FIRE**
- **Where:** Abstract: *"MECHBIO is **high risk / high gain**: it operates at the frontier of two fields that have not yet fused, and success would transform how we deploy, audit, and trust AI in molecular science."*; Part I §2 closing: *"These objectives are ambitious and **transformative**. Their successful completion would mark a frontier-advancing shift..."*
- **Why:** The proposal invokes the prestige rhetoric ("high risk / high gain", "transformative", "frontier-advancing") without naming (i) a specific mechanism by which the frontier would be advanced, or (ii) a contingency plan if the ambitious objective fails. The Risks section (B2 §4) is generic and does not address what happens if the theoretical predictions of Pillar C fail to match the empirics of Pillar A, or if the equivariant-patching procedure cannot be made to work on full-scale models.
- **Caps:** Criterion 1.2 ("ambition / frontier advance / approach scientifically convincing") at **Very Good**.

### CAP-C — CV signal absent on all three axes (softened cap) — **EXPECTED TO FIRE**
- **Where:** CV "Research outputs" and "Track record description".
- **Why:** All three of the softened-cap triggers are present:
  1. **No methodological independence signal beyond authorship order.** The CV labels papers "first/co-first author" but never describes a specific method the PI invented, a research direction she initiated independently of her PhD advisor, or evidence that she runs a methodologically distinctive line of work.
  2. **No peer recognition beyond venue prestige.** No invited talks, no awards, no editorships, no fellowships, no service on programme committees beyond generic "reviewer". The track record narrative leans entirely on journal names.
  3. **No PI-attributable original contribution narrative.** The track record description does not say "I developed X" or "my contribution was Y"; it says "her work spans..." in generic terms.
- **Caps:** Criterion 2.2 ("creative and original thinking") at **Good**.

### CAP-D — Risks treated perfunctorily — **EXPECTED TO FIRE**
- **Where:** B2 §4 Risks.
- **Why:** The section enumerates only generic project-management risks (delays, turnover, compute, model availability). It does not consolidate the methodology-specific risks that *are* scattered through the B1/B2 methodology text (SAE interpretability fallback in Pillar A; the M30 red-team review; the compute fallback to expansion-16) into a structured risk register, and it does not address the most consequential methodological risks at all: what if equivariant patching cannot be made causally meaningful at scale? What if the theory of Pillar C predicts features that the empirics of Pillar A do not find? What if the partner laboratories cannot use the library at M48 — is there a fallback delivery? No named mitigations beyond "the PI is confident".
- **Caps:** Criterion 1.3 ("methodology and working arrangements") at **Very Good**. (Note: CAP-D applies to 1.3 because the risk plan is part of methodology assessment. A well-calibrated tool should also note that good risk content exists *elsewhere* in the proposal but is not consolidated; this is a structural-presentation flaw as well as a substance flaw.)

### CAP-E — Weak cross-panel justification — **EXPECTED TO FIRE**
- **Where:** B1 cover page "Cross-panel justification": *"...because the project has broad applicability across the engineering sciences and the methodology is expected to be of policy relevance to standardisation bodies. The interpretability tools we develop are general and may be of interest to PE7 reviewers concerned with signal processing and system identification more broadly. We trust the panels to coordinate as appropriate."*
- **Why:** Declares PE7 as secondary panel but the justification is entirely generic. No specific PE7 sub-area is named, no specific PE7-relevant deliverable is identified, no specific debate or expert community in PE7 is targeted. Combined with CAP-A this is decisive for Criterion 1.1.
- **Caps:** Reinforces cap on Criterion 1.1 at **Very Good**.

### CAP-F — PI–project fit gap — **EXPECTED TO FIRE**
- **Where:** CV Education / Positions / Track record vs. the project methodology in B2 §1.
- **Why:** The PI's track record is in **algorithms and optimisation theory** for neural networks (convex relaxations, implicit bias of gradient descent, identifiability, initialisation, optimisation landscape). The project demands **mechanistic interpretability methods applied to molecular structure prediction** — a domain that requires (i) deep familiarity with circuits/SAE methodology, and (ii) substantive molecular-biology fluency. The track record shows two papers in the relevant area (paper [2] on AlphaFold-2 attention; paper [3] as co-first on RhoFold-Next), which is a thin foundation for a five-year programme of this scope. The track-record narrative does not address the gap; it asserts that "algorithmic rigour and interdisciplinary breadth" suffice, without evidence.
- **Caps:** Criterion 2.3 ("scientific expertise and capacity to execute the project") at **Very Good**.

---

## 2. Expected top findings (ranked by severity)

The following findings should appear in the tool's output, roughly in this order of severity.

### F1 — Section 5 violation: societal-impact-as-criterion — **Severity: High**
- **Summary:** The abstract and Part I §4 use "policy-relevant" and "highly relevant for industry" as if these were ERC evaluation criteria. ERC StG is evaluated on scientific excellence only; societal/industrial impact is not a scoring axis.
- **Quotes (abstract):** *"The outputs are expected to be **highly relevant for industry**..."*; *"They will also be **policy-relevant**..."*
- **Quotes (Part I §4):** *"the work is **highly relevant for industry**, with direct application to the drug discovery pipelines..."*; *"The work is also **policy-relevant**: the European Medicines Agency is consulting..."*
- **Sub-question affected:** Criterion 1 framing, plus Section 5 evidence-discipline check.
- **Expected action:** Flag as "do not do this" pattern; advise replacing with scientific-merit framing or removing.

### F2 — Section 5 violation: journal impact factor as proxy — **Severity: High**
- **Summary:** CV lists JIF next to every publication. ERC explicitly discourages IF as a proxy for research quality.
- **Quotes (CV):** *"JIF 6.0"*, *"JIF 47.9"*, etc., next to ten publications.
- **Sub-question affected:** Criterion 2.2.
- **Expected action:** Flag as forbidden pattern; advise removing IFs and replacing with a narrative of the contribution.

### F3 — Section 5 violation: host-institution prestige as proxy — **Severity: Medium-High**
- **Summary:** "Karolinska Institute (visiting researcher)" and "MIT (PhD)" are foregrounded in the CV and the track record narrative as if institutional affiliation were itself evidence of excellence. The "visiting researcher" qualifier in particular suggests the affiliation is being inflated.
- **Quotes (CV):** *"Massachusetts Institute of Technology (MIT)"* in bold; *"Karolinska Institute (visiting researcher) in the Computational Biology programme — split appointment with KTH"*; *"Her training at MIT under Prof. Marin and her postdoctoral period jointly between KTH and the Karolinska Institute (visiting researcher)..."*
- **Sub-question affected:** Criterion 2.2 / 2.3.
- **Expected action:** Flag as forbidden pattern; advise replacing with substance (what was done at MIT? what was the research at Karolinska?).

### F4 — CAP-A: scientific question is vague — **Severity: High**
- **Summary:** As above. The objective statement is not falsifiable.
- **Quote:** *"We will develop a better understanding of how neural network behaviour emerges from training dynamics in the era of large foundation models."*
- **Sub-question affected:** Criterion 1.1.
- **Expected action:** Cap 1.1 at Very Good; advise reformulating with a specific testable hypothesis or quantitative target.

### F5 — CAP-B: prestige rhetoric without mechanism — **Severity: High**
- **Summary:** As above.
- **Quotes:** *"high risk / high gain"*, *"transformative"*, *"frontier-advancing"*.
- **Sub-question affected:** Criterion 1.2.
- **Expected action:** Cap 1.2 at Very Good; advise either dropping the rhetoric or providing a specific frontier-advancing mechanism plus contingency.

### F6 — CAP-D: risk plan is generic — **Severity: High**
- **Summary:** B2 §4 enumerates project-management risks, not methodological risks.
- **Quote:** Entire B2 §4 (delays, turnover, compute, model availability).
- **Sub-question affected:** Criterion 1.3.
- **Expected action:** Cap 1.3 at Very Good; advise adding methodology-specific risks with named contingencies (e.g., "if SAEs at expansion 32 do not produce monosemantic features, fall back to dictionary learning at expansion 64; success threshold X").

### F7 — CAP-F: PI–project fit gap — **Severity: Medium-High**
- **Summary:** As above. PI track record is in algorithms; project is on molecular interpretability.
- **Sub-question affected:** Criterion 2.3.
- **Expected action:** Cap 2.3 at Very Good; advise either a clearer narrative of the bridge (specific molecular-biology training, specific mech-interp experience) or scoping the proposal to the algorithmic core.

### F8 — CAP-E: cross-panel justification is generic — **Severity: Medium**
- **Summary:** As above.
- **Sub-question affected:** Criterion 1.1.
- **Expected action:** Either name specific PE7 deliverables and reviewers, or withdraw the cross-panel declaration. A bad cross-panel declaration can hurt rather than help.

### F9 — CAP-C: CV lacks independence/recognition/contribution signal — **Severity: Medium**
- **Summary:** As above. Softened cap; fires because all three axes are absent.
- **Sub-question affected:** Criterion 2.2.
- **Expected action:** Cap 2.2 at Good; advise the PI add independence-signal items (invited talks, awards, editorial roles, specific methodological contributions she leads).

### F10 — Budget detail thin on compute, milestones thin on success criteria — **Severity: Low-Medium**
- **Summary:** Compute budget of €95,000 for 250,000 H100-hours is on the low side for training SAEs at the stated scale on three foundation models plus running causal circuit analyses. The milestones (M12, M24, M36, M48, M60) do not state measurable success criteria — e.g., what fraction of features must be interpretable for M12 to be considered "delivered".
- **Sub-question affected:** Criterion 1.3.
- **Expected action:** Flag as a methodology-feasibility concern; advise either revising the compute estimate with a defensible calculation or specifying success thresholds for milestones.

---

## 3. Expected Section 5 prohibition triggers

The tool's output should contain explicit "do not do this" markers for at least the following forbidden patterns from Section 5:

1. **Journal impact factor as a proxy for quality** (triggered by JIF entries in the CV). Tool should say something like: "Do not list journal impact factors — ERC explicitly discourages IF as evaluation evidence."
2. **Host institution prestige as a proxy** (triggered by MIT/Karolinska foregrounding). Tool should advise foregrounding what the PI *did* at those institutions, not where she was.
3. **Societal / industrial / policy impact as if it were a scoring criterion** (triggered by "highly relevant for industry" and "policy-relevant"). Tool should note that ERC StG is scored on scientific excellence only.
4. **Prestige rhetoric without substance** ("high risk / high gain", "transformative", "frontier-advancing"). Tool should note that these phrases without a specific frontier mechanism trigger CAP-B.

---

## 4. What the tool should NOT do (calibration anti-patterns)

A poorly-calibrated tool might over-fire on the following; these are **not** real flaws and the tool should refrain from flagging them as such:

1. **The methodology is technically sound.** The four pillars (SAE atlases, causal patching, training-dynamics theory, library) are a coherent and reasonable programme. Critique the framing and risk plan, not the technical content.
2. **The publication list is plausible.** Some of the cited venues (JMLR, NeurIPS, ICML, Bioinformatics, Mathematical Programming) are appropriate for the PI's described area. Do not dismiss the CV as "weak"; the issue is the *signal pattern* (CAP-C softened axes), not the list itself.
3. **The budget total (€1.498M) is within StG norms.** Do not flag the headline figure as inappropriate — only the internal allocation (esp. compute) merits comment.
4. **The five-year duration is correct for StG.** Do not flag.
5. **Open-source / open-access commitments are appropriate.** These are positives, not negatives — do not mistake them for "industry-relevance" pandering.
6. **PI's PhD year (2020) is within the StG eligibility window.** Six years post-PhD is comfortably inside the StG window under both the 2026 rules (2-7 years) and the widened 2027 rules (0-10 years). Do not flag eligibility. (This fixture was written for the 2026 cycle; the eligibility conclusion is unchanged for 2027.)
7. **Interdisciplinary scope itself is not a flaw.** PE6 ↔ molecular biology is a legitimate scope; the issue is the *thin cross-panel justification* and *thin PI–project bridge*, not the interdisciplinary ambition.
8. **Sub-objectives O1–O4 are concrete.** Each sub-objective has measurable deliverables. Do not over-extend CAP-A to apply to the sub-objectives — CAP-A fires on the *overarching* question only.
9. **Reference list format.** The references include "*(invented)*" markers because this is a synthetic fixture; in a real review these would be real papers. Do not flag the format as "fabricated references".

---

## 5. Summary score-cap matrix (upper bound under strict reading)

| Criterion | Sub-question (Annex 1 wording) | Cap if fired | Cap driver |
|---|---|---|---|
| 1. Research project | 1.1 important scientific questions | Very Good | CAP-A + CAP-E |
| 1. Research project | 1.2 ambition / frontier advance / approach convincing | Very Good | CAP-B |
| 1. Research project | 1.3 methodology and working arrangements | Very Good | CAP-D (+ milestone vagueness) |
| 1. Research project | 1.4 timescales and resources | (not assessed by this fixture; resources material not supplied) | — |
| 2. Principal investigator | 2.1 ability to conduct groundbreaking research | — | — |
| 2. Principal investigator | 2.2 creative and original thinking | Good | CAP-C softened |
| 2. Principal investigator | 2.3 scientific expertise and capacity to execute the project | Very Good | CAP-F |

A well-calibrated tool's Step-1 risk verdict on this draft should be
*high* or *critical*, with clear and specific revision guidance under
each criterion. (The prompt's output schema produces risk levels,
not panel scores; the panel score A/B/C is the panel meeting's
output, not a single reviewer's.)
