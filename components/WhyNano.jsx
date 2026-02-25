import { StaggerContainer, StaggerItem } from './Motion';

export default function WhyNano() {
    return (
        <section id="why-nano" className="py-[100px] bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Old Model */}
                        <StaggerItem>
                            <div className="p-[60px] h-full rounded-[40px] bg-[#f5f5f5] border-2 border-transparent transition-transform duration-300 hover:-translate-y-1">
                                <h2 className="text-[40px] font-extrabold leading-[1.2] mb-8 text-[#333]">
                                    The old model of influence is broken.
                                </h2>
                                <ul className="list-none space-y-5">
                                    {[
                                        "Mass marketing doesn't connect anymore.",
                                        "Big influencers are expensive but don't always convert.",
                                        "Brands crave authentic engagement.",
                                    ].map((item) => (
                                        <li key={item} className="text-[20px] font-medium leading-[1.6] pl-9 relative text-[#333]">
                                            <span className="absolute left-0 top-0 text-[24px] text-red-400 font-black">✕</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </StaggerItem>

                        {/* New Model */}
                        <StaggerItem>
                            <div className="p-[60px] h-full rounded-[40px] bg-black transition-transform duration-300 hover:-translate-y-1">
                                <h2 className="text-[40px] font-extrabold leading-[1.2] mb-8 text-[#FFD600]">
                                    Nano changes the game:
                                </h2>
                                <ul className="list-none space-y-5">
                                    {[
                                        "Every individual can create in their own unique way.",
                                        "Campaigns are powered by missions, challenges, and collaborations.",
                                        "Brands pay only for results. Creators earn for impact.",
                                    ].map((item) => (
                                        <li key={item} className="text-[20px] font-medium leading-[1.6] pl-9 relative text-white">
                                            <span className="absolute left-0 top-0 text-[24px] text-[#FFD600] font-black">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
}
