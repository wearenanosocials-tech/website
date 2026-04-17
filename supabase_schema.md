# Supabase SQL Schema for Nano Blog

Copy and paste the following SQL into your Supabase SQL Editor and run it to set up your tables.

```sql
-- Create Categories Table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Posts Table
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  author_name TEXT DEFAULT 'Nano Team',
  date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access
CREATE POLICY "Allow public read-only access to categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to posts" ON posts FOR SELECT USING (true);

-- Allow Authenticated Users (Admins) Full Access
CREATE POLICY "Allow authenticated users full access to categories" ON categories FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated users full access to posts" ON posts FOR ALL TO authenticated USING (true);

-- Initial Categories
INSERT INTO categories (name, slug) VALUES 
('Trends', 'trends'),
('Strategy', 'strategy'),
('Career', 'career'),
('Tech', 'tech');
```
