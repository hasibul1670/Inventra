-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "category_id" SET DEFAULT 'cat-' || lpad(nextval('category_id_seq')::text, 5, '0');
