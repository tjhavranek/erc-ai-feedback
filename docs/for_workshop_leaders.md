# For workshop leaders and ERC support group members

A one-pager on how to adopt `erc-ai-feedback` into an ERC support
workshop without giving up the value the workshop already provides.

## The problem

When you sit down to read a workshop applicant's draft, a large
fraction of the issues you flag are routine: unclear hypothesis,
hidden incrementalism, no contingency for high-risk objectives, weak
opening sentence, panel-fit ambiguity. These are exactly the
problems a current frontier AI model handles well *if* it is asked
with the right prompt and the right rubric. The workshop is the
wrong place to be discovering them.

## What this package does

It gives the applicant a single AI prompt (Basic mode) that:

- Loads the official ERC StG/CoG evaluation criteria verbatim from
  the *Guide for Peer Reviewers* v6.0.
- Asks the model to act as a senior panel member who must defend a
  score.
- Applies structural score caps so missing elements (no hypothesis,
  no contingency, no risk management) drop the project mark to 3 or
  below automatically.
- Forbids the "this is a strong start" register most models default
  to.
- Outputs the top 8-10 findings, each grounded in a verbatim quote
  from the draft, each with a concrete repair instruction.

It produces a one-paragraph workshop hand-off the applicant can
attach when they send you their draft:

> *"AI Basic critique flagged N HIGH-severity issues (CAP-B and
> CAP-D triggered) and M MEDIUM. Of these, I have resolved [X, Y].
> I want the workshop's judgement on [Z]."*

## How to ask applicants to use it

Two suggested workflow patterns:

### Pattern A — Pre-workshop AI triage (recommended)

Send applicants this email a week before their workshop session:

> *"Before our workshop on [date], please run your current draft
> through the AI critique at https://github.com/tjhavranek/erc-ai-feedback
> (Basic mode, ~5 minutes). Bring (a) your draft, (b) the AI's
> critique, and (c) a one-paragraph note on which AI findings you
> resolved and which you want our judgement on. The workshop will
> focus on the items you bring to us."*

This frames the AI as a tool the applicant uses, not as a gatekeeper.
You preserve full editorial authority. The workshop becomes about
**residual issues**, not basics.

### Pattern B — Lead-reader use

If applicants are not comfortable using AI directly, you (the lead
reader) can run the same prompt on their draft yourself. Compare
the AI's findings to your own notes:

- Items where you and the AI converge → the applicant heard this
  signal already (assuming Pattern A). Spend less workshop time on
  these.
- Items the AI caught but you missed → worth a closer look; the AI
  may be right or may be hallucinating.
- Items you caught but the AI missed → this is the workshop's
  unique value. Spend the time here.

## What the package is NOT

This is the disclaimer the README opens with, repeated here for the
expert group:

- It does not replace human reading. The workshop's value is
  preserved; the tool removes the routine pre-work.
- It does not replace mentoring, the Czech ERC support group, or
  any institution's research office.
- It is not authoritative. Frontier models confidently miss
  field-specific failure modes and recent literature. The applicant
  should push back on findings they disagree with.
- It is not a scorer. The AI produces a *provisional* Step-1 panel
  score; this is a forcing function, not a prediction.

## Iteration limits

If an applicant runs the prompt 4-5 times on the same draft, the
returns drop and the model starts validating what it already saw.
Tell applicants two or three runs per stage is the useful limit.

## Privacy reminder for the group

The applicant's draft is pasted into a model provider's chat. The
package's README gives concrete privacy-setting instructions for
ChatGPT, Claude, and Gemini. Please reinforce these when
recommending the tool to applicants. If an applicant's proposal
contains material under embargo or pre-patent disclosure, they
should sanitise before pasting or not use the tool at all.

## Reporting back

If you use the tool with workshop applicants and find:

- It catches issues you would have flagged yourself (so it saves you
  time) — that's the package working as intended. Nothing to do.
- It misses issues that any panel member would catch — please open
  an Issue on the repo with a desensitised description. The prompt
  has structural score caps for the most common omissions; if your
  field has a different common omission, the prompt should
  probably add a cap for it.
- It produces wrong or hallucinated quotes — the prompt's evidence
  discipline should catch this, but if it doesn't, open an Issue.
  This is a release-blocking failure mode.

## Verification

The rubric was last verified against the official ERC documents on
2026-05-27. If you are reading this more than a year later, please
re-verify before recommending to applicants. The maintainer
commits to annual re-verification within 60 days of each new ERC
Work Programme publication, but the maintenance burden may shift.

## Contact

Tomáš Havránek — issues / pull requests via GitHub. For ERC support
group coordination questions, the package author can be reached
through the contact details on
[`https://tomashavranek.cz`](https://tomashavranek.cz).
