# Adapter Pattern — Duck and Turkey (TypeScript)

Adapter pattern:converts the interface of a class into another interface the client expect. Adapters lets classes work together that couldn't otherwise because of incompatible interface.

Structure:
- `src/Duck.ts` — `Duck` interface
- `src/Turkey.ts` — `Turkey` interface
- `src/MallardDuck.ts` — concrete `Duck` implementation
- `src/WildTurkey.ts` — concrete `Turkey` implementation
- `src/TurkeyAdapter.ts` — adapter that lets a `Turkey` be used where a `Duck` is expected
- `src/AdapterExample.ts` — small runner demonstrating the pattern

Run (two common ways):

1) Using `ts-node` (recommended for quick runs):

```bash
cd adapter
npm install
npx ts-node src/AdapterExample.ts
```

2) Compile then run with `node`:

```bash
cd adapter
npm install
npx tsc
node dist/AdapterExample.js
```

Notes:
- If your `tsconfig.json` outputs compiled files to a different folder, adjust the `node` path.
- This example keeps outputs simple `console.log` statements to show behavior.
