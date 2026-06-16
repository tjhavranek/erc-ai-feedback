# erc-ai-feedback

This is a small package for ERC Starting and Consolidator Grant
applicants. It provides a rubric-based pre-review of a draft
proposal that the applicant runs in one chat session with a current
frontier model. The intent is to clear routine structural problems
— vague hypotheses, hidden incrementalism, missing risk logic,
weak panel fit, CV–project disconnect — before workshop time is
spent on them. It does not replace human review.

Two files do the work: the locked evaluation rubric in
[`shared/rubric_locked.md`](shared/rubric_locked.md) and the prompt
in [`basic/prompt.md`](basic/prompt.md). The rubric contains the
verbatim Annex 1 Criterion 1 and Criterion 2 sub-questions from the
ERC *Guide for Peer Reviewers* for Starting and Consolidator Grant
calls, plus source-checked notes on scoring scales, proposal
structure, eligibility windows, panel structure, and the ERC's
AI-use rules. The prompt loads the rubric, applies structural caps
that fire when an expected element is missing, and produces an
evidence-grounded critique.

This package is the ERC-specific application of two general
research-audit projects by the same author group:
[`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
(manual multi-model adversarial-debate protocols) and
[`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research)
(Claude Code skills that automate the same audit discipline for
Claude + Codex). The Advanced pre-review here is a direct
extension of the latter; the multi-model convergence walkthrough
in [`docs/multi_model_walkthrough.md`](docs/multi_model_walkthrough.md)
is a direct application of the former.

A sibling project —
[`tjhavranek/paper-workshop`](https://github.com/tjhavranek/paper-workshop)
— applies the same quote-grounded adversarial discipline to whole
research papers rather than ERC proposals (a Claude Code skill that
stress-tests and then rebuilds a manuscript). It is neither used by
nor part of this package, and is mentioned only because an ERC
applicant is usually also a paper author.

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Use

1. Open a paid chat session with a current frontier model. Confirm
   training opt-out is on. (Provider settings change; see Privacy
   below.)
2. Copy the text between the `=== PROMPT BEGIN ===` and `=== PROMPT
   END ===` markers in [`basic/prompt.md`](basic/prompt.md). Paste
   it into the chat.
3. Paste your current draft after the prompt. State which stage you
   are at:
   - **Pitch** — idea sketch, or abstract plus draft CV.
   - **Part I + CV** — Extended Synopsis (Part I of the Scientific
     Proposal) in progress, with a draft CV.
   - **Full proposal** — complete B1 (cover-page abstract, Part I,
     CV and track record), plus any available B2 draft (Part II;
     required for final ERC submission).
4. Read the output. The model returns the top findings ranked by
   severity, each grounded in a verbatim quote from your draft;
   which structural caps fired; a short list of what the next draft
   stage needs to add; and a paragraph you can attach when sending
   the draft to a workshop reader.

## Privacy

Use a paid tier with training opt-out enabled, or remove names and
institutions before pasting a proposal draft into any chat product.
Provider UI labels change every few months, so check the provider's
current data-controls page rather than relying on setting names
copied here:
[ChatGPT data controls](https://help.openai.com/en/articles/7730893-chatgpt-privacy-practices),
[Anthropic Claude privacy](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training),
and [Gemini activity and privacy](https://support.google.com/gemini/answer/13594961).
Pasting an unpublished draft into any chat product carries residual
risk even when training is off. If the proposal contains embargoed,
patent-sensitive, or otherwise non-public material, sanitise it or
do not use the tool. If someone other than the applicant runs the
pre-review, follow the consent rule in
[`docs/for_workshop_leaders.md`](docs/for_workshop_leaders.md).

## Limitations

The tool is calibrated for ERC Starting and Consolidator Grants
only — not Advanced, Synergy, Proof of Concept, or ERC Plus. It
is in English; the ERC working language of evaluation is English.
It catches routine structural problems and does not judge novelty
in a specific field, panel strategy, or interview credibility —
these remain workshop, mentor, and research-office work. Frontier
models confidently miss field-specific failure modes; the
applicant should push back on findings they disagree with on
merit.

The ERC rubric changes annually. The version in
[`shared/rubric_locked.md`](shared/rubric_locked.md) was last
verified on 2026-05-30 against ERC Work Programme 2026 and the
*Guide for Peer Reviewers* v6.0 (30 September 2025). If you read
this twelve months later, re-verify before use.

## For workshop leaders

If you are running an ERC workshop and want to recommend the tool
to applicants, the operational note at
[`docs/for_workshop_leaders.md`](docs/for_workshop_leaders.md)
covers the hand-off template and the consent rule that applies
when a reader runs the tool on someone else's draft.

## Other ways to use the package

The single-prompt pre-review above is what most applicants will
use. The repository also contains:

- A three-prompt sequence in [`standard/`](standard/) for
  applicants who want a more thorough single-model pass
  (Panel Reviewer, then Devil's Advocate, then Writing Coach).
- A Claude Code + Codex CLI integration in
  [`advanced/`](advanced/) that runs the
  [`mad-research`](https://github.com/tjhavranek/mad-research)
  protocol against the same ERC rubric (experimental; not yet
  end-to-end pilot-verified — see
  [`advanced/README.md`](advanced/README.md)).
- A question-bank and answer stress-test prompt pair in
  [`mock_interview/`](mock_interview/) for Step-2 applicants
  preparing for the panel interview.
- A resubmission audit prompt in [`resubmission/`](resubmission/)
  that checks whether a new draft engages with a previous
  Evaluation Report.

Synthetic test fixtures used to exercise the prompts are in
[`tests/fixtures/`](tests/fixtures/). Roadmap and development
notes are in [`docs/roadmap.md`](docs/roadmap.md).

## Citation, licence, maintainer

Tomáš Havránek, Charles University, Prague. MIT licence; see
[`LICENSE`](LICENSE). The ERC materials cited in the rubric remain
the property of the European Research Council Executive Agency
and are referenced under fair use with source URLs in
[`shared/rubric_locked.md`](shared/rubric_locked.md). For citation
metadata see [`CITATION.cff`](CITATION.cff).

Bug reports and factual corrections to the rubric: GitHub Issues.
Please do not paste real proposal content in public issues.
ERC-panel-veteran feedback on the prompt is particularly welcome.

Roadmap and development notes are in
[`docs/roadmap.md`](docs/roadmap.md). The audit history of each
version is in [`CHANGELOG.md`](CHANGELOG.md).
