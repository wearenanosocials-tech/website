"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/Motion';
import Image from 'next/image';
import { motion } from 'framer-motion';

const brandSteps = [
    { title: 'Create a campaign', desc: 'Define your goals and set the stage for your next high-impact project.' },
    { title: 'Set budget and requirements', desc: 'Clear guidelines ensure you find exactly the creative talent you need.' },
    { title: 'Receive creator applications', desc: 'Review pitches or send direct invites to your favorite creators.' },
    { title: 'Approve submissions', desc: 'Seamless feedback loops ensure the content meets your brand standards.' },
    { title: 'Pay creators through Nano', desc: 'Secure, one-click global payouts that take the headache out of fintech.' },
    { title: 'Track campaign performance', desc: 'Real-time analytics showing exactly how your content is performing.' },
];

const creatorSteps = [
    { title: 'Create a Nano profile', desc: 'Your creative identity, built in minutes for premium brand visibility.' },
    { title: 'Connect social accounts', desc: 'Link your platforms to show off your reach and authentic engagement.' },
    { title: 'Apply to campaigns', desc: 'Find missions that match your style and pitch your creative vision.' },
    { title: 'Submit content', desc: 'Upload your high-quality UGC directly through the slick Nano app.' },
    { title: 'Get approved', desc: 'Fast feedback cycles so you can move on to your next creative mission.' },
    { title: 'Get paid', desc: 'Instant access to your earnings. Secure, reliable, and consistent.' },
];

const JourneyStep = ({ step, index, color, isLast }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Connecting Line (Desktop) */}
            {!isLast && (
                <div className="hidden md:block absolute top-[60%] left-1/2 -translate-x-1/2 h-24 w-[2px] bg-black/10 z-0" />
            )}

            {/* Visual/Number */}
            <Reveal x={isEven ? -30 : 30} className="relative z-10">
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-[20px] shadow-lg relative"
                    style={{ backgroundColor: color }}
                >
                    {index + 1}
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: color }} />
                </div>
            </Reveal>

            {/* Content */}
            <Reveal x={isEven ? 30 : -30} className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-[22px] md:text-[28px] font-black text-black leading-tight mb-2 tracking-[-1px]">
                    {step.title}
                </h3>
                <p className={`text-[15px] md:text-[16px] text-[#555] font-medium leading-relaxed max-w-[400px] mx-auto ${isEven ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                    {step.desc}
                </p>
            </Reveal>

            {/* Step Indicator arrow (Desktop) */}
            {!isLast && (
                <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default function HowItWorksPage() {
    return (
        <>
            <Header />
            <main className="pt-[80px] bg-white">

                {/* ── Hero ── */}
                <section className="relative py-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about.jpg"
                            alt="Process Background"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#FFD600]/85 mix-blend-multiply" />
                    </div>

                    <div className="max-w-[1100px] mx-auto text-center relative z-10">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black tracking-[4px] uppercase text-white mb-6">
                                The Process
                            </p>
                        </Reveal>
                        <Reveal delay={0.2} y={30}>
                            <h1 className="text-[64px] md:text-[84px] font-black leading-[1] text-white tracking-[-4px] mb-8">
                                How it <span className="italic underline decoration-4 underline-offset-8">works.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4} y={30}>
                            <p className="text-[22px] text-white leading-[1.6] max-w-[800px] mx-auto font-semibold">
                                A streamlined ecosystem designed for velocity, transparency, and results.
                                From first pitch to final payout.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ── Brand Journey ── */}
                <section id="brands" className="py-24 px-6 relative">
                    <div className="max-w-[1000px] mx-auto">
                        <Reveal y={-20} className="text-center mb-16">
                            <div className="inline-block bg-black text-[#FFD600] px-8 py-3 rounded-full text-[14px] font-black uppercase tracking-[3px] mb-6 shadow-xl">
                                For Brands
                            </div>
                            <h2 className="text-[40px] md:text-[56px] font-black text-black leading-[0.9] tracking-[-4px]">
                                Your Campaign <br /><span className="text-[#FFD600] stroke-black">Journey.</span>
                            </h2>
                        </Reveal>

                        <div className="relative">
                            {brandSteps.map((step, idx) => (
                                <JourneyStep
                                    key={step.title}
                                    step={step}
                                    index={idx}
                                    color="#000000"
                                    isLast={idx === brandSteps.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Interactive Separator ── */}
                <div className="h-px bg-black/5 max-w-[80%] mx-auto" />

                {/* ── Creator Journey ── */}
                <section id="creators" className="py-24 px-6 bg-[#fafafa] relative">
                    <div className="max-w-[1000px] mx-auto">
                        <Reveal y={-20} className="text-center mb-16">
                            <div className="inline-block bg-[#c55530] text-white px-8 py-3 rounded-full text-[14px] font-black uppercase tracking-[3px] mb-6 shadow-xl">
                                For Creators
                            </div>
                            <h2 className="text-[40px] md:text-[56px] font-black text-black leading-[0.9] tracking-[-4px]">
                                Your Creative <br /><span className="text-[#c55530]">Career Path.</span>
                            </h2>
                        </Reveal>

                        <div className="relative">
                            {creatorSteps.map((step, idx) => (
                                <JourneyStep
                                    key={step.title}
                                    step={step}
                                    index={idx}
                                    color="#c55530"
                                    isLast={idx === creatorSteps.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Visual Proof ── */}
                <section className="bg-black py-32 px-6 relative overflow-hidden">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <Reveal x={-30}>
                            <div className="relative h-[600px] rounded-[60px] overflow-hidden group shadow-2xl">
                                <Image
                                    src="/IMG_4206.jpg"
                                    alt="Platform Preview"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                        </Reveal>
                        <Reveal x={30}>
                            <div>
                                <h2 className="text-[56px] md:text-[72px] font-black text-white leading-[1] tracking-[-3px] mb-8">
                                    Powering the <br /><span className="text-[#FFD600]">Future of Fame.</span>
                                </h2>
                                <p className="text-[22px] text-white/70 leading-[1.6] mb-12 font-medium">
                                    Our platform isn't just a tool; it's a movement. We've optimized every interaction to ensure maximum speed for brands and maximum earnings for creators.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { label: 'Secure Payouts', val: 'Fast & Reliable' },
                                        { label: 'UGC Focus', val: 'Authentic 1st' },
                                        { label: 'Verified Creators', val: 'Top 1% Talent' },
                                        { label: 'Scale Ready', val: 'Global Reach' }
                                    ].map(stat => (
                                        <div key={stat.label} className="bg-white/5 border border-white/10 p-6 rounded-[24px]">
                                            <div className="text-[#FFD600] font-black text-[14px] uppercase tracking-wider mb-1">{stat.label}</div>
                                            <div className="text-white font-bold text-[18px]">{stat.val}</div>
                                        </div>
                                    ))}
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
