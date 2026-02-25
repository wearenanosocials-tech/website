import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import {
    ArrowRight, CheckCircle2, Info, UserPlus, Zap,
    ShieldCheck, Scale, CreditCard, Lock, Ban,
    AlertTriangle, Gavel, Handshake
} from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | Nano Socials',
    description: 'The master agreement governing your use of the Nano platform.',
};

const tosSections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: 'description', title: '2. Description of Service', icon: <Zap className="w-5 h-5" /> },
    { id: 'registration', title: '3. Account Registration', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'relationship', title: '4. Marketplace Relationship', icon: <Handshake className="w-5 h-5" /> },
    { id: 'payments', title: '5. Payments', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'fees', title: '6. Platform Fees', icon: <Scale className="w-5 h-5" /> },
    { id: 'ownership', title: '7. Content Ownership', icon: <Lock className="w-5 h-5" /> },
    { id: 'prohibited', title: '8. Prohibited Activities', icon: <Ban className="w-5 h-5" /> },
    { id: 'termination', title: '9. Suspension & Termination', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'disclaimer', title: '10. Disclaimer', icon: <Info className="w-5 h-5" /> },
    { id: 'liability', title: '11. Limitation of Liability', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'governing-law', title: '12. Governing Law', icon: <Gavel className="w-5 h-5" /> }
];

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main className="pt-[140px] pb-32 bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Page Header */}
                    <div className="mb-20">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black uppercase tracking-[4px] text-[#FFD600] mb-6">Master Agreement</p>
                            <h1 className="text-[48px] md:text-[64px] font-black text-black leading-[1] tracking-[-2px] mb-8">
                                Terms of <br /> <span className="italic underline decoration-4 underline-offset-8 decoration-[#FFD600]">Service.</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 p-6 bg-white border border-black/5 rounded-[24px] inline-flex">
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Version 3.0</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <span className="text-[13px] font-black text-black/40 uppercase tracking-widest">Effective: Feb 25, 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[13px] font-black text-black uppercase tracking-widest">Legal Standard</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

                        {/* Sidebar */}
                        <aside className="hidden lg:block sticky top-[140px]">
                            <Reveal x={-20}>
                                <div className="p-2 bg-white border border-black/5 rounded-[32px] shadow-sm max-h-[70vh] overflow-y-auto custom-scrollbar">
                                    <p className="px-6 pt-4 pb-2 text-[12px] font-black uppercase tracking-[2px] text-black/30">Agreement Sections</p>
                                    <nav className="space-y-0.5">
                                        {tosSections.map((section) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="flex items-center gap-3 px-6 py-3 rounded-[20px] text-[14px] font-bold text-black/60 transition-all hover:bg-black/5 hover:text-black group"
                                            >
                                                <span className="text-black/20 group-hover:text-[#FFD600] transition-colors shrink-0">
                                                    {section.icon}
                                                </span>
                                                <span className="truncate">{section.title}</span>
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="m-2 p-6 bg-black rounded-[24px]">
                                        <p className="text-[14px] font-bold text-white mb-2">Legal Help</p>
                                        <p className="text-[11px] text-white/40 mb-4 font-bold uppercase tracking-wider">Response within 24h</p>
                                        <a href="mailto:legal@nanosocials.com" className="inline-flex items-center text-[#FFD600] font-black text-[13px] group">
                                            Contact Legal <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </aside>

                        {/* TOS Content */}
                        <div className="space-y-6">

                            {/* Section 1: Acceptance */}
                            <section id="acceptance">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">1.</span> Acceptance of Terms
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>By accessing or using Nano, you agree to be bound by these Terms. If you do not agree, you may not use the platform.</p>
                                            <div className="p-6 bg-black/5 rounded-[24px] border border-black/5 flex items-center gap-4">
                                                <Info className="w-6 h-6 text-black/40" />
                                                <p className="text-black font-bold">You must be at least 18 years old to use Nano.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 2: Description */}
                            <section id="description">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">2.</span> Description of Service
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>Nano provides an online platform that connects brands and creators for content collaborations and marketing campaigns.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                {[
                                                    'Marketplace facilitator, not an employer',
                                                    'Independent management for all users',
                                                    'No guarantee of campaign success',
                                                    'Introduction and payment routing only'
                                                ].map(item => (
                                                    <div key={item} className="flex items-center gap-3 px-6 py-4 bg-[#fafafa] rounded-[20px] border border-black/5 text-[15px] font-bold text-black/60">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 3: Registration */}
                            <section id="registration">
                                <Reveal y={20}>
                                    <div className="bg-black p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <h2 className="text-[24px] md:text-[32px] font-black text-white mb-8 tracking-tight flex items-center gap-4 relative z-10">
                                            <span className="text-[#FFD600]">3.</span> Account Registration
                                        </h2>
                                        <div className="space-y-8">
                                            <p className="text-[18px] text-white/60 font-medium">You agree to fulfill the following obligations:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {[
                                                    { title: 'Accuracy', text: 'Provide true and accurate information.' },
                                                    { title: 'Security', text: 'Maintain full account security and confidentiality.' },
                                                    { title: 'Responsibility', text: 'Be responsible for all activity under your account.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="p-8 bg-white/5 rounded-[32px] border border-white/10 group hover:bg-white/10 transition-all">
                                                        <h4 className="text-[20px] font-black text-[#FFD600] mb-2">{item.title}</h4>
                                                        <p className="text-[14px] text-white/40 font-bold leading-relaxed">{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 4: Relationship */}
                            <section id="relationship">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">4.</span> Marketplace Relationship
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>Nano is not a party to agreements between brands and creators. Relationships on Nano are structured as follows:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                                <div className="p-8 border border-black/5 rounded-[32px] bg-[#fafafa]">
                                                    <h4 className="text-[18px] font-black text-black mb-2 uppercase tracking-tighter italic">Creators</h4>
                                                    <p className="font-bold text-black/50">Independent Contractors</p>
                                                </div>
                                                <div className="p-8 border border-black/5 rounded-[32px] bg-[#fafafa]">
                                                    <h4 className="text-[18px] font-black text-black mb-2 uppercase tracking-tighter italic">Brands</h4>
                                                    <p className="font-bold text-black/50">Independent Businesses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 5: Payments */}
                            <section id="payments">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">5.</span> Payments
                                        </h2>
                                        <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-[32px] mb-8">
                                            <p className="text-[20px] font-black text-green-700 leading-tight">
                                                Brands fund campaigns upfront to ensure a secure marketplace ecosystem.
                                            </p>
                                        </div>
                                        <p className="text-[18px] text-[#555] font-medium mb-6 uppercase tracking-wider font-black">Nano releases payments when:</p>
                                        <ul className="space-y-4">
                                            {['Deliverables are approved by the brand', 'All campaign terms are fully satisfied', 'Standard dispute periods have elapsed'].map(item => (
                                                <li key={item} className="flex items-center gap-3 text-[18px] font-bold text-black">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 6: Fees */}
                            <section id="fees">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">6.</span> Platform Fees
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>Nano may charge fees for platform use. All fees are displayed transparently before any purchase or transaction occurs and may change over time as the platform updates.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 7: Content Ownership */}
                            <section id="ownership">
                                <Reveal y={20}>
                                    <div className="bg-black p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <h2 className="text-[24px] md:text-[32px] font-black text-white mb-8 tracking-tight flex items-center gap-4 relative z-10">
                                            <span className="text-[#FFD600]">7.</span> Content Ownership
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[18px] font-medium text-white/60">
                                            <div>
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-[#FFD600] mb-6">Creator Rights</h4>
                                                <p className="leading-relaxed">Creators retain full ownership of their content unless rights are explicitly transferred within specific campaign terms.</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[14px] font-black uppercase tracking-[2px] text-[#FFD600] mb-6">Brand Rights</h4>
                                                <p className="leading-relaxed">Brands receive the specific usage rights outlined in each unique campaign agreement they fund.</p>
                                            </div>
                                        </div>
                                        <div className="mt-12 p-8 bg-white/5 rounded-[32px] border border-white/10">
                                            <h4 className="text-[14px] font-black uppercase tracking-[2px] text-white/40 mb-4 text-center">Platform License</h4>
                                            <p className="text-[15px] font-bold text-white/60 text-center max-w-[600px] mx-auto leading-relaxed italic">
                                                Nano receives a limited, royalty-free license to host, display, and operate the platform for its intended core purposes.
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 8: Prohibited Activities */}
                            <section id="prohibited">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">8.</span> Prohibited Activities
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                'Use for illegal activities',
                                                'Harassing or defrauding others',
                                                'Post harmful or misleading content',
                                                'Circumvent payments outside Nano',
                                                'Reverse engineer the platform',
                                                'Automated scraping or data theft'
                                            ].map(item => (
                                                <div key={item} className="flex items-center gap-3 px-6 py-4 bg-red-50 rounded-[20px] border border-red-100 text-[15px] font-bold text-red-600">
                                                    <Ban className="w-5 h-5 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 9: Termination */}
                            <section id="termination">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">9.</span> Suspension & Termination
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>Nano reserves the right to suspend or terminate accounts forpolicy violations, confirmed fraud or abuse, and to comply with legal or regulatory requirements.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 10: Disclaimer */}
                            <section id="disclaimer">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm bg-[#fafafa]">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">10.</span> Disclaimer
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p className="font-bold italic">Nano is provided “as is” without any warranties of any kind.</p>
                                            <p>We do not guarantee campaign results, creator earnings, or that the platform will be available without interruption at all times.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 11: Liability */}
                            <section id="liability">
                                <Reveal y={20}>
                                    <div className="bg-black text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                                        <div className="relative z-10">
                                            <h2 className="text-[24px] md:text-[32px] font-black text-white mb-8 tracking-tight flex items-center gap-4">
                                                <span className="text-[#FFD600]">11.</span> Limitation of Liability
                                            </h2>
                                            <div className="space-y-8">
                                                <p className="text-[20px] text-white/60 font-medium">Nano is not liable for indirect or consequential damages, loss of profits, or disputes between users.</p>
                                                <div className="p-10 border border-white/10 bg-white/5 rounded-[40px] text-center">
                                                    <h4 className="text-[14px] font-black uppercase tracking-[3px] text-white/30 mb-4">Maximum Liability Cap</h4>
                                                    <p className="text-[24px] md:text-[32px] font-black text-[#FFD600] leading-tight">
                                                        Limited to total fees paid to Nano in the previous 12 months.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Section 12: Governing Law */}
                            <section id="governing-law">
                                <Reveal y={20}>
                                    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-black/5 shadow-sm">
                                        <h2 className="text-[24px] md:text-[32px] font-black text-black mb-8 tracking-tight flex items-center gap-4">
                                            <span className="text-[#FFD600]">12.</span> Governing Law
                                        </h2>
                                        <div className="space-y-6 text-[18px] text-[#555] font-medium leading-[1.6]">
                                            <p>These Terms and your relationship with Nano are governed by and construed in accordance with the laws of the <span className="text-black font-black underline decoration-[#FFD600]">Federal Republic of Nigeria.</span></p>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>

                            {/* Final Help Card */}
                            <Reveal y={20}>
                                <div className="p-16 bg-[#FFD600] rounded-[60px] text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                                    <div className="relative z-10">
                                        <h3 className="text-[32px] md:text-[48px] font-black text-black mb-6 tracking-tighter">Still have questions?</h3>
                                        <p className="text-[20px] text-black font-bold mb-12 max-w-[600px] mx-auto">Our legal team is here to clarify any part of our Terms of Service.</p>
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                            <a
                                                href="mailto:legal@nanosocials.com"
                                                className="w-full md:w-auto px-12 py-6 bg-black text-[#FFD600] rounded-full text-[18px] font-black hover:scale-105 transition-all shadow-xl"
                                            >
                                                Email Legal Dept
                                            </a>
                                            <a
                                                href="/contact"
                                                className="w-full md:w-auto px-12 py-6 bg-white/20 backdrop-blur-md rounded-full text-[18px] font-black text-black hover:bg-white/40 transition-all border border-black/10"
                                            >
                                                Contact Support
                                            </a>
                                        </div>
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
