# Single-Tenant Inventory System Design Plan

## Goal
Build a secure, maintainable inventory platform for one client with one shared application database and a single deployment workflow.

## Scope
- Identity and access management
- Category management
- Warehouse management
- Inventory tracking
- Orders and billing
- Notifications and audit logs
- External integrations

## Architecture
- Monolithic NestJS service with modular boundaries.
- Single PostgreSQL database (`MASTER_DATABASE_URL`) for all application data.
- No tenant resolution, no per-tenant routing, no tenant-scoped queries.

## Data Model Direction
- Keep business entities in one schema.
- Enforce domain-level integrity with foreign keys and unique constraints.
- Use soft-delete/audit patterns only where needed by product requirements.

## Security
- JWT-based authentication with role-based authorization.
- Input validation on all API boundaries.
- Centralized exception handling and structured logging.

## Delivery Plan
1. Finalize core domain entities and migration baseline.
2. Implement inventory, orders, and warehouse flows end-to-end.
3. Add integration points (webhooks, email, third-party APIs).
4. Add automated tests (unit, integration, e2e) and release checks.

## Operational Plan
- Environment-based configuration for local/dev/prod.
- CI pipeline for lint, build, and test.
- Database backup and restore runbook.
- Observability for logs, metrics, and health checks.
