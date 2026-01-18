INSERT INTO "Category"
  ("id","name","slug","description","isActive","createdAt","updatedAt")
VALUES
  (gen_random_uuid()::text, 'Electronics', 'electronics', 'Devices and gadgets', true, now(), now()),
  (gen_random_uuid()::text, 'Groceries', 'groceries', 'Everyday essentials', true, now(), now()),
  (gen_random_uuid()::text, 'Office', 'office', 'Office supplies', true, now(), now());
