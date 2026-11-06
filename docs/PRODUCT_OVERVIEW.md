# Product overview

## High concept
PARALLEL is a persistent cyberpunk life simulation and social world. The player has one underlying Character and can move through the city using multiple Identities. Each Identity has its own public presence, relationships, reputation, and access.

## Core rules
1. A user account owns one player Character.
2. A Character may own multiple Identities (initial target: two or three).
3. Identity-specific activity must not automatically reveal the underlying Character.
4. NPCs and family members have persistent state and can change relationships over time.
5. The world advances through simulation ticks and scheduled events.
6. Social activity is part of the simulation, not a disconnected feature.

## Initial vertical slice
- Create and load a player Character.
- Create up to three Identities for that Character.
- Display the Vesper world status.
- Persist Character and Identity records in PostgreSQL.
- Render the first console/dashboard in the web client.

## Out of scope for the first slice
- Real-time multiplayer.
- Full autonomous NPC AI.
- Payments or user-generated monetization.
- Production authentication and account recovery.
- Complete city map and full social messaging.
