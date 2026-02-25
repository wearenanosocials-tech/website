import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/Motion';
import Image from 'next/image';

export const metadata = {
    title: 'About Nano | Nano Socials',
    description:
        'Nano is a creator collaboration platform helping brands and creators work together faster, test content at scale, and run performance-driven UGC campaigns.',
};

const brandFeatures = [
    'Discover the Unseen — find high-impact creators first',
    'Launch with Velocity — go from concept to live in minutes',
    'Harvest Authentic UGC — content that actually converts',
    'Real-time Analytics — watch your ROI grow live',
    'Streamlined Fintech — one-click secure global payouts',
];

const creatorFeatures = [
    'Partner with World-Class Brands — exclusive missions only',
    'Your Creative Freedom, Monetized — earn on your terms',
    'The Effortless Workflow — manage everything in one slick app',
    'Proof of Impact — see exactly how you drive results',
    'Secure Global Payments — get paid instantly for your work',
];

const differentiators = [
    {
        label: 'Faster campaigns',
        image: '/IMG_3266.jpg',
        description: 'Sprint ahead of the competition. Launch impactful campaigns in record time with our streamlined creator matching.'
    },
    {
        label: 'More content testing',
        image: '/IMG_3354.jpg',
        description: 'Diversify your strategy. Test hundreds of content variations at scale to find what truly resonates with your audience.'
    },
    {
        label: 'Lower cost per asset',
        image: '/IMG_3363 (1).jpg',
        description: 'Premium content without the premium price tag. Maximize your budget by working directly with efficient authentic creators.'
    },
    {
        label: 'Measurable ROI for brands',
        image: '/IMG_4132.jpg',
        description: 'Data that drives decisions. Every campaign is backed by deep analytics, showing exactly how your spend converts.'
    },
    {
        label: 'More opportunities for creators',
        image: '/IMG_3445.jpg',
        description: 'Your creativity is currency. Access a consistent stream of brand partnerships and grow your professional portfolio.'
    },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-[80px]">

                {/* ── Hero ── */}
                <section className="relative py-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about.jpg"
                            alt="About Nano Background"
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#FFD600]/85 mix-blend-multiply" />
                    </div>

                    <div className="max-w-[900px] mx-auto text-center relative z-10">
                        <Reveal y={20}>
                            <p className="text-[13px] font-bold tracking-[3px] uppercase text-white mb-4">
                                About Nano
                            </p>
                        </Reveal>
                        <Reveal delay={0.2} y={30}>
                            <h1 className="text-[56px] md:text-[72px] font-black leading-[1.05] text-white mb-6 tracking-[-2px]">
                                Creator collaboration,{' '}
                                <span className="italic">reimagined.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4} y={30}>
                            <p className="text-[20px] text-white font-semibold leading-[1.7] max-w-[900px] mx-auto">
                                Nano is a creator collaboration platform that helps brands and creators work
                                together faster, test content at scale, and run performance-driven UGC campaigns.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ── Why Nano Exists ── */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <Reveal x={-30} y={0}>
                            <div>
                                <p className="text-[13px] font-bold tracking-[3px] uppercase text-[#c55530] mb-4">
                                    The Problem
                                </p>
                                <h2 className="text-[40px] font-black leading-[1.15] text-black mb-6 tracking-[-1px]">
                                    Traditional influencer marketing is broken.
                                </h2>
                                <div className="space-y-4 text-[17px] text-[#444] leading-[1.75]">
                                    <p>
                                        Brands struggle to find reliable creators. Creators struggle to land consistent
                                        brand deals. Campaign management happens across spreadsheets, DMs, and email.
                                    </p>
                                    <p className="font-semibold text-black text-[19px]">
                                        Nano brings everything into one place.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal x={30} y={0}>
                            <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/Gemini_Generated_Image_iby70jiby70jiby7.png"
                                    alt="Traditional Marketing Problem"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Horizontal Black Bar */}
                    <Reveal y={20} delay={0.2}>
                        <div className="mt-16 bg-black rounded-[24px] py-10 px-8 flex flex-col md:flex-row justify-around items-center gap-8 text-center">
                            {['Slow', 'Expensive', 'Hard to measure'].map((pain) => (
                                <div key={pain} className="group">
                                    <p className="text-[20px] md:text-[24px] font-black text-[#FFD600] uppercase tracking-[2px] transition-transform duration-300 group-hover:scale-110">
                                        {pain}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ── What Nano Does (The Platform / 2x2 Bento Grid) ── */}
                <section className="bg-[#f5f5f5] py-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <Reveal y={30}>
                            <div className="text-center mb-16">
                                <p className="text-[13px] font-bold tracking-[3px] uppercase text-[#c55530] mb-3">
                                    The Platform
                                </p>
                                <h2 className="text-[40px] font-black text-black tracking-[-1px]">
                                    Built for brands. Built for creators.
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
                            {/* --- Row 1: Brands --- */}
                            <Reveal x={-30} y={0}>
                                <div className="bg-black rounded-[32px] p-10 h-full flex flex-col justify-center border border-white/5 transition-all duration-300 hover:border-[#FFD600]/20">
                                    <div className="inline-flex items-center gap-2 bg-[#FFD600] text-black text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8 w-fit">
                                        For Brands
                                    </div>
                                    <ul className="flex flex-col gap-4">
                                        {brandFeatures.map((f) => (
                                            <li key={f} className="text-[17px] text-white font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                            <Reveal x={30} y={0}>
                                <div className="relative h-full rounded-[32px] overflow-hidden shadow-lg group">
                                    <Image
                                        src="/black-white-portrait-woman-chair-old-hollywood-glamour-style.jpg"
                                        alt="For Brands"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
                                </div>
                            </Reveal>

                            {/* --- Row 2: Creators --- */}
                            <Reveal x={-30} y={0}>
                                <div className="relative h-full rounded-[32px] overflow-hidden shadow-lg group">
                                    <Image
                                        src="/black-white-portrait-woman-with-camera-old-hollywood-glamour-style.jpg"
                                        alt="For Creators"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
                                </div>
                            </Reveal>
                            <Reveal x={30} y={0}>
                                <div className="bg-black rounded-[32px] p-10 h-full flex flex-col justify-center border border-white/5 transition-all duration-300 hover:border-[#FFD600]/20">
                                    <div className="inline-flex items-center gap-2 bg-[#FFD600] text-black text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8 w-fit">
                                        For Creators
                                    </div>
                                    <ul className="flex flex-col gap-4">
                                        {creatorFeatures.map((f) => (
                                            <li key={f} className="text-[17px] text-white font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ── Mission (Redesigned) ── */}
                <section className="bg-black py-32 px-6 relative overflow-hidden min-h-[600px] flex items-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/IMG_4614.jpg"
                            alt="Mission Background"
                            fill
                            className="object-cover opacity-60"
                        />
                        {/* Faded black overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD600]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD600]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

                    <div className="max-w-[1100px] mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <Reveal x={-30} y={0}>
                                <div>
                                    <p className="text-[14px] font-bold tracking-[4px] uppercase text-[#FFD600] mb-6">
                                        Our Mission
                                    </p>
                                    <h2 className="text-[48px] md:text-[64px] font-black text-white leading-[1.05] tracking-[-3px] mb-8">
                                        Empowering <span className="text-[#FFD600]">Emerging Markets.</span>
                                    </h2>
                                    <p className="text-[22px] text-white/70 leading-[1.6] mb-10 max-w-[500px]">
                                        To make brand-creator collaboration simple, accessible, and measurable across Africa and beyond.
                                    </p>
                                </div>
                            </Reveal>

                            <StaggerContainer className="grid grid-cols-1 gap-12">
                                {[
                                    { title: 'Simple', desc: 'Removing the friction from creative collaborations.' },
                                    { title: 'Accessible', desc: 'Opening doors for every authentic voice to be heard.' },
                                    { title: 'Measurable', desc: 'Data-driven impact that scales your marketing ROI.' }
                                ].map((pillar, idx) => (
                                    <StaggerItem key={pillar.title}>
                                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#FFD600]/30 hover:-translate-y-1">
                                            <h3 className="text-[15px] font-bold text-[#FFD600] uppercase tracking-[2px] mb-2">{pillar.title}</h3>
                                            <p className="text-[18px] text-white font-medium">{pillar.desc}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </section>

                {/* ── What Makes Nano Different (Redesigned with Image Cards) ── */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <Reveal y={20}>
                            <div className="text-center mb-16">
                                <p className="text-[13px] font-bold tracking-[3px] uppercase text-[#c55530] mb-3">
                                    What Makes Nano Different
                                </p>
                                <h2 className="text-[40px] font-black text-black tracking-[-1px] max-w-[600px] mx-auto leading-[1.15]">
                                    UGC and performance-driven. Not celebrity campaigns.
                                </h2>
                            </div>
                        </Reveal>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {differentiators.map((d, idx) => (
                                <StaggerItem key={d.label} className={idx >= 3 ? "lg:col-span-1 lg:px-0 sm:px-0" : ""}>
                                    <div
                                        className="relative group h-[450px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                                    >
                                        {/* Background Image */}
                                        <Image
                                            src={d.image}
                                            alt={d.label}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                                        {/* Content */}
                                        <div className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-10px]">
                                            <h3 className="text-[24px] font-black text-[#FFD600] leading-[1.2] mb-4 uppercase tracking-[-1px]">
                                                {d.label}
                                            </h3>
                                            <p className="text-[16px] text-white/90 font-medium leading-[1.5]">
                                                {d.description}
                                            </p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Bottom CTA Block (Redesigned with Image on Left) */}
                        <Reveal y={40} delay={0.2}>
                            <div className="mt-20 bg-[#FFD600] rounded-[48px] overflow-hidden flex flex-col md:flex-row shadow-2xl min-h-[450px]">
                                {/* Image Column */}
                                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                                    <Image
                                        src="/IMG_4206.jpg"
                                        alt="Nano Marketing Future"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Subtle overlay to tie into brand */}
                                    <div className="absolute inset-0 bg-black/5" />
                                </div>

                                {/* Content Column */}
                                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start text-left bg-[#FFD600]">
                                    <p className="text-[28px] md:text-[36px] font-black leading-[1.1] text-black mb-8 tracking-[-1.5px]">
                                        Nano is built for the next generation of marketing — where authentic content and results drive growth.
                                    </p>
                                    <a
                                        href="https://app.nanosocials.com/signup"
                                        className="inline-flex items-center bg-black text-[#FFD600] px-10 py-5 rounded-full text-[18px] font-black no-underline transition-all duration-300 hover:bg-[#111] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
                                    >
                                        Get Started — It's Free →
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
