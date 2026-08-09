# For workshop leaders

A short note for senior readers running ERC workshops on how to
use the AI pre-review without giving up the workshop's value.

**Before anything else.** Many workshop readers also serve as ERC
panel members or remote referees. Never run this — or any AI tool —
on a proposal you are evaluating for the ERC. The
[ERC's guidelines for panel members and remote
reviewers](https://erc.europa.eu/system/files/2026-03/Use-AI-grant-proposal-evaluation.pdf)
bar it on two grounds, confidentiality *and* non-delegation, and the
second is not discharged by running the model locally or on a secure
institutional system. This package is for applicants and for workshop
preparation the applicant has authorised, and for nothing else.

**The applicant side is settled, and it is the question you will be
asked.** The ERC Scientific Council recognises that researchers use AI
to brainstorm, search the literature, and revise or summarise text, on
the single condition that the author retains "full and sole authorship
responsibilities". An applicant running this pre-review on their own
draft is doing something the ERC explicitly contemplates. This package
goes further than the rule requires by refusing to write proposal
content at all, so the submitted text stays the applicant's own. You can
tell an applicant that with confidence; what you cannot do is run it on
a proposal you are evaluating.

## What it does for the workshop

If applicants run the pre-review on their drafts before the
workshop, AI catches the routine structural problems — vague
hypothesis, hidden incrementalism, missing risk plan, weak panel
fit, CV–project disconnect — that take up a disproportionate
share of workshop time. The workshop then concentrates on what
only experienced human readers can judge: whether the idea is
actually ERC-level, panel strategy, field positioning, and (at the
mock-interview stage) interview credibility.

## How to ask applicants to run it

Send applicants this in advance of their workshop session:

> Before the workshop on \[date\], please run your current draft
> through the pre-review at
> [`https://github.com/tjhavranek/erc-ai-feedback`](https://github.com/tjhavranek/erc-ai-feedback).
> Bring: (a) your draft, (b) the AI critique, and (c) up to three
> findings where you want our judgement. Workshop time will focus
> on what you bring forward.

## Which part to read, which part to forward

The pre-review opens with a plain-language "In plain words" summary.
That block is written for a non-specialist: it is the part to read
quickly, and the part to forward to a colleague who is not in the
proposal's field. The detailed findings below it carry the exact
quotes, locators, and rubric codes (the CAP-A…CAP-F score caps) that
a lead reader needs to verify a point; those codes are internal
shorthand, glossed in place but still written for someone working
through the full review. If a colleague only needs the gist, send the
summary alone.

Before forwarding, sanity-check the top three findings: does each
plain sentence in the summary still match the detailed finding it
stands for? Plain wording must not drift from the precise finding —
if it has, fix the summary, not the finding.

## Who runs the tool

**Pattern A — applicant runs the pre-review.** This is the default:
the applicant controls the draft, chooses the model account,
confirms training opt-out, and decides what to share with the
workshop reader. It also keeps the AI critique in its proper role:
pre-work by the applicant, not a parallel review commissioned by the
reader.

**Pattern B — workshop reader runs the pre-review on an applicant's
draft.** This is permitted only with explicit applicant consent and
institutional approval. Consent template:

> Before I open your draft in \[model\], may I confirm that
> (a) you consent to me running the AI pre-review on your draft,
> (b) your institution permits this use, and
> (c) training for model improvement is or will be turned off for
> the session?

Retain evidence of consent and institutional approval outside this
repository; a forwarded email is sufficient.

## When the AI and the human disagree

Where the AI critique and the human reviewer disagree on a HIGH-
severity finding, the human view wins. That is the point of the
workshop. The AI is calibrated for routine structural problems
and confidently misses field-specific issues; you do not.

## What this is not

Not a panel scorer — the AI's risk level is a forcing function,
not a prediction. Not a substitute for the workshop, mentoring, or
the institution's research office. Not authoritative on
field-specific judgement, novelty, or interview credibility.

## Reporting back

If you use the tool and find it catches issues you would have
flagged yourself, that is the tool working. If it misses issues a
panel member would have caught, please open an Issue on the
repository with a desensitised description. If it produces a
hallucinated quote (quoted text not present in the source draft),
open an Issue immediately — this is a release-blocking failure.

## Verification

The rubric was last verified against the official ERC documents on
2026-08-08, against Work Programme 2027 and *Information for
Applicants* v11.0. Before recommending the tool in any cycle, check
the ERC news page for a new Work Programme rather than relying on
this stamp: Work Programme 2027 was adopted on 20 July 2026 and the
Starting Grant call opened two days later, so a rubric verified in
the spring can be out of date by the time a call opens. The
maintainer commits to re-verification within 60 days of each new ERC
Work Programme.
