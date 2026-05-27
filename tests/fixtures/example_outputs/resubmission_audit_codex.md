# Resubmission audit

## Distinct criticisms extracted from the previous report

### Criticism 1 - The central claim is not framed as a falsifiable hypothesis
- **Source quote(s):** "the central scientific question is not stated as a falsifiable hypothesis" and "does not state what observation would count against the proposed account, nor how the project's central claim could be empirically distinguished from alternative explanations of confident model failures" (Panel Comment)
- **What the criticism asks for:** The new draft needs to state the core hypothesis in testable terms, specify what empirical result would count against it, and distinguish the proposed mechanism from plausible alternative explanations of confident failure.

### Criticism 2 - The PE6/PE7 cross-panel case is generic
- **Source quote(s):** "The cross-panel justification is generic" and "does not name specific PE7 debates, communities, or readers who would change their position based on the project's outcomes" (Panel Comment); "broad applicability across engineering sciences" is "a generic policy-relevance argument rather than a panel-specific intellectual claim" (Reviewer 2, Panel Member)
- **What the criticism asks for:** The new draft needs a specific intellectual rationale for PE7 relevance: named debates, methods communities, or system-identification/signal-processing questions that the project would materially affect.

### Criticism 3 - The PI's molecular-prediction experience and method-to-domain bridge are not explicit enough
- **Source quote(s):** "The candidate's track record, while strong in algorithmic work, does not show direct experience with the molecular-prediction domain" and "The connection between the published work on sparse autoencoders and the proposed molecular interpretability experiments is not made explicit in the CV or the methodology" (Panel Comment)
- **What the criticism asks for:** The CV and methodology should explicitly connect the PI's prior algorithmic contributions to molecular prediction, with content-based evidence of capability in the biological prediction setting.

### Criticism 4 - The compute budget lacks a quantitative compute plan
- **Source quote(s):** "the budget includes a significant compute request that is not reconciled with a quantitative compute plan in B2" (Panel Comment)
- **What the criticism asks for:** The B2 budget justification should quantify the requested compute, allocate it across work packages or technical tasks, explain the cost basis, and state what happens if the planned compute is unavailable.

### Criticism 5 - The three target models are not scientifically justified, and the negative-result logic is unclear
- **Source quote(s):** "the choice of three target models (a protein structure model, an RNA model, and a small-molecule property predictor) is not justified by a clear scientific argument. Why these three and not others? What is the falsifying observation if all three fail to show interpretable circuits?" (Reviewer 1, Remote Referee)
- **What the criticism asks for:** The applicant needs to justify the model set as scientifically necessary rather than merely convenient, and say what conclusion follows if the central interpretability pattern does not appear in any of them.

### Criticism 6 - External validation partners are underspecified
- **Source quote(s):** "the work plan refers to 'external partner laboratories' for validation case studies but does not name them, name the deliverables expected from each, or describe the fallback if any partner withdraws" (Reviewer 1, Remote Referee)
- **What the criticism asks for:** The new draft should identify the partners, define partner-specific validation deliverables, and include a contingency plan if a partner becomes unavailable.

### Criticism 7 - The CV violates the DORA-oriented request by foregrounding journal impact factors
- **Source quote(s):** "The candidate's CV foregrounds journal impact factors, which the ERC has explicitly discouraged under DORA. Please refocus the track record around content-based contributions" (Reviewer 1, Remote Referee)
- **What the criticism asks for:** The track record should remove impact-factor and prestige metrics and instead explain what the PI contributed, why the contributions mattered scientifically, and how they support the proposal.

### Criticism 8 - The high-risk/high-gain framing lacks a valuable fallback result
- **Source quote(s):** "The proposal contains repeated claims of being 'transformative' and 'high risk / high gain' but does not state what fallback scientific result would still be valuable if the central interpretability claim does not hold" (Reviewer 2, Panel Member)
- **What the criticism asks for:** The applicant should specify the scientific value of a negative or mixed outcome, especially if the central interpretability claim fails.

