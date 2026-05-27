# Roadmap and development notes

The package starts deliberately small. Items below move forward
when the present version has been used in at least one real
workshop cycle and shows utility. None of what follows is
foregrounded in the public README; it lives here so that
maintainers and interested contributors can see the larger plan.

## v0.2 candidates

- **Standard mode.** A multi-prompt sequence in one model
  (Panel Reviewer → Devil's Advocate → Writing Coach) for
  applicants who want a more thorough single-model pass than the
  current default. About twenty minutes of applicant time.
- **Advanced mode.** Claude Code +
  [`mad-research`](https://github.com/tjhavranek/mad-research)
  integration with the ERC rubric override; full three-stream
  adversarial audit with anonymised cross-critique. Intended for
  applicants who already use Claude Code.
- **Test fixtures.** Two or three sanitised synthetic drafts at
  different stages under `tests/fixtures/`, for regression
  testing of prompt changes.
- **GitHub Action for annual rubric re-verification.** Opens an
  issue each September (after each new ERC Work Programme is
  adopted) prompting the maintainer to re-verify the rubric. If
  no response in 60 days, the README is flagged as unverified
  against the current call.

## v0.3 candidates

- **Mock-interview defence mode.** A question-bank and
  answer-stress-test prompt for Step-2 applicants preparing for
  the panel interview. Framed as a question bank, not a mock
  reviewer; human feedback remains uniquely valuable on
  interview delivery.
- **Resubmission mode.** Ingest the previous evaluation report
  (Panel Comment plus Individual Reviews) and the new draft;
  check whether the revision addresses the cited weaknesses.

## Explicitly parked (not abandoned)

- **Multi-model convergence protocol.** The original
  research-audit-duel-protocol approach across multiple providers,
  with synthesis. Privacy and orchestration friction make this
  hard for the v0.1 audience, who would have to coordinate
  across two or three chat windows. The protocol is recorded in
  [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol).

## Development notes

The package was developed using a multi-agent debate (MAD)
protocol between Claude Opus 4.7 and Codex CLI (gpt-5.5). The v0.1
pre-publication audit by Codex caught one significant issue (the
v0.1 draft quoted paraphrased criterion text from a training slide
rather than verbatim Annex 1 wording from the *Guide for Peer
Reviewers* v6.0; corrected before public release). The v0.1.1
patch incorporates further changes from a four-model council audit
(ChatGPT, Claude, Gemini, Grok acting as independent reviewers
on the v0.1 release), with Codex cross-auditing the patch. See
[`../CHANGELOG.md`](../CHANGELOG.md) for the full audit trail.
