import { Reveal } from './Motion';

export default function DualCTA() {
    const cards = [
        {
            label: 'FOR BRANDS',
            heading: ['Your Brand', 'Everywhere', 'at once.'],
            description:
                'Tap into a distributed network of creators driving real traffic. Launch digital campaigns (missions) and watch your message spread faster, wider and more authentically.',
            cta: 'Launch a Mission →',
            href: 'https://app.nanosocials.com/signin',
        },
        {
            label: 'FOR CREATORS (NINJAS)',
            heading: ["You Don't need Fame to make an Impact"],
            description:
                'On Nano, your creativity, your voice and your community is your influence. Join missions, collaborate with brands and grow your creator journey',
            cta: 'Join Now →',
            href: 'https://app.nanosocials.com/signin',
        },
    ];

    return (
        <section id="brands" className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                        <Reveal key={card.label} delay={index * 0.2} y={40} duration={0.6}>
                            <div className="bg-black rounded-[32px] p-12 h-full flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
                                <p className="text-[12px] font-bold tracking-[2px] uppercase text-white mb-6 opacity-60">
                                    {card.label}
                                </p>
                                <h2 className="text-[48px] font-black leading-[1.1] text-[#FFD600] mb-6 tracking-[-1px]">
                                    {card.heading.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < card.heading.length - 1 && <br />}
                                        </span>
                                    ))}
                                </h2>
                                <p className="text-[16px] leading-[1.6] text-white/90 mb-8 flex-grow">
                                    {card.description}
                                </p>
                                <a
                                    href={card.href}
                                    className="inline-flex items-center justify-center bg-[#FFD600] text-black px-8 py-4 rounded-full text-[16px] font-bold no-underline w-fit transition-all duration-300 hover:bg-[#FFC700] hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(255,214,0,0.4)]"
                                >
                                    {card.cta}
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
