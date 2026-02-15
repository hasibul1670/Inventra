# NestJS Enterprise Folder Architecture (Single-Tenant)

## Objective
Define a stable, enterprise-grade folder architecture for a single-tenant inventory platform using NestJS and PostgreSQL.

## Principles
- Keep business modules isolated by domain.
- Keep infrastructure concerns centralized and reusable.
- Keep request flow simple: auth, validation, business logic, persistence.
- Avoid tenant-specific routing or context layers.

## Proposed Structure
```txt
src/
  app.module.ts
  main.ts

  config/
    app.config.ts
    env.validation.ts

  database/
    master/
      prisma/
        schema.prisma

  infrastructure/
    prisma/
      master-prisma.service.ts
      prisma-exception.filter.ts
    cache/
      redis.service.ts
    queue/
      bullmq.module.ts
      jobs/
        index.ts
    observability/
      logging/
        logger.service.ts
      metrics/
        metrics.service.ts
      tracing/
        tracing.service.ts

  shared/
    constants/
      index.ts
    errors/
      app-error.ts
    types/
      request-context.ts
    utils/
      ensure.ts

  identity/
    identity.module.ts
    application/
      services/
        identity.service.ts
    presentation/
      controllers/
        identity.controller.ts

  category/
    category.module.ts
    application/
      services/
        category.service.ts
    presentation/
      controllers/
        category.controller.ts

  inventory/
    inventory.module.ts
    application/
      services/
        inventory.service.ts
    presentation/
      controllers/
        inventory.controller.ts

  warehouse/
    warehouse.module.ts
    application/
      services/
        warehouse.service.ts
    presentation/
      controllers/
        warehouse.controller.ts

  orders/
    orders.module.ts
    application/
      services/
        orders.service.ts
    presentation/
      controllers/
        orders.controller.ts

  billing/
    billing.module.ts
    application/
      services/
        billing.service.ts
    presentation/
      controllers/
        billing.controller.ts

  notifications/
    notifications.module.ts
    application/
      services/
        notifications.service.ts
    presentation/
      controllers/
        notifications.controller.ts

  audit/
    audit.module.ts
    application/
      services/
        audit.service.ts
    presentation/
      controllers/
        audit.controller.ts

  integrations/
    integrations.module.ts
    application/
      services/
        integrations.service.ts
    presentation/
      controllers/
        integrations.controller.ts
```

## Request Flow
1. Incoming request enters Nest middleware/guards.
2. Authentication and authorization are applied.
3. Controller delegates to application service.
4. Service executes business logic and uses infrastructure adapters.
5. Persistence happens via Prisma service on one application database.

## Database Strategy
- One PostgreSQL database for all entities.
- One Prisma schema and one migration stream.
- Domain boundaries are enforced in code and schema design, not by tenant partitioning.

## Testing Strategy
- Unit tests for application services.
- Integration tests for data access and module interactions.
- E2E tests for critical API workflows.

## Operational Notes
- Keep environment variables minimal and explicit.
- Use standard CI gates: lint, type-check, test, build.
- Add migration checks to prevent schema drift before deploy.
