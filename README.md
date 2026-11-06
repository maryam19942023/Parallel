# PARALLEL

**A City. Multiple Identities. No One Knows Everything.**

PARALLEL is a persistent cyberpunk life-simulation and social world set in **Vesper, 2089**.

One player controls one real Character through multiple separate Identities. The city continues evolving while the player is offline. NPCs have routines, relationships, memories, and goals. A social network connects the people and events shaping the city.

## Product pillars

- **Persistent city:** Vesper evolves over time, including while the player is offline.
- **Multiple identities:** one Character can operate distinct public, underground, and corporate identities.
- **Living NPCs and family:** relationships, trust, conflicts, and family influence evolve through simulation.
- **Social network:** posts, messages, reputation, and social connections are core gameplay systems.
- **Event-driven simulation:** world events and NPC decisions influence one another.

## Planned stack

| Area | Technology |
|---|---|
| Backend | .NET 10, ASP.NET Core Web API |
| Data | PostgreSQL, Entity Framework Core |
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Local infrastructure | Docker Compose |

## Repository layout

```text
backend/       .NET solution, API, domain, application and infrastructure
frontend/      Next.js client
docs/          product and architecture documentation
infra/         local development infrastructure
```

## Run locally

### Backend and database

1. Start PostgreSQL: `docker compose -f infra/docker-compose.yml up -d`
2. Run the API: `dotnet run --project backend/src/Parallel.Api`
3. Open Swagger at the URL printed by ASP.NET Core (in Development).

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000`

## Current status

This is the initial foundation: solution structure, API health endpoint, domain model starting points, PostgreSQL DbContext, local database container, and a first frontend shell. Authentication, gameplay, NPC simulation, persistence migrations, and interactive world features are not implemented yet.

## Product principle

Build a coherent persistent world first. Keep the architecture modular so multiplayer, richer NPC autonomy, and AI-driven experiences can be introduced without rewriting the core.
