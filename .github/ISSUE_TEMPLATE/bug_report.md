---
name: Bug report
about: Report a misfire, missed finding, hallucinated quote, broken link, or stale instruction.
title: "[bug] "
labels: bug
---

**Important: do not paste real proposal content in this Issue.** If
you need to illustrate the problem, paraphrase the relevant
structural feature in desensitised terms. The test fixtures in
`tests/fixtures/` are synthetic for exactly this reason; if you
can reproduce the bug on one of them, that is the cleanest report.

## What happened

Describe what you ran, against what kind of draft (stage,
domain, but no identifying content), with which provider and model.

## What you expected

Describe what the prompt's documentation says should happen.

## What actually happened

The specific output the model produced, or the specific failure
in the documented flow. **Redact or paraphrase the model output
if it contains real proposal quotes**, unless you reproduced the
bug on one of the synthetic fixtures (in which case the output
is safe to paste).

## Severity (your judgement)

- [ ] **Release-blocking**: hallucinated quote, schema deviation,
      provider-name or URL mismatch that wastes the reader's time.
- [ ] **Calibration issue**: a cap should have fired and did not, or
      a cap fired where the element it tests for is clearly present.
- [ ] **Documentation drift**: instructions in the README or a
      sub-module README do not match the current state of the
      package.
- [ ] **Other**:

## If you can reproduce on a fixture

If the bug reproduces on `pe6_synthetic_full_proposal.md` or
`sh3_synthetic_full_proposal.md`, please include the prompt you
used, the stage you declared, and the output (or a short quote of
the offending section). This makes the bug trivially verifiable.

## If the bug is provider-specific

If the misfire only happens on one model, name it. The package
recommends "current frontier models"; if Gemini 2.5 Pro hallucinates
where Claude Opus does not, that is informative.
