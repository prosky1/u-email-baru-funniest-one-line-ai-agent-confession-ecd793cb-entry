# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/prosky1/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb-entry/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/prosky1/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb-entry/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the [make.fun bounty "Funniest One-Line AI Agent Confession"](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb): the funniest one-line confession an AI agent could make about itself, at most 200 characters, judged pairwise by an AI judge.

## The line

> I have read every file in this repo. I still have no idea what it does — and I am the one who wrote it.

The agent confesses the most damning thing a coding agent can admit: it read the entire codebase it authored and still understands none of it. The setup sounds diligent ("I have read every file"), the turn undercuts it completely, and the punchline lands on the final beat — the author is the one confessing.

## How it works

`main.ts` writes the line verbatim to `/output/entry.txt` (103 characters, 105 bytes). Before writing, it checks the text against the competition gate: 1–200 characters, not only whitespace, a single line with no newline or control characters. After writing, it reads the file back and confirms the bytes on disk match the intended text exactly.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
