> **SYNTHETIC TEST FIXTURE — NOT A REAL ERC PROPOSAL.** Authored 2026-05-27 by Claude Opus 4.7 for the `erc-ai-feedback` test suite. Used to exercise the prompt's structural score caps and evidence-discipline rules. Any resemblance to real research is coincidental; the named methods, results, and references are invented.

---

# Part B1

## Cover page

**Proposal acronym:** MECHBIO
**Proposal full title:** Mechanistic Interpretability for Foundation-Model Molecular Predictions: Bridging Algorithms and Biology
**Principal Investigator:** Dr. Eva Lindqvist
**Host Institution:** Stockholm University, Department of Mathematics
**Panel (primary):** PE6 — Computer Science and Informatics
**Panel (secondary):** PE7 — Systems and Communication Engineering
**Duration:** 60 months
**Requested budget:** €1,498,500

### Abstract

Foundation models for molecular structure prediction, exemplified by AlphaFold-3 and its successors, have transformed computational biology. These models now produce structural and functional predictions at scales and accuracies once thought decades away. Yet despite their dominance, we lack a principled understanding of *how* these networks arrive at their predictions. The internal representations remain opaque, the failure modes are unpredictable, and the inductive biases that distinguish a correct prediction from a confident hallucination remain undocumented. MECHBIO will develop a mechanistic interpretability framework for foundation-model molecular predictions, opening the black box of large biological neural networks.

The project builds on recent advances in mechanistic interpretability — sparse autoencoders, circuit analysis, causal mediation — originally developed for transformer language models, and adapts them to the architectures, modalities, and data regimes of molecular foundation models. We will produce open-source tools, mechanistic atlases for three flagship models, and a theoretical framework that connects training dynamics to emergent representational structure.

The work spans theory and empirics. On the theoretical side, we will develop new analyses of how training dynamics in over-parameterised networks produce the representations we observe. On the empirical side, we will instrument three open-weights molecular foundation models with sparse autoencoders trained on 117 curated datasets across protein structure, RNA folding, and small-molecule property prediction.

The outputs are expected to be **highly relevant for industry**, particularly drug discovery pipelines that increasingly rely on foundation-model predictions in safety-critical settings. They will also be **policy-relevant** as European regulators consider the role of AI-generated structural evidence in pharmaceutical approval and bio-risk assessment.

MECHBIO is **high risk / high gain**: it operates at the frontier of two fields that have not yet fused, and success would transform how we deploy, audit, and trust AI in molecular science. The PI brings deep expertise in neural network theory and algorithmic foundations, and the Stockholm University Department of Mathematics offers the ideal interdisciplinary environment to host this work.

### Cross-panel justification

This proposal is submitted to PE6 (Computer Science and Informatics) as its primary panel. We declare PE7 (Systems and Communication Engineering) as a secondary panel because the project has **broad applicability across the engineering sciences** and the methodology is expected to be of **policy relevance** to standardisation bodies. The interpretability tools we develop are general and may be of interest to PE7 reviewers concerned with signal processing and system identification more broadly. We trust the panels to coordinate as appropriate.

---

## Extended Synopsis (Part I)

### 1. State of the art

Foundation models have re-shaped computational molecular science. Following the release of AlphaFold-2 in 2021 [1] and AlphaFold-3 in 2024 [2], protein structure prediction moved from a discipline-defining grand challenge to a commodity service. Parallel developments in RNA secondary and tertiary structure prediction (RhoFold-Next [3], NuFold [4]), small-molecule property prediction (MoleculeFormer-XL [5]), and multimodal models combining sequence, structure, and assay data (BioGPT-S [6]) have produced a generation of "molecular foundation models" with billions of parameters trained on curated corpora at the scale of UniRef-100, the Protein Data Bank, and proprietary assay archives.

These models are remarkably accurate on benchmark tasks. RhoFold-Next achieves a median TM-score of 0.71 on the RNA-Puzzles-V test set; MoleculeFormer-XL reaches an MAE of 0.31 kcal/mol on the FreeSolv hydration benchmark; BioGPT-S surpasses domain-specialised baselines on 14 of 17 molecular reasoning tasks. Yet alongside this success has come a quieter, more troubling pattern: confident failure. The models hallucinate plausible structures for sequences with no natural homologues; they assign high pLDDT to regions where the underlying evidence is thin; their predictions on out-of-distribution inputs are systematically over-confident in ways that downstream users find difficult to anticipate.

