# Test fixtures

Synthetic ERC Starting Grant proposal drafts used to exercise the
package's prompts. **None of the material here is a real
proposal.** All fictional research, fictional PIs, fictional
publications, fictional collaborators. The fixtures are
deliberately seeded with the failure modes the prompts are
designed to catch — they exist to test whether the tool catches
them.

The fixtures are not for applicants to imitate. Real ERC proposals
should not look like these — these are sloppy on purpose.

## Files

- [`pe6_synthetic_full_proposal.md`](pe6_synthetic_full_proposal.md)
  — full-proposal-stage draft in PE6 Computer Science and
  Informatics. Seeded with weak forms of all six structural
  failures CAP-A through CAP-F. Tests the prompts' handling of
  marginal cap-firing cases: the prompt may fire each cap or may
  correctly read weak-but-present signals as scoring weaknesses;
  both are defensible. See "Why two fixtures with different
  failure profiles" below.
- [`pe6_expected_findings.md`](pe6_expected_findings.md) —
  annotation describing what the prompt should produce on the
  PE6 fixture, including expected cap firings and expected
  workshop-value calls.
- [`sh3_synthetic_full_proposal.md`](sh3_synthetic_full_proposal.md)
  — full-proposal-stage draft in SH3 The Social World and Its
  Interactions. Seeded with only CAP-A and CAP-B firing; CAP-C
  through CAP-F should *not* fire. Tests calibration: the
  prompts should not over-fire on a generally strong draft.
- [`sh3_expected_findings.md`](sh3_expected_findings.md) —
  the matching annotation, including explicit "the tool should
  NOT do this" calibration anti-patterns.

## Why two fixtures with different failure profiles

The PE6 fixture tests **marginal cap-firing cases**. Its
expected-findings annotation seeds all six caps to fire, but the
seeded failures are deliberately weak rather than absent. The CV
has first-author labels (a partial originality signal) but no
contribution narrative; the B2 risk section exists but is
perfunctory; the PI's algorithmic background touches the
project's interpretability methods but does not bridge to the
biological domain. A well-calibrated prompt may fire each of
these caps or read them as scoring weaknesses rather than
cap-triggering absences. Both readings are defensible — the
prompt's cap definitions are conjunctive ("all three signals
absent", "no risk content present"), and a partial signal does
not strictly meet the conjunction.

The SH3 fixture tests **clear cap-firing cases**. Its
expected-findings annotation seeds only CAP-A and CAP-B; the CV
is genuinely strong, the cross-panel justification is specific,
the risk plan in B2 is detailed. A well-calibrated prompt should
**not** fire CAP-C, CAP-D, CAP-E, or CAP-F here, regardless of
provider.

In the v0.2 pilot (documented in
[`../../CHANGELOG.md`](../../CHANGELOG.md)), Codex acting as the
receiving model passed the SH3 calibration test cleanly and
produced a partial-firing pattern on PE6 (caps A, B, E fired;
C, D, F did not). The under-firing on PE6 is the marginal-case
test working as intended: weak-but-present signals are read as
scoring weaknesses (which they are), not as cap absences (which
they are not). The expected-findings annotation for PE6 is a
test oracle that documents an upper bound on what the prompt
*could* fire, not a guarantee of what every model will fire.

The package's calibration story therefore needs both fixtures:
SH3 verifies the prompt does not over-fire on a strong draft;
PE6 verifies that when failures are present (even weakly), the
prompt finds them as findings (whether or not it formally fires
the cap). Cap firing is a discrete signal; finding-level severity
is the continuous one.

## How to use the fixtures

Two main uses:

1. **Regression testing of the prompts.** When a prompt is
   changed, run the changed prompt against both fixtures and
   compare the output to the expected findings. Any deviation is
   either a calibration improvement (the change is intentional)
   or a regression (the change introduces over- or under-firing).
   Document in CHANGELOG.

2. **Demonstrating the package's behaviour to a sceptical
   reader.** A workshop leader who wants to see what the tool
   actually produces can run the Basic prompt against a fixture
   and read the output. The output should align with the
   expected findings.

## Authorship

Both fixtures were generated synthetically by Claude Opus 4.7 on
2026-05-27 under tightly constrained briefs that specified which
caps to seed and which to leave clean. The contents are
fictional. Any resemblance to real proposals, researchers, or
publications is coincidental and unintentional.

## Licence

Same as the rest of the package (MIT). Fixtures are intended for
reuse: forks of this package that adapt prompts for other
funding schemes can use the fixtures as the basis for their own
schemes' test material, with the caveat that the cap structure
here is calibrated for ERC StG/CoG and would not transfer
without adaptation.

## What not to commit here

- Real proposal content. Ever. Not even sanitised.
- Real evaluation reports.
- Fixtures based on identifiable real researchers or
  recognisable real projects.

If a future fixture needs to look more realistic than these
synthetic ones, generate it the same way: a tight brief and
synthesis under controlled constraints, with the fictional
nature marked at the top of every file.
