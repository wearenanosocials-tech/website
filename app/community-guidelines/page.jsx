import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, HeartHandshake, ShieldCheck, Zap, AlertTriangle, Users } from 'lucide-react';

export const metadata = {
    title: "Community Guidelines",
    description: "Nano Socials community standards — covering respect, professionalism, authenticity, off-platform payments, and enforcement. Expected of all brands and creators on the platform.",
    alternates: { canonical: "https://nanosocials.com/community-guidelines" },
    openGraph: {
        title: "Community Guidelines | Nano Socials",
        description: "Our code of conduct for authentic, professional, and respectful collaboration between all Nano Socials users.",
        url: "https://nanosocials.com/community-guidelines",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Community Guidelines" }],
    },
    robots: { index: true, follow: false },
};

const guideSections = [
    { id: 'goal', title: 'Our Goal', icon: <HeartHandshake className="w-5 h-5" /> },
    { id: 'respect', title: 'Respect & Professionalism', icon: <Users className="w-5 h-5" /> },
    { id: 'authenticity', title: 'Authenticity', icon: <Zap className="w-5 h-5" /> },
    { id: 'payments', title: 'Off-Platform Payments', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'enforcement', title: 'Enforcement', icon: <AlertTriangle className="w-5 h-5" /> }
];

export default function CommunityGuidelines() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Culture & Standards</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Community <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Guidelines.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 1.1</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Last Updated: Feb 25, 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[13px] font-black text-black uppercase tracking-widest">Active Standard</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

                        {/* Sidebar / TOC */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Standards</p>
                                    <nav className="space-y-1">
                                        {guideSections.map((section) => (
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
                                        <p className="text-[14px] font-bold text-white mb-4">Report an Issue</p>
                                        <a href="mailto:support@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Support <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Guide Content */}
                        <div className="space-y-6">

                            {/* Section 1: Our Goal */}
                            <section id="goal">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-6 tracking-tight">
                                            Our Goal
                                        </h2>
                                        <div className="space-y-6 text-[18px] md:text-[20px] text-[#555] font-medium leading-[1.6]">
                                            <p className="pb-6 border-b border-black/5">
                                                Nano is built for respectful, professional collaboration between brands and creators.
                                            </p>
                                            <p className="text-black font-bold">
                                                We expect all users to behave professionally and honestly at all times.
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 2: Respect & Professionalism */}
                            <section id="respect">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            02
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Respect & Professionalism
                                        </h2>
                                        <div className="space-y-8">
                                            <p className="text-[18px] font-medium text-black/60 uppercase tracking-widest font-black">Users must not:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    { label: 'Harassment', desc: 'No harassing or threatening others.' },
                                                    { label: 'Hate Speech', desc: 'Zero tolerance for discrimination.' },
                                                    { label: 'Privacy', desc: 'No sharing info without consent.' },
                                                    { label: 'Spam', desc: 'No scams or unwanted solicitations.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="p-6 bg-black/5 rounded-[32px] border border-black/5 transition-transform hover:scale-[1.02]">
                                                        <h4 className="text-[18px] font-black mb-2 text-black">{item.label}</h4>
                                                        <p className="text-[14px] text-black/50 font-bold">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 3: Authenticity */}
                            <section id="authenticity">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Authenticity
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div>
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-[#FFD600] mb-6">For Creators</h4>
                                                <ul className="space-y-4">
                                                    {['Use real accounts', 'Avoid fake engagement', 'Submit original content'].map(item => (
                                                        <li key={item} className="flex items-center gap-3 text-[18px] font-bold text-black">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-[#FFD600] mb-6">For Brands</h4>
                                                <ul className="space-y-4">
                                                    {['Provide honest briefs', 'Avoid misleading claims', 'Fair compensation'].map(item => (
                                                        <li key={item} className="flex items-center gap-3 text-[18px] font-bold text-black">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 4: Off-Platform Payments */}
                            <section id="payments">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            04
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-6 tracking-tight">
                                            Off-Platform Payments
                                        </h2>
                                        <div className="space-y-8">
                                            <div className="p-8 bg-black rounded-[32px] text-white">
                                                <div className="flex items-center gap-3 text-[20px] font-black text-[#FFD600] mb-6">
                                                    <ShieldCheck className="w-6 h-6" />
                                                    Platform Protection Policy
                                                </div>
                                                <p className="text-[18px] text-white/80 font-medium leading-relaxed">
                                                    To protect everyone, users may not request or accept payment outside Nano for platform campaigns. This helps prevent scams and ensures 100% payment protection for both parties.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 5: Enforcement */}
                            <section id="enforcement">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white font-black text-[18px] mb-6">
                                                05
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Enforcement
                                            </h2>
                                            <p className="text-[20px] font-bold text-white/70 mb-12">
                                                Violations of these guidelines are taken seriously and may result in:
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {[
                                                    { title: 'Warnings', desc: 'Formal notice of policy violation.' },
                                                    { title: 'Suspension', desc: 'Temporary loss of platform access.' },
                                                    { title: 'Removal', desc: 'Permanent account termination.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="group p-6 bg-white/5 rounded-[32px] border border-white/5 transition-all hover:bg-white/10">
                                                        <h4 className="text-[20px] font-black mb-2 text-[#FFD600]">{item.title}</h4>
                                                        <p className="text-[14px] text-white/40 font-bold">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
