# Mock interview preparation (question bank + answer stress test)

For ERC Starting and Consolidator Grant applicants who have been
invited to Step 2 of their evaluation and need to prepare for the
panel interview.

## Scope

The Step 2 panel interview is roughly thirty minutes: a short
presentation by the PI, then questions from the panel members
(panel format varies; the panel may use points raised in the
written remote-referee reviews to formulate questions, but the
remote referees themselves do not attend the interview).
The interview tests judgement under pressure, panel chemistry,
clarity of communication, and command of the proposal's details.
all of which a human mock panel (a workshop simulation, or a few
senior colleagues running questions) judges far better than any
AI.

This directory therefore does *not* attempt to be a mock
interview reviewer. It is a **question bank generator** and an
**answer stress tester**. Two roles a model can do well:

1. Generate the likely panel questions the applicant should be
   ready for, grounded in the applicant's own draft.
2. Take the applicant's draft answer to a question and stress-test
   it: find weak responses, unsupported claims, places the
   applicant assumes the panel will accept a defence they would
   not actually accept.

A human mock panel still judges live performance.

## Files in this directory

- [`01_question_bank.md`](01_question_bank.md): prompt that
  generates a question bank from the applicant's draft. About
  20-30 questions split into categories (scientific question,
  methodology, risk and contingency, PI fit, panel-specific
  follow-ups, hostile questions).
- [`02_answer_stress_test.md`](02_answer_stress_test.md):
  prompt that takes a question and the applicant's draft answer
  and stress-tests the answer. Used iteratively: applicant
  drafts answers to the question bank, runs each one through
  the stress test, revises.

## When to use this

After Step 2 invitation has arrived. Before the human mock
panel (the Czech ERC Expert Group's mock interview sessions,
which happen for Step-2 selectees about a month before the
real interview). Bring better-rehearsed answers to the human
mock panel.

## How to use

The realistic workflow is:

1. Run `01_question_bank.md` once with your draft. Get the
   question bank.
2. For each question, write a one-paragraph draft answer.
   Aim for 60 seconds spoken.
3. Run `02_answer_stress_test.md` on each draft answer.
4. Revise the draft answers based on what the stress test
   surfaces.
5. Memorise the answers loosely enough that you can adjust to
   the actual phrasing of the panel question.
6. Bring the revised answers to your human mock panel; let
   the human panel judge delivery, panel chemistry, and the
   live experience.

The whole sequence is about ninety minutes of applicant time, not
counting the answer drafting.

## What this does not do

- Judge live performance. A model cannot do that.
- Predict the panel score from the interview. A model cannot
  do that either.
- Replace a human mock panel. This is preparation *for* the
  mock panel, not a substitute.

## Privacy

Same as the Basic pre-review. The applicant's draft and draft
answers leave the local machine when pasted into a chat. Use a
paid tier with training opt-out, or sanitise. The question bank
itself does not contain proposal content beyond the question
text, so question banks can be shared more freely than draft
content if a workshop reader wants to see them.

## Status

Shipped in v0.2; maturity is early. Has not yet been used in a
real Step-2 interview cycle. Applicants who use it: please
report whether the questions actually surfaced at the real
interview, what the stress test caught that was useful, and
what the stress test missed. Open an Issue (desensitised) with
the report.
