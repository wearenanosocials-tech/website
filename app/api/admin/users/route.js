import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// helper to check if requester is an admin
async function checkAdmin(req) {
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.split(' ')[1];
    
    if (!token) {
        console.error('API Error: No Bearer token found in Authorization header');
        return false;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
        console.error('API Auth Error:', error?.message);
        return false;
    }
    return true; 
}

export async function GET(req) {
    if (!await checkAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers();
    
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    
    console.log(`API: Found ${users?.length || 0} total users in auth.users`);
    return NextResponse.json({ users });
}

export async function POST(req) {
    if (!await checkAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { email, password } = await req.json();
    
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ user: data.user });
}

export async function PUT(req) {
    if (!await checkAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id, email, password } = await req.json();
    
    const updateData = {};
    if (email) updateData.email = email;
    if (password) updateData.password = password;

    const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, updateData);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ user: data.user });
}

export async function DELETE(req) {
    if (!await checkAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const { error } = await supabaseAdmin.auth.admin.deleteUser(id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}