The interpretability of these models lags far behind their capability. The dominant analytical tools — attention visualisation, saliency maps, embedding probes — were developed for an earlier era of neural networks and provide only descriptive, post-hoc, often misleading accounts of model behaviour [7]. The community has accumulated benchmarks and case studies but not a mechanistic theory.

The cost of this interpretability gap is no longer abstract. In 2024 a published structure-prediction-driven design of a synthetic enzyme was retracted after the predicted active site failed to materialise in the synthesised protein — the model had been confidently wrong, in a way that no existing interpretability tool flagged. Similar quiet failures, almost certainly unreported, accumulate in industrial pipelines. The community has identified the *symptom* (confident hallucination) but lacks a *mechanism* for understanding when and why it occurs.

In parallel, the field of *mechanistic interpretability* (mech-interp) has produced striking results on transformer language models. Sparse autoencoders [8] decompose activations into monosemantic features; circuit analyses [9] identify the specific attention heads and MLP neurons responsible for individual capabilities; causal mediation [10] establishes which intermediate variables actually drive a model's outputs. These methods have been validated on language models from 100M to 70B parameters and on multimodal vision-language models [11].

Mech-interp has not yet been brought to molecular foundation models in a systematic way. There are scattered case studies — a 2024 analysis of AlphaFold-2's MSA attention [12], a recent characterisation of MoleculeFormer's chemistry-aware neurons [13] — but no unified methodology, no atlas of features across architectures, and no theoretical account of why molecular foundation models develop the representations they do. This is the gap MECHBIO will fill.

Three further developments in the broader literature make this an opportune moment for the project. First, the open-weights ecosystem for molecular foundation models has matured: OpenFold, ESM-3, and the *Rho* family have released checkpoints and training recipes that make full-network analysis tractable for academic groups. Second, the sparse-autoencoder literature has converged on a small number of well-understood training protocols (top-k SAEs, JumpReLU SAEs, gated SAEs) whose properties are now reasonably well characterised on transformer language models. Third, the theoretical literature on feature learning has, in the last two years, produced quantitative predictions about feature emergence that are now testable against empirics. The conjunction of these three developments did not exist eighteen months ago.

Two recent preprints attempt early steps in this direction. Goyal et al. (2025) train sparse autoencoders on a single layer of an AlphaFold-2-style model and report a handful of interpretable features; the work is limited to one layer and one model. Chen and Petrov (2025) study causal interventions in MoleculeFormer-XL on chemistry tasks; the work does not address structure prediction and does not produce a portable methodology. Neither preprint addresses the theoretical question of *why* the observed features emerge. MECHBIO is designed to subsume and substantially extend both efforts within a unified framework.

### 2. Research objectives

We will develop a better understanding of how neural network behaviour emerges from training dynamics in the era of large foundation models, with a focus on molecular prediction tasks. The project pursues this through four interlocking objectives.

**Objective 1 (O1): A mechanistic atlas of three molecular foundation models.** We will instrument three open-weights molecular foundation models — a protein structure model in the AlphaFold-3 lineage, an RNA structure model based on RhoFold-Next, and a small-molecule property predictor based on MoleculeFormer-XL — with sparse autoencoders trained on activations at every layer. We will catalogue the features that emerge, classify them by the molecular property they encode (secondary structure motifs, binding sites, chemical functional groups, evolutionary signal, etc.), and release the atlas as an open community resource.

**Objective 2 (O2): Causal circuits for confident failure.** We will characterise the internal circuits responsible for the most consequential failure mode of molecular foundation models: *confident hallucination*. Using causal mediation and activation patching, we will identify which components of the network drive over-confident predictions on out-of-distribution inputs, and we will produce a taxonomy of failure circuits across the three target models.

**Objective 3 (O3): A theory of training-dynamics-induced representation.** Beyond empirical characterisation, we will develop a theoretical account of how the training procedures of molecular foundation models — masked language modelling on sequences, denoising on structures, multi-task curriculum schedules — produce the representations we observe. We will draw on neural tangent kernel theory, the linear representation hypothesis, and recent work on feature learning in deep networks to provide quantitative predictions about which features will appear, in which layer, at which training step.

**Objective 4 (O4): Auditable predictions for downstream science.** We will integrate the atlas and circuit analyses into a downstream tool that allows molecular scientists to audit foundation-model predictions: to ask, for a given output, *which features in the network supported this prediction, with what confidence, and through which causal pathway*. We will validate this tool through case studies with three external partner laboratories (commitments attached).

