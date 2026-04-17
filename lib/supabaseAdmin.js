import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  // We log this in dev to help the user identify the issue
  if (process.env.NODE_ENV === 'development') {
    console.error('CRITICAL: SUPABASE_SERVICE_ROLE_KEY is missing in .env.local');
  }
}

// THIS CLIENT SHOULD ONLY BE USED IN API ROUTES (SERVER-SIDE)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
