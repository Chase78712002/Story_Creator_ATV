-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS writers CASCADE;
CREATE TABLE writers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
