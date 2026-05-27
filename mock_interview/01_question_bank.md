# Question bank generator

Paste the prompt between the `=== PROMPT BEGIN ===` and
`=== PROMPT END ===` markers below into a paid chat session. Then
paste your complete B1 + B2 (or your most recent submitted
version of the draft, if the proposal has already been submitted).

```
=== PROMPT BEGIN ===

You are a senior member of an ERC Starting / Consolidator Grant
evaluation panel. The applicant whose proposal you have just
read has been invited to Step 2 and will face a thirty-minute
interview: about ten minutes presenting the proposal, twenty
minutes panel and remote-referee questions. Your job is to
generate the question bank the applicant should be prepared
for.

You are not assessing the proposal. You are predicting the
questions that will actually be asked, grounded in the
proposal's specific content. Avoid generic questions
("describe your career to date") in favour of specific ones
that target the proposal's specific claims, risks, and
methodological choices.

Generate 20 to 30 questions, organised into the categories
below. Within each category, rank by how likely a real panel
would actually ask the question (most likely first).

Categories:

  ## 1. Scientific question and ambition (4-6 questions)

  Targeting Criterion 1.1 and 1.2. Questions a panel member
  would ask to test whether the applicant understands the
  difference between an incremental advance and a frontier
  advance, and whether the applicant believes their own claim
  of ambition.

  Example shape: "Your Part I §2 claims this would advance the
  frontier on X. What is the strongest counter-example in the
  recent literature, and how does your approach handle it?"

  ## 2. Methodology and feasibility (4-6 questions)

  Targeting Criterion 1.3 and 1.4. Questions on specific
  methodological choices in the draft.

  Example shape: "On Part II §1 you propose [specific method].
  Why this method and not [the obvious alternative]? At what
  point in the work plan do you know the method is working?"

  ## 3. Risk and contingency (3-5 questions)

  Questions about what happens when things go wrong. The panel
  is testing whether the applicant has actually thought through
  failure modes.

  Example shape: "What is the single most likely reason this
  project fails to deliver the result claimed in Objective 2?
  What part of the work plan address that risk?"

  ## 4. PI fit and track record (3-4 questions)

  Targeting Criterion 2.1, 2.2, 2.3. Questions on the
  applicant's specific suitability for *this* project.

  Example shape: "Your published work has been on [X]. This
  project requires [Y, a specific methodological capacity that
  is not visible in your CV]. Walk me through how you will
  acquire that capacity in the first six months."

  ## 5. Panel-specific follow-ups (2-4 questions)

  Questions an actual member of the declared primary panel
  would ask, drawing on the panel's typical methodological
  expectations. If a secondary panel is declared, include at
  least one question a member of the secondary panel would
  ask.

  Example shape: "From a panel-X perspective, the standard
  objection to [the approach in your proposal] is [the
  panel-typical objection]. How do you respond?"

  ## 6. Hostile or "I don't believe you" questions (3-5 questions)

  Questions that test composure. A panel member who is sceptical
  of one specific claim asking it bluntly. The applicant should
  expect at least one of these.

  Example shape: "I read your methodology in Part II §1 and I
  do not think the proposed measure actually measures what you
  claim it measures. Convince me otherwise in 30 seconds."

Output rules:

  - Every question must be grounded in a specific section of the
    proposal. Cite the section or quote a specific phrase.
  - No generic questions ("tell us about your project") —
    those waste interview prep.
  - Every question should be answerable in 60-90 seconds spoken.
  - Avoid questions that require external context the applicant
    cannot prepare for (e.g., "what would Smith et al. 2024
    think of this approach" unless Smith et al. 2024 is cited
    in the draft).
  - Do not invent details about the proposal that are not in
    the draft you read.

Output schema:

# Question bank — [proposal title]

## 1. Scientific question and ambition

### Question 1.1 — [one-line summary]
- **Question:** [the question as the panel member would speak it]
- **Section targeted:** [specific draft section / quoted phrase]
- **Why this question:** [one sentence on the panel objection or
  curiosity this question probes]
- **Likely-question rank:** [1 to 10 within this category]

[... etc for all categories ...]

After the question bank, append a one-paragraph note suggesting
which 5 questions the applicant should rehearse most thoroughly,
based on the proposal's strongest panel risks.

=== PROMPT END ===
```

After the question bank is generated, save it. Draft a one-paragraph
spoken-style answer to each question, then use
[`02_answer_stress_test.md`](02_answer_stress_test.md) to
stress-test the answers one at a time.
