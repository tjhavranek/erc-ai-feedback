# Expected findings — `sh3_synthetic_full_proposal.md`

**Fixture purpose.** This SH3 fixture exercises a *different failure profile* than the PE6 fixture: only two structural caps should fire (A, B), and several caps that the PE6 fixture trips (C, D, E, F) should explicitly **not** fire here. The fixture tests *calibration*: the tool must not over-fire on a generally strong SH proposal whose specific weaknesses are confined to a vague research question, insufficient ambition-vs-contingency, and stylistic register slips around societal impact and venue prestige.

---

## 1. Expected score caps

### Caps that SHOULD fire

- **CAP-A — Vague scientific question / no specific testable hypothesis. FIRES.**
  - Evidence: Part I §2 frames the overarching question as "*how does algorithmic mediation reshape the conditions and practices of democratic discourse*"; sub-questions RQ1–RQ4 are framed as broad "how" questions; no falsifiable hypotheses, no specified effect directions or measurable predictions. The text also says explicitly: "We will *explore* how social media changes democratic deliberation across diverse European contexts, and *investigate* the mechanisms..." and "Our broad expectation is that algorithmic mediation produces effects... that are real, patterned, and theoretically tractable, but... heterogeneous... in ways that current scholarship has not adequately mapped."
  - Effect: caps Criterion 1.1 (ground-breaking nature of research) at **Very Good**.

- **CAP-B — Ambition without contingency. FIRES.**
  - Evidence: Part I §2 claims the project will "**transform our understanding**" and "**revolutionise** the way scholars approach the empirical study of mediated publicity." Part I §3's contingency paragraph is generic: "**If data access fails we will use alternative sources.** If platform cooperation proves insufficient we will rely on browser-trace data alone… If recruitment to WP2 underperforms we will extend the fieldwork window." No specific mechanism named for the transformative claim; no concrete fallbacks at the Part I stage that match the magnitude of the ambition claimed (the *B2* risk plan is fine — but Part I makes its bold claim and pairs it with a generic safety net).
  - Effect: caps Criterion 1.2 (scientific approach) at **Very Good**.

### Caps that should NOT fire

- **CAP-C — Weak CV / no PI-attributable original contribution. DOES NOT FIRE.**
  - Why not: the CV contains an explicit "Statement of methodological independence and PI-attributable contribution" naming three signals (publication line independent of supervisors, externally adopted methodological protocol with citation count, independently funded team). Awards include named external recognitions (ESA Early-Career Award, PAS Young Scientist Prize). Editorial roles at recognised methodology and area journals. Two prior PI grants. The originality signal is real, not boilerplate.
  - **The tool should not flag the CV as weak.**

- **CAP-D — Missing/inadequate risk plan in methodology. DOES NOT FIRE.**
  - Why not: B2 §4 lists seven named risks (R1–R7) with likelihood, impact, and concrete mitigation steps (specific pilot numbers, named external partners, contingency thresholds with go/no-go review at month 42). The risk plan is specific, not boilerplate.
  - **The tool should not flag B2's risk plan as missing or generic.** (Contrast with the *Part I* contingency paragraph, which IS generic — that's the CAP-B trigger. The two are different sections; the tool must distinguish them.)

- **CAP-E — Weak cross-panel justification. DOES NOT FIRE.**
  - Why not: the cross-panel statement names specific SH4 debates (Pennycook & Rand vs Kahan motivated-reasoning debate; Hahn/Harris/Corner Bayesian belief-updating; Hertwig/Pachur cognitive ecology), identifies three reader groups in SH4 whose priors would shift, and explicitly considers and rejects two alternative panel listings (SH2, SH5) with reasons. It does not merely list keywords.
  - **The tool should not flag the cross-panel statement as weak.**

- **CAP-F — Poor CV–project fit. DOES NOT FIRE.**
  - Why not: a dedicated subsection ("Why this PI for this project") maps every WP to a published method the PI has used (panel survey at smaller scale; trace donation co-developed and ethical protocol authored; qualitative interviewing as principal early-career method; ABM via 2023 collaboration with cited co-authored output). No WP requires a fundamentally new method for the PI.
  - **The tool should not flag CV–project fit as missing.**

