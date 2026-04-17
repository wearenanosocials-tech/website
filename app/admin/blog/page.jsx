'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { 
    Plus, Search, Edit, Trash2, Eye, FileText, ArrowUpRight, ChevronLeft, ChevronRight, Filter
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    useEffect(() => { 
        fetchData(); 
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const [postsRes, catsRes] = await Promise.all([
            supabase.from('posts').select('*, categories(name)').order('created_at', { ascending: false }),
            supabase.from('categories').select('*').order('name', { ascending: true })
        ]);

        if (postsRes.data) setPosts(postsRes.data);
        if (catsRes.data) setCategories(catsRes.data);
        setLoading(false);
    };

    const fetchPosts = async () => {
        // Simple wrapper for refresh
        fetchData();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this post?')) {
            const { error } = await supabase.from('posts').delete().eq('id', id);
            if (!error) fetchPosts();
        }
    };

    const filteredPosts = posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
        const matchesCategory = categoryFilter === 'all' || p.category_id === categoryFilter;
        return matchesSearch && matchesStatus && matchesCategory;
    });

    const getStatusStyle = (status) => {
        switch (status) {
            case 'published': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'draft': return 'bg-gray-50 text-gray-500 border-gray-100';
            case 'scheduled': return 'bg-blue-50 text-blue-600 border-blue-100';
            default: return 'bg-gray-50 text-gray-500 border-gray-100';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <h1 className="text-[22px] font-black text-gray-900">Blog Posts</h1>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">{posts.length} total stories published</p>
                </div>
                <Link 
                    href="/admin/blog/new"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors"
                >
                    <Plus className="w-3.5 h-3.5" />
                    New Story
                </Link>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center flex-1 gap-3">
                    <div className="relative w-full max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
                        <input 
                            type="text" 
                            placeholder="Filter posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-gray-100 rounded-xl pl-9 pr-4 py-2 text-[13px] text-gray-700 font-medium focus:outline-none focus:border-gray-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div className="relative">
                        <select 
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-white border border-gray-100 rounded-xl px-3 py-2 text-[12px] font-black text-gray-500 hover:text-gray-900 border-none appearance-none pr-8 cursor-pointer focus:outline-none"
                        >
                            <option value="all">All Status</option>
                            <option value="published">Published</option>
                            <option value="draft">Drafts</option>
                            <option value="scheduled">Scheduled</option>
                        </select>
                        <ChevronLeft className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300 pointer-events-none rotate-270" />
                    </div>

                    <div className="relative">
                        <select 
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="bg-white border border-gray-100 rounded-xl px-3 py-2 text-[12px] font-black text-gray-500 hover:text-gray-900 border-none appearance-none pr-8 cursor-pointer focus:outline-none"
                        >
                            <option value="all">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        <ChevronLeft className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300 pointer-events-none rotate-270" />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={fetchData} className="px-3 py-2 bg-white border border-gray-100 rounded-xl text-[12px] font-black text-gray-400 hover:text-gray-700 transition-colors">
                        Refresh
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-50">
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Title & URL</th>
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Status</th>
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Category</th>
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Publish Date</th>
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            [1,2,3,4,5].map(i => (
                                <tr key={i} className="animate-pulse">
                                    <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-64" /></td>
                                    <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-20" /></td>
                                    <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-24" /></td>
                                    <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-20" /></td>
                                    <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-20 ml-auto" /></td>
                                </tr>
                            ))
                        ) : filteredPosts.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-6 py-20 text-center">
                                    <FileText className="w-6 h-6 text-gray-200 mx-auto mb-3" />
                                    <p className="text-[13px] font-black text-gray-300">No posts matched your filters</p>
                                    <button onClick={() => { setStatusFilter('all'); setCategoryFilter('all'); setSearchTerm(''); }} className="text-[12px] text-[#FFD600] font-black mt-2 inline-block">Clear all filters →</button>
                                </td>
                            </tr>
                        ) : filteredPosts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                                            {post.image_url ? (
                                                <Image src={post.image_url} alt={post.title} fill className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FileText className="w-4 h-4 text-gray-200" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-black text-gray-800 group-hover:text-black truncate max-w-[280px]">{post.title}</p>
                                            <p className="text-[11px] text-gray-400 font-medium truncate max-w-[280px]">/{post.slug}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-wider ${getStatusStyle(post.status)}`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-black text-gray-500">
                                        {post.categories?.name || 'Uncategorized'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-[12px] font-bold text-gray-400">
                                            {new Date(post.published_at || post.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={`/blog/${post.slug}`} target="_blank"
                                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
                                            <Eye className="w-3.5 h-3.5" />
                                        </Link>
                                        <Link href={`/admin/blog/edit/${post.id}`}
                                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
                                            <Edit className="w-3.5 h-3.5" />
                                        </Link>
                                        <button onClick={() => handleDelete(post.id)}
                                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-50">
                    <p className="text-[11px] font-bold text-gray-400">{filteredPosts.length} results</p>
                    <div className="flex items-center gap-1">
                        <button disabled className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-300 cursor-not-allowed">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-black text-white text-[12px] font-black">1</div>
                        <button disabled className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-300 cursor-not-allowed">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