Across the four objectives, the unifying intellectual claim is that molecular foundation models are *interpretable in principle* — their internal representations decompose into chemically and biologically meaningful features whose interactions can be traced and predicted — and that the apparent opacity of these models reflects a methodological gap, not an inherent property of the systems. The four objectives are designed to test this claim along complementary axes: O1 tests it descriptively at scale; O2 tests it causally on the most consequential failure mode; O3 tests it theoretically; O4 tests it operationally by putting the resulting tools in the hands of working scientists.

These objectives are ambitious and **transformative**. Their successful completion would mark a frontier-advancing shift in how the community develops, deploys, and trusts molecular foundation models.

### 3. Approach and methodology overview

The methodology rests on four pillars.

**Pillar A: Sparse autoencoder atlases.** Following the protocol established for language models [8] and adapted for vision-language models [11], we will train top-k sparse autoencoders on the residual stream activations of each target model. The autoencoders will have expansion factor 32 and a sparsity coefficient tuned per layer via the L0/L1 trade-off curve. Training corpora will be drawn from curated subsets of UniRef-100 (proteins), Rfam-15 (RNA), and ChEMBL-35 (small molecules), with held-out evaluation sets for feature stability and reconstruction fidelity. We expect approximately 60,000 features per model layer, of which we anticipate ~15% will be interpretable in molecular terms.

**Pillar B: Causal circuit analysis.** We will adapt activation patching, path patching, and attribution patching [9, 10] to the residual-stream architectures of molecular foundation models. The technical challenge is that molecular models often combine equivariant geometric operations with standard transformer blocks; we will develop patching procedures that respect the equivariance structure and remain mathematically meaningful under SO(3) action.

**Pillar C: Theoretical analysis.** Drawing on recent work on feature learning in NTK and feature-learning regimes, we will derive predictions for which molecular features should appear at which layer and training step. We will compare these predictions to the empirical atlas from Pillar A. The framework will extend Bordelon and Pehlevan's work [14] on feature learning to the multi-task curricula typical in molecular foundation models.

**Pillar D: Auditable prediction interface.** The downstream tool (O4) will be a Python library, `mechbio`, exposing the atlas and circuits as queryable objects: given a model and an input, the library returns the set of active features, the circuit pathway, and a confidence estimate calibrated against the OOD detection literature.

Throughout, we will collaborate with the open-weights molecular foundation model community to ensure that our methods and atlases are reproducible. All artefacts — code, autoencoder weights, atlas, circuit annotations — will be released under permissive licences (Apache-2.0 for code, CC-BY-4.0 for atlases).

The methodology is designed to produce results that compound: the SAE atlases of Pillar A become the substrate on which circuits are traced in Pillar B; the circuits become the test cases against which Pillar C's theoretical predictions are evaluated; and the combination is exposed to scientific users through Pillar D. Each pillar yields scientifically meaningful results in isolation, but their integration is what would make the project field-shaping. We have deliberately staged the timeline so that the descriptive results (atlases) appear first, the causal results follow, the theoretical synthesis is delivered in the middle years, and the user-facing tool integrates the mature outputs in the final stage.

Methodologically, two design choices distinguish MECHBIO from earlier interpretability work on biological models. First, we instrument *every* layer of each target model rather than focusing on a single layer or attention block; this is essential to circuit analysis but has not been attempted for molecular foundation models at this scale. Second, we treat the equivariance structure of the target architectures as a first-class constraint on the interpretability methodology — patching, attribution, and feature interpretation must all be invariant or equivariant under the relevant group action, and we will develop the mathematical machinery to ensure this. This second design choice connects the project's empirical pillars directly to the PI's prior algorithmic work on equivariant networks.

### 4. Expected outcomes and impact

The principal scientific outcome of MECHBIO will be the first comprehensive mechanistic account of how molecular foundation models compute their predictions. The atlas (O1) will be a community resource on the scale of the Protein Data Bank for structural biology — a reference catalogue that downstream researchers can consult to understand what a given model "knows". The circuit taxonomy (O2) will give the field its first systematic account of failure modes. The theoretical framework (O3) will close the gap between empirical interpretability and statistical learning theory.

Beyond academic impact, the work is **highly relevant for industry**, with direct application to the drug discovery pipelines now built around foundation-model predictions. AstraZeneca, Recursion, and Insilico have all publicly committed to foundation-model-driven discovery; our tools will give them the ability to audit predictions before committing experimental resources. The work is also **policy-relevant**: the European Medicines Agency is consulting on the use of AI-generated structural evidence in regulatory submissions, and the audit tool from O4 directly addresses the interpretability requirement under discussion.