### Criticism 9 - Target model checkpoints, versions, access, storage, and fallback are missing
- **Source quote(s):** "the model checkpoints, version numbers, and access conditions for the three target models are not specified" and "this should be a table of (model, version, access, expected storage, fallback if unavailable)" (Reviewer 3, Remote Referee)
- **What the criticism asks for:** The methodology should include a concrete model-access table with version identifiers, access terms, expected storage requirements, and fallback models.

## Engagement audit

### Criticism 1
- **Verdict:** NOT ADDRESSED
- **New-draft engagement:** "Across the four objectives, the unifying intellectual claim is that molecular foundation models are *interpretable in principle* — their internal representations decompose into chemically and biologically meaningful features whose interactions can be traced and predicted — and that the apparent opacity of these models reflects a methodological gap, not an inherent property of the systems. The four objectives are designed to test this claim along complementary axes: O1 tests it descriptively at scale; O2 tests it causally on the most consequential failure mode; O3 tests it theoretically; O4 tests it operationally by putting the resulting tools in the hands of working scientists." (Part B1, Extended Synopsis, Research objectives)
- **Engagement quality:** This is the expected place for the falsifiable hypothesis, but the passage only asserts a central claim and says it will be tested. It does not state what observation would count against the claim, nor does it distinguish the account from alternative explanations of confident model failures.

### Criticism 2
- **Verdict:** NOT ADDRESSED
- **New-draft engagement:** "This proposal is submitted to PE6 (Computer Science and Informatics) as its primary panel. We declare PE7 (Systems and Communication Engineering) as a secondary panel because the project has **broad applicability across the engineering sciences** and the methodology is expected to be of **policy relevance** to standardisation bodies. The interpretability tools we develop are general and may be of interest to PE7 reviewers concerned with signal processing and system identification more broadly. We trust the panels to coordinate as appropriate." (Part B1, Cross-panel justification)
- **Engagement quality:** The new draft repeats the generic "broad applicability" language flagged in the prior report. It still does not name a PE7 debate, community, or reader whose position would change because of the project.

### Criticism 3
- **Verdict:** PARTIALLY ADDRESSED
- **New-draft engagement:** ""Attention patterns in AlphaFold-2 reflect evolutionary coupling." ... "RhoFold-Next: scaling RNA structure prediction to assembly-scale corpora." ... "Curriculum effects in multi-task molecular pre-training."" (Part B1, CV and Track Record, Research outputs); "This second design choice connects the project's empirical pillars directly to the PI's prior algorithmic work on equivariant networks." (Part B1, Approach and methodology overview)
- **Engagement quality:** The draft now contains molecular-prediction outputs and a methodological sentence linking equivariant-network work to the project. What is still missing is a content-based track-record narrative explaining the PI's role and competence in molecular prediction, and the sparse-autoencoder-to-molecular-experiment bridge remains mostly implicit.

### Criticism 4
- **Verdict:** ADDRESSED
- **New-draft engagement:** "We have budgeted 250,000 H100-equivalent hours over five years. The principal compute consumers are: (i) SAE training across three target models and an average of 30 layers per model (~75% of compute); (ii) the controlled-trajectory training of a 300M-parameter molecular model for Pillar C (~15%); (iii) activation-patching sweeps for Pillar B (~7%); (iv) inference and case studies for Pillar D (~3%)." (Part B2, Resources and budget justification)
- **Engagement quality:** This is a quantitative compute plan tied to the main technical tasks, with a stated total and percentage allocation. It directly engages the prior budget criticism.

### Criticism 5
- **Verdict:** NOT ADDRESSED
- **New-draft engagement:** "The first pillar of the methodology produces a *mechanistic atlas* for each of three target models: a protein structure model in the AlphaFold-3 lineage (henceforth *PF-3*), an RNA structure model based on RhoFold-Next (*RF-N*), and the small-molecule property predictor MoleculeFormer-XL (*MF-XL*)." (Part B2, Detailed methodology, Pillar A)
- **Engagement quality:** The draft restates the three-model design but does not give the requested scientific argument for why these three models, rather than alternatives, are the right test set. It also does not state what scientific conclusion would follow if all three failed to show interpretable circuits; the separate methodological fallback for SAE training does not answer that question.

