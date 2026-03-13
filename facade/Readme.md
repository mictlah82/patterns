# Facade Pattern

## Intent
Provide a unified, high-level interface to a set of interfaces in a subsystem. The Facade defines a simpler interface that makes the subsystem easier to use.

## Problem solved
Complex subsystems often require many steps to perform a common task. A Facade bundles those steps behind a simple API so clients don't need to know internal details.

## Structure / Participants
- **Facade**: `HomeTheaterFacade` — exposes simple methods like `watchMovie()` and `endMovie()`.
- **Subsystem classes**: `Amplifier`, `Tuner`, `DvdPlayer`, `CdPlayer`, `Screen`, `Projector` (or `DvdPlayer`/`Screen` in this example) — they implement the detailed behavior.

## This example
The `src` folder contains a small home-theater subsystem and a `HomeTheaterFacade` that coordinates them. Use the facade to perform high-level actions without manually calling each subsystem component.

Example usage (conceptual):

```
const homeTheater = new HomeTheaterFacade(amplifier, tuner, dvd, cd, screen);
homeTheater.watchMovie('Raiders of the Lost Ark');
// ...later
homeTheater.endMovie();
```

## Why use it
- Simplifies client code.
- Reduces coupling between clients and complex subsystems.
- Improves readability and maintenance.

## Files of interest
- `src/HomeTheaterFacade.ts` — the facade implementation.
- `src/HomeTheaterTestDrive.ts` — small demo showing how to use the facade.

---
This folder contains a compact, idiomatic TypeScript example of the Facade pattern. Run the test/demo file to see the facade in action.
