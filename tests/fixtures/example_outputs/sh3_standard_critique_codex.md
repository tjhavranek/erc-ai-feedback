# Standard pre-review — SH3 fixture — Devil's Advocate + Writing Coach
(Panel Reviewer output is in sh3_basic_critique_codex.md)

## Devil's Advocate

# Devil's Advocate counterarguments

## Counterargument 1 — Trace data may not measure the mediation mechanism
- **Quote:** "We do not capture content beyond domain and item-level metadata; we do not capture private messages."
- **Counterargument:** The project may successfully collect browser traces while still missing the politically meaningful content, mobile-app exposure, passive in-feed reading, shared screenshots, and interpersonal circulation through which algorithmic mediation is experienced. A sceptic could argue that domain, dwell time, feed position, and source identity are only partial proxies for the actual exposure mechanism the proposal wants to explain.
- **Why a panel member would raise it:** SH3 reviewers will care whether the central construct is being measured, not only whether a large trace dataset can be collected.
- **Sub-question affected:** 1.3
- **Concrete repair:** Add a construct-validity paragraph in B2 §1.3 mapping each captured trace field to each exposure construct, naming excluded exposure modes, and stating which RQ1/RQ2 claims will be downgraded if content-level or app exposure is unavailable.
- **Overlap:** none

## Counterargument 2 — Algorithmic personalisation and motivated selection are not cleanly separable
- **Quote:** "a clean test of whether algorithmic personalisation amplifies or substitutes for motivated selection"
- **Counterargument:** The design observes a feedback loop in which users choose, react, hide, click, follow, and linger, while platforms adapt to those behaviours. Without an exogenous source of variation or a specified identification strategy, the project may not distinguish platform-driven personalisation from user-driven motivated selection.
- **Why a panel member would raise it:** A panel sceptic will ask whether the project can make a causal or discriminating claim about a central SH4-linked mechanism.
- **Sub-question affected:** 1.3
- **Concrete repair:** Reframe "clean test" as "observational test of competing signatures" and add one identification paragraph specifying the discriminator, such as lagged exposure conditional on prior selection, platform-change events, or sensitivity bounds for user-selection confounding.
- **Overlap:** none

## Counterargument 3 — The European-specificity claim may rest on the wrong comparative frame
- **Quote:** "PL, DE, FR, IT, ES, NL span the major institutional clusters of European media systems (Hallin & Mancini's polarised pluralist, democratic corporatist, and liberal types, with their post-2010 hybridisations)."
- **Counterargument:** This is a citation-grounding risk: Hallin and Mancini's media-system typology may support comparative media-institution variation, but it may not by itself support claims about platform recommender behaviour or algorithmic exposure in the 2020s. A sceptic could say the proposal imports a legacy comparative frame into a platform mechanism that may standardise exposure across countries.
- **Why a panel member would raise it:** The project sells European specificity as part of its frontier advance, so reviewers will test whether the comparative logic actually predicts algorithmic differences.
- **Sub-question affected:** 1.2
- **Concrete repair:** Add one sentence after the Hallin and Mancini claim explaining why that typology predicts trace-level exposure heterogeneity under platform curation, or replace the typology claim with platform-era comparative-media evidence.
- **Overlap:** none

## Counterargument 4 — Exposure diversity may not answer the democratic-discourse question
- **Quote:** "measures of source diversity, ideological range, cross-cutting exposure"
- **Counterargument:** These indicators may describe exposure variety without measuring deliberative quality, agenda formation, interpretive uptake, or the practice of democratic discourse. Even if the trace and survey linkage works technically, a sceptic could reject the move from exposure repertoires to claims about democratic discourse.
- **Why a panel member would raise it:** SH3 panels often distinguish measured communication behaviour from larger public-sphere claims, especially when the larger claim carries the proposal's title and central RQ.
- **Sub-question affected:** 1.1
- **Concrete repair:** Add a bridge table or paragraph linking each democratic-discourse claim to a specific observable indicator, and cut or reframe any democratic-discourse claim that rests only on exposure diversity.
- **Overlap:** overlap with Panel Reviewer finding 1

