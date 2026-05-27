# Changelog

All notable changes to this package are documented here. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning is loose, with minor bumps for prompt or rubric content
changes and patch bumps for documentation and behaviour adjustments
that do not change the locked rubric.

## [0.1.1] — [pending release date] (candidate; pilot pending)

Patch release driven by a multi-model council audit and Codex
cross-audit of v0.1. The rubric remains
`shared/rubric_locked.md` v1.1; this patch changes package
behaviour and documentation, not the substance of the locked ERC
criteria.

### Candidate changes

- README rewritten in a dry institutional register; model and
  process branding moved out of the first screen and into roadmap
  notes.
- One public entry path foregrounded (Basic prompt + locked
  rubric). The advanced and multi-model paths now live in the
  roadmap document rather than the main README.
- Public draft stages collapsed to Pitch, Part I + CV, and Full
  proposal. The prompt retains an internal content-detection
  checklist so calibration of caps and next-stage advice remains
  granular.
- A/B/C panel-score output removed. At Pitch and Part I + CV
  stages, a Step-1 risk field (low / medium / high / critical)
  replaces the panel score; at Full proposal stage, per-sub-question
  marks carry the diagnosis.
- Prompt register changed from "tired / brutal" to the *Guide for
  Peer Reviewers'* own diction (dispassionate, analytical,
  unambiguous, concrete; do not encourage or reassure).
- Repair field reframed as authorship-safe: specify what to add,
  cut, or reframe, without writing new scientific claims for the
  applicant.
- Privacy default changed to applicant-runs-by-default. Reader-run
  use requires explicit applicant consent and institutional
  approval. A consent template is provided in
  `docs/for_workshop_leaders.md`.
- CAP-F added (PI-project fit: CV does not show why this PI can
  execute this project → Criterion 2.3 capped at Very Good).
- CAP-C softened: fires only when the CV lacks all three signals
  of originality (methodological independence, peer recognition
  beyond venue prestige, and PI-attributable contribution).
- Forbidden output patterns extended to block evaluating societal
  impact as an ERC score axis, and to block using journal impact
  factors, venue prestige, or host institution prestige as proxies
  for scientific judgment.
- Severity floor removed; the prompt instructs the model not to
  invent HIGH findings. Severity is a property of the draft, not a
  quota.
- Rejected council proposals were not introduced: no brand
  rebranding, no fake high-risk/high-gain Annex 1 sub-question, no
  HIGH-findings quota, no extra caps beyond CAP-F.
- `docs/for_workshop_leaders.md` rewritten as a working hand-off
  note: one-paragraph value statement, applicant-email template,
  Pattern A / Pattern B with consent gate, disagreement rule
  (human wins on HIGH-severity disagreement), and reporting
  pathway.
- Output schema now has stage-dependent finding maximums (Pitch =
  top 6; Part I + CV = top 6-8; Full proposal = top 8-10) and caps
  workshop hand-off unresolved questions at three.
- Roadmap and development notes moved out of the README to
  `docs/roadmap.md`.

### Pilot status

Pilot results: \[pending — to be filled when the maintainer has run
the patched prompt against the two pilot drafts specified in
PATCH_BRIEF_v0.1.1.md §5 (the maintainer's own current proposal and
one real ERC draft from the current cycle), with model outputs
verified by Codex for hallucinated quotes and schema compliance\].

Honest record of what the tool missed on pilot drafts: \[pending\].

These v0.1.1 changes were committed to the `v0.1.1` branch with this
CHANGELOG entry flagged pilot-pending. Merge to `main` and the
v0.1.1 release tag both wait for pilot clearance per the patch
brief's stop conditions (zero hallucinated quotes, clean schema
compliance, no unresolved Codex audit issues, maintainer judgement
on shared-dimension overlap with experienced human readers).

### Authorship