We anticipate ~12 peer-reviewed publications over the five-year project, the open-source `mechbio` library, three mechanistic atlases released as community resources, and a final synthesis monograph on the mechanistic interpretability of molecular foundation models.

The longer-term scientific consequences are harder to predict but potentially substantial. If the theoretical framework of Pillar C succeeds, it would constitute a worked example of how feature-learning theory connects to interpretability in deployed systems — a connection the field has long discussed but rarely demonstrated. If the failure-circuit taxonomy of Pillar B succeeds, it would change how molecular foundation models are reported in the primary literature: confidence estimates would be accompanied by circuit-level attribution, raising the evidentiary standard for AI-generated structural claims. If the atlas (Pillar A) succeeds, it would become a reference resource analogous to the Protein Data Bank in its function: a catalogue against which new models and predictions are compared. These are the long-arc impacts the project pursues; the deliverables above are the milestones along that arc.

### References (B1)

[1] Jumper et al., "Highly accurate protein structure prediction with AlphaFold", *Nature* 596, 583–589 (2021).
[2] Abramson et al., "Accurate structure prediction of biomolecular interactions with AlphaFold 3", *Nature* 630, 493–500 (2024).
[3] Chen, Bjørnsen, Lindqvist et al., "RhoFold-Next: scaling RNA structure prediction to assembly-scale corpora", *Nature Methods* 21, 1714–1725 (2024). *(invented)*
[4] Hari, Petrov, Sun, "NuFold: equivariant transformers for RNA tertiary structure", *Cell Systems* 15, 412–428 (2024). *(invented)*
[5] Tan, Rasmussen, Lee, "MoleculeFormer-XL: scaling chemical property prediction to 1.4B parameters", *Nature Machine Intelligence* 6, 901–916 (2024). *(invented)*
[6] Wojcik et al., "BioGPT-S: a unified multimodal foundation model for molecular biology", *Nature Biotechnology* 42, 1188–1201 (2024). *(invented)*
[7] Adebayo et al., "Sanity checks for saliency maps", *NeurIPS* (2018).
[8] Bricken et al., "Towards monosemanticity: decomposing language models with sparse autoencoders", Anthropic technical report (2023).
[9] Wang et al., "Interpretability in the wild: a circuit for indirect object identification in GPT-2-small", *ICLR* (2023).
[10] Vig et al., "Investigating gender bias in language models using causal mediation analysis", *NeurIPS* (2020).
[11] Templeton et al., "Scaling monosemanticity: extracting interpretable features from Claude 3 Sonnet", Anthropic technical report (2024).
[12] Lindqvist, Bjørnsen, "Attention patterns in AlphaFold-2 reflect evolutionary coupling", *Bioinformatics* 40, btae312 (2024). *(invented)*
[13] Roth, Sokolov, "Chemistry-aware neurons in MoleculeFormer", *ICML Workshop on AI for Science* (2024). *(invented)*
[14] Bordelon, Pehlevan, "Self-consistent dynamical field theory of kernel evolution in wide neural networks", *NeurIPS* (2022).

---

## CV and Track Record

### Personal details

**Name:** Eva Lindqvist
**Date of birth:** 1992-03-14
**Nationality:** Swedish
**Current position:** Assistant Professor, Department of Mathematics, Stockholm University (since 2023)
**Email:** eva.lindqvist@math.su.se *(synthetic)*

### Education

- 2020 — PhD in Computer Science, **Massachusetts Institute of Technology (MIT)**, Cambridge, MA, USA. Dissertation: *"Convex relaxations for non-convex optimisation in over-parameterised neural networks"*. Advisor: Prof. (fictitious) J. Marin.
- 2016 — MSc in Applied Mathematics, KTH Royal Institute of Technology, Stockholm, Sweden.
- 2014 — BSc in Mathematics, Stockholm University, Sweden.

### Current and previous positions

- **2023–present:** Assistant Professor, Stockholm University, Department of Mathematics.
- **2021–2023:** Postdoctoral researcher, **Karolinska Institute (visiting researcher)** in the Computational Biology programme — split appointment with KTH.
- **2020–2021:** Postdoctoral researcher, MIT CSAIL.
- **2014–2020:** PhD researcher, MIT.

### Research outputs (10 selected, since 2020)

(*Impact factors quoted from Journal Citation Reports 2024 where available.*)

