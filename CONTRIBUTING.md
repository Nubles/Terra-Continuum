# Contributing

Keep simulation changes deterministic: use `PRNG`, not `Math.random`, and add a Vitest case for new engine rules. Preserve the compact data policy and run `npm test`, `npm run evolve`, and `npm run validate` before proposing changes.
