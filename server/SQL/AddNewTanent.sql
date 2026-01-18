INSERT INTO "Tenant" ("id",
                      "slug",
                      "domain",
                      "dbUrl",
                      "isActive",
                      "createdAt")
VALUES (gen_random_uuid(), 'zcc-dev', 'zcc-dev.com', 'postgresql://postgres:postgres@localhost:5432/ims_zcc_dev?schema=public', true, now());