-- CreateSequence
CREATE SEQUENCE IF NOT EXISTS "category_id_seq" START 1;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN "category_id" TEXT;
ALTER TABLE "Category" ALTER COLUMN "category_id" SET DEFAULT ('cat-' || lpad(nextval('category_id_seq')::text, 5, '0'));

-- Backfill existing rows
UPDATE "Category"
SET "category_id" = ('cat-' || lpad(nextval('category_id_seq')::text, 5, '0'))
WHERE "category_id" IS NULL;

-- Enforce constraints
ALTER TABLE "Category" ALTER COLUMN "category_id" SET NOT NULL;
CREATE UNIQUE INDEX "Category_category_id_key" ON "Category"("category_id");
