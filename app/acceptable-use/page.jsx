import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, Ban, ShieldAlert, Gavel, Info } from 'lucide-react';

export const metadata = {
    title: "Acceptable Use Policy",
    description: "Nano Socials acceptable use policy — outlining prohibited campaign types including illegal products, hate speech, adult content, gambling, and misleading financial promotions.",
    alternates: { canonical: "https://nanosocials.com/acceptable-use" },
    openGraph: {
        title: "Acceptable Use Policy | Nano Socials",
        description: "Content and campaign standards on Nano Socials. What is and isn't allowed on our platform.",
        url: "https://nanosocials.com/acceptable-use",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Acceptable Use Policy" }],
    },
    robots: { index: true, follow: false },
};

const sections = [
    { id: 'prohibited', title: 'Prohibited Campaigns', icon: <Ban className="w-5 h-5" /> },
    { id: 'enforcement', title: 'Policy Enforcement', icon: <Gavel className="w-5 h-5" /> }
];

export default function AcceptableUsePolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Compliance & Standards</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Acceptable <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Use Policy.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 1.0</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Last Updated: Feb 25, 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[13px] font-black text-black uppercase tracking-widest">Strictly Enforced</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

                        {/* Sidebar */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Sections</p>
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
                                        <p className="text-[14px] font-bold text-white mb-4">Questions?</p>
                                        <a href="mailto:legal@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Legal <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Content */}
                        <div className="space-y-6">

                            {/* Prohibited Campaigns */}
                            <section id="prohibited">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-12 tracking-tight">
                                            Prohibited Campaigns
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                            {[
                                                { title: 'Illegal Products & Services', desc: 'Any item or activity prohibited by local or international law.' },
                                                { title: 'Hate Speech & Discrimination', desc: 'Content that promotes violence or hatred against protected groups.' },
                                                { title: 'Adult Content', desc: 'Sexually explicit material or services.' },
                                                { title: 'Unregulated Gambling', desc: 'Gambling activities without the required jurisdictional licenses.' },
                                                { title: 'Misleading Financial Promotions', desc: 'Get-rich-quick schemes, unregulated crypto advice, or deceptive offers.' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="group p-8 bg-black/5 rounded-[32px] border border-black/5 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.01] hover:border-[#FFD600]/20 flex items-start gap-6">
                                                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                                                        <ShieldAlert className="w-5 h-5 text-[#FFD600]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[19px] font-black mb-2 text-black">{item.title}</h4>
                                                        <p className="text-[15px] text-black/50 font-bold leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Enforcement */}
                            <section id="enforcement">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                02
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Policy Enforcement
                                            </h2>
                                            <div className="flex items-start gap-6 p-10 bg-white/5 rounded-[40px] border border-white/10">
                                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                                    <Gavel className="w-8 h-8 text-red-500" />
                                                </div>
                                                <div className="space-y-6">
                                                    <p className="text-[22px] font-bold text-white/90 leading-relaxed">
                                                        Nano reserves the absolute right to remove any campaigns that violate our policy or general community standards.
                                                    </p>
                                                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-6 py-3 rounded-full text-[14px] font-black uppercase tracking-widest">
                                                        Immediate Action May Be Taken
                                                    </div>
                                                </div>
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
                                    <h3 className="text-[28px] font-black text-black mb-4">Unsure about your campaign?</h3>
                                    <p className="text-[18px] text-black/50 font-bold mb-8">Get a pre-clearance review from our compliance team.</p>
                                    <a
                                        href="mailto:legal@nanosocials.com"
                                        className="inline-flex items-center bg-black text-[#FFD600] px-10 py-5 rounded-full text-[16px] font-black hover:scale-105 transition-transform"
                                    >
                                        Inquire Now <ArrowRight className="w-5 h-5 ml-2" />
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
