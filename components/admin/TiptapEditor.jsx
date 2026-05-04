'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import ImageExtension from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useRef } from 'react';
import { 
    Bold, Italic, List, ListOrdered, Heading2, Heading3, Undo, Redo, 
    Link as LinkIcon, Unlink, Image as ImageIcon, Loader2, Trash2
} from 'lucide-react';

const MenuButton = ({ onClick, isActive, disabled, children, title }) => (
    <button
        onClick={(e) => { e.preventDefault(); onClick(); }}
        disabled={disabled}
        title={title}
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
            isActive ? 'bg-black text-white' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
        } disabled:opacity-30 disabled:cursor-not-allowed`}
    >
        {children}
    </button>
);

export default function TiptapEditor({ content, onChange, onImageUpload }) {
    const fileInputRef = useRef(null);
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[#FFD600] underline underline-offset-4 font-bold',
                },
            }),
            ImageExtension.configure({
                HTMLAttributes: {
                    class: 'rounded-2xl border border-gray-100 shadow-lg my-8 max-w-full h-auto cursor-pointer hover:ring-2 hover:ring-[#FFD600] transition-all',
                },
            }),
            Placeholder.configure({
                placeholder: 'Start writing your story...',
                emptyEditorClass: 'is-editor-empty',
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'tiptap prose prose-sm max-w-none focus:outline-none min-h-[400px] text-[15px] leading-[1.9] text-gray-700 font-medium',
            },
        },
    });

    if (!editor) return null;

    const setLink = () => {
        const url = window.prompt('URL');
        if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }
    };

    const addImage = () => {
        fileInputRef.current?.click();
    };

    const deleteImage = () => {
        editor.chain().focus().deleteSelection().run();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !onImageUpload) return;

        try {
            const url = await onImageUpload(file);
            if (url) {
                editor.chain().focus().setImage({ src: url }).run();
            }
        } catch (error) {
            console.error('Editor image upload error:', error);
        } finally {
            // Reset input
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-4">
            {/* Hidden File Input */}
            <input 
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 bg-gray-50/50 p-1.5 rounded-xl border border-gray-100">
                <MenuButton 
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive('bold')}
                >
                    <Bold className="w-4 h-4" />
                </MenuButton>
                <MenuButton 
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive('italic')}
                >
                    <Italic className="w-4 h-4" />
                </MenuButton>
                
                <div className="w-px h-4 bg-gray-200 mx-1" />

                <MenuButton 
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor.isActive('heading', { level: 2 })}
                >
                    <Heading2 className="w-4 h-4" />
                </MenuButton>
                <MenuButton 
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editor.isActive('heading', { level: 3 })}
                >
                    <Heading3 className="w-4 h-4" />
                </MenuButton>

                <div className="w-px h-4 bg-gray-200 mx-1" />

                <MenuButton 
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive('bulletList')}
                >
                    <List className="w-4 h-4" />
                </MenuButton>
                <MenuButton 
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive('orderedList')}
                >
                    <ListOrdered className="w-4 h-4" />
                </MenuButton>

                <div className="w-px h-4 bg-gray-200 mx-1" />

                <MenuButton onClick={addImage} title="Add Image">
                    <ImageIcon className="w-4 h-4" />
                </MenuButton>

                <MenuButton 
                    onClick={deleteImage} 
                    title="Remove Selected Image"
                    disabled={!editor.isActive('image')}
                >
                    <Trash2 className={`w-4 h-4 ${editor.isActive('image') ? 'text-red-500' : ''}`} />
                </MenuButton>

                <div className="w-px h-4 bg-gray-200 mx-1" />

                <MenuButton onClick={setLink} isActive={editor.isActive('link')}>
                    <LinkIcon className="w-4 h-4" />
                </MenuButton>
                <MenuButton 
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    disabled={!editor.isActive('link')}
                >
                    <Unlink className="w-4 h-4" />
                </MenuButton>

                <div className="w-px h-4 bg-gray-200 mx-1" />

                <MenuButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                    <Undo className="w-4 h-4" />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    <Redo className="w-4 h-4" />
                </MenuButton>
            </div>

            {/* Editor Container */}
            <div className="px-2">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