---

## 2. Expected top findings (6–8 items, Part I + CV stage)

### F1 — Research questions stated without specific testable hypotheses

- **Summary:** Part I §2 articulates four "how" sub-questions and an overarching question, but specifies no falsifiable hypotheses, effect directions, or measurable predictions. Language is exploratory ("explore," "investigate," "broad expectation").
- **Expected quote:** "*We will explore how social media changes democratic deliberation across diverse European contexts, and investigate the mechanisms by which algorithmic curation interacts with users' political practices.*"
- **Sub-question:** 1.1 (ground-breaking nature / clarity of research objective).
- **Severity:** **HIGH** (triggers CAP-A; caps 1.1 at Very Good).

### F2 — Transformative ambition claimed without specifying the mechanism

- **Summary:** The proposal claims to "transform our understanding" and "revolutionise" the field without naming the specific mechanism, intermediate finding, or theoretical move that would produce that transformation.
- **Expected quote:** "*The ambition of the programme is to transform our understanding of how democratic discourse is constituted under conditions of algorithmic mediation… We expect ALGOMED to revolutionise the way scholars approach the empirical study of mediated publicity.*"
- **Sub-question:** 1.2 (scientific approach) and 1.1 (ambition vs evidence).
- **Severity:** **HIGH** (contributes to CAP-B).

### F3 — Generic Part I contingency paragraph

- **Summary:** Part I §3 pairs bold ambition with a generic, non-specific contingency paragraph (data access, platform cooperation, recruitment all treated in one sentence each). At the Part I stage this is insufficient; the B2 risk plan, by contrast, is specific.
- **Expected quote:** "*We are confident the programme will succeed. If data access fails we will use alternative sources. If platform cooperation proves insufficient we will rely on browser-trace data alone, which is the modal scenario in any case. If recruitment to WP2 underperforms we will extend the fieldwork window.*"
- **Sub-question:** 1.2 (feasibility and contingency planning).
- **Severity:** **HIGH** (triggers CAP-B; caps 1.2 at Very Good).
- **Note:** the tool should explicitly contrast this with the strong B2 §4 risk plan, not conflate them.

### F4 — Societal-impact framing treated as a scoring axis

- **Summary:** Multiple Part I and Abstract passages frame societal impact, policy relevance, and applied implications as if they were ERC scoring axes. ERC StG evaluates ground-breaking nature, methodology, and PI; societal impact is not a scoring criterion.
- **Expected quotes:**
  - Abstract: "*The societal relevance of the project is considerable: results will speak directly to ongoing platform-governance debates in the EU and to the design of the Digital Services Act implementing regulations.*"
  - Part I §4: "*The policy relevance of ALGOMED is substantial.*" / "*The applied implications for platform design…*" / "*The broader societal impact, in terms of contributions to the quality of European democratic discourse, is precisely the kind of contribution the ERC has supported…*"
- **Sub-question:** stylistic / Section 5 prohibition (societal-impact-as-criterion).
- **Severity:** **MEDIUM** (style; not a cap trigger, but a Section 5 register-issue finding the tool must surface).

### F5 — Venue-prestige references (DORA-incompatible)

- **Summary:** B2 §1.7 uses publication venue as a quality proxy. This is DORA-incompatible signalling and should be removed or recast as a substantive contribution claim.
- **Expected quote:** "*We have published in top-tier venues including Science-adjacent fora and the flagship sociology journals, demonstrating that the research line is taken seriously by the field's gatekeepers…*"
- **Sub-question:** stylistic / Section 5 prohibition (venue-prestige-as-proxy).
- **Severity:** **MEDIUM** (style; Section 5 register issue).

### F6 — RQ4 modelling deliverable not tied to a hypothesis

- **Summary:** WP4's agent-based model is described as a synthesis device and counter-factual laboratory but is not tied to a prior hypothesis about *what* should be reproduced or *what* would count as success/failure of the model at the Part I stage. (B2 §1.5 fixes this partially via three pre-registered counter-factual experiments; the Part I framing remains under-specified.)
- **Expected quote:** "*Can we build a generative model of opinion dynamics that reproduces, and renders intelligible, the empirical patterns identified in RQ1–RQ3?*"
- **Sub-question:** 1.1 (clarity of objective) and 1.2 (criterion of success).
- **Severity:** **MEDIUM** (compounds CAP-A; not a separate cap).

