# Terra Continuum

A small, deterministic artificial planet that advances in Git history. GitHub Actions evolves the world every day; GitHub Pages renders its current state without a server.

## Run locally

```bash
npm install
npm run evolve
npm run validate
npm run generate:site-data
npm run dev
```

The same seed, state, and generation always produce the same next world. Forking the repository creates an alternate timeline; change `seed` in `terra.config.json` before the first evolution for a different planet.

## Storage policy

`data/current-world.json` is the complete compact state. `timeline.json` retains only the latest 100 runs; every 1,000 simulated years, a small species snapshot is saved under `history/yearly-summaries`. Markdown chronicles are one file per run and should be periodically squashed into era summaries if the project grows beyond its MVP scale. The dashboard creates maps directly from JSON—no rendered map assets are committed.

## GitHub setup

Enable Pages with **GitHub Actions** as the source. The `evolve` workflow commits changed data after tests and validation; the Pages workflow builds and publishes the dashboard. Scheduled workflows require repository Actions to be enabled.
