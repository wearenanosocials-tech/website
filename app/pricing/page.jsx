import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/Motion';
import Image from 'next/image';

export const metadata = {
    title: "Pricing & Fees",
    description:
        "Simple, transparent pricing for brands and creators on Nano Socials. Campaign tiers from ₦30,000 to ₦120,000 per cycle — built to support the creator economy in Africa's emerging markets.",
    alternates: { canonical: "https://nanosocials.com/pricing" },
    openGraph: {
        title: "Pricing & Fees | Nano Socials",
        description: "Choose your campaign tier. Simple, fair pricing built for brands and creators in Africa's creator economy.",
        url: "https://nanosocials.com/pricing",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials Pricing" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do creator tiers work on Nano Socials?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tiers are determined by a combination of follower count, engagement rate, and audience quality — not just followers alone. There are 5 tiers: Emerging (₦30,000), Growing (₦45,000), Established (₦60,000), Top-tier (₦90,000), and Elite (₦120,000) per cycle.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost to run a campaign on Nano Socials?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Campaign costs start from ₦30,000 per cycle for nano and micro-influencers, scaling up to ₦120,000 per cycle for elite creators with massive reach and premium engagement.",
            },
        },
        {
            "@type": "Question",
            name: "Is Nano Socials free for creators?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Creators can sign up and create a profile for free. Earnings are paid out securely through Nano's built-in fintech system.",
            },
        },
    ],
};

export default function PricingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="pt-[80px] bg-white">

                {/* ── Hero ── */}
                <section className="relative py-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about.jpg"
                            alt="Pricing Background"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#FFD600]/85 mix-blend-multiply" />
                    </div>

                    <div className="max-w-[1100px] mx-auto text-center relative z-10">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black tracking-[4px] uppercase text-white mb-6">
                                Transparent Scaling
                            </p>
                        </Reveal>
                        <Reveal delay={0.2} y={30}>
                            <h1 className="text-[64px] md:text-[84px] font-black leading-[1] text-white tracking-[-4px] mb-8">
                                Pricing & <span className="italic underline decoration-4 underline-offset-8 text-white">Fees.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4} y={30}>
                            <p className="text-[22px] text-white leading-[1.6] max-w-[800px] mx-auto font-semibold">
                                Simple, fair, and built to support the growth of the creator economy in emerging markets.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ── Campaign Tiers ── */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-[1200px] mx-auto">
                        <Reveal y={20} className="text-center mb-20">
                            <h2 className="text-[40px] md:text-[56px] font-black text-black leading-[1.1] tracking-[-2px] mb-6">
                                Choose Your <span className="text-[#FFD600] stroke-black">Campaign Tier.</span>
                            </h2>
                            <p className="text-[18px] text-[#555] font-medium max-w-[700px] mx-auto mb-12">
                                Tiers are determined by a combination of follower count, engagement rate, and audience quality — not just followers alone.
                            </p>

                            {/* i info box */}
                            <div className="inline-flex items-center gap-3 bg-black/5 border border-black/5 px-8 py-4 rounded-full">
                                <div className="w-5 h-5 rounded-full bg-[#FFD600] flex items-center justify-center text-black font-black text-[12px]">i</div>
                                <span className="text-[15px] font-bold text-black/80">How do tiers work?</span>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { id: 'G1', name: 'Emerging Plan', price: '30,000', silk: '/tiers/silk-purple.png', desc: 'Nano & micro-influencers building their audience. Great for authentic, niche engagement.' },
                                { id: 'G2', name: 'Growing Plan', price: '45,000', silk: '/tiers/silk-blue.png', desc: 'Mid-size creators with solid engagement. Balanced reach and audience trust.' },
                                { id: 'G3', name: 'Established Plan', price: '60,000', silk: '/tiers/silk-green.png', desc: 'Proven influencers with consistent reach. Strong track record of brand collaborations.' },
                                { id: 'G4', name: 'Top-tier Plan', price: '90,000', silk: '/tiers/silk-orange.png', desc: 'High-reach creators with large, engaged audiences. Ideal for awareness campaigns.' },
                                { id: 'G5', name: 'Elite Plan', price: '120,000', silk: '/tiers/silk-gold.png', desc: 'Premium influencers with massive reach and top engagement. Maximum visibility.' }
                            ].map((tier, idx) => (
                                <Reveal key={tier.id} delay={idx * 0.1} y={30} className="flex h-full">
                                    <div className="relative group overflow-hidden bg-black rounded-[40px] flex flex-col h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]">

                                        {/* Silk Header Area */}
                                        <div className="relative h-[220px] w-full overflow-hidden">
                                            <Image
                                                src={tier.silk}
                                                alt={tier.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Tier Badge */}
                                            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-black text-[12px] tracking-wider">
                                                {tier.id}
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-[22px] font-black text-white mb-3">
                                                {tier.name}
                                            </h3>
                                            <p className="text-[14px] text-white/50 font-medium leading-relaxed mb-10">
                                                {tier.desc}
                                            </p>

                                            <div className="mt-auto">
                                                <div className="flex items-baseline gap-2 mb-8">
                                                    <span className="text-[42px] font-black text-white tracking-[-2px]">₦{tier.price}</span>
                                                    <span className="text-[14px] font-bold text-white/30 uppercase tracking-widest">/cycle</span>
                                                </div>

                                                <button className="w-full py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-black text-[14px] transition-all duration-300 hover:bg-[#FFD600] hover:text-black hover:border-[#FFD600]">
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-32 px-6 bg-white border-t border-black/5">
                    <div className="max-w-[800px] mx-auto text-center">
                        <Reveal y={20}>
                            <h2 className="text-[40px] md:text-[56px] font-black text-black leading-[1.1] tracking-[-2px] mb-8">
                                Ready to scale your <br /> <span className="text-[#FFD600] stroke-black">influence?</span>
                            </h2>
                            <p className="text-[20px] text-[#555] font-medium mb-12">
                                Join thousands of creators and brands already growing on Nano Socials.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <a href="https://app.nanosocials.com/signup" className="w-full md:w-auto px-12 py-5 rounded-full bg-black text-[#FFD600] font-black text-[18px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                                    Launch Your Campaign
                                </a>
                                <a href="/contact" className="w-full md:w-auto px-12 py-5 rounded-full bg-black/5 border border-black/10 text-black font-black text-[18px] transition-all duration-300 hover:bg-black/10">
                                    Talk to Sales
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
