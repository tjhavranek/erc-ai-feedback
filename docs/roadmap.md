# Roadmap and development notes

What is in the package today, what is on the roadmap, and what is
explicitly deferred.

## What is in v0.2

Compared to v0.1.1, v0.2 adds:

- **Standard pre-review** (multi-prompt sequence in one model) in
  [`../standard/`](../standard/). Three role prompts run in
  sequence: Panel Reviewer, Devil's Advocate, Writing Coach. The
  applicant synthesises.
- **Advanced pre-review** (Claude Code + Codex CLI via
  [mad-research](https://github.com/tjhavranek/mad-research))
  in [`../advanced/`](../advanced/). ERC rubric override and
  role-prompt override files plus instructions for installing
  them into a local mad-research checkout.
- **Mock interview preparation** in
  [`../mock_interview/`](../mock_interview/). A question bank
  generator plus an answer stress-test prompt for Step-2
  applicants preparing for the panel interview. Shipped in v0.2;
  maturity is early because the module has not yet been used in
  a real Step-2 cycle. Marked accordingly in its own README.
- **Resubmission audit** in
  [`../resubmission/`](../resubmission/). A prompt that takes a
  previous Evaluation Report and a new draft and reports
  point-by-point whether the new draft engages with each
  criticism. Shipped in v0.2; not yet pilot-tested against a real
  resubmission cycle (real evaluation reports are confidential).
  Marked accordingly in its own README.
- **Test fixtures** in [`../tests/fixtures/`](../tests/fixtures/).
  Two synthetic ERC StG drafts (PE6 and SH3) with different
  failure profiles, plus their expected-findings annotations.
  Used to exercise the prompts during pilot and regression
  testing.
- **Annual rubric verification** workflow at
  [`../.github/workflows/annual_verification_reminder.yml`](../.github/workflows/annual_verification_reminder.yml).
  Opens an Issue every September prompting the maintainer to
  re-verify the rubric against the new Work Programme.

## What is on the v0.3 roadmap

- **Multi-model convergence variant of Standard.** A documented
  manual protocol for running the Standard sequence across two
  or three providers (Claude, ChatGPT, Gemini) and synthesising
  the outputs. Privacy and orchestration friction made this
  hard for the v0.1 audience; the convergence-across-streams
  logic is recorded as the manual protocol in
  [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
  and might surface here as an explicit walkthrough once
  applicants have asked for it.
- **Field-tuned versions of the rubric** for SH and LS panels
  where the default rubric's emphasis on "specific
  methodological independence in CV" lands differently. The
  current rubric is calibrated to be cross-domain; if field
  practitioners report consistent miscalibration, field tunings
  are the response.
- **Better feedback loop from real workshops.** A short
  reporting template that workshop leaders can fill in after
  using the tool with applicants, to surface where the tool
  catches issues and where it misses them. Issues should be
  desensitised.

## What is explicitly deferred (parked)

- A web app, an API, a hosted service. The package is prompts
  and rubrics; running them is the applicant's responsibility,
  using their own provider account. Adding hosting would
  introduce data-handling responsibilities the maintainer is
  not equipped to take on.
- Automatic scoring against a panel-score scale (A invited / B
  / C). The locked rubric explicitly rules this out: the panel
  score is a panel-meeting output that depends on comparative
  ranking against other proposals; a single-reviewer or AI
  critique cannot produce it honestly.
- Generation of new scientific content for the applicant. The
  prompts' authorship-safe repair-field rule rules this out:
  the AI identifies problems, the applicant writes the proposal.

## Development notes

The package was developed using a multi-agent debate (MAD)
protocol between Claude Opus 4.7 and Codex CLI (gpt-5.5). The
v0.1 pre-publication audit by Codex caught one significant issue
(the v0.1 draft quoted paraphrased criterion text from a training
slide rather than verbatim Annex 1 wording; corrected before
public release). The v0.1.1 patch incorporated changes from a
four-model council audit (ChatGPT, Claude, Gemini, Grok acting as
independent reviewers on v0.1), with Codex cross-auditing the
patch. The v0.2 expansion added Standard, Advanced, Mock
interview, Resubmission, test fixtures, and the GitHub Action,
with synthetic-fixture pilot testing before tag. See
[`../CHANGELOG.md`](../CHANGELOG.md) for the version-by-version
record.

## Companion repositories

This package is the ERC-specific application of two related
research-audit projects by the same author group:

- [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
  — the manual multi-model adversarial-debate protocols this
  package's Standard and roadmap multi-model variants are
  derived from.
- [`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research)
  — the Claude Code skills that automate the same protocols
  for Claude + Codex; the Advanced pre-review in this package
  drops an ERC rubric override into a local mad-research
  checkout.

This package was created specifically for ERC. Other members of
the Czech ERC support group (Technologické centrum AV ČR
expert group and Charles University ERC Přípravka) are welcome
to open issues, propose changes, or fork.
