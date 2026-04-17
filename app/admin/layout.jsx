'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const publicAdminRoutes = ['/admin/login', '/admin/forgot-password', '/admin/reset-password'];
    const isPublicRoute = publicAdminRoutes.includes(pathname);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session && !isPublicRoute) {
                router.push('/admin/login');
            } else if (session && isPublicRoute) {
                router.push('/admin');
            }
            setLoading(false);
        };

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session && !isPublicRoute) router.push('/admin/login');
            else if (session && isPublicRoute) router.push('/admin');
        });

        return () => subscription.unsubscribe();
    }, [router, isPublicRoute]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-200 border-t-[#FFD600] rounded-full animate-spin" />
            </div>
        );
    }

    if (isPublicRoute) return <>{children}</>;

    return (
        <div className="min-h-screen bg-[#F8F9FB] font-primary flex">
            <AdminSidebar />
            <main className="flex-1 ml-64 min-h-screen">
                <div className="max-w-[1400px] p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
