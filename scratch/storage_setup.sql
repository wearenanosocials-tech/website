-- ============================================================
-- SUPABASE STORAGE CONFIGURATION: blog-images
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Create the bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public to see the images (Public READ)
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- 3. Allow authenticated users to upload (Authenticated INSERT)
CREATE POLICY "Admin Upload" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'blog-images' AND 
  auth.role() = 'authenticated'
);

-- 4. Allow authenticated users to update/delete (Authenticated UPDATE/DELETE)
CREATE POLICY "Admin Update" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'blog-images' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Admin Delete" ON storage.objects
FOR DELETE USING (
  bucket_id = 'blog-images' AND 
  auth.role() = 'authenticated'
);
