import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, PenTool, Calendar, FileCheck, Megaphone, Users2, CopyX, BarChart3, Wallet, Info } from 'lucide-react';

export const metadata = {
    title: "Creator Terms of Service",
    description: "The Creator PACT — terms and conditions for nano-creators collaborating with brands on Nano Socials. Covers content standards, deadlines, legal disclosures, and payment release.",
    alternates: { canonical: "https://nanosocials.com/creator-terms" },
    openGraph: {
        title: "Creator Terms of Service | Nano Socials",
        description: "Read the Nano Socials Creator PACT — your guide to professional collaboration, content standards, and getting paid.",
        url: "https://nanosocials.com/creator-terms",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Creator Terms" }],
    },
    robots: { index: true, follow: false },
};

const sections = [
    { id: 'agreements', title: 'Creator Agreements', icon: <PenTool className="w-5 h-5" /> },
    { id: 'prohibitions', title: 'Creator Prohibitions', icon: <CopyX className="w-5 h-5" /> },
    { id: 'payouts', title: 'Payment Release', icon: <Wallet className="w-5 h-5" /> }
];

export default function CreatorTerms() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Creator Standards</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Creator <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Terms & PACT.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 2.0</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Last Updated: Feb 25, 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[13px] font-black text-black uppercase tracking-widest">Active Agreement</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

                        {/* Sidebar */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Commitments</p>
                                    <nav className="space-y-1">
                                        {sections.map((section) => (
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
                                        <p className="text-[14px] font-bold text-white mb-4">Support Hub</p>
                                        <a href="mailto:support@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Open Ticket <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Content */}
                        <div className="space-y-6">

                            {/* Creator Agreements */}
                            <section id="agreements">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-12 tracking-tight">
                                            Creators Agree to:
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { title: 'Original Content', desc: 'Deliver authentic, non-plagiarised content that belongs solely to you.', icon: <PenTool /> },
                                                { title: 'Strict Deadlines', desc: 'Maintain professional standards by meeting all campaign milestones.', icon: <Calendar /> },
                                                { title: 'Campaign Briefs', desc: 'Follow the provided brief precisely to ensure brand expectations are met.', icon: <FileCheck /> },
                                                { title: 'Legal Disclosures', desc: 'Disclose sponsored content clearly as required by relevant advertising laws.', icon: <Megaphone /> }
                                            ].map((item, idx) => (
                                                <div key={idx} className="group p-8 bg-black/5 rounded-[32px] border border-black/5 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.01] hover:border-[#FFD600]/20">
                                                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-[#FFD600] group-hover:text-black">
                                                        {item.icon}
                                                    </div>
                                                    <h4 className="text-[19px] font-black mb-2 text-black">{item.title}</h4>
                                                    <p className="text-[15px] text-black/50 font-bold leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Creator Prohibitions */}
                            <section id="prohibitions">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white font-black text-[18px] mb-6">
                                                02
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Creators May Not:
                                            </h2>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {[
                                                    { title: 'Fake Growth', desc: 'No buying followers or engagement.', icon: <Users2 /> },
                                                    { title: 'Plagiarism', desc: 'No submitting non-original content.', icon: <CopyX /> },
                                                    { title: 'Data Fraud', desc: 'No misrepresenting performance metrics.', icon: <BarChart3 /> }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="p-8 bg-white/5 rounded-[40px] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                                                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                                                            <span className="text-red-500">{item.icon}</span>
                                                        </div>
                                                        <h4 className="text-[20px] font-black text-[#FFD600] mb-2">{item.title}</h4>
                                                        <p className="text-[14px] text-white/50 font-medium leading-relaxed">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Payment Release */}
                            <section id="payouts">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-6 tracking-tight">
                                            Payment Release
                                        </h2>
                                        <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-[#FFD600]/5 rounded-[40px] border border-[#FFD600]/10">
                                            <div className="w-24 h-24 rounded-full bg-[#FFD600] flex items-center justify-center shrink-0 shadow-lg">
                                                <Wallet className="w-10 h-10 text-black" />
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-[24px] font-black text-black leading-tight">
                                                    Payment is released after brand approval and the standard dispute period.
                                                </p>
                                                <p className="text-[18px] text-black/50 font-bold">
                                                    This ensures 100% protection for your hard work while maintaining quality for our partners.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Help Box */}
                            <Reveal y={20}>
                                <div className="p-12 bg-white border border-black/5 rounded-[48px] text-center shadow-sm">
                                    <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Info className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-[28px] font-black text-black mb-4">Confused about your payout?</h3>
                                    <p className="text-[18px] text-black/50 font-bold mb-8">Check our payout policy or contact our finances team.</p>
                                    <a
                                        href="/creator-payout-policy"
                                        className="inline-flex items-center bg-black text-[#FFD600] px-10 py-5 rounded-full text-[16px] font-black hover:scale-105 transition-transform"
                                    >
                                        View Payout Policy <ArrowRight className="w-5 h-5 ml-2" />
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
