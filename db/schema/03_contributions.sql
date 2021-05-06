-- Drop and recreate Widgets table (Example)
DROP TABLE IF EXISTS contributions CASCADE;
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  writer_id INTEGER REFERENCES writers(id) ON DELETE CASCADE,
  story_id INTEGER REFERENCES stories(id) ON DELETE CASCADE,
  contribution VARCHAR(1000) NOT NULL,
  date_created TIMESTAMP DEFAULT NOW(),
  vote INTEGER DEFAULT 0,
  accepted BOOLEAN DEFAULT false
);
