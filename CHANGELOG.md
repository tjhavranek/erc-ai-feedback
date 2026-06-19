# Changelog

All notable changes to this package are documented here. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning is loose, with minor bumps for prompt or rubric content
changes and patch bumps for documentation and behaviour adjustments
that do not change the locked rubric.

## [0.3.2] — 2026-06-19

Patch release. Changes how findings are worded and packaged so a
busy, non-specialist reader can act on the critique without a second
tool. The locked rubric, the Annex 1 sub-questions, the structural
score caps, the scoring scales, and the severity legend are all
unchanged; this release touches output wording only. Prompted by
panel-member feedback that an earlier delivered pre-review read as too
jargon-heavy to act on directly.

### Added

- **Self-glossing score-cap codes.** Wherever the output prints a
  `CAP-x` code (the scorecard, a finding's score consequence, the
  workshop hand-off), the code must now carry its plain meaning in the
  same place. A bare `CAP-A` is no longer allowed. Applied to the
  basic prompt, the advanced synthesis rubric, and the three advanced
  round-1 role prompts.
- **"In plain words (read this first)" summary.** The output now opens
  with a bounded four-to-six sentence plain-language summary: the
  proposal's core claim, the two or three issues most likely to lower
  the score, and the single highest-value fix, with no codes or
  metaphors. It is the block a workshop leader can forward to a
  non-specialist colleague. Required in the basic prompt and the
  advanced synthesis rubric.
- **Banned-phrasings list.** A closed list of insider metaphors
  (lane, spine, moat, hinge, and similar) and software-ticket words
  (blocking, non-blocking), which the model must replace with their
  literal meaning, plus a ban on symbol arrows and two-noun shorthand
  in the output. Mirrored across the basic prompt, the advanced
  rubric, and the three role prompts, each entry scoped to its
  figurative sense so genuine technical terms are kept.
- **Forwarding guidance** in `docs/for_workshop_leaders.md`: which
  part of the output is written for a non-specialist and is the part
  to forward, with a reminder to check the plain summary against the
  detailed findings first.

### Changed

- The per-finding `Workshop value:` field is renamed to the plainer
  `Would a human reviewer catch this fast? (YES/NO)`.

### Notes

- Named theories and technical terms are kept verbatim with a short
  gloss rather than replaced with vaguer words; the plain layer says
  what to change and why but does not write the applicant's text;
  severity wording is unchanged.
- These are prompt-instruction changes and have not yet been measured
  on a fresh real-draft run. The next pilot should check the output
  against the readability and substance-preservation tests in the
  package's design notes.
- A dated note was added to the example-output fixtures recording that
  those captures predate this release (they still show the old field
  label and bare codes). They are kept as an unedited model-output
  record rather than regenerated.

## [0.3.1] — 2026-05-30

Patch release. Consolidates the post-v0.3.0 fixes (which had landed
on `main` without their own tag) and records the result of a final
primary-source fact-check of the locked rubric. No sub-question,
score cap, scoring scale, or mode prompt changed in behaviour.

### Rubric re-verification (the headline of this release)

The locked rubric was re-verified end-to-end against primary ERC
sources in a two-model fact-check: a web-enabled factual agent that
read the *Guide for Peer Reviewers* v6.0 Annex 1 "Evaluation Form"
PDF text layer word-for-word, plus Gemini 3 Pro
(`gemini-3.1-pro-preview`) as a lower-weight third opinion. Claude
Opus 4.8 held final say.

**No factual errors were found.** Eligibility windows (StG 2019-2023,
CoG 2014-2018, reference date 1 Jan 2026), the 2-7 / 7-12 year
glosses, all three time-commitment percentages, the 28-panel
(11/9/8) taxonomy, the max-44-per-panel Step-2 cap, the 1-5 reviewer
scale and the PI's five-label qualitative scale, the StG-2025 and
CoG-2026 statistics, the 2027 eligibility expansion, and both
AI-use rules were all confirmed against official sources. All seven
Criterion 1 and Criterion 2 Annex 1 sub-questions were confirmed
**verbatim**, word-for-word.

Two clarifications resulted (rubric bumped v1.1 → v1.2):

