import Image from 'next/image';

const logos = [
    { name: 'IMG', src: '/img.png' },
    { name: 'Mainstack', src: '/mainstack.png' },
    { name: 'MCPT', src: '/mcpt.png' },
    { name: 'Moment', src: '/moment.png' },
];

export default function BrandMarquee() {
    // Duplicate logos for a long continuous scroll
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-16 bg-white border-y border-black/5 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 mb-10">
                <p className="text-[12px] font-black tracking-[3px] uppercase text-black/40 text-center">
                    Trusted by forward-thinking brands
                </p>
            </div>
            
            <div className="relative flex overflow-hidden group">
                <div className="flex gap-16 md:gap-32 items-center animate-marquee whitespace-nowrap">
                    {marqueeLogos.map((logo, idx) => (
                        <div 
                            key={idx} 
                            className="flex-shrink-0 transition-transform duration-500 cursor-pointer hover:scale-105"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={240}
                                height={80}
                                className="h-16 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate the set for seamless loop */}
                    {marqueeLogos.map((logo, idx) => (
                        <div 
                            key={`dup-${idx}`} 
                            className="flex-shrink-0 transition-transform duration-500 cursor-pointer hover:scale-105"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={240}
                                height={80}
                                className="h-16 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