### Criticism 6
- **Verdict:** PARTIALLY ADDRESSED
- **New-draft engagement:** "The library will be developed in collaboration with three external partner laboratories: (1) a structural biology group at SciLifeLab (Stockholm) interested in auditing AlphaFold-3 predictions for designed enzymes; (2) an RNA biology group at EMBL Heidelberg interested in RF-N predictions for ribozymes; and (3) a medicinal chemistry team at a Swedish biotech (named in a confidential letter of commitment). Each partner will deploy the library on an internal benchmark, and the case studies will be reported in the final synthesis paper." (Part B2, Detailed methodology, Pillar D)
- **Engagement quality:** The draft identifies two partners by institution/category and describes a common validation activity. It still leaves the third partner unnamed in the proposal text, does not define partner-specific deliverables, and gives no fallback if a partner withdraws.

### Criticism 7
- **Verdict:** NOT ADDRESSED
- **New-draft engagement:** "(*Impact factors quoted from Journal Citation Reports 2024 where available.*)" and "**JIF 6.0.**" (Part B1, CV and Track Record, Research outputs)
- **Engagement quality:** The new draft still foregrounds journal impact factors and acceptance-rate style metrics. It does not refocus the CV around content-based contributions as requested.

### Criticism 8
- **Verdict:** NOT ADDRESSED
- **New-draft engagement:** "MECHBIO is **high risk / high gain**: it operates at the frontier of two fields that have not yet fused, and success would transform how we deploy, audit, and trust AI in molecular science." (Part B1, Cover page, Abstract)
- **Engagement quality:** The new draft continues to use the high-risk/high-gain and transformative framing. It does not say what scientific result remains valuable if the central interpretability claim fails.

### Criticism 9
- **Verdict:** PARTIALLY ADDRESSED
- **New-draft engagement:** "The project depends on the continued open release of weights for the three target models. Should one become closed, we will substitute an alternative open-weights model from the same family." (Part B2, Risks)
- **Engagement quality:** The draft gives a fallback if a model becomes closed and elsewhere labels the target models PF-3, RF-N, and MF-XL. It still lacks the requested table with checkpoint names, version numbers, access conditions, and expected storage.

## Engagement pattern summary

Verdict distribution: 1 ADDRESSED, 3 PARTIALLY ADDRESSED, 5 NOT ADDRESSED.

The pattern signals selective and mostly incidental engagement, not careful reading of the previous Evaluation Report. The compute criticism is directly handled, and a few passages partially overlap with the track-record, partner, and model-access criticisms. The central conceptual criticisms, cross-panel criticism, DORA criticism, model-choice criticism, and high-risk fallback criticism remain visibly unengaged.

The single most important NOT ADDRESSED criticism is Criticism 1: the central claim is still not formulated as a falsifiable hypothesis. The applicant should add a compact hypothesis paragraph in B1 and expand it in B2: state the proposed mechanism of confident hallucination, list one or two empirical observations that would count against it, and name the alternative explanations being ruled in or out. For example, if circuits are not stable across model families, if SAE features fail to align with causal pathways, or if confident failures are better explained by data coverage alone, the draft should say how those outcomes would revise or falsify the core claim.

## Pilot self-assessment

- Distinct criticisms extracted: 9.
- Verdict distribution: ADDRESSED 1; PARTIALLY ADDRESSED 3; NOT ADDRESSED 5.
- Expected calibration: yes. Most criticisms are NOT ADDRESSED, and all but one are NOT ADDRESSED or PARTIALLY ADDRESSED, which matches the fixture premise that the PE6 draft was not revised against the synthetic report.
- Invented engagement: zero. PARTIALLY ADDRESSED and ADDRESSED verdicts are based only on quoted draft passages.
- Ambiguities in the prompt rules: It is not fully specified how to treat incidental overlap that was not clearly written in response to the prior report; I treated weak overlap as NOT ADDRESSED unless it answered the requested change. It is also ambiguous whether the model-choice/falsification criticism should be merged with the broader falsifiability criticism, and whether a "confidential letter" counts as naming a partner in the proposal text.