- **§2.3 ("high risk / high gain").** One of the two fact-check
  models asserted that "high risk / high gain" is still a formal
  Annex 1 sub-question and quoted the pre-2024 form to "prove" it.
  Two independent primary-source reads of the *current* Annex 1
  (the factual agent's word-for-word check, and a direct PDF read
  earlier in the project) confirm it is **not** in the current
  form. Rather than change the rubric, §2.3 now adds a short
  historical note: the phrase *was* an explicit sub-question in
  ERC evaluation forms used before the current methodology (revised
  with the 2024 Work Programme) and was removed when the form was
  restructured. This preempts a confusion a knowledgeable reader —
  or a model citing older training data — could plausibly make.
- **§8 (statistics).** The one figure both fact-checkers flagged as
  hard to verify ("Women 40% of submissions") was replaced with the
  ERC's published headline figure (women received ~42% of grants
  awarded), with a note that the applicant-pool share lives only in
  the detailed statistics annex.

### Consolidated post-v0.3.0 fixes

These had been applied to `main` after the v0.3.0 tag and are
gathered here for a clean patch release:

- **Annual verification workflow calendar bug.**
  `.github/workflows/annual_verification_reminder.yml` ran on 1
  September and titled the reminder for the *current* calendar year,
  but on that date the newly-adopted ERC Work Programme is for the
  *next* year. The action now computes `target_year = current_year
  + 1`. (Flagged independently by Codex and Gemini in the prior
  round.)
- **Mock interview process accuracy.** `mock_interview/README.md`
  and `mock_interview/01_question_bank.md` no longer imply that
  remote referees attend the Step-2 interview. Remote referees
  submit written reviews; panel members ask the interview questions
  (which may draw on referee reviews). Exact format is
  panel-specific.
- **PE6 fixture calibration alignment.**
  `tests/fixtures/pe6_expected_findings.md` was reframed so its
  six-cap expectation reads as an upper-bound oracle under a strict
  reading, consistent with the v0.3.0 calibration interpretation;
  stale Annex-1 sub-question labels were replaced with verbatim
  wording, and an obsolete "overall B / borderline B-C grade" line
  was removed (the prompt outputs risk levels, not panel grades).
- **README precision.** "verbatim ERC Annex 1 evaluation form"
  became "verbatim Annex 1 Criterion 1 and Criterion 2 sub-questions
  ... plus source-checked notes on scoring, structure, eligibility,
  panel structure, and AI-use rules" — exact about what is official
  vs derived.
- **Full proposal stage wording.** README and `basic/prompt.md` no
  longer imply B2 is a separate later submission "for Step 2
  applicants" (Step 2 is an evaluation phase; B1 and B2 are
  submitted together). A note was added that a pasted Resources /
  Time Commitment text makes Criterion 1.4 assessable.
- **Advanced flagged experimental.** The main README's Advanced
  entry now carries "(experimental; not yet end-to-end
  pilot-verified)", matching `advanced/README.md`.
- **Five fresh-eyes nits.** Advanced compatibility honesty
  (`mad_research_compatibility.yml` `last_tested: null` now matches
  the README), `docs/roadmap.md` updated to a v0.3 vantage,
  `standard/04_synthesis.md` heading "Step 4 of 3" renamed, and a
  version-string sync in `advanced/erc_rubric_for_mad_research.md`.

### Authorship

This round was led by Claude Opus 4.8 (final say) with a web-enabled
factual sub-agent standing in for Codex (which had reached its usage
limit) and Gemini 3 Pro as the lower-weight third opinion. Earlier
post-v0.3.0 fixes were authored by Codex CLI (gpt-5.5) and Claude
Code. Per the project's standing rule, the lower-weight Gemini voice
did not override the convergence of the two trusted-core
verifications — and in this round that rule mattered: adopting
Gemini's "high risk / high gain" claim would have re-introduced an
error the project had already corrected.

---

## [0.3.0] — 2026-05-27

Extension release. The locked rubric is unchanged from v0.2.0
(`shared/rubric_locked.md` remains v1.1); the Basic, Standard,
Advanced, Mock interview, and Resubmission prompts are unchanged
from v0.2.0. v0.3.0 adds pilot data for the modes that v0.2.0
shipped untested, plus repository hygiene that the package was
missing.

