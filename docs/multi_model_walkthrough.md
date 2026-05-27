# Manual multi-model convergence walkthrough

For applicants who want to cross-check a Basic pre-review across
two or three providers and use the convergence (or divergence) of
findings as a signal. This walkthrough is the parked v0.3 item
in [`roadmap.md`](roadmap.md) made concrete: a single document
describing how to do it manually, without the orchestration
machinery the parent
[`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
provides.

## When this is useful

The Basic pre-review on a single paid provider catches most
routine structural problems. There is diminishing return to
running it through a second provider unless one of the following
holds:

- The applicant has used the Basic pre-review at multiple draft
  stages and wants a final cross-check before submitting.
- The Basic pre-review flagged a HIGH-severity finding the
  applicant disagrees with on merit and wants a second provider's
  judgement on the same draft.
- The applicant is a workshop lead reader running Pattern B with
  applicant consent (per [`for_workshop_leaders.md`](for_workshop_leaders.md))
  and wants a robustness check before recommending changes.

If none of those apply, run the Basic pre-review on one provider
and bring the residual issues to your workshop. Multi-provider
cross-check is not a default workflow; it adds privacy exposure
and ninety minutes of work.

## Privacy cost

Each additional provider is one more company that sees the
draft. Re-read the privacy section of the repository
[`README.md`](../README.md) before running this walkthrough.
Multi-provider use is permitted only when institutional policy
and (if relevant) PI consent extend to all providers used.
Sanitised abstracts can be used in place of full text for the
second and third providers if the privacy budget for the full
draft was spent on the first provider.

## What you need

- Two or three frontier-model accounts, all paid, all with
  training opt-out confirmed. Recommended pairings:
  - Claude (Anthropic) + ChatGPT-5 (OpenAI)
  - Claude + ChatGPT-5 + Gemini 2.5 Pro (Google)
- The Basic prompt file: [`../basic/prompt.md`](../basic/prompt.md).
- About 60-90 minutes of applicant time, depending on draft length.

## The walkthrough

### Step 1 — first provider

Run the Basic pre-review on your draft using the first provider,
exactly as described in the main [`README.md`](../README.md)
under "Use". Save the output locally with a clear filename:
`pre_review_provider_A.md`.

### Step 2 — second provider

Open a fresh chat session in the second provider. Paste the same
Basic prompt and the same draft. Declare the same stage. Save
the output as `pre_review_provider_B.md`.

Do **not** show provider B the output from provider A. The point
is to get an independent critique; cross-contamination defeats
the purpose. If a third provider is being used, do the same in
Step 2-bis with `pre_review_provider_C.md`.

### Step 3 — convergence and divergence

You now have two (or three) Basic critiques of the same draft.
Read them side by side. For each finding in each provider's
output, sort it into one of three categories:

1. **Convergent finding** — two or more providers flagged the
   same issue, citing similar (or different) quotes from the
   same passage of the draft. **This is the highest-confidence
   signal.** A specific weakness that multiple independent
   providers caught is very likely to be real, though not
   guaranteed: independent models can share training-data
   biases that surface as agreement on the same false positive.
2. **One-provider finding that the others did not raise** — one
   provider found something the others did not. This is
   informative but not decisive. Apply your own judgement: is
   it the kind of issue a panel would catch, or is the
   provider reaching?
3. **One-provider finding that another provider explicitly
   disagreed with** — rare, but possible (e.g., one provider
   fires CAP-C, another reads the CV as showing originality).
   When this happens, the disagreement itself is the finding:
   the underlying signal is ambiguous, and a human reader's
   judgement is needed.

### Step 4 — convergence in the score caps specifically

Pay particular attention to the score caps. If two providers
fire CAP-B (ambition without contingency) on the same passage,
the cap is firing on a real failure. If only one provider fires
CAP-B and the other does not flag any contingency issue, look at
the passage yourself: is the contingency present but
under-emphasised, or genuinely missing?

A useful test: when one provider fires a cap the other does not,
read the relevant section of your draft as if you have never
seen it before. Did the provider that did NOT fire the cap
notice the relevant text and decide it was sufficient, or did it
miss the section entirely?

### Step 5 — synthesis for the workshop hand-off

Use the workshop hand-off paragraph format from the Basic prompt,
modified for multi-model:

> "AI pre-review (multi-model: providers A, B, [C]) flagged
> [N] convergent issues (caps triggered by ≥2 providers: ___)
> and [M] one-provider findings I judged worth addressing. The
> applicant has independently addressed [items]. The applicant
> requests human judgement on up to three of: [items],
> particularly where providers diverged on [specific issue]."

Bring the convergent findings forward as high-confidence; bring
the divergent findings forward as items where you specifically
want human judgement.

### Step 6 — do not over-iterate

Multi-provider cross-check is one extra layer of triage. It is
not a substitute for human review. After Step 5, your draft is
ready for the workshop. Do not run a third pass of multi-model
cross-check on a draft that has just been through one — at that
point the marginal return is near zero and you have spent the
privacy budget for limited additional signal.

## When divergence is more informative than convergence

A subtle case: when two providers strongly disagree on whether a
section is acceptable, the section itself probably needs
rewriting. The fact that one well-prompted frontier model can
read it as adequate and another can read it as deficient means
the section is ambiguous to a careful reader. ERC panels are
careful readers; ambiguity is rarely scored well. Rewrite the
section.

## Limitations of this walkthrough

- It does not produce a unified critique. The applicant does the
  synthesis manually. The
  [`research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol)
  describes a more structured cross-critique protocol that the
  applicant can adapt to ERC use if they want more rigour; the
  ERC-specific adaptation is left as a v0.4-or-later
  consideration.
- Provider behaviour drifts. The convergence-across-providers
  signal is calibrated to current frontier models. If
  provider A changes its base model significantly, prior
  convergence patterns may not hold.
- The walkthrough is for the Basic pre-review only. The Standard
  sequence and Advanced (mad-research) flows are not designed
  for cross-provider use without substantial protocol changes.

## What to report back

If you run this walkthrough and find a striking convergence or
divergence pattern (e.g., one provider consistently misses a
specific failure mode that the others catch), please open an
Issue under the bug-report template. Cross-provider variance is
informative for calibrating the package.