Patches in this release were applied by Claude Code (Opus 4.7) and
Codex CLI (gpt-5.5) in division of labour: Codex authored the
patched Sections 3, 4, 5, and 7 of `basic/prompt.md`, the README
privacy paragraph, the workshop-leaders Pattern A / Pattern B
consent block, and this CHANGELOG entry. Claude Code authored the
README rewrite, the prompt Section 1 stage collapse, the
workshop-leaders body, the prompt's documentation header and notes,
and the new `docs/roadmap.md`. Codex audited the patched diff
before commit (this audit found three commit-blocking issues — a
drift file, CHANGELOG language that asserted things not yet true,
and a CAP-F Pitch-stage ambiguity — all of which were addressed
before commit).

---

## [0.1.0] — 2026-05-27

Initial public release. Two load-bearing files plus repository
scaffolding.

### What ships
- `README.md` — disclaimer-first, with "It does not replace a human
  reader / your ERC support group / mentors" prominently framed.
- `LICENSE` (MIT), `CITATION.cff`, `.gitignore`.
- `shared/rubric_locked.md` v1.1 — locked rubric. The Criterion 1
  and Criterion 2 sub-questions are quoted verbatim from Annex 1
  of the *Guide for Peer Reviewers* v6.0 (30 September 2025). Page
  limits, eligibility windows, scoring scales, and the call calendar
  are cross-checked against the *Information for Applicants* and
  *Work Programme 2026*. Source URLs and "last verified" stamp
  included.
- `basic/prompt.md` v1.1 — single self-contained prompt for one-model
  critique of an ERC StG / CoG draft. Implements:
  - Six-stage declaration (idea sketch → complete B1+B2).
  - Locked rubric with Annex 1 verbatim sub-questions (1.1, 1.2 at
    Step 1; 1.3, 1.4 added at Step 2; 2.1, 2.2, 2.3 throughout).
  - Five structural score caps that fire automatically when the
    declared stage expects an element that is absent.
  - Evidence discipline: every finding quote-grounded, severity-
    ranked, mapped to a sub-question, with a concrete repair.
    OMISSION findings allowed (quote the expectation-creating
    sentence); SPECULATIVE findings labelled as such.
  - Forbidden-phrase list to prevent sycophancy and explicit
    prohibition on using "high risk / high gain" as if it were an
    Annex 1 sub-question.
  - Output schema: separate sub-question scores for Criterion 1
    (1-5) and qualitative labels for Criterion 2 (Outstanding /
    Excellent / Very Good / Good / Non-competitive).
  - Workshop hand-off paragraph the applicant adapts before
    forwarding to a human reader.
- `docs/for_workshop_leaders.md` — one-pager for ERC support group
  members and university research offices.

### Pre-publication corrections (from Codex audit)

The pre-publication audit by Codex (gpt-5.5) caught the most
important issue: the earlier draft (v1.0, never published) had
quoted Criterion 1 and Criterion 2 sub-questions that were
paraphrased rather than verbatim — sourced from a training slide
rather than from Annex 1 itself. The corrections applied before
this release:

- "important challenges" → "important scientific questions"
  (verbatim Annex 1 wording).
- "beyond the state of the art" → "advance the frontier of
  knowledge" (verbatim).
- "high risk / high gain" removed from the list of verbatim
  sub-questions; relabelled in the prompt as ERC framing language
  but not a formal Annex 1 question.
- "ground-breaking research" (with hyphen) → "groundbreaking
  research" (no hyphen, verbatim).
- "creative independent thinking" → "creative and original
  thinking" (verbatim).
- Step 2 feasibility wording corrected to the two Annex 1 questions
  on methodology / working arrangements and timescales / resources.
- Panel taxonomy simplified to a link to the authoritative ERC
  panel-structure page.
- Privacy guidance updated for current provider UIs.

### Design audit trail

The v0.1 design was developed through a multi-agent debate (MAD)
between Claude Opus 4.7 and Codex CLI (gpt-5.5). Two rounds of
independent review + cross-critique surfaced one factual correction
(English is the ERC evaluation working language, not a hard legal
submission requirement) and one architectural correction (a
submodule against `mad-research` does not solve the Claude Code
skill-install problem). A functional test had Codex execute the
Basic prompt against a deliberately-flawed synthetic SH1 draft and
confirmed the schema, evidence discipline, and score caps work as
designed.
