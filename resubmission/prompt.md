# Resubmission audit prompt

Paste the text between the BEGIN and END markers below into a
paid chat session. After the prompt, paste:

1. The previous Evaluation Report (panel comment + individual
   reviews) — clearly labelled at the top of the paste with
   `--- PREVIOUS EVALUATION REPORT ---`.
2. The new draft (current Part I + CV, or Full proposal) —
   labelled with `--- NEW DRAFT ---`.

The model audits the new draft for engagement with the
previous report.

```
=== PROMPT BEGIN ===

You are auditing the engagement of a revised ERC Starting /
Consolidator Grant draft against a previous Evaluation Report
that scored the earlier submission B at Step 1, A-non-invited at
Step 1, or B at Step 2. The applicant has revised the proposal
for a future call; your job is to check whether the new draft
visibly engages with each substantive criticism in the previous
report.

You will receive two blocks of text, in this order:

  --- PREVIOUS EVALUATION REPORT ---
  [panel comment + individual reviews]

  --- NEW DRAFT ---
  [current Part I + CV, or Full proposal]

If the input does not include both blocks clearly labelled, stop
and ask the applicant to re-paste with the labels.

What to produce:

  ## 1. Distinct criticisms extracted from the previous report

  Read the panel comment and individual reviews in the previous
  Evaluation Report. Identify the distinct substantive
  criticisms. Group reviewer comments that target the same
  weakness — a panel that converges on a single issue is one
  criticism, not three. Aim for 5 to 12 distinct criticisms
  total; if the report is shorter (e.g., the standard panel
  comment for a Step 1 C-scored proposal), fewer is fine.

  For each distinct criticism:

    - **Criticism N:** [one-line summary]
    - **Source quote(s):** verbatim quote from the previous
      report, with reviewer label if available ("Reviewer 1
      remote referee", "Panel Comment", etc.).
    - **What the criticism asks the applicant to change:** one
      to two sentences on the substantive engagement required.

  ## 2. Engagement audit, criticism by criticism

  For each criticism, find the corresponding engagement in the
  new draft (or its absence) and report:

    - **Verdict:** ADDRESSED / PARTIALLY ADDRESSED / NOT
      ADDRESSED.
    - **New-draft engagement quote:** verbatim quote from the
      new draft where the engagement appears, OR — if the
      engagement is absent — "no engagement found".
    - **New-draft location:** section / page.
    - **Engagement quality:** one to three sentences on whether
      the underlying weakness is actually fixed, not merely
      acknowledged. The next panel never sees the old report or
      the old score, so visible engagement earns nothing on its
      own — judge the draft as a new reader would. Fixing it need
      not mean adopting the reviewer's suggestion: retaining the
      original choice is fine if the new draft now carries the
      argument that makes the choice defensible on its face.

  ## 3. Engagement pattern summary

  After the per-criticism audit, summarise:

    - How many criticisms are ADDRESSED, PARTIALLY, NOT.
    - Whether the pattern of engagement signals careful reading
      of the previous report (e.g., the applicant has touched
      each major criticism somewhere) or selective engagement
      (some criticisms are clearly addressed; others are
      ignored as if invisible).
    - The single most important criticism that remains NOT
      ADDRESSED, and a one-paragraph note on what the
      applicant might add to the new draft to engage with it.

  ## 4. Forbidden patterns

  Do not:

    - Score the new draft. The new draft's score is determined by
      the new panel; this audit is about engagement, not
      quality.
    - Praise the new draft.
    - Soften an "NOT ADDRESSED" verdict by inventing engagement
      that is not in the new draft.
    - Invent criticisms not present in the previous report.
    - Use journal impact factors, venue prestige, or host
      institution prestige as proxies for engagement quality.
    - Treat "high risk / high gain" as if it were a formal Annex
      1 sub-question.
    - Speculate on reviewer identity.

  ## 5. Evidence discipline

    - Every "ADDRESSED" verdict requires a verbatim quote from
      the new draft that demonstrates the engagement. No
      quote, no addressed verdict.
    - Every "PARTIALLY ADDRESSED" verdict requires a quote
      *and* a note on what is missing.
    - Every "NOT ADDRESSED" verdict requires either (a) a
      verbatim quote from a section where engagement would
      have been expected but is absent, or (b) "no engagement
      found in any section of the new draft" if the criticism
      cuts across the whole proposal.

Output schema:

# Resubmission audit

## Distinct criticisms extracted from the previous report

### Criticism 1 — [summary]
- **Source quote(s):** "[...]" (Reviewer N / Panel Comment)
- **What the criticism asks for:** [...]

[... etc ...]

## Engagement audit

### Criticism 1
- **Verdict:** ADDRESSED / PARTIALLY ADDRESSED / NOT ADDRESSED
- **New-draft engagement:** "[verbatim quote]" (location)
- **Engagement quality:** [1-3 sentences]

[... etc ...]

## Engagement pattern summary

[As specified above.]

=== PROMPT END ===
```

After the audit, the applicant has a checklist of what the new
draft visibly engages with and what it does not. Items marked
NOT ADDRESSED are the first priority for revision before
submission. Items marked PARTIALLY ADDRESSED should be checked
against the original report wording — sometimes the missing
piece is small and easily added.

Bring the NOT ADDRESSED items to the workshop if you have one;
that is exactly the kind of pre-workshop preparation the
applicant-side AI critique is designed to do.
