# erc-ai-feedback

**A careful prompt + locked rubric for using AI to triage an ERC Starting
or Consolidator Grant draft before sending it to human reviewers.**

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![Status](https://img.shields.io/badge/status-v0.1%20draft-orange)
![Verified against](https://img.shields.io/badge/verified%20against-WP%202026%20%2F%20Guide%20v6.0-blue)

---

## What this is — and what it isn't

> **It does not replace a human reader.** No model has read 200 ERC
> proposals last year. No model knows your field's politics. No model
> can judge whether you, this person, would convince the panel under
> interview pressure.
>
> **It does not replace your ERC support group, your mentors, or your
> institution's research office.** The point is the opposite: by
> handling the routine issues that don't need a senior researcher's
> attention, this tool aims to leave more workshop time for the harder
> things only experienced human readers can flag.
>
> **What it does:** triage. Run it before your next workshop or before
> sending your draft to a senior colleague. Fix what you agree with,
> push back on what you don't, and bring the rest to the humans. The
> AI critique is the floor of useful feedback, not the ceiling.

If you take only one thing from this README: **after using this tool,
you still need human readers**. The point of the tool is to make
those humans' time more useful by clearing the routine issues from
their queue first.

---

## What you get

Two load-bearing files, plus the repository scaffolding around them
(README, license, citation, .gitignore, CHANGELOG, workshop-leader
docs).

- **[`shared/rubric_locked.md`](shared/rubric_locked.md)** —
  the ERC Starting / Consolidator Grant evaluation rubric. The
  Criterion 1 and Criterion 2 sub-questions are quoted **verbatim
  from Annex 1 of the official Guide for Peer Reviewers v6.0**
  (30 Sep 2025), the single form ERC peer reviewers fill in. Page
  limits, eligibility windows, scoring scales, and the call
  calendar are cross-checked against the *Information for
  Applicants* and *Work Programme 2026*. Source URLs included.
  Last verified 2026-05-27. This file is locked between version
  bumps so the AI is always scored against the same fixed
  reference.
- **[`basic/prompt.md`](basic/prompt.md)** — a single
  self-contained prompt you paste into one frontier AI model
  (Claude, ChatGPT-5, or Gemini 2.5 Pro, all paid). It loads the
  rubric, asks the model to act as a senior panel member, applies
  structural score caps so the model can't quietly score around
  obvious failures, and forbids the "this is a strong start" register
  most models default to. Output is the top 8-10 findings, each
  grounded in a verbatim quote from your draft, each with a concrete
  repair instruction.

About 5 minutes from paste to readable critique.

---

## Before you use it — privacy

ERC proposals contain unpublished ideas. AI providers vary in whether
they train on your inputs. Before pasting your draft anywhere:

1. **Talk to your institution's IT or research office.** Some
   universities forbid pasting confidential research into consumer
   chat products even with training disabled.
2. **Talk to your PI / co-PIs if relevant.**
3. **Turn off training and memory** in the model you use. As of
   May 2026, the consumer / paid-plan paths are:
   - **ChatGPT (paid plans):** Settings → Data Controls → "Improve
     the model for everyone" OFF; for an extra layer, use
     **Temporary Chat** for the session.
   - **Claude (consumer Free / Pro / Max plans):** Settings →
     Privacy → "Help Improve Claude" OFF. Note: Claude Team,
     Enterprise, and API have different defaults and admin
     controls; check with your admin. Anthropic also retains
     conversations for safety review under specific
     circumstances even with the toggle off.
   - **Gemini (consumer):** Gemini → Activity → "Turn off" (or
     "Turn off and delete activity"). Note: Google Workspace
     accounts may be admin-controlled with different defaults;
     Temporary Chats are also available on Gemini.

   Provider UI labels and paths change frequently. If a label
   here no longer matches what you see, open the provider's own
   privacy / data-controls help page and find the equivalent
   setting.
4. **Assume residual risk.** These settings reduce but do not
   eliminate the chance that text reaches model providers' training
   pipelines, employees, or third parties in the event of a breach.

If your draft contains material under embargo, patent-pending
content, or anything you would not paste into a Google search box:
**do not paste the full text.** Paste a sanitised abstract for
structural feedback only, or do not use this tool.

The ERC Scientific Council's own position (as of May 2026) permits
researchers to use AI in proposal preparation as long as the
applicant retains authorship responsibility. The Council separately
prohibits *reviewers* from uploading proposals to AI — that rule
applies to evaluators, not to you working on your own draft.

---

## How to use Basic mode

> **Do not paste confidential or patent-sensitive text into any AI
> chat until you have checked institutional policy and provider
> settings.** See "Before you use it — privacy" above.

1. Open the model you plan to use (Claude / ChatGPT-5 / Gemini 2.5
   Pro). Confirm training is off.
2. Open [`basic/prompt.md`](basic/prompt.md). Copy everything
   between the `=== PROMPT BEGIN ===` and `=== PROMPT END ===`
   markers.
3. Paste it into a new chat.
4. After the prompt, paste your current draft text. Tell the model
   which stage you're at:
   - **(a)** Idea sketch — pre-synopsis, 1-3 pages
   - **(b)** Abstract + draft CV
   - **(c)** Draft Part I (extended synopsis in progress) + CV
   - **(d)** Complete B1 (1-page abstract + 5-page Part I + ≤4-page
     CV)
   - **(e)** Complete B1 + draft Part II (methodology, 7 pages)
   - **(f)** Complete B1 + complete B2 (near-final)
5. Read the output. The model returns:
   - A provisional Step-1 panel score (A invited / A not invited / B / C).
   - Separate marks for each Criterion 1 sub-question (1.1 / 1.2;
     at Step 2 also 1.3 / 1.4) on the 1-5 scale, and separate
     qualitative labels for each Criterion 2 sub-question (2.1 /
     2.2 / 2.3).
   - Which structural score caps fired and why.
   - Top 8-10 findings, ranked HIGH / MEDIUM / LOW, each with a
     verbatim quote from your draft (or, for omissions, the
     expectation-creating sentence), each with a concrete repair
     instruction.
   - A "what the next stage of the draft needs to add" section.
   - A one-paragraph workshop hand-off you can adapt and send to your
     workshop lead reader.

---

## How to use the output

- **Fix what you agree with.** Most HIGH-severity findings either
  point at a real problem you'd hit at panel review, or point at a
  structural omission that triggered a score cap. Either way, fix
  before submitting.
- **Push back on what you don't.** The model is wrong sometimes,
  particularly on field-specific judgement. Push back in your head;
  don't change the draft based on a finding you disagree with on
  merit.
- **Bring the rest to humans.** The workshop hand-off paragraph is
  designed for this. Use the format: "AI flagged these N issues; I
  resolved these; I want human judgement on these." This is exactly
  the kind of pre-workshop preparation that makes humans' time more
  useful.
- **Don't iterate forever.** Two or three runs against an evolving
  draft are useful. Five-plus runs train the model in-context on
  your proposal — it stops finding new issues and starts validating
  what's already there. At that point, stop and talk to humans.
- **Stop when AI converges with human feedback.** Once the AI's top
  findings overlap heavily with what your trusted senior reader
  flags, the AI has caught what it can. Further iteration is wasted.

---

## What's NOT in v0.1

The architecture deliberately starts small. The following are on the
roadmap, not yet built:

- **Standard mode** — a multi-prompt sequence in one model (Panel
  Reviewer → Devil's Advocate → Writing Coach) for applicants who
  want a more thorough pass than Basic. v0.2 candidate.
- **Advanced mode** — Claude Code + [mad-research](https://github.com/tjhavranek/mad-research)
  integration with the ERC rubric override, full three-stream
  adversarial audit with cross-critique. v0.2 candidate, intended
  for applicants who already use Claude Code.
- **Multi-model convergence protocol** — running the same rubric
  across multiple AI providers and synthesising. Privacy and
  orchestration friction made this hard for v0.1; explicitly
  deferred as experimental.
- **Mock-interview defence mode** — a question-bank + answer-stress-test
  prompt for Step-2 applicants preparing for the panel interview.
  v0.3 candidate; only worth building after Basic and Standard have
  been used in at least one real workshop cycle.

The reason to ship small: the load-bearing question is whether the
Basic prompt produces critique a senior ERC reader recognises as
useful. If yes, the rest follows. If no, more modes don't fix it.

---

## Verification status

The rubric in [`shared/rubric_locked.md`](shared/rubric_locked.md)
was last verified on **2026-05-27** against:

- *ERC Work Programme 2026* (Commission Decision C(2025) 5000, 8 July
  2025)
- *Guide for Peer Reviewers — Starting and Consolidator Grant Calls*,
  v6.0 (30 Sep 2025)
- *Information for Applicants — Starting and Consolidator Grant
  Calls* (current version on the EU Funding & Tenders Portal)
- ERC Scientific Council position on AI in proposal preparation

If you are reading this README more than 12 months after the date
above, **re-verify before relying on this tool**. The ERC rule set
changes annually; provider privacy controls change quarterly.

---

## Lineage

This package draws on:

- *Research Audit Duel + MAD Protocols* by Zuzana Iršová and Tomáš
  Havránek — the manual multi-model adversarial-debate workflows
  this package's roadmap modes will eventually automate. See
  [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol).
- *mad-research* — the Claude Code skills that implement the MAD
  protocol with Claude + Codex. The forthcoming Advanced mode of
  this package depends on it. See
  [`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research).
- The Czech ERC Expert Group (Technologické centrum AV ČR + Charles
  University ERC Přípravka) — the workshop ecosystem that this tool
  is designed to feed into. The package is a *complement* to that
  group's work, not a substitute for it.

---

## Contributing

This is an early v0.1. Bug reports, factual corrections (especially
to the rubric file), and suggestions for the Basic prompt are
welcome via Issues. Please do not paste real proposal content in
public issues.

If you are an ERC panel veteran (past or present) and your feedback
suggests the prompt is missing something a real reviewer would
catch, please open an Issue. The whole package's usefulness depends
on closing that gap.

## Licence

MIT — see [`LICENSE`](LICENSE). The ERC's own materials cited in the
rubric file remain the property of the European Research Council
Executive Agency and are referenced under fair use for documentation
purposes; the source URLs are in `shared/rubric_locked.md`.

## Citation

If this tool helps you prepare a successful ERC application, no
citation is needed. If it helps you teach or run a workshop and you
want to credit it, see [`CITATION.cff`](CITATION.cff).

## Maintainer

Tomáš Havránek (Charles University, Prague).
Annual re-verification commitment: re-check rubric and provider
privacy controls within 60 days of each new ERC Work Programme.

---

*Built with Claude Opus 4.7 + Codex CLI (gpt-5.5) using a
[multi-agent debate](https://github.com/tjhavranek/mad-research)
between the two models. Audit trail of the design process available
on request.*
