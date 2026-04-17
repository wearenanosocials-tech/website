-- ============================================================
-- BLOG STATUS & SCHEDULING UPGRADE
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Add status and published_at columns
ALTER TABLE public.posts 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'published' CHECK (status IN ('draft', 'published', 'scheduled')),
ADD COLUMN IF NOT EXISTS published_at timestamptz DEFAULT now();

-- 2. Update existing posts to be 'published'
UPDATE public.posts SET status = 'published' WHERE status IS NULL;
UPDATE public.posts SET published_at = created_at WHERE published_at IS NULL;

-- 3. Notify PostgREST to refresh the cache
NOTIFY pgrst, 'reload schema';
