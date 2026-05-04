'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
    LayoutDashboard, 
    FileText, 
    Tags, 
    BarChart2,
    Users,
    LogOut
} from 'lucide-react';
import Image from 'next/image';

const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
    { label: 'Categories', href: '/admin/categories', icon: Tags },
    { label: 'Authors', href: '/admin/authors', icon: Users },
    { label: 'Impact Report', href: '/admin/impact-report', icon: BarChart2 },
    { label: 'Staff Management', href: '/admin/users', icon: Users },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r border-gray-100 flex flex-col z-[100]">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/Nano logo BLACK.png"
                        alt="Nano"
                        width={90}
                        height={32}
                        className="h-7 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4">
                <p className="px-3 mb-3 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Main</p>
                <div className="space-y-0.5">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-bold transition-all ${
                                    isActive 
                                        ? 'bg-black text-white' 
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <item.icon className="w-4 h-4 flex-shrink-0" />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

            </nav>

            {/* Bottom: Sign Out only */}
            <div className="p-3 border-t border-gray-100">
                <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all font-bold text-[14px]"
                >
                    <LogOut className="w-4 h-4 flex-shrink-0" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
