# Example outputs

What each pre-review prompt produced when Codex CLI was run as the AI
receiving the prompt, against the synthetic PE6 and SH3 fixtures in
this directory's parent.

**Start with
[`sh3_basic_critique_codex_v035.md`](sh3_basic_critique_codex_v035.md).**
It is the only capture produced by the current prompt (v0.3.5, Codex
CLI gpt-5.6, Full proposal stage, SH3 fixture), and the only one that
shows what a report actually looks like now: the `In plain words`
opening, cap codes glossed inline, and the 2027 wording of
sub-question 1.2. The other files predate all of that and are kept as
a historical record — see the note below before reading them as
examples.

> **Note (2026-06):** These captures are frozen v0.2/v0.3 pilot
> outputs and predate the v0.3.x readability edits. They still show
> the retired `Workshop value:` field label and bare `CAP-x` codes.
> The current prompts self-gloss each cap code inline (never a bare
> `CAP-x`) and rename that field to `Would a human reviewer catch
> this fast? (YES/NO)`. These files are kept as an unedited
> model-output record, not regenerated — the package's discipline
> lives in the schema, rubric, and cap definitions, not in this
> phrasing.
>
> **Two further gaps, as of v0.3.4.** None of the older captures
> shows the `## In plain words (read this first)` block, which did
> not exist when they were made. And they were scored against rubric
> v1.2, before sub-question 1.2 gained its third clause for the 2027
> calls, so any judgement they make about approach quality at Step 1
> is calibrated to the older form. Treat them as a record of output
> *structure*, not as a current reference for content or wording —
> and use the v0.3.5 capture above for that.

These are real, unedited model outputs. The "Pilot self-assessment"
section at the end of each pilot file is Codex's own candid note on what
it triggered, what it avoided, and where it noticed ambiguity in
the prompt rules.

## Files

### Basic pre-review (v0.3.5, current prompt)

- [`sh3_basic_critique_codex_v035.md`](sh3_basic_critique_codex_v035.md) —
  Basic critique on the SH3 fixture, Full proposal stage, produced by
  Codex CLI (gpt-5.6) against prompt v1.5 on 2026-08-09. Fired CAP-A
  only. Step-1 risk: high. This is the capture to read if you want to
  know what the tool produces today: it opens with the plain-language
  summary, glosses the cap code inline every time it appears, and
  scores 1.2 against the 2027 wording. The `[items]` brackets in the
  workshop hand-off paragraph are deliberate — the prompt leaves them
  for the applicant to fill before sending.

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

## Run-to-run variance, measured

Three runs against this same fixture, at the same model and effort,
were produced while preparing v0.3.4 and v0.3.5, under prompt versions
v1.4 and v1.5. The two versions do not differ in what they ask about
the budget. They
agreed on the substantive diagnosis every time: the causal claim
outruns the observational design, the exposure measures are
under-specified, the attrition figure contradicts the power
calculation, and the budget does not reconcile.

They did not agree on everything. The fixture contains an elementary
arithmetic error the authors planted: fieldwork is budgeted at
EUR 290,000, while the same document prices the survey at EUR 24 per
case for 36,000 completed interviews, which is EUR 864,000. One run of
the three caught that EUR 574,000 gap. Two missed it, including the run
shipped here. No run caught a second planted inconsistency, a pilot
recruitment yield reported as 12.3% in one paragraph and 14% in the
next.

That is worth stating plainly rather than hiding by shipping the run
that happened to score best. An applicant who runs this once should not
assume the arithmetic in their budget has been checked. It is also the
concrete form of the claim made everywhere else in this repository,
that the pre-review does not replace a human reader. A human checking
the numbers line by line, in the budget and in the risk section, catches
both every time. This tool caught one of them in one run out of three.

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