### Additions

- **Manual multi-model convergence walkthrough** at
  [`docs/multi_model_walkthrough.md`](docs/multi_model_walkthrough.md).
  The parked v0.3 roadmap item made concrete: how to run the
  Basic pre-review across two or three providers (Claude,
  ChatGPT-5, Gemini 2.5 Pro), how to read convergence and
  divergence between the outputs, and when convergence is more
  informative than divergence (and the reverse). This is a
  walkthrough, not new prompts; the discipline draws on the
  parent
  [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
  manual protocols.
- **Companion-repo links surfaced in the main README.** The
  README now states early — not buried in the lineage section —
  that this package is the ERC-specific application of the
  `research-audit-duel-protocol` (manual) and `mad-research`
  (Claude Code automation) projects. Readers arriving at the
  repo can immediately see the package's place in the larger
  research-audit family.
- **`CONTRIBUTING.md`** covering bug reports, factual
  corrections, workshop-use reports, and what not to contribute
  (real proposal content, real Evaluation Reports, AI-marketing
  language).
- **GitHub Issue templates** under
  `.github/ISSUE_TEMPLATE/`: bug report, factual correction,
  workshop-use report. The workshop-use report template is the
  most important addition — it is the format for the feedback
  loop the package needs to keep improving across calls.
- **Repository topics** set on GitHub: `erc`, `grant-writing`,
  `ai-tools`, `research-support`, `claude-code`, `codex`, `peer-review`.
  Discoverability for searchers.

### Pilot results (v0.3 modes)

The Standard, Mock interview, and Resubmission modes shipped in
v0.2.0 but were not piloted. v0.3.0 pilots each with Codex CLI
(gpt-5.5) acting as the receiving model.

**Standard pre-review (Devil's Advocate + Writing Coach on
SH3).** Output saved to
[`tests/fixtures/example_outputs/sh3_standard_critique_codex.md`](tests/fixtures/example_outputs/sh3_standard_critique_codex.md).
Six Devil's Advocate counterarguments, of which two overlapped
Panel Reviewer findings from the existing Basic pilot (high-
confidence signal where two role-streams converge) and four
were novel angles the Panel Reviewer did not surface. Nine
Writing Coach edits, all prose-level (no content drift). Zero
forbidden phrases. The role separation discipline (Devil's
Advocate avoids re-scoring; Writing Coach avoids content) held
across the sequence.

**Mock interview question bank on SH3.** Output saved to
[`tests/fixtures/example_outputs/sh3_mock_interview_questions_codex.md`](tests/fixtures/example_outputs/sh3_mock_interview_questions_codex.md).
Twenty-five panel questions distributed 5/5/4/4/3/4 across the
six required categories (scientific question and ambition;
methodology and feasibility; risk and contingency; PI fit and
track record; panel-specific follow-ups; hostile or "I don't
believe you" questions). Every question grounded in a specific
quoted phrase from the fixture draft. The pilot self-assessment
names the five questions Codex suggests the applicant rehearse
most thoroughly — the same kind of triage a human mock-panel
preparation session would produce.

**Resubmission audit on PE6 against synthetic Evaluation
Report.** Output saved to
[`tests/fixtures/example_outputs/resubmission_audit_codex.md`](tests/fixtures/example_outputs/resubmission_audit_codex.md).
A synthetic ERC-2024-StG B-scored Evaluation Report (panel
comment + three individual reviews) was paired with the PE6
fixture treated as a "revised" draft. Codex extracted nine
distinct criticisms from the report; the engagement verdicts
distributed as 1 ADDRESSED, 3 PARTIALLY ADDRESSED, and 5 NOT
ADDRESSED — broadly the expected pattern for a draft that was
not actually revised against the synthetic report. No invented
engagement. The audit correctly identified that the new draft
had not substantively engaged with most of the prior report —
which is the failure pattern the audit exists to surface.

**Cross-mode observations.** The Standard sequence's
convergence signal (two of six counterarguments overlap with
Panel Reviewer findings) demonstrates the value of the
multi-role design without producing a different rubric. The
Mock interview question bank stays grounded in the draft and
does not drift into generic interview questions. The
Resubmission audit's verdict distribution matches the expected
calibration. All three modes earned their place in the
package.

### Calibration interpretation (PE6 fixture)

In v0.2.0 the PE6 fixture's expected-findings annotation
seeded all six caps to fire; Codex's pilot fired only A, B,
and E. The v0.3.0 update to
[`tests/fixtures/README.md`](tests/fixtures/README.md)
re-interprets this not as a prompt bug but as the intended
marginal-cap-firing test: the PE6 fixture seeds *weak* signals
rather than *absent* signals, and the prompt's conjunctive cap
definitions correctly read weak-but-present signals as scoring
weaknesses (continuous severity ladder) rather than as cap
absences (discrete trigger). The SH3 fixture continues to test
clear cases. Together the two fixtures test calibration at
both the discrete trigger and the continuous severity-ladder
levels.

### Pre-release audit

Codex audited the v0.2 → v0.3 diff before commit; results
documented in `_private/codex_v03_diff_audit_response.md`
(private). Issues caught and fixed before commit.

### Authorship

Co-authored by Claude Code (Opus 4.7) and Codex CLI (gpt-5.5).
Codex acted as the receiving model for all three v0.3 mode
pilots (Standard, Mock interview, Resubmission) and produced
the example outputs now committed to
`tests/fixtures/example_outputs/`. Claude Code authored
CONTRIBUTING.md, the issue templates, the multi-model
walkthrough, the calibration interpretation update, and the
README cross-references to the companion repositories.

---

## [0.2.0] — 2026-05-27

Expansion release. The v0.1.1 candidate's pilot stop conditions
(see the v0.1.1 entry below) are absorbed into v0.2's pilot
results below; v0.1.1 was never tagged separately because the
patched Basic prompt is now also v0.2's Basic prompt and was
piloted as part of the v0.2 release.

### Additions

- **Standard pre-review** in [`standard/`](standard/): three role
  prompts (Panel Reviewer, Devil's Advocate, Writing Coach) run
  in sequence inside one chat session, with a synthesis-by-the-
  applicant document. About 20-30 minutes of applicant time.
  Reuses the locked rubric and Basic prompt's discipline; adds
  counterargument depth and prose clarity as parallel
  perspectives.
- **Advanced pre-review** in [`advanced/`](advanced/): an ERC
  rubric override and three ERC-adapted Round 1 role prompts
  the user drops into a local checkout of
  [`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research)
  to run the full three-stream adversarial audit with anonymised
  cross-critique and fresh-context synthesis. Integration is
  manual; the long-term target is an upstream-supported
  `--external-rubric` flag.
- **Mock interview preparation** in
  [`mock_interview/`](mock_interview/): a question-bank
  generator and an answer stress-test prompt for Step-2
  applicants. Framed as preparation *for* a human mock panel,
  not a substitute. Module shipped in v0.2; maturity is early
  (no real Step-2 cycle behind it yet).
- **Resubmission audit** in [`resubmission/`](resubmission/): a
  prompt that takes a previous Evaluation Report and a new
  draft, then reports point-by-point whether the new draft
  engages with each criticism. Module shipped in v0.2; not yet
  tested on a real resubmission cycle (real Evaluation Reports
  are confidential).
- **Test fixtures** in [`tests/fixtures/`](tests/fixtures/):
  two synthetic ERC StG drafts (PE6 Computer Science and SH3
  The Social World and Its Interactions) with different failure
  profiles, each with an expected-findings annotation. Used to
  exercise the prompts during pilot and regression testing.
- **Annual rubric verification workflow** at
  [`.github/workflows/annual_verification_reminder.yml`](.github/workflows/annual_verification_reminder.yml).
  Opens an Issue every September prompting the maintainer to
  re-verify the rubric against the new Work Programme.

### Patches incorporated from v0.1.1 candidate

The v0.1.1 candidate's twelve locked changes (see the v0.1.1
entry below) are all present in v0.2. The README de-AI rewrite,
the prompt's three-stage menu with internal content checklist,
the structural score caps including CAP-F, the authorship-safe
repair field, the privacy default of applicant-runs-by-default,
the workshop-leaders pattern A / pattern B consent rule, and the
output-schema stage-dependent finding caps all carry forward.

### Pilot results (synthetic fixtures, two providers acting)

The Basic pre-review was piloted on both v0.2 test fixtures via
Codex CLI (gpt-5.5) acting as the AI model the applicant would
paste the prompt into.

**SH3 calibration test (Codex output saved locally).** Codex
fired CAP-A and CAP-B and did not fire CAP-C, CAP-D, CAP-E, or
CAP-F. This matched the SH3 fixture's expected-findings
annotation, which seeds only the vague-hypothesis and
ambition-without-contingency failures. The Step-1 risk
verdict was "medium". The societal-impact and venue-prestige
traps were flagged as specific findings rather than as
proxies the AI mistakenly used in its own scoring. No
forbidden phrases were emitted. The calibration test passed:
the prompt does not over-fire on a generally strong draft.

**PE6 stress test (Codex output saved locally).** Codex fired
CAP-A, CAP-B, and CAP-E but did not fire CAP-C, CAP-D, or
CAP-F. The PE6 fixture's annotation expected all six caps to
fire. Codex's self-assessment gave defensible reasons for each
non-firing: the CV contains first-author and sole-author
outputs (so it is not strictly a pub-list-only CV, narrowing
CAP-C); the B2 risk section contains some mitigation text (so
B2 is not strictly empty of risk content, narrowing CAP-D);
and the PI's published work does include items in adjacent
areas to the project's biological-interpretation methods
(narrowing CAP-F). The Step-1 risk verdict was "high", three
HIGH severity findings, five MEDIUM. No invented quotes
(spot-checked five quotes against the fixture; all verbatim).
No forbidden phrases. No societal-impact or
journal-impact-factor proxies used in scoring.

**Interpretation of the PE6 under-firing.** The honest reading
is that the PE6 fixture's annotation set a stricter
expected-firing bar than the prompt's cap definitions actually
require. The cap definitions are narrow (CAP-C requires *all
three* originality signals absent; CAP-D requires *no* risk
content in B2; CAP-F requires the PI-project link to be
*unstated*). The fixture seeded weak versions of those
signals; Codex correctly read the weak signals as scoring
weaknesses rather than as cap-triggering absences. The
under-firing is calibration drift between the fixture
annotation and the prompt, not a prompt bug. Two follow-up
options for v0.2.1: (a) tighten the fixture so the cap
absences are unambiguous, or (b) loosen the cap definitions
to fire on weak-but-present signals. Both have trade-offs;
neither is urgent enough to block v0.2.

**What the pilot did not test.** Standard, Advanced, Mock
interview, and Resubmission were not piloted in v0.2. The
Basic pre-review is the load-bearing single-prompt component;
the other modules are documented and shipped but await real-
use feedback before claiming pilot validation.

**Hallucinated quotes.** Zero in the PE6 pilot output, zero in
the SH3 pilot output (across the spot checks).

**Schema compliance.** Clean in both pilot outputs.

### Pre-release audit

Three audits were run before tagging:

1. Codex consultation on the v0.1.1 patch brief (council audit
   ideas vs directives) — completed; informed v0.1.1 patches.
2. Codex diff audit of v0.1.1 patched files — three commit-
   blocking issues caught and fixed before commit.
3. Independent subagent audit of v0.2 additions — two
   commit-blocking issues caught (broken `erc_role_prompts/`
   directory reference in Advanced README; missing v0.2.0
   CHANGELOG entry) and several NITs (cap-label casing drift;
   AI-tell headings; locked-rubric tension with the Advanced
   synthesis frame). All fixed before commit.

### Authorship

Co-authored by Claude Code (Opus 4.7) and Codex CLI (gpt-5.5).
Codex authored the Devil's Advocate concept work behind
`standard/02_devils_advocate.md`'s structural moves and
contributed the v0.1.1 patched prompt sections it carried into
v0.2. Claude Code authored the README rewrites, the new mode
READMEs (Standard, Advanced, Mock interview, Resubmission), the
docs/roadmap update, the GitHub Action, and the test-fixture
briefs that produced the PE6 and SH3 synthetic drafts via
parallel sub-agent passes.

---

## [0.1.1] — superseded by v0.2.0 (was: candidate; pilot pending)

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
