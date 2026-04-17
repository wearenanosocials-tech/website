import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

export const metadata = {
    title: "Blog | Nano Socials",
    description: "Insights, trends and stories from the creator economy and UGC landscape in Africa.",
};

// Disable caching for the blog list so scheduled posts appear on time
export const revalidate = 60; 

export default async function BlogIndex() {
    // Fetch live posts from Supabase
    // Logic: (status is published) OR (status is scheduled AND published_at <= now)
    const { data: posts, error } = await supabase
        .from('posts')
        .select('*, categories(name)')
        .or('status.eq.published,and(status.eq.scheduled,published_at.lte.now())')
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
    }

    return (
        <>
            <Header />
            <main className="pt-[80px] bg-white text-black">
                {/* ── Hero ── */}
                <section className="relative py-24 px-6 bg-black overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD600]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                    <div className="max-w-[1100px] mx-auto text-center relative z-10">
                        <Reveal y={20}>
                            <p className="text-[14px] font-black tracking-[4px] uppercase text-[#FFD600] mb-6">
                                The Journal
                            </p>
                        </Reveal>
                        <Reveal delay={0.2} y={30}>
                            <h1 className="text-[56px] md:text-[84px] font-black leading-[1] text-white tracking-[-4px] mb-8">
                                Nano <span className="italic underline decoration-[#FFD600] decoration-4 underline-offset-8">Stories.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4} y={30}>
                            <p className="text-[20px] text-white/70 leading-[1.6] max-w-[700px] mx-auto font-medium">
                                Exploring the intersection of creativity, technology, and authentic commerce across emerging markets.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ── Blog Grid ── */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-[1200px] mx-auto">
                        {!posts || posts.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-400 font-bold">No stories published yet. Check back soon!</p>
                            </div>
                        ) : (
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {posts.map((post) => (
                                    <StaggerItem key={post.id}>
                                        <a href={`/blog/${post.slug}`} className="group block no-underline transition-transform duration-300 hover:-translate-y-2">
                                            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-xl mb-6 border border-black/5">
                                                {post.image_url ? (
                                                    <Image
                                                        src={post.image_url}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                                        <span className="text-gray-300 font-black text-[12px] uppercase">No Image</span>
                                                    </div>
                                                )}
                                                <div className="absolute top-4 left-4">
                                                    <div className="bg-[#FFD600] text-black px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">
                                                        {post.categories?.name || 'Story'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[13px] text-black/50 font-bold">
                                                    {new Date(post.published_at || post.created_at).toLocaleDateString(undefined, {
                                                        month: 'long', day: 'numeric', year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-black/20" />
                                                <span className="text-[13px] text-black/50 font-bold">{post.author_name}</span>
                                            </div>
                                            <h2 className="text-[24px] md:text-[28px] font-black text-black leading-tight tracking-[-0.5px] group-hover:text-[#c55530] transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-[16px] text-black/60 font-medium leading-[1.6] mt-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </a>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
