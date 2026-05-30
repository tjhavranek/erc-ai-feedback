# Locked synthesis rubric — ERC StG / CoG audit

**This file is locked.** It is a six-dimension synthesis frame
that re-projects the same ERC Annex 1 Criterion 1 and Criterion 2
sub-questions (verbatim in [`../shared/rubric_locked.md`](../shared/rubric_locked.md))
into the audit-dimension format mad-research's synthesis expects.
Sub-question wording is identical to `shared/rubric_locked.md`;
the six dimensions are how mad-research scores, not a different
rubric.

When dropped into mad-research at
`~/.claude/skills/mad-research/rubric.md`, synthesis scores against
this rubric exactly as written. Do not edit during a MAD run. If
the ERC rule set changes, update the version, the last-verified
stamp, and re-sync with `shared/rubric_locked.md` in the same
commit.

Version: 1.0 (ERC StG/CoG audit rubric, for mad-research)
Source: `tjhavranek/erc-ai-feedback` v0.3.1, `shared/rubric_locked.md`
(v1.2)
Last verified: 2026-05-30 against ERC Work Programme 2026 and
*Guide for Peer Reviewers — Starting and Consolidator Grant Calls*
v6.0 (30 September 2025). The Annex 1 sub-questions this frame
re-projects were re-confirmed verbatim in the v0.3.1 primary-source
fact-check.

## Six audit dimensions

Synthesis writes a two-to-three sentence prose verdict for each.
No numeric scores; no letter grades. Calibrated prose verdicts.

### 1. Scientific question and ambition

Does the proposal state an identifiable, falsifiable scientific
question within the first page of Part I? Are the objectives
ambitious in a way that, if achieved, would advance the frontier
of knowledge — as opposed to advancing applied practice, which is
not an ERC criterion? When the proposal claims frontier advance,
does it name the mechanism that would deliver it, and does it
identify what would still be learned if the mechanism fails?

This dimension maps to ERC Criterion 1 sub-questions 1.1 and 1.2.
CAP-A (no falsifiable question on page 1) and CAP-B (ambition
without contingency) live here.

### 2. Approach and methodology

Is the outlined approach feasible at the stage the draft is at?
At Step 1 the approach is read in support of the ambition claim;
at Step 2 the methodology and working arrangements (Criterion 1.3)
and the timescales and resources (Criterion 1.4) are formally
assessed. Are methodological choices defended, or asserted? Where
the design depends on data, software, collaborators, or
infrastructure, are the dependencies named or hidden?

This dimension maps to Criterion 1.3 and 1.4. CAP-D (no risk
assessment in B2 methodology) lives here.

### 3. Principal Investigator fit

Does the CV demonstrate the ability to conduct ground-breaking
research, evidence of creative and original thinking, and the
specific scientific expertise the proposed project requires? A
publication list is necessary but not sufficient; the panel looks
for methodological independence, peer recognition beyond venue
prestige, and a clear PI-attributable contribution. Does the
track record explain why *this* PI can execute *this* project, or
is the link generic?

This dimension maps to ERC Criterion 2 sub-questions 2.1, 2.2,
2.3. CAP-C (CV is publication list only, all three originality
signals absent) and CAP-F (PI-project fit gap) live here.

### 4. Panel-fit and cross-panel logic

Has the proposal been submitted to a panel where the work fits?
If a secondary panel is declared, does the cross-panel
explanation name specific debates and readers in the secondary
panel who would change their position if the project succeeds, or
is the justification generic? The Panel Chair may reassign
proposals at the start of evaluation; a weak cross-panel
justification invites reassignment.

This dimension maps to Criterion 1.1 (panel choice affects the
relevance of "scientific questions"). CAP-E lives here.

### 5. Evidence discipline of the critique itself

Are the findings produced by the three role streams grounded in
verbatim quotes from the draft? Are omissions correctly labelled
as omissions (with the expectation-creating quote) rather than
asserted as misstatements? Are speculative findings labelled as
speculative? The synthesis must reject ungrounded findings; the
"points rejected" section retains them with the reason.

This is the audit-quality dimension, not an ERC criterion. It
ensures the audit itself stands up to scrutiny.

### 6. Adherence to the ERC's evaluation register

Does the critique avoid evaluating societal or economic impact as
if it were a positive score axis? Scientific excellence is the
ERC's sole evaluation criterion; impact-on-policy or
impact-on-industry is not part of the rubric and must not be used
to lift a score. Does the critique avoid using journal impact
factors, venue prestige, or host-institution prestige as proxies
for scientific judgment, per the ERC's DORA commitments? Does it
avoid treating "high risk / high gain" as a formal Annex 1
sub-question (it is ERC framing language, not on the form)?

This is the register-fidelity dimension.

## Why no numeric scores

The ERC panel produces ranked scores (A invited, A not invited, B,
C at Step 1; A and B at Step 2). Those scores are panel-meeting
output that depends on the comparative ranking against other
proposals in the panel — a single-reviewer or AI critique cannot
produce them honestly. The synthesis instead produces:

- A two-to-three sentence prose verdict for each of the six
  dimensions above.
- A summary "Step-1 risk if submitted unchanged" of *low / medium
  / high / critical*, justified against the dimensional verdicts.

## Severity ladder for individual findings

Within the rubric, findings are HIGH / MEDIUM / LOW:

- **HIGH:** would on its own cause a B or C score at Step 1, or
  would be the focus of a panel meeting at Step 2. Triggers a
  named score cap.
- **MEDIUM:** would drop a 5 to a 3 or 4 in the affected
  sub-question; would not on its own kill the proposal.
- **LOW:** worth fixing; not decisive.

Severity is a property of the draft, not a quota. Do not invent
HIGH findings.

## Disagreement rule for the cross-critique

In Round 2, when one role stream disagrees with another role
stream's finding, the disagreement is logged. In Round 3 (if
triggered) or in synthesis, the disagreement is resolved by
re-reading the relevant draft passage. The synthesis cannot
"merge" a disagreement by averaging it; either the disagreement
is reconciled by re-grounding in the draft, or the finding is
moved to the "points rejected" section.

## Anti-invention discipline

The synthesis cannot introduce findings that are not present in
the Round 1 or Round 2 packets. It can promote, demote, or
reject findings. It can flag a "gap I notice but no role stream
named" only by writing it in the "points to consider" section
with a label that it was not present in the audit packets.

## When this rubric does not apply

This rubric is for ERC Starting and Consolidator Grants only. It
is not calibrated for ERC Advanced, Synergy, Proof of Concept, or
ERC Plus grants. It is not calibrated for non-ERC funding
agencies. For empirical-paper audits, use the default mad-research
rubric (restored from
`rubric.md.empirical-paper.bak` after backing up before
overwriting).
