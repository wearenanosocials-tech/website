import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, ShieldCheck, Undo2, RefreshCcw, MessageSquare, ShieldAlert, CheckCircle2, XCircle, Info } from 'lucide-react';

export const metadata = {
    title: "Refund & Dispute Policy",
    description: "Nano Socials' escrow payment system, refund eligibility conditions, revision windows, and dispute resolution process — designed to protect both brands and creators.",
    alternates: { canonical: "https://nanosocials.com/refund-dispute-policy" },
    openGraph: {
        title: "Refund & Dispute Policy | Nano Socials",
        description: "How Nano Socials handles refunds, revision requests, and disputes between brands and creators through our secure escrow system.",
        url: "https://nanosocials.com/refund-dispute-policy",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Refund & Dispute Policy" }],
    },
    robots: { index: true, follow: false },
};

const sections = [
    { id: 'overview', title: 'Payment Overview', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'refunds', title: 'Refund Conditions', icon: <Undo2 className="w-5 h-5" /> },
    { id: 'revisions', title: 'Revision Process', icon: <RefreshCcw className="w-5 h-5" /> },
    { id: 'disputes', title: 'Dispute Resolution', icon: <MessageSquare className="w-5 h-5" /> }
];

export default function RefundDisputePolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Trust & Safety</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Refund & <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Dispute Policy.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 1.0</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Last Updated: Feb 25, 2026</span>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

                        {/* Sidebar */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Resolution</p>
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
                                        <p className="text-[14px] font-bold text-white mb-4">Need Support?</p>
                                        <a href="mailto:support@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Open a Dispute <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Content */}
                        <div className="space-y-6">

                            {/* Overview */}
                            <section id="overview">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Overview
                                        </h2>
                                        <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-black/5 rounded-[32px] border border-black/5">
                                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shrink-0">
                                                <ShieldCheck className="w-8 h-8 text-[#FFD600]" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[18px] font-black text-black leading-tight">Nano uses an escrow-style payment system to protect both brands and creators.</p>
                                                <p className="text-[15px] text-black/50 font-bold">Brands fund campaigns upfront. Creators are paid after deliverables are approved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Refunds */}
                            <section id="refunds">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            02
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-12 tracking-tight">
                                            Refund Conditions
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-green-600 flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4" /> Eligible for refund
                                                </h4>
                                                <ul className="space-y-4">
                                                    {[
                                                        'No creator has been selected',
                                                        'Campaign is cancelled before work begins',
                                                        'Creator fails to deliver content',
                                                        'Deliverables violate the campaign brief'
                                                    ].map(item => (
                                                        <li key={item} className="p-4 bg-green-50 rounded-[20px] border border-green-100 text-[14px] font-bold text-green-700">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-6">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-red-600 flex items-center gap-2">
                                                    <XCircle className="w-4 h-4" /> Not eligible
                                                </h4>
                                                <ul className="space-y-4">
                                                    {[
                                                        'Content meets the campaign brief',
                                                        'Content has already been approved',
                                                        'Campaign performance expectations',
                                                        'Personal preference conflicts'
                                                    ].map(item => (
                                                        <li key={item} className="p-4 bg-red-50 rounded-[20px] border border-red-100 text-[14px] font-bold text-red-700">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-8 p-6 bg-black text-white rounded-[24px] flex items-center gap-4">
                                            <Info className="w-6 h-6 text-[#FFD600] shrink-0" />
                                            <p className="text-[15px] font-black italic">Nano is not responsible for marketing outcomes or campaign ROI.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Revisions */}
                            <section id="revisions">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -ml-48 -mb-48" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                03
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Revision Process
                                            </h2>
                                            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 mb-8">
                                                <p className="text-[20px] font-black text-[#FFD600] leading-tight mb-4">Revision Window:</p>
                                                <p className="text-[32px] md:text-[40px] font-black text-white mb-6">3–5 Business Days</p>
                                                <p className="text-[16px] text-white/50 font-bold">Brands must request revisions during the review window immediately after submission.</p>
                                            </div>
                                            <p className="text-[15px] font-medium text-white/40 italic">Creators must make reasonable revisions within the original campaign scope.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Disputes */}
                            <section id="disputes">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            04
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Dispute Resolution
                                        </h2>
                                        <div className="space-y-6">
                                            <p className="text-[18px] text-black/60 font-medium">If brand and creator cannot agree, a dispute is submitted via the dashboard.</p>
                                            <div className="p-8 bg-black/5 rounded-[32px] border border-black/5">
                                                <p className="text-[14px] font-black uppercase tracking-[2px] text-black/30 mb-6">Nano Review Process</p>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {['Campaign Brief', 'Deliverables', 'Internal Messages'].map(item => (
                                                        <div key={item} className="p-5 bg-white rounded-[20px] border border-black/5 shadow-sm flex items-center justify-center text-center">
                                                            <span className="text-[15px] font-black text-black">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-[15px] text-black/40 font-bold leading-relaxed">Nano decisions are binding for payments held in escrow. Both parties agree to abide by Nano's final determination.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Chargebacks */}
                            <Reveal y={20}>
                                <div className="p-10 bg-red-600 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                                    <div className="relative z-10">
                                        <ShieldAlert className="w-16 h-16 text-[#FFD600] mx-auto mb-6" />
                                        <h3 className="text-[28px] md:text-[36px] font-black mb-4 tracking-tighter">Strict Chargeback Policy</h3>
                                        <p className="text-[18px] font-bold opacity-80 mb-8 max-w-[600px] mx-auto">
                                            Initiating a chargeback outside Nano may result in immediate account suspension and permanent removal from the platform.
                                        </p>
                                        <a href="mailto:legal@nanosocials.com" className="inline-flex items-center px-8 py-4 bg-black text-[#FFD600] rounded-full text-[14px] font-black hover:scale-105 transition-transform">
                                            Questions? Contact Legal
                                        </a>
                                    </div>
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
