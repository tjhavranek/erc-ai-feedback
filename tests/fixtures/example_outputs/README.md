# Example outputs from the v0.2 and v0.3 pilots

What each pre-review prompt produced when Codex CLI (gpt-5.5) was
run as the AI receiving the prompt, against the synthetic PE6 and
SH3 fixtures in this directory's parent.

These are real, unedited model outputs. The "Pilot self-assessment"
section at the end of each file is Codex's own candid note on what
it triggered, what it avoided, and where it noticed ambiguity in
the prompt rules.

## Files

### Basic pre-review (v0.2 pilot)

- [`pe6_basic_critique_codex.md`](pe6_basic_critique_codex.md) —
  Basic critique on the PE6 stress-test fixture. Codex fired
  CAP-A, CAP-B, and CAP-E; did not fire CAP-C, CAP-D, or CAP-F.
  Step-1 risk: high. See the fixture README for why the
  not-firing pattern is the marginal-case test working as
  intended.
- [`sh3_basic_critique_codex.md`](sh3_basic_critique_codex.md) —
  Basic critique on the SH3 calibration fixture. Codex fired
  CAP-A and CAP-B only (matching the fixture's expected
  findings); did not over-fire. Step-1 risk: medium. Calibration
  test passed cleanly.

### Standard pre-review (v0.3 pilot)

- [`sh3_standard_critique_codex.md`](sh3_standard_critique_codex.md) —
  the two prompts that follow Basic in the Standard sequence
  (Devil's Advocate, Writing Coach) run on the SH3 fixture. The
  Panel Reviewer output for this fixture is in
  `sh3_basic_critique_codex.md` (the same file an applicant
  would generate by running Basic first).

### Mock interview preparation (v0.3 pilot)

- [`sh3_mock_interview_questions_codex.md`](sh3_mock_interview_questions_codex.md) —
  question bank generated for the SH3 fixture by running the
  `mock_interview/01_question_bank.md` prompt. Twenty to thirty
  panel-style questions organised into the six categories the
  prompt specifies (scientific question; methodology; risk;
  PI fit; panel-specific; hostile). Each question grounded in
  a specific section of the fixture.

### Resubmission audit (v0.3 pilot)

- [`resubmission_audit_codex.md`](resubmission_audit_codex.md) —
  engagement audit of the PE6 fixture treated as a "revised"
  draft, against a synthetic previous Evaluation Report
  (B at Step 1, ERC-2024 cycle). The synthetic report is
  reproduced inside the pilot prompt at
  `_private/codex_pilot_resubmission.txt` and is not committed
  to the repo because the prompt was a test scaffold, not a
  documented input format. The audit produces a point-by-point
  ADDRESSED / PARTIALLY / NOT ADDRESSED verdict for each
  criticism in the synthetic report, with quote-grounded
  evidence.

## What these outputs are not

They are not the only acceptable outputs. A different frontier
model running the same prompt against the same fixture will
produce slightly different findings, with different wording,
possibly with different cap calls on the marginal cases. The
package's discipline is in the schema, the rubric, and the cap
definitions — not in any specific provider's exact phrasing.

If you run the prompts against these fixtures with a different
model and find substantively different cap-firing patterns,
please open an Issue under the bug-report template. Cross-model
variance is informative.

## Workshop-leader hint

A reader who wants to see what the tool actually produces — and
specifically whether the tool's findings look like the kind of
critique a senior ERC reviewer would write — can read any of
these files end-to-end in about five minutes. The Standard and
Mock interview outputs are longer (the Standard adds the
Devil's Advocate counterargument set on top of Panel Reviewer;
the Mock interview is 20-30 panel questions) but the same time
budget covers them.
