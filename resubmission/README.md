# Resubmission audit

For ERC Starting and Consolidator Grant applicants who received a
B (or C, in the case of a Step 1 rejection) on a previous
submission and are preparing a new submission. The audit
checks whether the new draft addresses the weaknesses the previous
evaluation report flagged.

## Scope

The ERC sends each evaluated applicant an Evaluation Report
containing the panel score (A invited / A not invited / B / C at
Step 1; A / B at Step 2), the panel comment, and the individual
reviews. Applicants resubmitting in a future call are expected to
have addressed those criticisms — not necessarily to have
adopted every suggestion, but to have engaged with each one
visibly enough that a new panel can see the engagement.

This directory provides a single prompt that takes the previous
evaluation report and the new draft and reports, point by point,
whether each previous criticism has been addressed, partially
addressed, or not addressed.

It is **not** a predictor of resubmission success. It is a
checklist tool that surfaces what an experienced reader who
reads the previous report and the new draft side-by-side would
catch.

## When to use

After a rejection on a previous ERC StG / CoG call (B at Step 1,
or A-non-invited at Step 1 if revising for next call, or B at
Step 2), once a new draft is at Part I + CV or Full proposal
stage. Run after the Basic or Standard pre-review has been
done first — the resubmission audit assumes the new draft is
already structurally sound on its own; it adds the historical
dimension.

## Files in this directory

- [`prompt.md`](prompt.md) — single self-contained prompt for the
  resubmission audit. Takes (previous evaluation report + new
  draft) as input.

## How to use

1. Save the previous Evaluation Report locally. Most applicants
   receive this as a PDF from ERC; copy the panel comment and
   individual reviews into a text file. The applicant identity
   is already known to the maintainer of the new draft; sanitise
   only if sharing the input with anyone else (e.g., a workshop
   reader).
2. Open a paid chat session with training opt-out.
3. Paste the contents of [`prompt.md`](prompt.md) between the
   BEGIN and END markers.
4. After the prompt, paste:
   - The previous Evaluation Report (panel comment + individual
     reviews).
   - The new draft (current Part I + CV, or Full proposal).
5. The model returns a point-by-point engagement audit: each
   distinct criticism from the previous report, paired with a
   verdict on whether the new draft addresses it.

## What the audit produces

For each criticism in the previous report:

- A verbatim quote of the criticism.
- Where in the new draft the engagement (if any) appears, with
  a quote.
- A verdict: **addressed**, **partially addressed**, or **not
  addressed**.
- A short note on whether the engagement is likely to convince
  a new panel reader.

Plus a summary: how many of the previous criticisms are
addressed / partially / not addressed; whether the pattern of
engagement is itself signal-positive (the panel sees that the
applicant has read the report carefully) or signal-negative
(the new draft ignores the report).

## Privacy

Previous evaluation reports contain panel-member identifying
information (reviewer roles, sometimes recognisable writing
voice). They are confidential to the applicant and the ERC.
Apply the same provider settings as for the proposal draft:
paid tier, training opt-out, do not paste in any context where
the report could be re-used.

If the previous report is from a recent call (last twelve
months), the reviewers may still be identifiable from internal
ERC publications of panel member lists. Treat the report's
content as confidential to the resubmission preparation.

## Status

Shipped in v0.2; maturity is early. Has not yet been tested on
a real resubmission cycle (and would not be tested by the
maintainer: real evaluation reports are confidential to the
applicant). Applicants who use it on a real resubmission:
please report (desensitised) what the audit caught, what it
missed, and whether the new panel's response aligns with what
the audit predicted.

## What this does not do

- Predict the new panel's score. No tool can.
- Audit the new draft's standalone quality — use Basic,
  Standard, or Advanced for that.
- Provide field-specific advice on whether a specific
  criticism was valid in the first place. Some criticisms in
  Evaluation Reports are themselves contested by the
  applicant; the audit notes engagement, not validity.
