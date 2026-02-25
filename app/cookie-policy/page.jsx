import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { AppWindow, ShieldCheck, PieChart, Settings2, Info, ArrowRight, RefreshCcw } from 'lucide-react';

export const metadata = {
    title: 'Cookie Policy | Nano Socials',
    description: 'Information about the cookies and tracking technologies used on the Nano platform.',
};

const sections = [
    { id: 'definition', title: 'What Are Cookies', icon: <AppWindow className="w-5 h-5" /> },
    { id: 'essential', title: 'Essential Cookies', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'analytics', title: 'Analytics Cookies', icon: <PieChart className="w-5 h-5" /> },
    { id: 'functional', title: 'Functional Cookies', icon: <Settings2 className="w-5 h-5" /> },
    { id: 'management', title: 'Managing Cookies', icon: <Info className="w-5 h-5" /> }
];

export default function CookiePolicy() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Transparency & Tech</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Cookie <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Policy.</span>
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
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Tracking Controls</p>
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
                                        <p className="text-[14px] font-bold text-white mb-4">Privacy Query?</p>
                                        <a href="mailto:privacy@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Support <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* Content */}
                        <div className="space-y-6">

                            {/* What Are Cookies */}
                            <section id="definition">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            01
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            What Are Cookies
                                        </h2>
                                        <div className="space-y-6">
                                            <p className="text-[18px] font-black text-black leading-relaxed">
                                                Cookies are small text files stored on your device when you visit Nano. They help us keep the platform secure, remember preferences, and improve performance.
                                            </p>
                                            <div className="p-6 bg-[#FFD600] rounded-[24px] flex items-center gap-4">
                                                <Info className="w-6 h-6 text-black" />
                                                <p className="text-[15px] font-black text-black">By using Nano, you consent to our use of cookies according to this policy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Essential Cookies */}
                            <section id="essential">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                                02
                                            </div>
                                            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-8 tracking-tight">
                                                Essential Cookies
                                            </h2>
                                            <p className="text-[17px] text-white/50 font-bold mb-8">Strictly necessary for the platform to function. These cannot be disabled.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    'Login sessions',
                                                    'Security & fraud prevention',
                                                    'Payment processing',
                                                    'Account authentication'
                                                ].map(item => (
                                                    <div key={item} className="p-5 bg-white/5 rounded-[20px] border border-white/10 flex items-center gap-3">
                                                        <ShieldCheck className="w-4 h-4 text-[#FFD600]" />
                                                        <span className="text-[15px] font-black text-white">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Analytics Cookies */}
                            <section id="analytics">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            03
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Analytics Cookies
                                        </h2>
                                        <p className="text-[18px] text-black/50 font-bold mb-8">Help us understand how people use Nano to improve your experience.</p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                'Page performance',
                                                'Feature usage',
                                                'Traffic measurement',
                                                'Error monitoring'
                                            ].map((item, idx) => (
                                                <div key={idx} className="p-4 bg-black/5 rounded-[20px] border border-black/5 text-center">
                                                    <span className="text-[14px] font-black text-black">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Functional Cookies */}
                            <section id="functional">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center text-black font-black text-[18px] mb-6">
                                            04
                                        </div>
                                        <h2 className="text-[28px] md:text-[32px] font-black text-black mb-8 tracking-tight">
                                            Functional Cookies
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { title: 'Preferences', desc: 'Remembering your custom layout choices.' },
                                                { title: 'Language', desc: 'Auto-selecting your preferred local settings.' },
                                                { title: 'Dashboard', desc: 'Syncing your creator or brand portal state.' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="p-6 bg-black/5 rounded-[24px] border border-black/5 group hover:bg-[#FFD600] transition-all">
                                                    <h4 className="text-[16px] font-black text-black mb-2">{item.title}</h4>
                                                    <p className="text-[13px] text-black/40 font-bold group-hover:text-black/60">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Managing Cookies */}
                            <section id="management">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm bg-black text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD600]/10 rounded-full blur-3xl" />
                                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                                            <div className="max-w-[480px]">
                                                <h2 className="text-[28px] md:text-[32px] font-black text-white mb-6">Managing Cookies</h2>
                                                <p className="text-[16px] text-white/50 font-bold mb-6 italic">
                                                    You can disable cookies in your browser settings. However, please note that core parts of the Nano platform may stop working properly or become inaccessible.
                                                </p>
                                            </div>
                                            <div className="w-24 h-24 rounded-full bg-[#FFD600] flex items-center justify-center text-black animate-pulse shadow-[0_0_50px_rgba(255,214,0,0.3)]">
                                                <Settings2 className="w-10 h-10" />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Updates */}
                            <Reveal y={20}>
                                <div className="p-8 bg-black/5 border border-black/5 rounded-[32px] flex items-center justify-between gap-8">
                                    <div className="flex items-center gap-4">
                                        <RefreshCcw className="w-5 h-5 text-black/30" />
                                        <p className="text-[15px] font-black text-black/60 italic leading-tight">
                                            We may update this policy periodically. Continued use of Nano Socials means you accept the updated version.
                                        </p>
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
