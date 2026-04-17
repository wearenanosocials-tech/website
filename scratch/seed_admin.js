const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedAdmin() {
    console.log('Attempting to seed admin user...');
    
    const { data, error } = await supabase.auth.signUp({
        email: 'tech@imaginariumng.com',
        password: 'Joshua2000',
    });

    if (error) {
        console.error('Error seeding admin:', error.message);
        process.exit(1);
    } else {
        console.log('Admin user signup initiated successfully!');
        console.log('User ID:', data.user.id);
        console.log('IMPORTANT: If email confirmation is enabled, please check the email and click the confirmation link.');
        console.log('Alternatively, you can manually "Confirm User" in the Supabase Dashboard > Authentication > Users.');
    }
}

seedAdmin();
