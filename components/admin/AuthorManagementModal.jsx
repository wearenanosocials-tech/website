'use client';

import { useState, useRef, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
    X, Upload, Loader2, User, Trash2, Camera, Plus, Check, ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

export default function AuthorManagementModal({ isOpen, onClose, onUpdate }) {
    const fileInputRef = useRef(null);
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [uploading, setUploading] = useState(false);
    
    const [view, setView] = useState('list'); // 'list' or 'form'
    const [editingAuthor, setEditingAuthor] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        image_url: ''
    });

    useEffect(() => {
        if (isOpen) {
            fetchAuthors();
        }
    }, [isOpen]);

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

    const handleOpenForm = (author = null) => {
        if (author) {
            setEditingAuthor(author);
            setFormData({
                name: author.name || '',
                bio: author.bio || '',
                image_url: author.image_url || ''
            });
        } else {
            setEditingAuthor(null);
            setFormData({ name: '', bio: '', image_url: '' });
        }
        setView('form');
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `author-${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
            toast.success('Profile photo uploaded');
        } catch (error) {
            toast.error('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) return toast.error('Name is required');

        setSubmitting(true);
        try {
            if (editingAuthor) {
                const { error } = await supabase
                    .from('authors')
                    .update(formData)
                    .eq('id', editingAuthor.id);
                if (error) throw error;
                toast.success('Author updated');
            } else {
                const { error } = await supabase
                    .from('authors')
                    .insert([formData]);
                if (error) throw error;
                toast.success('Author created');
            }
            
            setView('list');
            fetchAuthors();
            if (onUpdate) onUpdate();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id, name) => {
        if (!window.confirm(`Delete ${name}? Any posts linked to this author will show "Unknown Author".`)) return;

        try {
            const { error } = await supabase
                .from('authors')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            toast.success('Author removed');
            fetchAuthors();
            if (onUpdate) onUpdate();
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[500] flex items-center justify-center p-6">
            <div className="bg-white rounded-[40px] w-full max-w-xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                
                {/* Header */}
                <div className="p-8 border-b border-gray-50 flex items-center justify-between shrink-0">
                    <div>
                        <h2 className="text-[24px] font-black text-gray-900 tracking-tight">
                            {view === 'list' ? 'Authors Management' : (editingAuthor ? 'Edit Author' : 'Add New Author')}
                        </h2>
                        <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                            {view === 'list' ? `Manage ${authors.length} content creators` : 'Set up a professional profile'}
                        </p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                    {view === 'list' ? (
                        <div className="space-y-3">
                            <button 
                                onClick={() => handleOpenForm()}
                                className="w-full flex items-center justify-between p-4 rounded-3xl border-2 border-dashed border-gray-100 hover:border-[#FFD600] hover:bg-[#FFD600]/5 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#FFD600] transition-colors">
                                        <Plus className="w-5 h-5" />
                                    </div>
                                    <span className="text-[14px] font-black text-gray-400 group-hover:text-gray-900 transition-colors">Add new team member</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-[#FFD600] transition-colors" />
                            </button>

                            {loading ? (
                                <div className="py-20 flex flex-col items-center justify-center gap-4">
                                    <Loader2 className="w-8 h-8 text-[#FFD600] animate-spin" />
                                    <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Loading creators...</p>
                                </div>
                            ) : authors.length === 0 ? (
                                <div className="py-12 text-center">
                                    <p className="text-gray-300 font-bold text-[14px]">No authors found</p>
                                </div>
                            ) : (
                                authors.map((author) => (
                                    <div 
                                        key={author.id}
                                        className="flex items-center justify-between p-4 rounded-[28px] border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                                                {author.image_url ? (
                                                    <Image src={author.image_url} alt={author.name} fill className="object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <User className="w-6 h-6" />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-black text-gray-900">{author.name}</h4>
                                                <p className="text-[12px] text-gray-400 font-medium line-clamp-1 max-w-[200px]">
                                                    {author.bio || 'No bio added yet'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={() => handleOpenForm(author)}
                                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-[#FFD600]/10 text-gray-400 hover:text-[#c9a800] transition-colors"
                                            >
                                                <User className="w-4 h-4" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(author.id, author.name)}
                                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Photo Upload */}
                            <div className="flex flex-col items-center justify-center mb-4">
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="relative w-24 h-24 rounded-[32px] overflow-hidden bg-gray-50 border-2 border-dashed border-gray-200 group cursor-pointer hover:border-[#FFD600] transition-all"
                                >
                                    {uploading ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                                            <Loader2 className="w-6 h-6 text-[#FFD600] animate-spin" />
                                        </div>
                                    ) : formData.image_url ? (
                                        <>
                                            <Image src={formData.image_url} alt="Profile" fill className="object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Camera className="text-white w-5 h-5" />
                                            </div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-gray-400">
                                            <Camera className="w-6 h-6" />
                                            <span className="text-[10px] font-black uppercase tracking-tighter">Upload</span>
                                        </div>
                                    )}
                                </div>
                                <input 
                                    type="file" 
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                    className="hidden" 
                                />
                                <p className="text-[11px] font-bold text-gray-300 mt-3 uppercase tracking-widest">Profile Photo</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.15em] block mb-2 ml-1">Full Name</label>
                                    <input 
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        placeholder="e.g. John Doe"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[14px] font-bold text-gray-700 focus:outline-none focus:border-[#FFD600]/50 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.15em] block mb-2 ml-1">Short Bio</label>
                                    <textarea 
                                        value={formData.bio}
                                        onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                                        placeholder="Tell the readers who this is..."
                                        rows="3"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[14px] font-bold text-gray-700 focus:outline-none focus:border-[#FFD600]/50 transition-colors resize-none"
                                    />
                                </div>
                            </div>

                            <div className="pt-2 flex items-center gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setView('list')}
                                    className="flex-1 py-4 text-[14px] font-black text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    Back to List
                                </button>
                                <button 
                                    type="submit"
                                    disabled={submitting || uploading}
                                    className="flex-[2] bg-black text-white py-4 rounded-2xl text-[14px] font-black hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-black/10"
                                >
                                    {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                                    {editingAuthor ? 'Update Profile' : 'Save Author'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer Decor */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FFD600]" />
            </div>
        </div>
    );
}
