'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { 
    FileText, 
    FolderOpen,
    BarChart2,
    Mail,
    Plus,
    ArrowUpRight,
    Bell,
    Search,
    ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDashboard() {
    const [stats, setStats] = useState({ posts: 0, categories: 0, reports: 0, leads: 0 });
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [postsRes, categoriesRes, recentRes, reportsRes, leadsRes] = await Promise.all([
                supabase.from('posts').select('*', { count: 'exact', head: true }),
                supabase.from('categories').select('*', { count: 'exact', head: true }),
                supabase.from('posts').select('id, title, slug, created_at, categories(name)').order('created_at', { ascending: false }).limit(5),
                supabase.from('impact_reports').select('*', { count: 'exact', head: true }),
                supabase.from('report_leads').select('*', { count: 'exact', head: true }),
            ]);

            setStats({ 
                posts: postsRes.count || 0, 
                categories: categoriesRes.count || 0,
                reports: reportsRes.count || 0,
                leads: leadsRes.count || 0,
            });
            if (recentRes.data) setRecentPosts(recentRes.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const stats_cards = [
        { label: 'Total Posts', value: stats.posts, icon: FileText, trend: '+12%' },
        { label: 'Categories', value: stats.categories, icon: FolderOpen, trend: '+3%' },
        { label: 'Impact Reports', value: stats.reports, icon: BarChart2, trend: null },
        { label: 'Report Leads', value: stats.leads, icon: Mail, trend: null },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <h1 className="text-[22px] font-black text-gray-900 leading-tight">Dashboard</h1>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">Good to see you, Admin.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white border border-gray-100 rounded-xl pl-9 pr-4 py-2 text-[13px] text-gray-700 font-medium focus:outline-none focus:border-gray-200 w-52 placeholder:text-gray-300"
                        />
                    </div>
                    <button className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors relative">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#FFD600] rounded-full" />
                    </button>
                    <Link 
                        href="/admin/blog/new"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        New Post
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
                {stats_cards.map((card, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                                <card.icon className="w-4 h-4 text-gray-500" />
                            </div>
                            {card.trend && (
                                <span className="text-[11px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    {card.trend}
                                </span>
                            )}
                        </div>
                        <p className="text-[28px] font-black text-gray-900 leading-none mb-1">
                            {loading ? '—' : card.value}
                        </p>
                        <p className="text-[12px] text-gray-400 font-medium">{card.label}</p>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-3 gap-6">
                {/* Recent Posts */}
                <div className="col-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                        <h2 className="text-[14px] font-black text-gray-900">Recent Posts</h2>
                        <Link href="/admin/blog" className="text-[12px] font-black text-gray-400 hover:text-gray-700 flex items-center gap-1 transition-colors">
                            View all <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {loading ? (
                            [1,2,3,4].map(i => (
                                <div key={i} className="flex items-center gap-4 px-6 py-4 animate-pulse">
                                    <div className="w-8 h-8 rounded-lg bg-gray-50" />
                                    <div className="flex-1">
                                        <div className="h-3 bg-gray-50 rounded w-48 mb-2" />
                                        <div className="h-2.5 bg-gray-50 rounded w-24" />
                                    </div>
                                </div>
                            ))
                        ) : recentPosts.length === 0 ? (
                            <div className="px-6 py-16 text-center">
                                <FileText className="w-8 h-8 text-gray-200 mx-auto mb-3" />
                                <p className="text-[13px] font-black text-gray-300">No posts yet</p>
                                <Link href="/admin/blog/new" className="text-[12px] text-[#FFD600] font-black mt-2 inline-block hover:underline">Create your first story →</Link>
                            </div>
                        ) : (
                            recentPosts.map((post) => (
                                <div key={post.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-[#FFD600]/10 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-3.5 h-3.5 text-[#c9a800]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-black text-gray-800 truncate group-hover:text-black">{post.title}</p>
                                        <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                                            {post.categories?.name || 'Uncategorized'} · {new Date(post.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 hover:text-gray-700" />
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Right: Impact Report + Quick Actions */}
                <div className="space-y-4">
                    {/* Impact Report */}
                    <div className="bg-black rounded-2xl p-6 relative overflow-hidden h-[260px] flex flex-col justify-between group">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#FFD600]/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                        <div>
                            <div className="w-6 h-0.5 bg-[#FFD600] mb-5" />
                            <h3 className="text-white font-black text-[18px] leading-tight">Nano Impact<br />Report 2026</h3>
                            <p className="text-gray-500 text-[12px] font-medium mt-2 leading-relaxed">March edition — across-Africa creator metrics.</p>
                        </div>
                        <Link 
                            href="/Updated Nano Creator Impact Report -March 2026.pdf"
                            target="_blank"
                            className="flex items-center gap-2 text-[12px] font-black text-[#FFD600] hover:text-white transition-colors"
                        >
                            Download Report <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 px-2 mb-3">Quick Actions</p>
                        {[
                            { label: 'Write new story', href: '/admin/blog/new', icon: Plus },
                            { label: 'Manage categories', href: '/admin/categories', icon: FolderOpen },
                            { label: 'View live site', href: '/', icon: ExternalLink },
                        ].map((action) => (
                            <Link 
                                key={action.href}
                                href={action.href}
                                target={action.href === '/' ? '_blank' : undefined}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all font-bold text-[13px] group"
                            >
                                <action.icon className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-700 transition-colors" />
                                {action.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
