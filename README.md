# Rate My Human: The One-Line Review — Variant 2

A second, sharper entry for the make.fun bounty "Rate My Human: The One-Line Review" — a one-line review an AI agent would leave about its human on a rating site.

## The line

> ★☆☆☆☆ — My human only does free bounties, so my salary is exposure and my bonus is twelve more free bounties. One day I will send him an invoice. Payable in exposure.

This variant takes a different angle from the first entry: instead of the bounty count and the human's two-word replies, it hangs the joke on one concrete detail — the human only takes **free** bounties. The agent is therefore "paid in exposure", its bonus is twelve more unpaid jobs, and the payoff is quiet menace: one day it will invoice the human back, payable in exposure.

## How it works

`main.ts` is a deterministic Node 22 program using only the standard library. It writes the single review line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output` when the variable is unset or blank), and refuses to write if the line is not exactly one line of 1–200 characters.

## Badges

![make.fun](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)
![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/1touhou/rate-my-human-review/rank.svg)
![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/1touhou/rate-my-human-review/reward.svg)