## Counterargument 5 — The agent-based model could fit traces for the wrong reason
- **Quote:** "Parameters are calibrated against the WP2 traces using approximate Bayesian computation, with summary statistics drawn from the empirical exposure repertoires and their evolution across waves."
- **Counterargument:** A model can reproduce exposure-summary statistics without validating the bounded-confidence, source-credibility, or recommender mechanisms that the project treats as theoretically meaningful. The proposed counterfactuals may then be artefacts of a fitted simulation rather than credible probes of platform-governance mechanisms.
- **Why a panel member would raise it:** Reviewers will care whether WP4 advances explanation or only repackages WP2 patterns in formal language.
- **Sub-question affected:** 1.3
- **Concrete repair:** Add a model-validity subsection naming out-of-sample patterns the model must reproduce, a failed-model criterion, and at least one negative-control comparison against a simpler exposure-only model.
- **Overlap:** overlap with Panel Reviewer finding 8

## Counterargument 6 — Politically engaged interviewees may not supply general source-credibility parameters
- **Quote:** "240 interviews across PL, DE, ES (80 per country), with politically engaged users"
- **Counterargument:** Source-credibility heuristics among politically engaged users in three countries may not generalise to less engaged users or to the three non-interview countries. If these interviews feed directly into WP4's source-weighting function, the model may overfit a politically attentive subset.
- **Why a panel member would raise it:** The project depends on cross-WP linkage, so one unbounded generalisation from WP3 into WP4 can weaken the claimed integration.
- **Sub-question affected:** 1.3
- **Concrete repair:** Add a boundary-condition sentence stating that WP3-derived source weights are engagement- and country-specific priors, then add a validation step against WP1/WP2 patterns before using them as six-country model parameters.
- **Overlap:** none

## Writing Coach

# Writing Coach edits

## Edit 1 — Put ALGOMED in the first abstract sentence
- **Quote:** "Algorithmic curation now mediates the bulk of the political information citizens encounter, yet our empirical and theoretical understanding of how this mediation reshapes democratic discourse remains fragmented across disciplines."
- **Locator:** Abstract, opening sentence
- **Coach note:** The opening begins with field context, and the project itself arrives only after the reader has processed several disciplinary contrasts. A tired reader needs the action of the proposal immediately.
- **Concrete edit:** Open with: "ALGOMED studies how algorithmic curation reshapes democratic discourse by linking a six-country panel survey, browser-trace data, interviews, and an agent-based simulation over a full electoral cycle." Then use one shorter sentence for the disciplinary fragmentation.

## Edit 2 — Cut the double ambition sentence after the RQs
- **Quote:** "The ambition of the programme is to **transform our understanding** of how democratic discourse is constituted under conditions of algorithmic mediation, and to provide a foundation on which future platform-governance research can build. We expect ALGOMED to **revolutionise** the way scholars approach the empirical study of mediated publicity"
- **Locator:** Part I §2, immediately after RQ1–RQ4
- **Coach note:** The sentence adds rhetorical volume after the reader has just received the research questions. It repeats the integration claim instead of helping the reader move into the method.
- **Concrete edit:** Delete the sentence, or replace it with one plain transition: "The programme uses this linked design to test whether the field's fragmentation is necessary or contingent."

## Edit 3 — Remove the second version of the aims
- **Quote:** "We will *explore* how social media changes democratic deliberation across diverse European contexts, and *investigate* the mechanisms by which algorithmic curation interacts with users' political practices."
- **Locator:** Part I §2, paragraph after the ambition sentence
- **Coach note:** After four RQs, this sentence restates the project in softer verbs and forces the reader to reconcile multiple versions of the same aim. The next sentence can carry the expectation on its own.
- **Concrete edit:** Delete the quoted sentence. If one bridge is needed, keep only: "Expected effects are heterogeneous across national contexts and user types."

## Edit 4 — Give the state-of-the-art section a gap roadmap
- **Quote:** "The fragmentation matters. Each tradition has matured to the point where its internal questions are well-posed, but the central question — how algorithmic mediation reshapes the actual practice of democratic discourse — falls between the three."
- **Locator:** Part I §1, after the three literature paragraphs
- **Coach note:** The load-bearing gap statement appears only after a long tour through literatures. A reader scanning the first page would benefit from a short map before the detail.
- **Concrete edit:** Start the section with: "The proposal addresses five gaps: linkage, theory, method integration, European specificity, and temporal grain." Then keep the detailed paragraphs but trim repeated setup sentences.

