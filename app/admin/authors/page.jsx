'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
    Users, Plus, Trash2, Mail, Search, Shield, Loader2, X, Check, User
} from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';
import AuthorManagementModal from '@/components/admin/AuthorManagementModal';

export default function AuthorsPage() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('authors')
            .select('*')
            .order('name');
        
        if (error) toast.error('Failed to load authors');
        else setAuthors(data || []);
        setLoading(false);
    };

    const filteredAuthors = authors.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <h1 className="text-[22px] font-black text-gray-900">Author Management</h1>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                        Manage creators and their public profiles
                    </p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                >
                    <Plus className="w-4 h-4" />
                    Add Author
                </button>
            </div>

            {/* Search */}
            <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input 
                            type="text" 
                            placeholder="Search authors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-[13px] text-gray-700 font-bold focus:outline-none focus:border-[#FFD600]/30 placeholder:text-gray-300"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-primary">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Author</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Bio</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Created At</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                [1, 2, 3].map(i => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan="4" className="px-6 py-6 h-12 bg-gray-50/20" />
                                    </tr>
                                ))
                            ) : filteredAuthors.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-20 text-center text-gray-300 text-[14px] font-black">
                                        No authors found
                                    </td>
                                </tr>
                            ) : (
                                filteredAuthors.map((author) => (
                                    <tr key={author.id} className="hover:bg-gray-50/40 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                                                    {author.image_url ? (
                                                        <Image src={author.image_url} alt={author.name} fill className="object-cover" />
                                                    ) : (
                                                        <User className="w-5 h-5 text-gray-300" />
                                                    )}
                                                </div>
                                                <span className="text-[14px] font-black text-gray-900 leading-tight">{author.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-[13px] font-medium text-gray-400 line-clamp-1 max-w-xs">
                                                {author.bio || '—'}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 text-[13px] font-bold text-gray-400">
                                            {new Date(author.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => setIsModalOpen(true)}
                                                className="text-[12px] font-black text-[#FFD600] hover:underline"
                                            >
                                                Edit Profile
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <AuthorManagementModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onUpdate={fetchAuthors}
            />
        </div>
    );
}
