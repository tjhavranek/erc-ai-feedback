# erc-ai-feedback

This is a small package for ERC Starting and Consolidator Grant
applicants. It provides a rubric-based pre-review of a draft
proposal that the applicant runs in one chat session with a current
frontier model. The intent is to clear routine structural problems
— vague hypotheses, hidden incrementalism, missing risk logic,
weak panel fit, CV–project disconnect — before workshop time is
spent on them. It does not replace human review.

**It is for applicants, and for workshop preparation the applicant has
authorised. Nothing else.** If you are evaluating a proposal for the
ERC, do not use this or any AI tool on it. The ERC's
[guidelines for panel members and remote
reviewers](https://erc.europa.eu/system/files/2026-03/Use-AI-grant-proposal-evaluation.pdf)
rest on two principles — confidentiality *and* non-delegation — and
non-delegation is not discharged by keeping the data safe: the
guidelines answer "no" to a model run locally (Q2), to a tool that
discloses nothing to a third party (Q3), and to asking an AI whether
your review is missing points (Q8). Running it offline is not a
workaround.

**Applicants are in a different position, and this package is built to
sit inside it.** The [ERC Scientific
Council](https://erc.europa.eu/news-events/news/current-position-erc-scientific-council-ai)
"recognises that researchers regularly seek input from AI technologies
or human third parties, for example to brainstorm or generate ideas, to
search the literature, and to revise, translate or summarise text", and
requires only that this "does not relieve the author from taking full
and sole authorship responsibilities with regard to acknowledgements,
plagiarism and the practice of good scientific and professional
conduct". The ERC sets no disclosure wording of its own; a host
institution may. This package stays deliberately inside that permission
and does less than it allows: it identifies problems in a draft and
never writes proposal content, so the words submitted to the ERC remain
the applicant's own.

Two files do the work: the locked evaluation rubric in
[`shared/rubric_locked.md`](shared/rubric_locked.md) and the prompt
in [`basic/prompt.md`](basic/prompt.md). The rubric contains the
verbatim Criterion 1 and Criterion 2 sub-questions applied to the
2027 Starting and Consolidator Grant calls, taken from ERC Work
Programme 2027 and *Information for Applicants* v11.0, plus
source-checked notes on scoring scales, proposal structure,
eligibility windows, resubmission restrictions, panel structure,
and the ERC's AI-use rules. The prompt loads the rubric, applies structural caps
that fire when an expected element is missing, and produces an
evidence-grounded critique.

The Advanced pre-review extends
[`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research),
a general research-audit project by the same authors. Related tools
and the reasoning behind them are listed in
[`docs/roadmap.md`](docs/roadmap.md).

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![DOI](https://zenodo.org/badge/1251103176.svg)](https://doi.org/10.5281/zenodo.20829165)

## Use

1. Open a paid chat session with a current frontier model, and
   select the provider's strongest reasoning setting rather than
   the fast default. The prompt asks for conjunctive checks and
   quote grounding across a long document, which is the work a
   reasoning model is for. Confirm training opt-out is on.
   (Provider settings change; see Privacy below.)
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
4. Read the output. It opens with a plain-language summary meant to
   stand on its own. Below that: the top findings ranked by severity,
   each grounded in a verbatim quote from your draft; which structural
   score caps fired; what the next draft stage needs to add; and a
   paragraph you can attach when sending the draft to a workshop
   reader. The risk level and the provisional marks are the model's
   reading of structural completeness, not a prediction of how the
   ERC will score you.

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

The ERC rubric changes annually, and the 2027 changes are already
in force. The version in
[`shared/rubric_locked.md`](shared/rubric_locked.md) was last
verified on 2026-08-08 against ERC Work Programme 2027 (adopted
20 July 2026) and *Information for Applicants* v11.0 (22 July
2026). Note that sub-question 1.2 gained a third clause for the
2027 calls and the eligibility windows widened. The *Guide for
Peer Reviewers* is still v6.0, stamped for the 2026 calls; a v7.0
is expected before the Starting Grant deadline. Re-verify before
use if you are reading this after the current call cycle.

## For workshop leaders

If you are running an ERC workshop and want to recommend the tool
to applicants, the operational note at
[`docs/for_workshop_leaders.md`](docs/for_workshop_leaders.md)
covers the hand-off template and the consent rule that applies
when a reader runs the tool on someone else's draft.

## Other ways to use the package

The single-prompt pre-review above is what most applicants should
use. The alternatives below cost more of your time, and Advanced also
sends the draft to a second provider. Run them as cross-checks on a
draft that has already been through the pre-review, not instead of it.

- A three-prompt sequence in [`standard/`](standard/) for
  applicants who want a more thorough single-model pass
  (Panel Reviewer, then Devil's Advocate, then Writing Coach).
- A question-bank and answer stress-test prompt pair in
  [`mock_interview/`](mock_interview/) for Step-2 applicants
  preparing for the panel interview.
- A resubmission audit prompt in [`resubmission/`](resubmission/)
  that checks whether a new draft engages with a previous
  Evaluation Report.
- A Claude Code + Codex CLI integration in
  [`advanced/`](advanced/) that runs the
  [`mad-research`](https://github.com/tjhavranek/mad-research)
  protocol against the same ERC rubric. Experimental, not yet
  end-to-end pilot-verified, and the only mode that sends the draft
  to two providers. A pre-registered study by this package's authors
  found a single pass preferred over that protocol on a different
  kind of document — see [`advanced/README.md`](advanced/README.md).

Synthetic test fixtures used to exercise the prompts are in
[`tests/fixtures/`](tests/fixtures/). Roadmap and development
notes are in [`docs/roadmap.md`](docs/roadmap.md).

## Citation, licence, maintainer

Developed by Tomáš Havránek and Zuzana Iršová, Charles University,
Prague. Further tools and materials from the same research group are
collected at [meta-analysis.cz](https://meta-analysis.cz).
MIT licence; see
[`LICENSE`](LICENSE). The ERC materials cited in the rubric remain
the property of the European Research Council Executive Agency
and are referenced under fair use with source URLs in
[`shared/rubric_locked.md`](shared/rubric_locked.md). Archived on
Zenodo with a DOI that resolves to the latest release:
[`https://doi.org/10.5281/zenodo.20829165`](https://doi.org/10.5281/zenodo.20829165).
For citation metadata see [`CITATION.cff`](CITATION.cff).

Bug reports and factual corrections to the rubric: GitHub Issues.
Please do not paste real proposal content in public issues.
ERC-panel-veteran feedback on the prompt is particularly welcome.

Roadmap and development notes are in
[`docs/roadmap.md`](docs/roadmap.md). The audit history of each
version is in [`CHANGELOG.md`](CHANGELOG.md).