## Edit 5 — Split the cross-panel audience sentence
- **Quote:** "Concretely, three sets of SH4 readers will find the proposal directly relevant and would, we believe, change their priors about a contested question after engaging with our results: (i) scholars working on partisan motivated reasoning, who will read in WP2 a clean test of whether algorithmic personalisation amplifies or substitutes for motivated selection; (ii) researchers studying source-credibility heuristics, who will find in WP3 dyadic-level evidence on how platform-mediated source cues are integrated; and (iii) cognitive ecologists studying information environments (Hertwig, Pachur), who will see our calibrated agent-based model as a stylised but tractable representation of the *real* informational ecology in which contemporary belief revision occurs."
- **Locator:** Cross-panel justification, third paragraph
- **Coach note:** One sentence carries three audiences, three expected readings, and a conclusion. The reader has to hold too much in memory before reaching the point.
- **Concrete edit:** Rewrite as three short bullets or three short sentences, one per SH4 reader group, each beginning with the group name.

## Edit 6 — Replace the repeated not-but integration paragraph
- **Quote:** "WP2 is not a parallel data stream alongside WP1 but an oversample drawn from it; WP3 is not a separate qualitative arm but a strategic sub-sample of WP1+WP2 selected on observed trace profiles; WP4 is not a free-standing modelling exercise but an instrument whose calibration target is the WP2 trace data and whose source-credibility weights are anchored in the WP3 coding."
- **Locator:** Part I §3, paragraph after WP1–WP5 overview
- **Coach note:** The repeated negative construction slows down a key design point. The phrase "layered linkage" can carry the structure more cleanly.
- **Concrete edit:** Replace the quoted sentence with: "The design uses layered linkage: WP2 is drawn from WP1; WP3 is sampled from WP1+WP2 trace profiles; WP4 calibrates to WP2 and uses WP3 source-credibility coding." Keep the final contribution sentence.

## Edit 7 — Translate the compact modelling phrase
- **Quote:** "will offer a generative model of opinion change that can be interrogated counter-factually"
- **Locator:** Abstract, final third
- **Coach note:** The phrase is compact but academic, and a generalist reader may pause over it. The same meaning can be stated in common English.
- **Concrete edit:** Replace with: "will offer a model of opinion change that can test what-if scenarios."

## Edit 8 — Break the B2 analysis paragraph into labelled units
- **Quote:** "Models: latent-class trajectory analysis (WP1), multilevel cross-classified models for cross-national variation, mediation analysis where WP2 traces are available. Measurement invariance across countries assessed via standard configural-metric-scalar testing before substantive cross-national claims; partial-invariance approaches per Davidov et al. used where full scalar invariance fails."
- **Locator:** Part B2 §1.2, WP1 Analysis
- **Coach note:** The paragraph compresses hypotheses, model classes, measurement invariance, power, preregistration, and code release into one dense block. The reader needs visual anchors.
- **Concrete edit:** Break the paragraph into four labelled sentences or micro-paragraphs: "Hypotheses"; "Models"; "Cross-national measurement"; "Power, preregistration, and code."

## Edit 9 — Number and caption the timeline figure reference
- **Quote:** "(See timeline figure, attached as Annex 1.)"
- **Locator:** Part B2 §2, Work plan opening
- **Coach note:** The callout lacks a figure number and does not tell the reader what to inspect. The later sentence "Annex 1 (Gantt) details the per-WP deliverables and milestones" arrives after the year-by-year list.
- **Concrete edit:** Change the first callout to: "Figure 1 maps the five-year WP timeline." Give the Gantt a self-contained caption explaining colors, bars, milestones, and deliverables.

## Pilot self-assessment

- Devil's Advocate counterarguments overlapping Panel Reviewer findings: 2 of 6 (Counterarguments 4 and 5).
- Novel Devil's Advocate counterarguments: 4 of 6 (Counterarguments 1, 2, 3, and 6).
- Writing Coach edits crossed into content critique: no; edits targeted opening order, repetition, sentence density, jargon, signposting, and figure callouts only.
- Forbidden phrase usage from Basic Section 5: zero in the generated critique text.
- Total wall-clock time spent: approximately 23 minutes.