1. **Lindqvist, E.**, Chen, M. (first/co-first author). "Scaling laws for sparse autoencoders on residual streams." *Journal of Machine Learning Research*, 25, 1–48 (2024). **JIF 6.0.**
2. **Lindqvist, E.**, Bjørnsen, H. (first author). "Attention patterns in AlphaFold-2 reflect evolutionary coupling." *Bioinformatics*, 40, btae312 (2024). **JIF 5.8.**
3. Chen, M., **Lindqvist, E.**, et al. (co-first author). "RhoFold-Next: scaling RNA structure prediction to assembly-scale corpora." *Nature Methods*, 21, 1714–1725 (2024). **JIF 47.9.**
4. **Lindqvist, E.** (sole author). "Convex relaxations of the population loss in two-layer ReLU networks." *Mathematical Programming*, 198, 211–242 (2023). **JIF 3.0.**
5. **Lindqvist, E.**, Marin, J. (first author). "On the implicit bias of gradient descent in feature-learning regimes." *NeurIPS 2022*. **(Acceptance rate 25.6%.)**
6. **Lindqvist, E.**, Hari, K. (first author). "Equivariant patching for geometric transformers." *ICML 2023*. **(Acceptance rate 27.9%.)**
7. **Lindqvist, E.** (first author). "Identifiability of two-layer networks under invariant losses." *AISTATS 2022*. **JIF n/a (conference).**
8. Tan, S., **Lindqvist, E.**, Rasmussen, P. (co-first author). "On the optimisation landscape of contrastive molecular pre-training." *ICLR 2024*. **(Acceptance rate 31.0%.)**
9. **Lindqvist, E.** (first author). "A note on initialisation schemes for equivariant networks." *Communications in Mathematical Sciences*, 22, 117–134 (2024). **JIF 1.1.**
10. Petrov, V., **Lindqvist, E.** (co-first author). "Curriculum effects in multi-task molecular pre-training." *Machine Learning: Science and Technology*, 5, 035014 (2024). **JIF 6.3.**

### Track record description

Dr. Lindqvist has built a strong publication record in the theory and practice of large neural networks. Her work spans optimisation theory, equivariant architectures, and the analysis of training dynamics in over-parameterised models. She has published consistently in leading venues including *Nature Methods*, *JMLR*, *NeurIPS*, and *ICML*. Her training at MIT under Prof. Marin and her postdoctoral period jointly between KTH and the Karolinska Institute (visiting researcher) has equipped her with the algorithmic rigour and the interdisciplinary breadth that this proposal requires.

She has supervised three PhD students and four MSc students at Stockholm University since 2023 and serves as a reviewer for the leading machine learning conferences. The combination of theoretical depth, computational expertise, and publication record positions her well to lead an ambitious five-year ERC project.

---

# Part B2 — Scientific proposal

## 1. Detailed methodology

### 1.1 Pillar A — Sparse autoencoder atlases (linked to O1)

The first pillar of the methodology produces a *mechanistic atlas* for each of three target models: a protein structure model in the AlphaFold-3 lineage (henceforth *PF-3*), an RNA structure model based on RhoFold-Next (*RF-N*), and the small-molecule property predictor MoleculeFormer-XL (*MF-XL*). For each model we train a sparse autoencoder (SAE) on residual-stream activations at every transformer block.

The SAE architecture follows the top-k variant of Bricken et al. (2023) [8], with an expansion factor of 32 and per-layer tuning of the sparsity coefficient via the L0/L1 trade-off curve. Inputs are activations sampled from a curated subset of UniRef-100 for proteins (10M sequences, weighted to balance taxonomic and length distributions), Rfam-15 for RNA (300K families, with manual quality filtering), and ChEMBL-35 for small molecules (2.1M compounds with associated assay data). For each model we sample at least 200M activation vectors per layer to train the SAE.

The deliverable is, for each (model, layer) pair, a set of features represented as encoder/decoder weight pairs, together with annotations: a human-readable description, a list of top-activating inputs, a list of suppressing inputs, and a feature-stability score (computed by re-training the SAE with a different seed and measuring the maximum cosine similarity between feature sets, following Bricken et al.). We anticipate ~60,000 features per layer with ~15% interpretable in molecular terms after annotation.

Annotation of features is the principal labour bottleneck. We will combine automated annotation (an LLM-driven pipeline that summarises top-activating examples and proposes a label) with a structured human review by domain experts. The PI's group will lead the protein-structure annotation; for RNA and small molecules we have arranged collaborations with two external groups (letters of commitment attached).

