import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, Wallet, Clock, CreditCard, AlertCircle, FileText, Info } from 'lucide-react';

export const metadata = {
    title: "Creator Payout Policy",
    description: "Understand how and when creators get paid on Nano Socials — from content approval to withdrawal via bank transfer or mobile money. Includes fee and tax information.",
    alternates: { canonical: "https://nanosocials.com/creator-payout-policy" },
    openGraph: {
        title: "Creator Payout Policy | Nano Socials",
        description: "Your complete guide to creator earnings, payment timelines, withdrawal methods, and fees on Nano Socials.",
        url: "https://nanosocials.com/creator-payout-policy",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Creator Payout Policy" }],
    },
    robots: { index: true, follow: false },
};

const sections = [
    { id: 'how-it-works', title: 'How Creators Get Paid', icon: <Wallet className="w-5 h-5" /> },
    { id: 'timeline', title: 'Payment Timeline', icon: <Clock className="w-5 h-5" /> },
    { id: 'methods', title: 'Withdrawal Methods', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'fees-taxes', title: 'Fees & Taxes', icon: <FileText className="w-5 h-5" /> }
];

export default function CreatorPayoutPolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Earnings & Finance</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Creator <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Payout Policy.</span>
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
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Lifecycle</p>
                                    <nav className="space-y-1">
                                        {sections.map((section) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="flex items-center gap-3 px-6 py-4 rounded-[24px] text-[15px] font-bold text-black/60 transition-all hover:bg-black/5 hover:text-black group"
                                            >
                                                <span className="text-black/20 group-hover:text-[#FFD600] transition-colorsish">
                                                    {section.icon}
                                                </span>
                                                {section.title}
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="mt-4 p-6 bg-black rounded-[28px]">
                                        <p className="text-[14px] font-bold text-white mb-4">Finance Help?</p>
                                        <a href="mailto:finance@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Payouts <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Content */}
                        <div className="space-y-6">

                            {/* How Creators Get Paid */}
                            <section id="how-it-works">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            How Creators Get Paid
                                        </h2>
                                        <p className="text-[18px] text-black/50 font-bold mb-8">Creators are paid through Nano after:</p>
                                        <div className="space-y-4">
                                            {[
                                                'Content is submitted',
                                                'Content is approved',
                                                'Dispute window expires'
                                            ].map((step, idx) => (
                                                <div key={idx} className="flex items-center gap-4 p-5 bg-black/5 rounded-[24px] border border-black/5 group hover:bg-white hover:shadow-lg transition-all">
                                                    <div className="w-8 h-8 rounded-full bg-black text-[#FFD600] flex items-center justify-center font-black text-[12px]">
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-[16px] font-black text-black">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Timeline */}
                            <section id="timeline">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                02
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Payment Timeline
                                            </h2>
                                            <div className="flex flex-col gap-6">
                                                <div className="p-8 bg-white/5 rounded-[32px] border border-white/10">
                                                    <p className="text-[14px] font-black uppercase tracking-[2px] text-[#FFD600] mb-6">Typical Lifecycle</p>
                                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-[16px] font-black">
                                                        <span>Approval</span>
                                                        <ArrowRight className="w-5 h-5 text-[#FFD600] hidden md:block" />
                                                        <span>5–10 business days</span>
                                                        <ArrowRight className="w-5 h-5 text-[#FFD600] hidden md:block" />
                                                        <span>Creator wallet</span>
                                                        <ArrowRight className="w-5 h-5 text-[#FFD600] hidden md:block" />
                                                        <span className="text-[#FFD600]">Withdrawal</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-[24px]">
                                                    <Info className="w-5 h-5 text-white/30 shrink-0 mt-1" />
                                                    <p className="text-[14px] text-white/50 font-medium">Timing may vary based on payment provider and country availability.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Methods */}
                            <section id="methods">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Withdrawal Methods
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Bank Transfer', desc: 'Direct deposit to your local bank account.' },
                                                { title: 'Mobile Money', desc: 'Fast withdrawals to supported mobile wallets.' },
                                                { title: 'Regional Options', desc: 'Specific methods tailored to your location.' }
                                            ].map((method, idx) => (
                                                <div key={idx} className="p-6 bg-black/5 rounded-[24px] border border-black/5">
                                                    <h4 className="text-[17px] font-black text-black mb-1">{method.title}</h4>
                                                    <p className="text-[14px] text-black/40 font-bold">{method.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 p-6 bg-[#FFD600]/5 rounded-[24px] border border-[#FFD600]/10 flex items-start gap-4">
                                            <AlertCircle className="w-5 h-5 text-black shrink-0" />
                                            <p className="text-[14px] text-black font-bold italic">Nano may update available withdrawal methods over time based on platform growth.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Fees & Taxes */}
                            <section id="fees-taxes">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            04
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Fees & Taxes
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-black/30">Platform Fees</h4>
                                                <ul className="space-y-3">
                                                    {['Withdrawal processing fees', 'Currency conversion fees (if applicable)'].map(fee => (
                                                        <li key={fee} className="flex items-center gap-3 text-[15px] font-bold text-black">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                                                            {fee}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-[13px] text-black/40 font-black italic">Fees are clearly displayed before every withdrawal.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-black/30">Tax Responsibility</h4>
                                                <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                                                    Creators are responsible for reporting earnings and paying applicable taxes in their respective countries.
                                                </p>
                                                <p className="text-[13px] text-black/40 font-black italic">Nano provides summaries but not tax advice.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Failed Payments */}
                            <Reveal y={20}>
                                <div className="p-8 bg-red-500 rounded-[32px] border border-red-600 shadow-xl text-white">
                                    <h3 className="text-[22px] font-black mb-4">Failed Payments notice</h3>
                                    <p className="text-[16px] font-bold opacity-80 leading-relaxed max-w-[600px]">
                                        Creators must ensure their payout details are correct. Nano is not responsible for delays or losses caused by incorrect payment details provided by the creator.
                                    </p>
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
