'use client';

import { useEffect, useState, use } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { 
    Trash2, Search, ArrowLeft, Mail, Calendar, Download
} from 'lucide-react';
import Link from 'next/link';

export default function ReportLeadsDetail({ params: paramsPromise }) {
    const params = use(paramsPromise);
    const id = params.id;
    
    const [leads, setLeads] = useState([]);
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        setLoading(true);
        const [leadsRes, reportRes] = await Promise.all([
            supabase.from('report_leads')
                .select('*')
                .eq('report_id', id)
                .order('created_at', { ascending: false }),
            supabase.from('impact_reports')
                .select('*')
                .eq('id', id)
                .single()
        ]);

        if (leadsRes.data) setLeads(leadsRes.data);
        if (reportRes.data) setReport(reportRes.data);
        setLoading(false);
    };

    const handleDeleteLead = async (leadId) => {
        if (!window.confirm('Remove this lead?')) return;
        const { error } = await supabase.from('report_leads').delete().eq('id', leadId);
        if (!error) {
            toast.success('Lead removed');
            fetchData();
        }
    };

    const handleExportCSV = () => {
        if (leads.length === 0) {
            toast.error('No leads to export');
            return;
        }

        const csvContent = [
            ['Email', 'Date Captured'],
            ...leads.map(lead => [
                lead.email,
                new Date(lead.created_at).toLocaleString()
            ])
        ].map(e => e.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `leads_${report?.title.replace(/\s+/g, '_') || 'report'}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Leads exported successfully');
    };

    if (loading) return null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                    <Link 
                        href="/admin/impact-report" 
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-black hover:border-black transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-[22px] font-black text-gray-900">
                            {report?.title || 'Report Leads'}
                        </h1>
                        <p className="text-[13px] text-gray-400 font-medium mt-0.5">
                            Viewing all emails captured for this specific publication
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handleExportCSV}
                        className="flex items-center gap-2 bg-white border border-gray-100 text-black px-4 py-2 rounded-xl text-[13px] font-black hover:border-black transition-all shadow-sm"
                    >
                        <Download className="w-3.5 h-3.5 text-emerald-500" />
                        Export CSV
                    </button>
                    <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[13px] font-black flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {leads.length} Total Leads
                    </div>
                </div>
            </div>

            {/* List Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
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
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> Captured Date
                            </th>
                            <th className="px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filteredLeads.length === 0 ? (
                            <tr><td colSpan="3" className="px-6 py-20 text-center text-gray-300 text-[13px] font-black">No leads found for this report</td></tr>
                        ) : (
                            filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-50/40 transition-colors group text-[13px] font-bold">
                                    <td className="px-6 py-4 text-gray-800">{lead.email}</td>
                                    <td className="px-6 py-4 text-gray-400">
                                        {new Date(lead.created_at).toLocaleDateString(undefined, { 
                                            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
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
            </div>
        </div>
    );
}
