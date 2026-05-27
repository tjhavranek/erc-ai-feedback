# Example outputs from the pilot

What the Basic pre-review produced when Codex CLI (gpt-5.5) was
run as the AI receiving the prompt, against the synthetic PE6
and SH3 fixtures in this directory's parent.

Provided here so a workshop leader or interested reader can see
the tool's actual output without running it themselves. The
outputs are not edited; the "Pilot self-assessment" sections at
the end of each file are Codex's own candid notes on what it
triggered and why.

## Files

- [`pe6_basic_critique_codex.md`](pe6_basic_critique_codex.md) —
  Basic critique on the PE6 stress-test fixture. Codex fired
  CAP-A, CAP-B, and CAP-E; did not fire CAP-C, CAP-D, or CAP-F.
  Step-1 risk: high.
- [`sh3_basic_critique_codex.md`](sh3_basic_critique_codex.md) —
  Basic critique on the SH3 calibration fixture. Codex fired
  CAP-A and CAP-B only (matching the fixture's expected
  findings); did not over-fire. Step-1 risk: medium.

The PE6 output was a partial match against the
[expected findings](../pe6_expected_findings.md) annotation. See
the v0.2.0 entry of [`../../../CHANGELOG.md`](../../../CHANGELOG.md)
for the honest discussion of why CAP-C, CAP-D, and CAP-F did not
fire when the annotation expected them to.

The SH3 output was a clean match against
[the expected findings](../sh3_expected_findings.md). The
calibration test — that the prompt does not over-fire on a
generally strong draft — passed.

## What this is not

These are not the only acceptable outputs. A different model
(Claude Sonnet/Opus, ChatGPT-5, Gemini 2.5 Pro) running the same
prompt against the same fixture will produce slightly different
findings, with different wording, possibly with different cap
calls on the marginal cases. The package's discipline is in the
schema, the rubric, and the cap definitions — not in any
specific provider's exact phrasing.

If you run the prompt against these fixtures with a different
model and find substantively different cap-firing patterns,
please open an Issue. Cross-model variance is informative.
