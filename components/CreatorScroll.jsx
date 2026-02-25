import Image from 'next/image';
import { FadeIn, Reveal } from './Motion';

const creators = [
    { name: ['GOODNESS', 'CHINEMELUM'], tier: 'New Creator', bio: 'Goodness breaks down complex startup trends in 60 seconds.', img: '/creators/IMG_3265.jpg' },
    { name: ['KORAH', "NA'ADZENGA"], tier: 'Pro Creator', bio: 'Korah shares daily fitness tips and healthy meal preps.', img: '/creators/IMG_3354 (1).jpg' },
    { name: ['JENNIFER', 'ENUJIUGHA'], tier: 'Expert', bio: 'Jennifer teaches coding and tech reviews for beginners.', img: '/creators/IMG_3361.jpg' },
    { name: ['SEGUN', 'AJEGUNLE'], tier: 'Influencer', bio: 'Segun explores hidden gems and travel destinations.', img: '/creators/IMG_3417.jpg' },
    { name: ['CHUX', 'OSAKWE'], tier: 'New Creator', bio: 'Chux captures the essence of street photography.', img: '/creators/IMG_3439.jpg' },
    { name: ['AISHA', 'BELLO'], tier: 'Pro Creator', bio: 'Aisha shares insights on sustainable living and minimalist design.', img: '/creators/IMG_4616.jpg' },
    { name: ['MICKEY D', 'TURNER'], tier: 'Expert', bio: 'Mickey explores culinary arts and fusion cuisine from around the world.', img: '/creators/IMG_4204.jpg' },
    { name: ['OSE', 'IDONI'], tier: 'Influencer', bio: 'Ose creates engaging content about urban exploration and architecture.', img: '/creators/IMG_4130.jpg' },
    { name: ['PRINCEWILL', 'AFANG'], tier: 'New Creator', bio: 'Princewill documents his journey in digital art and illustration.', img: '/creators/IMG_3445.jpg' },
];

function CreatorCard({ creator }) {
    return (
        <div className="flex-shrink-0 w-[380px] md:w-[380px] w-[300px] bg-[#e8e8e8] rounded-[32px] p-8 relative transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="flex justify-between items-center mb-6">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center p-2" />
            </div>
            <h2 className="text-[36px] font-medium leading-[1.1] text-black mb-4 tracking-[-0.5px]">
                {creator.name[0]}
                <br />
                {creator.name[1]}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black/60 text-white px-4 py-2 rounded-[20px] text-[13px] font-semibold">
                    Tier: {creator.tier}
                </span>
            </div>
            <p className="text-[14px] leading-[1.6] text-black mb-6 min-h-[60px]">{creator.bio}</p>
            <div className="w-full h-[400px] rounded-[24px] overflow-hidden mt-auto">
                <Image
                    src={creator.img}
                    alt={creator.name.join(' ')}
                    width={380}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default function CreatorScroll() {
    const doubled = [...creators, ...creators];

    return (
        <section className="py-20 bg-[#f5f5f5] overflow-hidden relative">
            <Reveal y={20} className="mb-10 text-center">
                <div className="text-center mb-12">
                    <p className="text-[14px] font-bold tracking-[3px] uppercase text-[#c55530] mb-4">
                        MEET OUR NINJAS
                    </p>
                    <h2 className="text-[40px] font-black text-black tracking-[-1px]">
                        The future of creators is here.
                    </h2>
                </div>
            </Reveal>
            <FadeIn delay={0.3}>
                <div className="flex gap-6 w-fit animate-marquee hover:[animation-play-state:paused]">
                    {doubled.map((creator, i) => (
                        <CreatorCard key={i} creator={creator} />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
