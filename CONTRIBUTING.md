# Contributing to erc-ai-feedback

This package is small and the contribution surface is small. Most
useful contributions are reports of what the tool catches and what
it misses on real ERC drafts, plus factual corrections to the
locked rubric when the ERC rule set changes.

## Who is this for

This package was created specifically for ERC Starting and
Consolidator Grant applicants and the people who support them
(workshop leaders, mentors, research-office staff). The Czech ERC
support ecosystem — the Technologické centrum AV ČR national
Expert Group and the Charles University ERC Přípravka — was the
specific context in which the package was developed. Members of
that ecosystem, and any other ERC workshop reader anywhere, are
welcome to open issues or pull requests.

## Useful contributions

### Bug reports

Open an Issue under the "Bug report" template if:

- The Basic prompt fails to fire a cap on a draft where the
  expected weakness is clearly present. (Describe the weakness
  pattern in desensitised terms; do **not** paste real proposal
  content into a public Issue.)
- The Basic prompt fires a cap where the relevant element is
  clearly present. (Same desensitisation rule.)
- A model the package recommends produces a hallucinated quote
  (quoted text that does not appear in the source draft) — this
  is a release-blocking failure mode and we want to know.
- The Standard, Advanced, Mock interview, or Resubmission flows
  break in a reproducible way. (Include the model and provider,
  the stage declaration, and the failure mode.)
- Privacy-control instructions in the README are out of date
  for any of the named providers.

### Factual corrections

Open an Issue or a Pull Request under "Factual correction" if:

- The Criterion 1 or Criterion 2 sub-question wording in
  [`shared/rubric_locked.md`](shared/rubric_locked.md) does not
  match the current Annex 1 of the *Guide for Peer Reviewers*.
- A page limit, eligibility window, time commitment, panel-score
  scale, or panel-structure descriptor in the rubric or prompt
  does not match the current ERC Work Programme.
- A source URL has moved.

For factual corrections, please cite the current ERC document and
the version date so the maintainer can verify and update.

### Suggestions for the prompt

The prompt's structural score caps (CAP-A through CAP-F) were
calibrated against the failure modes observed in the 2026 Czech
ERC workshop cycle. ERC panel veterans who recognise a different
recurring failure mode that the caps do not cover — and that a
panel reviewer would catch in 60 seconds — are welcome to open
an Issue describing the pattern. New caps will not be added
casually (each addition is a calibration commitment), but
documented gaps inform v0.4 and later.

### Workshop-use reports

If you have used the tool with applicants in a workshop and have
notes on what it caught vs what your human review caught that
the tool missed, please open an Issue with a desensitised summary.
This is the most direct way to improve calibration.

## What not to contribute

- Real proposal content. Do not paste real or recognisable
  applicant material in any public Issue or Pull Request. The
  test fixtures in [`tests/fixtures/`](tests/fixtures/) are
  synthetic for exactly this reason.
- Real Evaluation Reports. These are confidential between the
  applicant and the ERC.
- A new mode without prior discussion. The package's parsimony
  is intentional. Open an Issue first to discuss whether a new
  module belongs.
- AI-marketing language. The README and prompt register were
  rewritten to a dry institutional tone by intent; contributions
  that drift toward marketing prose (the words "comprehensive",
  "robust", "leverages", "harness", "seamless", and similar are
  out) will be edited.

## How to propose a change

1. **Small fixes** (typo, URL update, factual correction with
   citation): direct Pull Request to `main`. Reference the source
   in the PR description.
2. **Calibration changes** (cap definitions, prompt wording,
   schema): open an Issue first. The Basic prompt is a calibrated
   instrument; changes need cross-fixture verification before
   merge.
3. **New modules** (a new pre-review variant, a new field
   adaptation): open an Issue describing the use case and the
   audience. Most v0.4 candidates will go through this path.

## Audit discipline

Substantive changes to the prompts or rubric are audited before
merge using the same MAD discipline that produced v0.1 through
v0.3:

- A prompt or rubric change is run against both
  [`tests/fixtures/pe6_synthetic_full_proposal.md`](tests/fixtures/pe6_synthetic_full_proposal.md)
  and
  [`tests/fixtures/sh3_synthetic_full_proposal.md`](tests/fixtures/sh3_synthetic_full_proposal.md)
  to check that cap-firing behaviour matches the expected-findings
  annotations.
- A README rewrite is audited for AI register tells (the list in
  the maintainer's working notes) by an independent model pass.
- The CHANGELOG entry for any v0.X.Y release records what was
  audited and what was caught.

## Licence on contributions

By submitting a Pull Request you agree your contribution is
licensed under the same MIT terms as the rest of the package.
The ERC source material cited in the rubric remains the property
of the European Research Council Executive Agency and is
referenced under fair use; do not modify those quoted passages
without updating the citation.

## Contact

GitHub Issues and Pull Requests are the primary channel. For
questions specific to the Czech ERC support cycle, the
maintainer can be reached via the contact details linked from
[CITATION.cff](CITATION.cff).