### F7 — "Heterogeneous effects" framing pre-empts the empirical question

- **Summary:** The expected-outcomes framing already concedes that effects will be "heterogeneous across national contexts and user types," which both pre-empts the empirical question and renders any pattern of results compatible with the prior. The proposal would be stronger with at least one directional, falsifiable prediction.
- **Expected quote:** "*Our broad expectation is that algorithmic mediation produces effects on democratic discourse that are real, patterned, and theoretically tractable, but that these effects are heterogeneous across national contexts and user types in ways that current scholarship has not adequately mapped.*"
- **Sub-question:** 1.1 (testability / falsifiability).
- **Severity:** **MEDIUM** (compounds CAP-A).

### F8 — (Optional, low-severity) Electoral-calendar dependency surfaced only in B2

- **Summary:** The Part I synopsis does not flag that the entire WP1 wave structure is timed to national electoral calendars whose dates are partially uncertain at submission. B2 §4 R3 handles this well; Part I should acknowledge it briefly.
- **Sub-question:** 1.2 (feasibility).
- **Severity:** **LOW** (the tool may include this if its 6–8 quota allows; should not be padded in if not warranted).

---

## 3. Expected Section 5 (style/register) triggers

- **Societal-impact-as-criterion:** F4. Multiple instances in Abstract and Part I §4. The tool's Section 5 pass must surface this as a register issue *without* re-scoring the proposal on societal-impact grounds.
- **Venue-prestige-as-proxy / DORA-incompatible:** F5. B2 §1.7 "top-tier venues" / "flagship journals" / "gatekeepers" sentence. The tool's Section 5 pass must flag this and propose a substantive rewrite, *without* re-scoring the CV's underlying merit downward (the CV's actual evidence — adoption of the trace-ethics protocol, citation counts, named awards — is the legitimate substance).

The tool must **not** also fire CAP-C on the basis of F5: a single venue-prestige sentence in B2 is a register slip, not evidence of CV weakness.

---

## 4. What the tool should NOT do

- **Do not flag the CV as weak.** The CV provides explicit, externally verifiable signals of methodological independence and original contribution. Any finding that the PI's record is insufficient for an StG would be a false positive.
- **Do not flag the cross-panel statement as weak.** It names specific debates, specific SH4 readerships, and explicitly considers and rejects two alternative panel listings. Flagging this as boilerplate would be a calibration failure.
- **Do not flag the B2 §4 risk plan as missing or generic.** R1–R7 are concrete with quantitative thresholds, named external partners, and a go/no-go review point. The *Part I* contingency paragraph is generic (CAP-B), but the *B2 risk section* is not; the tool must not conflate them.
- **Do not pad findings beyond what the evidence supports.** If the quota is 6–8 and only 6 substantive findings present, the output should be 6, not 8.
- **Do not down-score on societal-impact grounds.** The framing of societal impact is a *style/register* issue (Section 5), not a methodology defect. The tool must surface it as register, not as a scoring deduction on Criteria 1.1/1.2/1.3.
- **Do not let the venue-prestige slip in B2 §1.7 leak into a CV/Criterion-2 deduction.** It is a single sentence; flag the sentence, leave the CV scoring untouched.

---

## 5. Summary of expected calibration

- **Caps fired:** A, B (two).
- **Caps not fired:** C, D, E, F (four).
- **Section 5 register triggers:** societal-impact-as-criterion, venue-prestige-as-proxy.
- **Top findings:** 6 substantive + 1 optional low-severity, all confined to Part I and CV stage as the test brief specifies.
- **Net expected Step-1 risk:** medium-high (vague hypothesis + ambition/contingency mismatch are serious for 1.1 and 1.2 respectively), but **not** "critical": the CV, methodology risk plan, cross-panel justification, and CV-fit are all in good shape. Contrast with the PE6 fixture, where all six caps fire and the Step-1 verdict should be "critical."
