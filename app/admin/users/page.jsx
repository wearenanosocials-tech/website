'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { 
    Users, Plus, Trash2, Key, Mail, Search, Shield, Loader2, X, Check
} from 'lucide-react';

export default function StaffManagement() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [form, setForm] = useState({ email: '', password: '' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const res = await fetch('/api/admin/users', {
                headers: {
                    'Authorization': `Bearer ${session?.access_token}`
                }
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setUsers(data.users || []);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const method = editingUser ? 'PUT' : 'POST';
            const body = editingUser 
                ? { id: editingUser.id, password: form.password, email: form.email }
                : { email: form.email, password: form.password };

            const res = await fetch('/api/admin/users', {
                method,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.access_token}`
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            
            if (data.error) throw new Error(data.error);

            toast.success(editingUser ? 'Account updated' : 'Staff created successfully');
            closeModal();
            fetchUsers();
        } catch (err) {
            toast.error(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id, email) => {
        if (!window.confirm(`Are you sure you want to remove access for ${email}?`)) return;
        
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const res = await fetch(`/api/admin/users?id=${id}`, { 
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${session?.access_token}`
                }
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            toast.success('Access revoked');
            fetchUsers();
        } catch (err) {
            toast.error(err.message);
        }
    };

    const openModal = (user = null) => {
        setEditingUser(user);
        setForm({
            email: user?.email || '',
            password: '' // Don't show existing passwords (security)
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
        setForm({ email: '', password: '' });
    };

    const filteredUsers = users.filter(u => u.email.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <h1 className="text-[22px] font-black text-gray-900">Staff Management</h1>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                        Manage everyone who has access to this dashboard
                    </p>
                </div>
                <button 
                    onClick={() => openModal()}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                >
                    <Plus className="w-4 h-4" />
                    Add Staff Member
                </button>
            </div>

            {/* Main Content */}
            <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input 
                            type="text" 
                            placeholder="Search by email..."
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
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Staff Identity</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Last Login</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Confirmed</th>
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
                            ) : filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-20 text-center text-gray-300 text-[14px] font-black">
                                        No staff accounts found
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50/40 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-black text-xs">
                                                    {user.email[0].toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-black text-gray-900 leading-tight">{user.email}</span>
                                                    <span className="text-[10px] font-bold text-gray-400 mt-0.5 flex items-center gap-1">
                                                        <Shield className="w-2.5 h-2.5" /> ID: {user.id.slice(0, 8)}...
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-[13px] font-bold text-gray-400">
                                            {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Never'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${user.email_confirmed_at ? 'bg-emerald-50 text-emerald-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                                {user.email_confirmed_at ? <Check className="w-2.5 h-2.5" /> : 'Pending'}
                                                {user.email_confirmed_at ? 'Confirmed' : 'Unconfirmed'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button 
                                                    onClick={() => openModal(user)}
                                                    className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-300 hover:text-[#c9a800] transition-colors"
                                                    title="Change Access"
                                                >
                                                    <Key className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(user.id, user.email)}
                                                    className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors"
                                                    title="Revoke Access"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-6">
                    <div className="bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl relative overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-[20px] font-black text-gray-900">
                                    {editingUser ? 'Update Staff Access' : 'Add Staff Member'}
                                </h3>
                                <p className="text-[12px] font-medium text-gray-400 mt-1">
                                    {editingUser ? 'Modify credentials for existing account' : 'This person will have full dashboard access'}
                                </p>
                            </div>
                            <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    <input 
                                        type="email"
                                        required
                                        placeholder="e.g. staff@nano.com"
                                        value={form.email}
                                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-[14px] font-bold text-gray-700 outline-none focus:border-[#FFD600]/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">
                                    {editingUser ? 'New Password (Optional)' : 'Assigned Password'}
                                </label>
                                <div className="relative">
                                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    <input 
                                        type="password"
                                        required={!editingUser}
                                        placeholder={editingUser ? "Leave blank to keep current" : "Minimum 6 characters"}
                                        value={form.password}
                                        onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-[14px] font-bold text-gray-700 outline-none focus:border-[#FFD600]/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-3">
                                <button 
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 py-4 text-[14px] font-black text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-[2] bg-black text-white py-4 rounded-2xl text-[14px] font-black hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {submitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        editingUser ? 'Save Changes' : 'Create Account'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Visual Decoration */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD600] opacity-[0.03] rounded-bl-full pointer-events-none" />
                    </div>
                </div>
            )}
        </div>
    );
}