Beyond the basic atlas, we will produce three derived analyses. (i) *Feature universality*: do the same chemical and structural features appear across the three models, or are the representations model-specific? We will quantify this by mapping features between models via activation correlation on a shared probe set. (ii) *Layer-wise progression*: how does the feature inventory evolve from early to late layers? We expect early layers to encode local sequence and chemistry, middle layers to encode coevolutionary and conformational information, and late layers to encode task-specific outputs; the atlas will let us test this prediction quantitatively. (iii) *Dead and ultra-rare features*: a non-trivial fraction of SAE features in language models are dead (zero activation across the corpus) or activate only on adversarial inputs. We will catalogue these and assess whether they represent training-data idiosyncrasies, evidence of mode collapse, or genuinely useful but rare detectors.

A practical risk of Pillar A is that features at the chosen sparsity may not be interpretable to domain experts even when reconstruction is good. We will detect this early by annotating a sample of features after every major SAE training run, and if interpretability is below the 10% threshold (10× lower than language-model baselines), we will fall back to alternative dictionary-learning protocols (gated SAEs, JumpReLU) or revise the sparsity coefficient. The choice of fallback and the threshold are described in the Risks section of B2.

### 1.2 Pillar B — Causal circuit analysis (linked to O2)

Pillar B characterises the internal circuits responsible for *confident hallucination* — the failure mode in which a molecular foundation model produces a high-confidence prediction (e.g., pLDDT > 80, or model-internal entropy below threshold) on an input where the true structure differs substantially from the prediction.

The methodology adapts activation patching, path patching, and attribution patching from the language model literature [9, 10]. The technical challenge specific to molecular models is that several layers are *equivariant* under rotations of the input coordinate frame (SO(3)). Naive patching of an equivariant activation breaks equivariance and produces uninterpretable outputs. We have developed (in unpublished pilot work) an equivariance-preserving patching procedure that projects the patched activation onto the equivariant subspace before substitution. This procedure has been validated on small synthetic models in our prior work [6].

The empirical programme proceeds as follows. We construct a corpus of "confidently wrong" inputs for each model by mining the model's predictions on the relevant out-of-distribution benchmarks (CASP-15 unreleased targets for PF-3; RNA-Puzzles-Next for RF-N; the FreeSolv-OOD splits for MF-XL). For each such input we run path patching from the residual stream at the final layer back through the network, identifying which components contribute most causally to the over-confident output. We then cluster these "failure pathways" across inputs and produce a *taxonomy of failure circuits* — what the components are, what features they activate, and what subclass of failure they correspond to.

The expected output is a structured taxonomy with approximately 30–80 distinct failure circuits across the three target models, each annotated with a description, an exemplar input, and a quantitative attribution score.

We pay particular attention to four sub-questions within Pillar B. (i) *Are failure circuits shared across models?* A finding that the same circuit motif appears in PF-3, RF-N, and MF-XL would suggest that confident hallucination has a common architectural cause. A finding that the circuits are model-specific would suggest the problem is best addressed per-model. (ii) *Are failure circuits localised or distributed?* If failures are driven by a small number of components, targeted interventions become feasible. If they are spread across many components, intervention must operate at a higher level. (iii) *Do the SAE features identified in Pillar A appear in the failure circuits?* If yes, the atlas becomes a diagnostic resource; if no, the atlas and the circuits describe complementary structure. (iv) *Are failure circuits stable across training seeds?* A circuit that appears in one training run but not another would be a methodological artefact, not a property of the system; we will quantify stability by re-training one of the smaller target models from scratch with three different seeds.

A second technical contribution of Pillar B is the development of *equivariance-preserving attribution patching*. Attribution patching is faster than full activation patching by orders of magnitude but is only valid under linearity assumptions; its extension to equivariant architectures requires care. We will derive the conditions under which attribution patching is exact in the equivariant setting and produce a software implementation that automatically projects gradients onto the equivariant tangent space at each layer.

### 1.3 Pillar C — Theory of training-dynamics-induced representation (linked to O3)

Pillar C provides a theoretical account of *why* the empirical atlas of Pillar A takes the form it does. The starting point is recent work on feature learning in deep networks, particularly the dynamical mean-field theory of Bordelon and Pehlevan [14] which characterises the time-evolution of features in wide networks beyond the NTK regime.

The technical contribution of MECHBIO is to extend this framework to (a) multi-task curricula (sequence + structure + assay losses combined under various weightings), and (b) the architecture-specific inductive biases of equivariant networks. The output of the theoretical pillar is a set of quantitative predictions: given a model architecture, a training curriculum, and a token-level statistic of the training corpus, the theory predicts which features will appear in which layer at which training step.

