'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { 
    Mail, BarChart2, Trash2, Download, Search, Users, Calendar, Filter, Star, Upload, Loader2, ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function ImpactReportAdmin() {
    const [leads, setLeads] = useState([]);
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'reports'
    const [searchTerm, setSearchTerm] = useState('');
    
    // New Report State
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [newReport, setNewReport] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [leadsRes, reportsRes] = await Promise.all([
                supabase.from('report_leads')
                    .select('*, impact_reports(title)')
                    .order('created_at', { ascending: false }),
                supabase.from('impact_reports')
                    .select('*, report_leads(count)')
                    .order('created_at', { ascending: false })
            ]);

            if (leadsRes.error) throw leadsRes.error;
            if (reportsRes.error) throw reportsRes.error;

            if (leadsRes.data) setLeads(leadsRes.data);
            if (reportsRes.data) setReports(reportsRes.data);
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('Failed to refresh data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUploadReport = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !newReport.title) {
            toast.error('Please enter a title and select a PDF file.');
            return;
        }

        if (file.type !== 'application/pdf') {
            toast.error('Only PDF files are allowed.');
            return;
        }

        setUploading(true);
        try {
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('impact-reports')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('impact-reports')
                .getPublicUrl(fileName);

            const { error: dbError } = await supabase
                .from('impact_reports')
                .insert([{
                    title: newReport.title,
                    description: newReport.description,
                    file_url: publicUrl,
                    is_active: reports.length === 0 // Make active if it is the first report
                }]);

            if (dbError) throw dbError;

            toast.success('Report uploaded successfully!');
            setIsUploadOpen(false);
            setNewReport({ title: '', description: '' });
            fetchData();
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Failed to upload report: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleToggleStar = async (id, currentStatus) => {
        setLoading(true);
        try {
            // Unstar all reports first (Atomic Star logic)
            if (!currentStatus) {
                const { error: unstarError } = await supabase.from('impact_reports').update({ is_active: false }).neq('id', id);
                if (unstarError) throw unstarError;
            }
            
            // Toggle the selected one
            const { error } = await supabase
                .from('impact_reports')
                .update({ is_active: !currentStatus })
                .eq('id', id);

            if (error) throw error;
            toast.success(!currentStatus ? 'Report starred as active!' : 'Report unstarred');
            fetchData();
        } catch (error) {
            console.error('Toggle error:', error);
            toast.error('Update failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteLead = async (id) => {
        if (!window.confirm('Remove this lead?')) return;
        try {
            const { error } = await supabase.from('report_leads').delete().eq('id', id);
            if (error) throw error;
            
            toast.success('Lead removed');
            fetchData();
        } catch (error) {
            console.error('Delete error:', error);
            toast.error('Failed to delete lead: ' + error.message);
        }
    };

    const handleDeleteReport = async (id) => {
        if (!window.confirm('Delete this report? This will remove all associated leads tracking.')) return;
        try {
            const { error } = await supabase.from('impact_reports').delete().eq('id', id);
            if (error) throw error;

            toast.success('Report deleted');
            fetchData();
        } catch (error) {
            console.error('Delete error:', error);
            toast.error('Failed to delete report: ' + error.message);
        }
    };

    const filteredLeads = leads.filter(l => l.email.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleExportLeads = () => {
        if (leads.length === 0) {
            toast.error('No leads to export');
            return;
        }

        const csvContent = [
            ['Email', 'Report Source', 'Date Captured'],
            ...leads.map(lead => [
                lead.email,
                lead.impact_reports?.title || 'Unknown',
                new Date(lead.created_at).toLocaleString()
            ])
        ].map(e => e.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `nano_leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Leads exported successfully');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <h1 className="text-[22px] font-black text-gray-900">Impact Reports</h1>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                        Manage your publications and track creator economy leads
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {activeTab === 'leads' && (
                        <button 
                            onClick={handleExportLeads}
                            className="flex items-center gap-2 bg-white border border-gray-100 text-black px-4 py-2.5 rounded-xl text-[13px] font-black hover:border-black transition-all shadow-sm"
                        >
                            <Download className="w-4 h-4 text-emerald-500" />
                            Export CSV
                        </button>
                    )}
                    <button 
                        onClick={() => setIsUploadOpen(true)}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[13px] font-black hover:bg-gray-800 transition-colors"
                    >
                        <Upload className="w-3.5 h-3.5" />
                        Upload Report
                    </button>
                </div>
            </div>

            {/* Upload Modal (Hidden by default) */}
            {isUploadOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl relative">
                        <h3 className="text-[20px] font-black text-gray-900 mb-6">New Impact Report</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2">Report Title</label>
                                <input 
                                    type="text"
                                    placeholder="e.g. Q1 2026 Growth Insights"
                                    value={newReport.title}
                                    onChange={(e) => setNewReport(prev => ({ ...prev, title: e.target.value }))}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[14px] font-bold text-gray-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2">Report PDF File</label>
                                <div className="relative group">
                                    <input 
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleUploadReport}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl py-8 flex flex-col items-center justify-center group-hover:bg-gray-100 transition-colors">
                                        {uploading ? (
                                            <Loader2 className="w-8 h-8 text-[#FFD600] animate-spin" />
                                        ) : (
                                            <>
                                                <Upload className="w-8 h-8 text-gray-300 mb-2" />
                                                <p className="text-[12px] font-black text-gray-400">Click or Drag PDF here</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsUploadOpen(false)}
                            className="mt-6 w-full py-3 text-[13px] font-black text-gray-400 hover:text-gray-900"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Tab Navigation */}
            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl w-fit">
                <button 
                    onClick={() => setActiveTab('leads')}
                    className={`px-6 py-2 rounded-lg text-[13px] font-black transition-all ${activeTab === 'leads' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    All Leads ({leads.length})
                </button>
                <button 
                    onClick={() => setActiveTab('reports')}
                    className={`px-6 py-2 rounded-lg text-[13px] font-black transition-all ${activeTab === 'reports' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    Manage Reports ({reports.length})
                </button>
            </div>

            {/* Content Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                {activeTab === 'leads' ? (
                    <>
                        <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                            <div className="relative flex-1 max-w-sm">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
                                <input 
                                    type="text" 
                                    placeholder="Search emails..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-9 pr-4 py-2 text-[13px] text-gray-700 font-medium focus:outline-none focus:border-gray-200 placeholder:text-gray-300"
                                />
                            </div>
                        </div>
                        <table className="w-full text-left font-primary">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Email Address</th>
                                    <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Report Downloaded</th>
                                    <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Date</th>
                                    <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    [1,2,3].map(i => (
                                        <tr key={i} className="animate-pulse"><td colSpan="4" className="px-6 py-4 h-12 bg-gray-50/20" /></tr>
                                    ))
                                ) : filteredLeads.length === 0 ? (
                                    <tr><td colSpan="4" className="px-6 py-20 text-center text-gray-300 text-[13px] font-black">No email leads captured yet</td></tr>
                                ) : (
                                    filteredLeads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50/40 transition-colors group text-[13px] font-bold">
                                            <td className="px-6 py-4 text-gray-800">{lead.email}</td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-400 font-medium">{lead.impact_reports?.title || 'Main Report'}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">
                                                {new Date(lead.created_at).toLocaleDateString(undefined, { 
                                                    month: 'short', day: 'numeric', year: 'numeric'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button 
                                                    onClick={() => handleDeleteLead(lead.id)}
                                                    className="w-8 h-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <table className="w-full text-left font-primary">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Active</th>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Report Title</th>
                                <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {reports.length === 0 ? (
                                <tr><td colSpan="3" className="px-6 py-20 text-center text-gray-300 text-[13px] font-black">No active reports published</td></tr>
                            ) : (
                                reports.map((report) => (
                                    <tr key={report.id} className="hover:bg-gray-50/40 transition-colors group text-[13px] font-bold">
                                        <td className="px-6 py-4">
                                            <button 
                                                onClick={() => handleToggleStar(report.id, report.is_active)}
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${report.is_active ? 'bg-yellow-50 text-[#FFD600]' : 'text-gray-200 hover:text-gray-400'}`}
                                            >
                                                <Star className={`w-4 h-4 ${report.is_active ? 'fill-[#FFD600]' : ''}`} />
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-gray-800">{report.title}</span>
                                                <a 
                                                    href={report.file_url} 
                                                    target="_blank" 
                                                    className="text-[11px] text-[#c9a800] hover:underline flex items-center gap-1 mt-0.5"
                                                >
                                                    <Download className="w-2.5 h-2.5" /> View PDF
                                                </a>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => handleDeleteReport(report.id)}
                                                className="w-8 h-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
