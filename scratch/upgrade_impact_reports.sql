-- ============================================================
-- IMPACT REPORT UPGRADE MIGRATION
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Create Storage Bucket for PDFs
-- Note: Replace 'impact-reports' with your desired public bucket name
INSERT INTO storage.buckets (id, name, public) 
VALUES ('impact-reports', 'impact-reports', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Add 'is_active' to impact_reports
ALTER TABLE public.impact_reports 
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT false;

-- 3. Link Leads to Reports
ALTER TABLE public.report_leads 
ADD COLUMN IF NOT EXISTS report_id uuid REFERENCES public.impact_reports(id) ON DELETE SET NULL;

-- 4. Storage Policies (Allow public read, authenticated upload)
CREATE POLICY "Public Read Reports" ON storage.objects FOR SELECT USING (bucket_id = 'impact-reports');
CREATE POLICY "Admin Upload Reports" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'impact-reports' AND auth.role() = 'authenticated');
CREATE POLICY "Admin Delete Reports" ON storage.objects FOR DELETE USING (bucket_id = 'impact-reports' AND auth.role() = 'authenticated');

-- 5. Notify PostgREST
NOTIFY pgrst, 'reload schema';