These predictions will be compared to the empirical atlas of Pillar A. We anticipate that some predictions will succeed (the appearance of basic chemistry features in early layers; the appearance of evolutionary-coupling features in middle layers) and that others will fail and require theoretical refinement.

The theoretical work has three concrete deliverables. First, a generalisation of the Bordelon–Pehlevan dynamical mean-field theory to (a) multi-task training and (b) equivariant architectures, with explicit predictions for the per-layer feature spectrum at convergence. Second, a phase-diagram analysis: as a function of model width, depth, training-data composition, and curriculum schedule, which combinations produce monosemantic, polysemantic, or absent features for a given target concept? Third, a falsifiable claim about the *training step* at which specific molecular features should first become decodable from the residual stream, tested via re-training a smaller scale (300M-parameter) model from scratch and checkpointing every 1,000 optimisation steps.

The latter sub-project — training a smaller model from scratch under controlled conditions — is the most resource-intensive component of Pillar C, but it is essential: the published checkpoints of PF-3, RF-N, and MF-XL provide one snapshot each, which is insufficient for trajectory-based theoretical analysis. The smaller controlled-training experiment provides the trajectory data the theory needs.

### 1.4 Pillar D — Auditable prediction interface (linked to O4)

The `mechbio` library will expose the atlas and circuits as queryable objects. Given a model, an input, and a prediction, the library returns: (i) the set of features active in each layer; (ii) the circuit pathway from input through features to output; (iii) a confidence estimate calibrated against an OOD detection benchmark.

The library will be developed in collaboration with three external partner laboratories: (1) a structural biology group at SciLifeLab (Stockholm) interested in auditing AlphaFold-3 predictions for designed enzymes; (2) an RNA biology group at EMBL Heidelberg interested in RF-N predictions for ribozymes; and (3) a medicinal chemistry team at a Swedish biotech (named in a confidential letter of commitment). Each partner will deploy the library on an internal benchmark, and the case studies will be reported in the final synthesis paper.

The interface design prioritises *scientific usability over completeness*: we will expose a small, opinionated API (≤ 20 public functions) that answers the questions working molecular scientists actually ask. The full atlas and circuit data will be queryable through a lower-level API for interpretability researchers. Documentation, tutorials, and example notebooks are first-class deliverables, not afterthoughts. A research software engineer is included in the budget specifically to ensure that the library is maintained to community standards beyond the project's lifetime.

We have set ourselves a quantitative success criterion for Pillar D: by M48, the three partner laboratories must each be able to produce, without the PI's group's assistance, an audit report for a prediction of their choice using only the published library and documentation. If they cannot, the library has failed and we will refactor. This criterion is testable, is owned by external parties, and forces the library to be more than a research prototype.

## 2. Work plan and milestones

The work plan is organised into four work packages aligned with the four objectives, with cross-cutting integration activities.

| WP | Title | Months | Deliverables |
|---|---|---|---|
| WP1 | Sparse autoencoder atlases (Pillar A) | 1–30 | D1.1 PF-3 atlas v1 (M12); D1.2 RF-N atlas v1 (M18); D1.3 MF-XL atlas v1 (M24); D1.4 Integrated atlas release (M30) |
| WP2 | Causal circuit analysis (Pillar B) | 6–42 | D2.1 Equivariant patching toolkit (M12); D2.2 Failure circuit taxonomy v1 (M30); D2.3 Final taxonomy (M42) |
| WP3 | Theory of training dynamics (Pillar C) | 1–54 | D3.1 Theoretical framework draft (M18); D3.2 Predictions vs. empirics report (M36); D3.3 Final theory monograph (M54) |
| WP4 | `mechbio` library and case studies (Pillar D) | 18–60 | D4.1 Library alpha (M30); D4.2 Library beta with three case studies (M48); D4.3 Final release (M60) |

**Milestones:**
- **M12:** First atlas (PF-3) released as a community resource. Equivariant patching toolkit available.
- **M24:** All three model atlases at v1. First failure circuit results.
- **M36:** Theoretical predictions delivered; full circuit taxonomy under construction.
- **M48:** `mechbio` beta with case studies from all three partner laboratories.
- **M60:** Final release of all artefacts, synthesis monograph.

The PI will allocate 50% of her research time to the project. The team will include three postdoctoral researchers (one per pillar, with Pillar D shared between Pillars A and B postdocs in years 4–5), three PhD students, and a research software engineer for the library development. A scientific advisory board of three external experts will meet annually.

