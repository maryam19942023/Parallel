# Architecture

## Initial project boundaries
- **Parallel.Domain** — core entities and domain rules. No framework dependencies.
- **Parallel.Application** — use cases and abstractions required by application workflows.
- **Parallel.Infrastructure** — persistence and external infrastructure implementations.
- **Parallel.Api** — HTTP entry point, dependency registration, and API contracts.
- **frontend** — Next.js presentation client.

## Domain direction
The Character is the real player entity. Identity is a separate entity owned by Character. Public-facing social content should reference the Identity that published it, not expose Character identifiers.

## Persistence
PostgreSQL is the initial relational store. EF Core is used through the Infrastructure project. Database migrations will be introduced with the first persisted use case.

## Future modules
Keep future systems isolated behind clear boundaries:
- World simulation and scheduled ticks
- NPC behavior and memory
- Family and relationships
- Social feed, messaging, and reputation
- Events and notifications

Do not introduce microservices before domain boundaries and operational needs justify them.
