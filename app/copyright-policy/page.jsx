import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion';
import { ArrowRight, Mail, ShieldAlert, FileText, Scale } from 'lucide-react';

export const metadata = {
    title: 'Copyright & Intellectual Property Policy | Nano Socials',
    description: 'Our commitment to protecting intellectual property and guidelines for copyright complaints.',
};

const policySections = [
    { id: 'respect', title: 'Respect for IP', icon: <ShieldAlert className="w-5 h-5" /> },
    { id: 'complaints', title: 'Copyright Complaints', icon: <Mail className="w-5 h-5" /> },
    { id: 'infringers', title: 'Repeat Infringers', icon: <Scale className="w-5 h-5" /> },
    { id: 'platform', title: 'Platform IP', icon: <FileText className="w-5 h-5" /> }
];

export default function CopyrightPolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Legal & Transparency</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Copyright & <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Intellectual Property.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 1.2</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Last Updated: Feb 25, 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[13px] font-black text-black uppercase tracking-widest">Effective and Active</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

                        {/* Sidebar / TOC */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">On this page</p>
                                    <nav className="space-y-1">
                                        {policySections.map((section) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="flex items-center gap-3 px-6 py-4 rounded-[24px] text-[15px] font-bold text-black/60 transition-all hover:bg-black/5 hover:text-black group"
                                            >
                                                <span className="text-black/20 group-hover:text-[#FFD600] transition-colors">
                                                    {section.icon}
                                                </span>
                                                {section.title}
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="mt-4 p-6 bg-black rounded-[28px]">
                                        <p className="text-[14px] font-bold text-white mb-4">Need Clarification?</p>
                                        <a href="mailto:legal@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Legal <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Policy Content */}
                        <div className="space-y-6">

                            {/* Section 1 */}
                            <section id="respect">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-6 tracking-tight">
                                            Respect for Intellectual Property
                                        </h2>
                                        <div className="space-y-6 text-[18px] md:text-[20px] text-[#555] font-medium leading-[1.6]">
                                            <p className="pb-6 border-b border-black/5">
                                                At its core, Nano is a playground for creators. We respect copyright and expect every Ninja on the platform to do the same.
                                            </p>
                                            <div className="pl-8 border-l-4 border-[#FFD600] italic text-black font-bold">
                                                Creators must submit original content or content they have explicit, documented rights to use.
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 2 */}
                            <section id="complaints">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            02
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Copyright Complaints
                                        </h2>
                                        <div className="space-y-8">
                                            <div className="p-8 bg-black rounded-[32px] text-white">
                                                <p className="text-[18px] mb-6 font-medium text-white/80">
                                                    If you believe your copyright has been infringed, please send a formal notice to our legal desk:
                                                </p>
                                                <div className="flex items-center gap-3 text-[24px] font-black text-[#FFD600] mb-8">
                                                    <Mail className="w-8 h-8" />
                                                    legal@nanosocials.com
                                                </div>
                                                <p className="text-[14px] font-black uppercase tracking-[2px] text-white/40 mb-6 border-t border-white/10 pt-6">Your notice must include:</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                                    {[
                                                        'Your verified contact info',
                                                        'Description of copyrighted work',
                                                        'Direct URL of infringing content',
                                                        'Statement of good-faith belief',
                                                        'Statement under penalty of perjury'
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-[#FFD600]" />
                                                            <span className="text-[15px] font-bold">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6 bg-[#FFD600]/5 rounded-[24px] border border-[#FFD600]/20">
                                                <ShieldAlert className="w-6 h-6 text-[#FFD600] shrink-0" />
                                                <p className="text-[15px] font-bold text-black/70 italic">
                                                    Note: Nano reserves the right to remove or disable access to content while investigating a claim.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 3 */}
                            <section id="infringers">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-6 tracking-tight">
                                            Repeat Infringers
                                        </h2>
                                        <p className="text-[18px] text-[#555] font-medium leading-relaxed">
                                            We operate a strict "Three Strikes" policy. Accounts that are found to repeatedly violate copyright or third-party intellectual property may be <span className="text-black font-black underline decoration-[#FFD600] underline-offset-4">permanently removed</span> from the platform without notice.
                                        </p>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 4 */}
                            <section id="platform">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        {/* Decorative Blur */}
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                04
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Platform Intellectual Property
                                            </h2>
                                            <p className="text-[22px] font-bold text-white/90 leading-relaxed mb-12 max-w-[600px]">
                                                Everything you see on the platform—branding, proprietary software, and original content—is owned by <span className="text-[#FFD600]">Nano Socials Ltd.</span>
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
                                                {[
                                                    { title: 'No Copying', desc: 'You cannot mirror or duplicate platform assets.' },
                                                    { title: 'No Engineering', desc: 'Reverse engineering our software is prohibited.' },
                                                    { title: 'No Republication', desc: 'Public use of platform materials requires written permission.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="group">
                                                        <div className="w-6 h-1 bg-[#FFD600] rounded-full mb-4 transition-all group-hover:w-12" />
                                                        <h4 className="text-[18px] font-black mb-2">{item.title}</h4>
                                                        <p className="text-[14px] text-white/40 font-medium">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Bottom Help Card */}
                            <Reveal y={20}>
                                <div className="p-12 bg-[#FFD600] rounded-[48px] text-center">
                                    <h3 className="text-[28px] font-black text-black mb-4">Questions about IP enforcement?</h3>
                                    <p className="text-[18px] text-black/70 font-bold mb-8">Our compliance team is here to help you understand your rights.</p>
                                    <a
                                        href="mailto:legal@nanosocials.com"
                                        className="inline-flex items-center bg-black text-[#FFD600] px-10 py-5 rounded-full text-[16px] font-black hover:scale-105 transition-transform"
                                    >
                                        Reach Out to Legal <ArrowRight className="w-5 h-5 ml-2" />
                                    </a>
                                </div>
                            </Reveal>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
