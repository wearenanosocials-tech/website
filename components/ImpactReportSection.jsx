'use client';

import { useState, useEffect } from 'react';
import { Reveal } from './Motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Download, Loader2 } from 'lucide-react';

export default function ImpactReportSection() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [activeReport, setActiveReport] = useState(null);

    useEffect(() => {
        const fetchActiveReport = async () => {
            const { data } = await supabase
                .from('impact_reports')
                .select('*')
                .eq('is_active', true)
                .single();
            
            if (data) setActiveReport(data);
        };
        fetchActiveReport();
    }, []);

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setLoading(true);

        // Save the email lead to Supabase with reference to the active report
        const { error } = await supabase
            .from('report_leads')
            .insert([{ 
                email: email.trim().toLowerCase(),
                report_id: activeReport?.id || null
            }]);

        if (error && error.code !== '23505') {
            toast.error('Something went wrong. Please try again.');
            setLoading(false);
            return;
        }

        toast.success('Enjoy the report!');
        setLoading(false);

        // Trigger the download of the actual file
        const fileUrl = activeReport?.file_url || '/Updated Nano Creator Impact Report -March 2026.pdf';
        const fileName = activeReport ? `${activeReport.title.replace(/\s+/g, '_')}.pdf` : 'Nano-Impact-Report.pdf';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setEmail('');
    };

    return (
        <section className="bg-black py-24 px-6 relative overflow-hidden font-primary">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Image 
                    src="/Nano head - Black.png" 
                    alt="" 
                    fill 
                    className="object-contain scale-150 rotate-12 translate-x-1/2"
                />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="bg-[#111] border border-white/10 rounded-[48px] p-8 md:p-16 overflow-hidden relative shadow-2xl">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Reveal y={20}>
                                <div className="inline-block bg-[#FFD600] text-black px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-[2px] mb-6">
                                    {activeReport ? 'New Publication' : 'Flash Sale'}
                                </div>
                            </Reveal>
                            <Reveal delay={0.2} y={30}>
                                <h2 className="text-[40px] md:text-[56px] font-black text-white leading-[1] tracking-[-2px] mb-6">
                                    {activeReport ? activeReport.title : 'The 2026 Nano'} <br />
                                    <span className="text-[#FFD600]">Impact Report.</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.4} y={30}>
                                <p className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] mb-10 max-w-[500px]">
                                    {activeReport?.description || "Discover how we're redefining influence across Africa. From community growth to campaign velocity, see the real-world impact our creators are making."}
                                </p>
                            </Reveal>

                            {/* Email + Download CTA */}
                            <Reveal delay={0.6} y={30}>
                                <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email..."
                                        required
                                        className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-full px-6 py-4 text-[15px] font-medium focus:outline-none focus:border-[#FFD600]/50 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex items-center justify-center gap-2.5 bg-[#FFD600] text-black px-7 py-4 rounded-full text-[15px] font-black whitespace-nowrap transition-all duration-300 hover:bg-[#FFC700] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,214,0,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4" />
                                                Download
                                            </>
                                        )}
                                    </button>
                                </form>
                                <p className="text-white/20 text-[12px] font-medium mt-3 ml-2">
                                    Free. No spam. Just signal.
                                </p>
                            </Reveal>
                        </div>

                        <Reveal delay={0.4} x={40} className="relative aspect-[4/3] flex items-center justify-center p-8">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/Nano head - Yellow.png"
                                    alt="Nano Creator Impact"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(255,214,0,0.3)] anim-float"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
