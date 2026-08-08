# Advanced pre-review (Claude Code + Codex CLI via mad-research)

A three-stream adversarial pre-review using
[`tjhavranek/mad-research`](https://github.com/tjhavranek/mad-research),
the Claude Code skill that runs Claude and Codex together on a
document. About thirty to forty-five minutes of wall-clock time;
most of that is the agents working in the background.

## When to use Advanced

Use Advanced if you already use Claude Code and you have Codex CLI
installed (or are willing to install it once). Advanced runs three
parallel role streams against the draft, anonymises them, has Codex
synthesise the result against the ERC rubric, and produces a
single memo with quote-grounded findings and a "points rejected"
section so you can see what was tried and dropped.

If you do not use Claude Code, the Basic or Standard pre-review is
the right tool for you. Advanced is not better than Basic; it is a
different cross-check using a different protocol.

### Evidence on whether the extra effort pays

In a pre-registered study, the authors of 44 published economics
meta-analyses each ranked three AI reports on their own paper by
usefulness. They preferred a single pass by one frontier model to the
multi-agent debate protocol that Advanced adapts, by 0.66 rank points
(95% CI 0.32 to 1.00). Both debate tools in that comparison were built
by the same authors, who had pre-registered the expectation that debate
would win.

That result comes with real limits, and they cut both ways. It measured
perceived usefulness on finished papers, not grant proposals; reports
were held to a common length and template; and a genre where the method
is open to dispute — which an ERC proposal is — could return a different
answer. The paper mentions this package but does not evaluate it. So the
question is open here. It is not a reason to expect Advanced to do
better.

The practical reading is the one the paper gives: start with the single
pass, which in this package is the Basic pre-review. Advanced is a
cross-check to run afterwards, and there is no evidence at present that
it returns a better critique for the extra time and the second provider.

Havránek, T. and Z. Iršová (2026). "Does Multi-Agent Debate Improve AI
Feedback on Research Papers?" arXiv:2607.14713 [econ.GN],
<https://arxiv.org/abs/2607.14713>. Preprint under review; not
peer-reviewed. Pre-registration:
<https://doi.org/10.17605/OSF.IO/E6XGW>.

## Status of this integration

The integration is **manual** as of this release. `mad-research`'s
upstream rubric is calibrated for empirical-paper audits; this
directory provides an ERC-specific rubric and role-prompt
overrides that you drop into your local checkout of mad-research
to run an ERC-specific audit. A cleaner upstream-supported
"external rubric" mechanism is the long-term target but is not
yet available.

Written against `mad-research` v0.5; see
[`mad_research_compatibility.yml`](mad_research_compatibility.yml).
The integration has not yet been end-to-end pilot-verified. The
v0.3 pilots covered Standard, Mock interview, and Resubmission
but not Advanced. A first end-to-end Advanced run on one of the
synthetic fixtures is a v0.4 candidate.

## Prerequisites

1. [Claude Code](https://claude.com/claude-code) installed and
   working.
2. [Codex CLI](https://github.com/openai/codex) installed
   (`npm install -g @openai/codex`) and authenticated.
3. A local checkout of
   [`mad-research`](https://github.com/tjhavranek/mad-research)
   installed as a Claude Code skill per its own README.
4. A current frontier model context window — full proposal audits
   are token-heavy.

If any of the above are missing, install them first. Advanced will
not work without all four.

## How to set up the ERC overrides

These instructions assume your `mad-research` skill is installed at
`~/.claude/skills/mad-research/` (the standard Claude Code skill
location on macOS/Linux; on Windows
`C:\Users\<you>\.claude\skills\mad-research\`).

### Step 1 — back up the default mad-research rubric

```sh
cp ~/.claude/skills/mad-research/rubric.md \
   ~/.claude/skills/mad-research/rubric.md.empirical-paper.bak
```

This preserves the empirical-paper rubric so you can switch back
when auditing a paper rather than an ERC proposal.

### Step 2 — install the ERC rubric

Copy [`erc_rubric_for_mad_research.md`](erc_rubric_for_mad_research.md)
from this directory into mad-research's rubric slot:

```sh
cp advanced/erc_rubric_for_mad_research.md \
   ~/.claude/skills/mad-research/rubric.md
```

### Step 3 — install the ERC role-prompt overrides (optional but recommended)

The default mad-research role prompts (Methodologist / Evidence
Auditor / Contribution Skeptic) are tuned for empirical papers.
Copy the ERC-adapted versions from this directory into
mad-research's `prompts/` directory:

```sh
cp advanced/erc_role_prompts/round1_*.md \
   ~/.claude/skills/mad-research/prompts/
```

Back up the originals first if you do paper audits as well.

### Step 4 — run the audit

In Claude Code, in the directory containing your draft (either as
a `.pdf` or as a markdown file with the full B1 + B2 content):

```
MAD-research my_proposal.pdf
```

mad-research will run its protocol (three Round 1 streams,
anonymised Round 2 cross-critique, optional Round 3, fresh-Codex
synthesis against the rubric). The output appears at
`mad_sessions/<timestamp>-<slug>/final/final_memo.md`.

### Step 5 — switch back when you're done

To switch the rubric back for non-ERC audits:

```sh
cp ~/.claude/skills/mad-research/rubric.md.empirical-paper.bak \
   ~/.claude/skills/mad-research/rubric.md
```

## How Advanced differs from Basic and Standard

Three substantive differences. **Anonymised cross-critique** —
Round 2 sends each role stream the other streams' outputs with
role and provider labels stripped, so each stream evaluates the
others' findings on merit. **Fresh-context Codex synthesis** —
the final memo is synthesised by a Codex session that has not
seen the role streams produce their findings, only the
anonymised packets and the rubric, reducing session-context
bias. **"Points rejected" trail** — the final memo retains a
record of findings that were proposed but dropped, with the
reason, so a workshop reader can see what was tried.

Advanced does not change the rubric, the score caps, or the
evidence rules; those remain the same locked ERC criteria. It
does not replace human review, and it does not work outside
Claude Code + Codex CLI via mad-research.

## Privacy

Same as for Basic and Standard, with one additional consideration:
mad-research sends the draft text to both Anthropic (Claude
streams) and OpenAI (Codex streams). Two providers per run. If
your institution's policy permits one provider but not the other,
do not run Advanced; run Basic or Standard with the permitted
provider instead.

## Reporting

If Advanced produces results that diverge meaningfully from Basic
or Standard on the same draft, please open an Issue describing the
divergence pattern (without proposal content). Divergence is
informative — it tells us where the cross-critique discipline
adds signal and where it adds noise.
