'use client';

import useTypingEffect from '@/hooks/useTypingEffect';
import Image from 'next/image';
import { Reveal } from './Motion';

export default function HeroSection() {
    const displayText = useTypingEffect();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pt-20 md:pt-10 pb-10 bg-[#FFD600] rounded-[40px] min-h-[40vh] items-center overflow-hidden relative mt-[120px] max-w-[1200px] mx-auto">
            {/* LEFT: Text */}
            <div className="z-[3]">
                <Reveal y={30} duration={0.6}>
                    <p className="text-[16px] font-semibold tracking-[2px] mb-5 uppercase text-black">
                        Unlock Potential, Go Further
                    </p>
                </Reveal>
                <Reveal delay={0.2} y={30} duration={0.6}>
                    <h2 className="text-[50px] font-black leading-[1.2] text-black mb-10 min-h-[120px]">
                        Nano helps{' '}
                        <span>{displayText}</span>
                        <span className="inline-block w-[2px] bg-black animate-blink ml-[2px] align-bottom h-[1em]" />
                    </h2>
                </Reveal>
                <Reveal delay={0.4} y={30} duration={0.6}>
                    <a
                        href="https://app.nanosocials.com/signin"
                        className="inline-block w-[180px] py-[18px] px-10 bg-black text-[#FFD600] font-bold text-[18px] rounded-full no-underline transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
                    >
                        Join Us →
                    </a>
                </Reveal>
            </div>

            {/* RIGHT: Orbit */}
            <div className="hidden md:block relative w-[550px] h-[550px] mx-auto">
                {/* Center Hub */}
                <div className="absolute w-[180px] h-[180px] bg-black rounded-full top-1/2 left-1/2 flex items-center justify-center animate-pulse-hub z-[2]">
                    <Image
                        src="http://nanosocials.com/wp-content/uploads/2025/12/Nano-Logo-Yellow.png"
                        alt="Nano"
                        width={90}
                        height={90}
                        className="w-[90px]"
                        unoptimized
                    />
                </div>

                {/* Orbit 1 */}
                <div className="absolute w-[220px] h-[220px] top-1/2 left-1/2 border-2 border-dashed border-black/20 rounded-full animate-orbit-1">
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-1 -top-[55px] left-1/2 -translate-x-1/2">
                        <div className="text-[28px] text-[#FFD600]">🎯</div>
                        <p className="text-white text-[11px] font-bold uppercase">Mission</p>
                    </div>
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-1 -bottom-[55px] left-1/2 -translate-x-1/2">
                        <div className="text-[28px] text-[#FFD600]">💎</div>
                        <p className="text-white text-[11px] font-bold uppercase">Rewards</p>
                    </div>
                </div>

                {/* Orbit 2 */}
                <div className="absolute w-[340px] h-[340px] top-1/2 left-1/2 border-2 border-dashed border-black/20 rounded-full animate-orbit-2">
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-2 top-1/2 -right-[55px] -translate-y-1/2">
                        <div className="text-[28px] text-[#FFD600]">🤝</div>
                        <p className="text-white text-[11px] font-bold uppercase">Brands</p>
                    </div>
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-2 top-1/2 -left-[55px] -translate-y-1/2">
                        <div className="text-[28px] text-[#FFD600]">🎨</div>
                        <p className="text-white text-[11px] font-bold uppercase">Create</p>
                    </div>
                </div>

                {/* Orbit 3 */}
                <div className="absolute w-[460px] h-[460px] top-1/2 left-1/2 border-2 border-dashed border-black/20 rounded-full animate-orbit-3">
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-3 -top-[45px] left-1/2 -translate-x-1/2">
                        <div className="text-[28px] text-[#FFD600]">🚀</div>
                        <p className="text-white text-[11px] font-bold uppercase">Growth</p>
                    </div>
                    <div className="absolute w-[90px] h-[90px] bg-black rounded-full flex flex-col items-center justify-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-counter-rotate-3 -bottom-[45px] left-1/2 -translate-x-1/2">
                        <div className="text-[28px] text-[#FFD600]">🌟</div>
                        <p className="text-white text-[11px] font-bold uppercase">Impact</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
