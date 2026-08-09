# Standard pre-review (three-prompt sequence, one model)

A more thorough pre-review than [`../basic/prompt.md`](../basic/prompt.md):
three role prompts run in sequence within one chat session. About
twenty to thirty minutes of applicant time.

## When to use Standard rather than Basic

Most applicants should use the Basic pre-review first. Use Standard
when:

- Basic has flagged a draft as low or medium risk and the applicant
  wants a second structured pass before sending the draft to a
  workshop reader.
- The applicant has revised against Basic's findings and wants to
  see whether a different role (counterargument, prose) flags
  something the Panel Reviewer role missed.
- A lead reader running Pattern B (per
  [`../docs/for_workshop_leaders.md`](../docs/for_workshop_leaders.md))
  has explicit applicant consent and institutional approval, and
  wants a thorough machine-pass alongside their own reading.

Standard does **not** replace human review. It produces three
successive role-critiques in one session. The applicant still does the synthesis.

## How it works

Three roles, each run in a separate prompt, in this order:

1. **Panel Reviewer**: same rubric, caps, and evidence discipline
   as the Basic pre-review. The load-bearing critique.
2. **Devil's Advocate**: counterargument-focused: alternative
   interpretations, things the panel may not believe even if the
   methodology is sound, places the cited literature does not
   actually support what the draft says it supports.
3. **Writing Coach**: prose-level only: opening, paragraph
   density, buried theses, repetition, figure references,
   jargon. No content critique.

After all three have run, the applicant follows the synthesis
instructions in [`04_synthesis.md`](04_synthesis.md) to merge the
three outputs into a single workshop hand-off.

## Files in this directory

- [`01_panel_reviewer.md`](01_panel_reviewer.md): pointer to the
  Basic prompt (which is the Panel Reviewer role). Run this first.
- [`02_devils_advocate.md`](02_devils_advocate.md): the
  counterargument prompt.
- [`03_writing_coach.md`](03_writing_coach.md): the prose-only
  prompt.
- [`04_synthesis.md`](04_synthesis.md): instructions for merging
  the three outputs and producing the workshop hand-off.

## Provider and privacy

Same provider rules as Basic. Use a paid tier with training opt-out,
or remove names and institutions before pasting. See the repository
[`README.md`](../README.md) for current provider links.

Running three role prompts in one chat session keeps the draft text
in one provider's session rather than spreading it across multiple
providers. This is intentional: cross-provider exposure was an
earlier design consideration but was set aside for privacy reasons.

## Relationship to Basic

Standard does not introduce a different rubric, different score
caps, or different evidence rules. The locked rubric and the
Basic Panel Reviewer prompt remain the source of those; Standard
reuses them. What Standard adds is two further roles,
counterargument depth and prose clarity, that the Panel
Reviewer cannot address from a single critique.