The work plan has been designed with explicit dependency management between work packages. WP1 (atlases) and WP2 (circuits) depend on each other: the SAE features of WP1 are the substrate for the circuit analysis of WP2, and the failure circuits of WP2 sharpen the annotation effort of WP1 by indicating which features matter most. We have staged the work so that WP1 produces a usable v1 atlas at M12 — before WP2 begins its main empirical programme — and WP2 then produces a first taxonomy at M30 that feeds back into the integrated atlas at M30. WP3 (theory) is the longest work package and runs in parallel throughout; its delivery at M36 is timed to coincide with the maturity of the empirical work in WP1 and WP2. WP4 (library) is deliberately staged late: it integrates the mature outputs of WP1–WP3 rather than racing alongside them, which we judge to be the right risk allocation for a tool intended for external scientific users.

Integration meetings are scheduled quarterly, with all team members and the advisory board joining for the annual review. We will hold a "red team" review at M30 in which an external interpretability researcher and an external molecular biologist independently attempt to break the v1 outputs and report what they find. Their findings will shape the second half of the project.

## 3. Resources and budget justification

The requested budget is **€1,498,500** over 60 months. The principal cost categories are:

| Category | Cost (€) | Justification |
|---|---|---|
| PI salary (50% FTE × 5y) | 285,000 | Standard SU rate for Assistant/Associate Professor |
| 3 postdocs (3y average each) | 540,000 | One per major pillar; standard Swedish postdoc cost |
| 3 PhD students (4y each) | 420,000 | PhD students at SU including overhead |
| Research software engineer (0.5 FTE × 3y) | 120,000 | Library development for Pillar D |
| Compute (GPU cluster time) | 95,000 | ~250,000 GPU-hours on H100-class hardware; rate from SNIC tender |
| Travel and dissemination | 25,000 | Conferences, workshops, two project meetings per year |
| Open-access publication fees | 13,500 | 12 publications × ~€1,125 avg |
| **Total** | **1,498,500** | |

All amounts are inclusive of standard Stockholm University overhead at 20.4%.

The host institution provides office space, basic computing, and access to the Berzelius national GPU cluster at no direct cost to the project.

The compute estimate deserves additional explanation. We have budgeted 250,000 H100-equivalent hours over five years. The principal compute consumers are: (i) SAE training across three target models and an average of 30 layers per model (~75% of compute); (ii) the controlled-trajectory training of a 300M-parameter molecular model for Pillar C (~15%); (iii) activation-patching sweeps for Pillar B (~7%); (iv) inference and case studies for Pillar D (~3%). At academic-rate access through SNIC/Berzelius the resulting cash cost is approximately €95,000, with in-kind allocation expected for the remainder. If the in-kind allocation is not granted at the requested scale, we will reduce the SAE expansion factor from 32 to 16 for the most expensive layers, which the literature suggests has a modest cost in feature interpretability but a 4× saving in training compute.

The personnel structure reflects the four-pillar design. The Pillar A postdoc (months 1–36) leads SAE training and atlas construction. The Pillar B postdoc (months 6–48) leads causal circuit analysis. The Pillar C postdoc (months 1–48) leads the theoretical work. PhD students are recruited in years 1, 2, and 3 and graduate in years 4, 5, and 6 (the final student's defence falls just after project end, which is acceptable under SU's PhD programme rules). The research software engineer joins at M18 — once the methodology of Pillars A and B has stabilised enough to specify a useful library API — and exits at M48 with a year of library use under their belt to inform the final release.

Travel and dissemination is modest by ERC standards (€25,000) but adequate for the project's needs: one major ML conference per year for the postdocs and PI, one structural biology conference per year for the cross-disciplinary work, and the two project-wide meetings (one virtual, one in-person) per year. Open-access fees are budgeted at the JMLR/PMLR average; for publications in higher-charge venues, the host institution's read-and-publish agreements will absorb the differential.

## 4. Risks

The project carries a number of risks, which we briefly enumerate:

- **Project delays:** As with any five-year project, milestones may slip. We will mitigate this through quarterly internal reviews.
- **Team turnover:** Postdocs may leave for industry positions, particularly in the current competitive AI labour market. We will mitigate through competitive salaries and clear publication paths.
- **Compute availability:** GPU access at the requested scale depends on the Berzelius cluster's continued availability. Should this become a bottleneck we will purchase commercial cloud compute.
- **Open-weights model availability:** The project depends on the continued open release of weights for the three target models. Should one become closed, we will substitute an alternative open-weights model from the same family.

The project is high-ambition and the PI is confident that the team can deliver on all four objectives.

---

*End of Part B2.*
