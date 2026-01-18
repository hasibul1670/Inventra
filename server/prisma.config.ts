import 'dotenv/config';
import path from 'node:path';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: path.join('prisma', 'master', 'schema.prisma'),
  migrations: {
    path: path.join('prisma', 'master', 'migrations'),
  },
  datasource: {
    url: env('MASTER_DATABASE_URL'),
  },
});
