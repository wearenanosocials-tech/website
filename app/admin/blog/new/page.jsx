'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
    ChevronLeft, Save, Image as ImageIcon, X, AlignLeft, Type, Link as LinkIcon, Upload, Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';
import TiptapEditor from '@/components/admin/TiptapEditor';
import AuthorManagementModal from '@/components/admin/AuthorManagementModal';
import { User } from 'lucide-react';

export default function NewBlogPost() {
    const router = useRouter();
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image_url: '',
        category_id: '',
        author_id: '',
        status: 'published',
        published_at: new Date().toISOString().slice(0, 16),
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const [catsRes, authorsRes] = await Promise.all([
            supabase.from('categories').select('*'),
            supabase.from('authors').select('*').order('name')
        ]);
        
        if (catsRes.data) setCategories(catsRes.data);
        if (authorsRes.data) {
            setAuthors(authorsRes.data);
            // Default to 'Nano Team' if it exists and no author is selected
            if (!formData.author_id && authorsRes.data.length > 0) {
                const nanoTeam = authorsRes.data.find(a => a.name === 'Nano Team');
                if (nanoTeam) setFormData(prev => ({ ...prev, author_id: nanoTeam.id }));
            }
        }
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, title, slug }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validation
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file.');
            return;
        }

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { data, error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
            toast.success('Image uploaded successfully!');
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Failed to upload image.');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!formData.title) {
            toast.error('Please add a title.');
            return;
        }
        setLoading(true);

        const payload = { 
            ...formData,
            // If published now, use precise timestamp. If scheduled, use selection.
            published_at: formData.status === 'published' ? new Date().toISOString() : new Date(formData.published_at).toISOString()
        };

        const { error } = await supabase.from('posts').insert([payload]);
        if (error) {
            toast.error(error.message);
            setLoading(false);
        } else {
            toast.success(formData.status === 'draft' ? 'Draft saved!' : 'Story published!');
            router.push('/admin/blog');
        }
    };

    return (
        <div className="space-y-6 max-w-[1100px]">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                    <Link 
                        href="/admin/blog"
                        className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 hover:text-gray-700 hover:border-gray-200 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Link>
                    <div>
                        <h1 className="text-[22px] font-black text-gray-900">New Story</h1>
                        <p className="text-[13px] text-gray-400 font-medium mt-0.5">Drafting a new blog post</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => router.push('/admin/blog')}
                        className="px-4 py-2 rounded-xl border border-gray-100 text-[13px] font-black text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                        Discard
                    </button>
                    <button 
                        onClick={handleSave}
                        disabled={loading || uploading}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                        {loading ? 'Saving...' : (formData.status === 'draft' ? 'Save Draft' : 'Publish Story')}
                    </button>
                </div>
            </div>

            {/* Two column layout */}
            <form className="grid grid-cols-3 gap-6" onSubmit={handleSave}>
                {/* Main content */}
                <div className="col-span-2 space-y-4">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8">
                        {/* Title */}
                        <input 
                            type="text"
                            value={formData.title}
                            onChange={handleTitleChange}
                            placeholder="Post title..."
                            required
                            className="w-full text-[28px] font-black text-gray-900 placeholder:text-gray-200 bg-transparent border-none focus:outline-none focus:ring-0 leading-tight mb-6"
                        />

                        {/* Slug */}
                        <div className="mb-6">
                            <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 mb-2">
                                <LinkIcon className="w-3 h-3" /> URL Slug
                            </label>
                            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                                <span className="text-[12px] text-gray-300 font-medium">/blog/</span>
                                <input 
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                    className="flex-1 bg-transparent text-[13px] font-bold text-gray-700 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div className="mb-6">
                            <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 mb-2">
                                <AlignLeft className="w-3 h-3" /> Excerpt
                            </label>
                            <textarea 
                                value={formData.excerpt}
                                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                                placeholder="A brief summary..."
                                rows="3"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[14px] text-gray-700 font-medium focus:outline-none focus:border-gray-200 transition-colors resize-none placeholder:text-gray-300"
                            />
                        </div>

                        {/* Content (Rich Text) */}
                        <div>
                            <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 mb-2">
                                <Type className="w-3 h-3" /> Content
                            </label>
                            <TiptapEditor 
                                content={formData.content}
                                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                                onImageUpload={async (file) => {
                                    try {
                                        const fileExt = file.name.split('.').pop();
                                        const fileName = `inline-${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
                                        const filePath = `${fileName}`;

                                        const { error: uploadError } = await supabase.storage
                                            .from('blog-images')
                                            .upload(filePath, file);

                                        if (uploadError) throw uploadError;

                                        const { data: { publicUrl } } = supabase.storage
                                            .from('blog-images')
                                            .getPublicUrl(filePath);

                                        return publicUrl;
                                    } catch (error) {
                                        console.error('Inline upload error:', error);
                                        toast.error('Failed to upload inline image.');
                                        return null;
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Publish settings */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Publish Settings</p>

                        <div>
                            <label className="text-[11px] font-black text-gray-400 block mb-1.5">Category</label>
                            <div className="relative">
                                <select 
                                    value={formData.category_id}
                                    onChange={(e) => setFormData(prev => ({ ...prev, category_id: e.target.value }))}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-[13px] font-bold text-gray-700 focus:outline-none appearance-none cursor-pointer"
                                >
                                    <option value="">Select category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 rotate-270 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="text-[11px] font-black text-gray-400 block mb-1.5">Post Status</label>
                            <div className="relative">
                                <select 
                                    value={formData.status}
                                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-[13px] font-bold text-gray-700 focus:outline-none appearance-none cursor-pointer"
                                >
                                    <option value="published">Publish Immediately</option>
                                    <option value="draft">Save as Draft</option>
                                    <option value="scheduled">Schedule Post</option>
                                </select>
                                <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 rotate-270 pointer-events-none" />
                            </div>
                        </div>

                        {formData.status === 'scheduled' && (
                            <div>
                                <label className="text-[11px] font-black text-gray-400 block mb-1.5">Publish Date & Time</label>
                                <input 
                                    type="datetime-local"
                                    value={formData.published_at}
                                    onChange={(e) => setFormData(prev => ({ ...prev, published_at: e.target.value }))}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-[13px] font-bold text-gray-700 focus:outline-none"
                                />
                            </div>
                        )}

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-[11px] font-black text-gray-400">Author</label>
                                <button 
                                    type="button"
                                    onClick={() => setIsAuthorModalOpen(true)}
                                    className="text-[10px] font-black text-[#FFD600] hover:underline"
                                >
                                    Manage
                                </button>
                            </div>
                            <div className="relative">
                                <select 
                                    value={formData.author_id}
                                    onChange={(e) => setFormData(prev => ({ ...prev, author_id: e.target.value }))}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-[13px] font-bold text-gray-700 focus:outline-none appearance-none cursor-pointer"
                                >
                                    <option value="">Select author</option>
                                    {authors.map(author => (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                    ))}
                                </select>
                                <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 rotate-270 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Featured Image</p>
                        
                        <input 
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="hidden"
                        />

                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="relative aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-100 border-dashed border-gray-200 group cursor-pointer hover:border-[#FFD600] transition-colors"
                        >
                            {uploading ? (
                                <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                                    <Loader2 className="w-6 h-6 text-[#FFD600] animate-spin" />
                                    <p className="text-[11px] font-bold text-gray-400">Uploading...</p>
                                </div>
                            ) : formData.image_url ? (
                                <>
                                    <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white text-[11px] font-black uppercase tracking-wider">Change Image</p>
                                    </div>
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            setFormData(prev => ({ ...prev, image_url: '' })); 
                                        }}
                                        className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-sm text-white flex items-center justify-center z-10"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full h-full gap-3 p-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <Upload className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-black text-gray-700">Click to upload</p>
                                        <p className="text-[10px] font-medium text-gray-400 mt-1">PNG, JPG or WebP up to 5MB</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>

            <AuthorManagementModal 
                isOpen={isAuthorModalOpen} 
                onClose={() => setIsAuthorModalOpen(false)} 
                onUpdate={fetchData} 
            />
        </div>
    );
}
