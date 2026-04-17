'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { 
    Plus, Tags, Trash2, Edit, X, Loader2, FolderOpen, FileText
} from 'lucide-react';

function CategoryModal({ mode, initial, onClose, onSave }) {
    const [name, setName] = useState(initial?.name || '');
    const [description, setDescription] = useState(initial?.description || '');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error('Category name is required.');
            return;
        }
        setLoading(true);
        await onSave({ name: name.trim(), description: description.trim() });
        setLoading(false);
    };

    // Close on backdrop click
    const handleBackdrop = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
            onClick={handleBackdrop}
        >
            <div className="bg-white rounded-2xl w-full max-w-md border border-gray-100 overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center">
                            <Tags className="w-3.5 h-3.5 text-gray-500" />
                        </div>
                        <h2 className="text-[15px] font-black text-gray-900">
                            {mode === 'edit' ? 'Edit Category' : 'New Category'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 rounded-lg hover:bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-[11px] font-black uppercase tracking-[0.15em] text-gray-300 mb-1.5">
                            Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Creator Economy"
                            autoFocus
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-200 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-black uppercase tracking-[0.15em] text-gray-300 mb-1.5">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="A short description of this category..."
                            rows="3"
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[13px] font-medium text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-gray-200 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-100 text-[13px] font-black text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : (
                                mode === 'edit' ? 'Save Changes' : 'Create Category'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(null); // null | { mode: 'add' | 'edit', data?: category }

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('categories')
            .select('id, name, description')
            .order('name', { ascending: true });

        if (error) {
            console.error('Error fetching categories:', error);
            toast.error('Failed to load categories.');
        } else {
            setCategories(data || []);
        }
        setLoading(false);
    };

    const handleSave = async ({ name, description }) => {
        if (modal.mode === 'add') {
            const { error } = await supabase.from('categories').insert([{ name, description }]);
            if (error) {
                toast.error(error.code === '23505' ? 'A category with that name already exists.' : error.message);
                return;
            }
            toast.success(`"${name}" created!`);
        } else {
            const { error } = await supabase
                .from('categories')
                .update({ name, description })
                .eq('id', modal.data.id);
            if (error) {
                toast.error(error.message);
                return;
            }
            toast.success(`"${name}" updated!`);
        }
        setModal(null);
        fetchCategories();
    };

    const handleDelete = async (cat) => {
        if (!window.confirm(`Delete "${cat.name}"? Posts in this category will become uncategorized.`)) return;
        const { error } = await supabase.from('categories').delete().eq('id', cat.id);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success(`"${cat.name}" deleted.`);
            fetchCategories();
        }
    };

    return (
        <>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pt-2">
                    <div>
                        <h1 className="text-[22px] font-black text-gray-900">Categories</h1>
                        <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                            {categories.length} categor{categories.length === 1 ? 'y' : 'ies'} total
                        </p>
                    </div>
                    <button
                        onClick={() => setModal({ mode: 'add' })}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        Add Category
                    </button>
                </div>

                {/* Categories Table */}
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50">
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Name</th>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Description</th>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Posts</th>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                [1,2,3].map(i => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-32" /></td>
                                        <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-56" /></td>
                                        <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-8" /></td>
                                        <td className="px-6 py-4"><div className="h-3.5 bg-gray-50 rounded w-16 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : categories.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-24 text-center">
                                        <FolderOpen className="w-6 h-6 text-gray-200 mx-auto mb-3" />
                                        <p className="text-[13px] font-black text-gray-300">No categories yet</p>
                                        <button
                                            onClick={() => setModal({ mode: 'add' })}
                                            className="text-[12px] text-[#FFD600] font-black mt-2 hover:underline"
                                        >
                                            Create your first category →
                                        </button>
                                    </td>
                                </tr>
                            ) : (
                                categories.map((cat) => {
                                    const postCount = cat.posts?.[0]?.count ?? 0;
                                    return (
                                        <tr key={cat.id} className="hover:bg-gray-50/40 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-lg bg-[#FFD600]/10 flex items-center justify-center flex-shrink-0">
                                                        <Tags className="w-3.5 h-3.5 text-[#c9a800]" />
                                                    </div>
                                                    <span className="text-[13px] font-black text-gray-800">{cat.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-[13px] font-medium text-gray-400 truncate max-w-[320px]">
                                                    {cat.description || <span className="text-gray-200 italic">No description</span>}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5">
                                                    <FileText className="w-3 h-3 text-gray-300" />
                                                    <span className="text-[12px] font-black text-gray-500">{postCount}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => setModal({ mode: 'edit', data: cat })}
                                                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                                                    >
                                                        <Edit className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(cat)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>

                    {/* Footer count */}
                    {categories.length > 0 && (
                        <div className="px-6 py-3.5 border-t border-gray-50">
                            <p className="text-[11px] font-bold text-gray-400">{categories.length} categories</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <CategoryModal
                    mode={modal.mode}
                    initial={modal.data}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                />
            )}
        </>
    );
}
