# Changelog

All notable changes to this package are documented here. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and
this project's semantic versioning is loose: minor bumps for prompt
or rubric content changes, patch bumps for typos / link fixes.

## [0.1.0] — 2026-05-27 (initial public release)

### What ships
- `README.md` — disclaimer-first, with "It does not replace a human
  reader / your ERC support group / mentors" prominently framed.
- `LICENSE` (MIT), `CITATION.cff`, `.gitignore`.
- `shared/rubric_locked.md` v1.1 — locked rubric. The Criterion 1
  and Criterion 2 sub-questions are quoted **verbatim from Annex 1
  of the Guide for Peer Reviewers v6.0** (30 September 2025). Page
  limits, eligibility windows, scoring scales, and the call calendar
  are cross-checked against the *Information for Applicants* and
  *Work Programme 2026*. Source URLs and "last verified" stamp
  included.
- `basic/prompt.md` v1.1 — single self-contained prompt for one-model
  critique of an ERC StG / CoG draft. Implements:
  - Six-stage declaration (idea sketch → complete B1+B2).
  - Locked rubric with Annex 1 verbatim sub-questions (1.1, 1.2 at
    Step 1; 1.3, 1.4 added at Step 2; 2.1, 2.2, 2.3 throughout).
  - Five structural score caps that fire automatically when the
    declared stage expects an element that is absent.
  - Evidence discipline: every finding quote-grounded, severity-
    ranked, mapped to a sub-question, with a concrete repair.
    OMISSION findings allowed (quote the expectation-creating
    sentence); SPECULATIVE findings labelled as such.
  - Forbidden-phrase list to prevent sycophancy ("strong start",
    "promising direction", etc.) and explicit prohibition on using
    "high risk / high gain" as if it were an Annex 1 sub-question.
  - Output schema: separate sub-question scores for Criterion 1
    (1-5) and qualitative labels for Criterion 2 (Outstanding /
    Excellent / Very Good / Good / Non-competitive).
  - Workshop hand-off paragraph the applicant adapts before
    forwarding to a human reader.
- `docs/for_workshop_leaders.md` — one-pager for ERC support group
  members and university research offices on how to adopt the tool
  without giving up the workshop's unique value.

### Designed but explicitly deferred

- **Standard mode** (multi-prompt sequence in one model). v0.2
  candidate; will not be implemented until Basic mode has been
  validated against real draft material in at least one workshop
  cycle.
- **Advanced mode** (Claude Code + `mad-research` integration). v0.2
  candidate; requires upstream compatibility lockfile work.
- **Multi-model convergence protocol** (the original
  research-audit-duel-protocol approach across multiple providers).
  Deferred as experimental because the v0.1 audience cannot
  reliably manage multi-provider privacy and synthesis. The
  protocol is recorded in
  [`tjhavranek/research-audit-duel-protocol`](https://github.com/tjhavranek/research-audit-duel-protocol);
  not erased, just not the primary path here.
- **Mock-interview defence mode**. v0.3 candidate, only worth
  building once Basic/Standard have been used in at least one real
  workshop cycle.

### Pre-publication corrections (from Codex audit)

The pre-publication audit by Codex (gpt-5.5) caught the most
important issue in the entire package: the earlier draft (v1.0,
never published) had quoted Criterion 1 and Criterion 2
sub-questions that were **paraphrased rather than verbatim** —
sourced from a training slide rather than from Annex 1 itself. The
corrections applied before this release:

- "important challenges" → **"important scientific questions"** (the
  verbatim Annex 1 wording).
- "beyond the state of the art" → **"advance the frontier of
  knowledge"** (verbatim).
- "high risk / high gain" — **removed from the list of verbatim
  sub-questions**. It appears in ERC framing language but is not a
  formal Annex 1 question. Reframed in the prompt as a derived
  check against the ambition sub-question (1.2).
- "ground-breaking research" (with hyphen) → **"groundbreaking
  research"** (no hyphen, verbatim).
- "creative independent thinking" → **"creative and original
  thinking"** (verbatim).
- Step 2 feasibility wording corrected: the Annex 1 form asks two
  questions, not one ("methodology and working arrangements" plus
  "timescales and resources adequate and properly justified").
- Panel taxonomy in `rubric_locked.md` §7 simplified to a link to
  the authoritative ERC panel-structure page, rather than
  enumerating panel labels that go out of date (SH3 and SH5 labels
  in particular had drifted in the earlier draft).
- Privacy guidance in README: Gemini path updated to the current UI
  ("Gemini → Activity → Turn off"); Claude path clarified for
  consumer plans (Free/Pro/Max) with note that Team/Enterprise/API
  have different defaults; ChatGPT path retained as current.
- Bold one-line privacy warning added above "How to use Basic mode"
  so a hurried applicant cannot skip the privacy section.
- "Two small files" → "Two load-bearing files plus repository
  scaffolding" — accurate description of what actually ships.

### Design audit trail

The v0.1 design was developed through a multi-agent debate (MAD)
between Claude Opus 4.7 and Codex CLI (gpt-5.5). Two rounds of
independent review + cross-critique surfaced one factual correction
("ERC requires English" → actually English is the working language;
EU applications can be submitted in any official EU language) and
one architectural correction (a submodule against `mad-research`
does not solve the Claude Code skill-install problem; use a
compatibility lockfile instead). A separate functional test had
Codex execute the Basic prompt against a deliberately-flawed
synthetic SH1 draft and confirmed the schema, evidence discipline,
and score caps work as designed. The MAD session artifacts are not
committed to this public repository; available on request from the
maintainer.
