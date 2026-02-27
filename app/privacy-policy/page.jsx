import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ArrowRight, Shield, Database, Activity, Share2, History, UserCheck, Mail, Info, Lock } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy",
    description: "Learn how Nano Socials collects, uses, and protects your personal data. We are committed to NDPA-compliant data security for all users in Africa and beyond.",
    alternates: { canonical: "https://nanosocials.com/privacy-policy" },
    openGraph: {
        title: "Privacy Policy | Nano Socials",
        description: "Nano Socials is committed to protecting your privacy. Read our full data collection, usage, and rights policy.",
        url: "https://nanosocials.com/privacy-policy",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Privacy Policy" }],
    },
    robots: { index: true, follow: false },
};

const sections = [
    { id: 'overview', title: 'Overview', icon: <Shield className="w-5 h-5" /> },
    { id: 'collection', title: 'Data We Collect', icon: <Database className="w-5 h-5" /> },
    { id: 'usage', title: 'How We Use Data', icon: <Activity className="w-5 h-5" /> },
    { id: 'sharing', title: 'Data Sharing', icon: <Share2 className="w-5 h-5" /> },
    { id: 'retention', title: 'Data Retention', icon: <History className="w-5 h-5" /> },
    { id: 'rights', title: 'User Rights', icon: <UserCheck className="w-5 h-5" /> }
];

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Data & Security</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Privacy <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Policy.</span>
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
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Privacy Center</p>
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
                                        <a href="mailto:privacy@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Privacy <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
                                        <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-black/5 rounded-[32px] border border-black/5 mb-8">
                                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shrink-0">
                                                <Shield className="w-8 h-8 text-[#FFD600]" />
                                            </div>
                                            <p className="text-[18px] font-black text-black leading-tight">
                                                Nano respects your privacy and is committed to protecting your personal data. This policy explains what we collect and how we use it.
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Data We Collect */}
                            <section id="collection">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            02
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Data We Collect
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-8 bg-black/5 rounded-[32px] border border-black/5">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-black/30 mb-6">Account Information</h4>
                                                <ul className="grid grid-cols-2 gap-3">
                                                    {['Name', 'Email', 'Phone number', 'Social Handles', 'Profile Info'].map(item => (
                                                        <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-black">
                                                            <div className="w-1 h-1 rounded-full bg-[#FFD600]" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-8 bg-black/5 rounded-[32px] border border-black/5">
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-black/30 mb-6">Usage Information</h4>
                                                <ul className="grid grid-cols-2 gap-3">
                                                    {['Log data', 'Device data', 'IP address', 'Platform activity'].map(item => (
                                                        <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-black">
                                                            <div className="w-1 h-1 rounded-full bg-[#FFD600]" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-6 p-8 bg-black text-white rounded-[32px] relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FFD600]/10 rounded-full blur-[60px] -mr-20 -mt-20" />
                                            <div className="relative z-10 flex items-center gap-6">
                                                <div className="w-12 h-12 rounded-xl bg-[#FFD600]/10 border border-[#FFD600]/20 flex items-center justify-center shrink-0">
                                                    <Lock className="w-6 h-6 text-[#FFD600]" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[17px] font-black text-white mb-1">Payment Security</h4>
                                                    <p className="text-[14px] text-white/50 font-medium">
                                                        Handled by third-party payment providers. Nano does not store full credit card details on our servers.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* How We Use Data */}
                            <section id="usage">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            How We Use Data
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { title: 'Platform', desc: 'To provide and manage our services.' },
                                                { title: 'Payments', desc: 'To process secure payouts and fees.' },
                                                { title: 'Security', desc: 'To prevent fraud and maintain safety.' },
                                                { title: 'Analytics', desc: 'To improve features and platform UI.' },
                                                { title: 'Support', desc: 'To communicate and resolve user issues.' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="p-6 bg-black/5 rounded-[24px] border border-black/5">
                                                    <h4 className="text-[16px] font-black text-black mb-2">{item.title}</h4>
                                                    <p className="text-[13px] text-black/40 font-bold">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Data Sharing */}
                            <section id="sharing">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            04
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Data Sharing
                                        </h2>
                                        <p className="text-[18px] text-black/50 font-bold mb-8">We share data only with trusted partners for essential services:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                            {[
                                                'Payment processors',
                                                'Cloud infrastructure providers',
                                                'Analytics providers',
                                                'Legal authorities (when required)'
                                            ].map(item => (
                                                <div key={item} className="p-5 bg-black/5 border border-black/5 rounded-[20px] flex items-center gap-3">
                                                    <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                                                    <span className="text-[15px] font-black text-black">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-8 bg-green-500 rounded-[32px] border border-green-600 shadow-xl text-white text-center">
                                            <p className="text-[20px] font-black">We do <span className="underline decoration-2 underline-offset-4">not</span> sell your personal data to third parties.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Data Retention */}
                            <section id="retention">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                05
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Data Retention
                                            </h2>
                                            <p className="text-[18px] text-white/50 font-bold mb-10">We retain your data as long as necessary to:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {[
                                                    { title: 'Services', desc: 'Maintain active platform features.' },
                                                    { title: 'Compliance', desc: 'Fulfill legal and tax obligations.' },
                                                    { title: 'Integrity', desc: 'Resolve disputes and prevent fraud.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="p-6 bg-white/5 rounded-[24px] border border-white/10">
                                                        <h4 className="text-[16px] font-black text-white mb-2">{item.title}</h4>
                                                        <p className="text-[13px] text-white/40 font-bold">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* User Rights */}
                            <section id="rights">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            06
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            User Rights
                                        </h2>
                                        <div className="space-y-6">
                                            <p className="text-[18px] text-black/60 font-medium">You have full control over your data. You may request to:</p>
                                            <div className="flex flex-wrap gap-4">
                                                {['Access your data', 'Correct your data', 'Delete your account'].map(right => (
                                                    <div key={right} className="px-6 py-4 bg-black/5 rounded-full border border-black/5 font-black text-black text-[15px]">
                                                        {right}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-8 bg-black rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6">
                                                <div className="flex items-center gap-4 text-white">
                                                    <Mail className="w-6 h-6 text-[#FFD600]" />
                                                    <span className="text-[16px] font-black">privacy@nanosocials.com</span>
                                                </div>
                                                <a href="mailto:privacy@nanosocials.com" className="px-8 py-4 bg-[#FFD600] text-black rounded-full font-black text-[14px] hover:scale-105 transition-transform">
                                                    Send Request
                                                </a>
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

const CheckCircle2 = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);
