import Image from 'next/image';
import { Reveal } from './Motion';
import { supabase } from '@/lib/supabase';

export default async function BlogSection() {
    // Fetch latest 4 live posts from Supabase
    // Logic: (status is published) OR (status is scheduled AND published_at <= now)
    const { data: posts } = await supabase
        .from('posts')
        .select('*, categories(name)')
        .or('status.eq.published,and(status.eq.scheduled,published_at.lte.now())')
        .order('published_at', { ascending: false })
        .limit(4);

    if (!posts || posts.length === 0) {
        return null; // Don't show the section if no posts are live
    }

    const latestPost = posts[0];
    const recentPosts = posts.slice(1, 4);

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-[1200px] mx-auto">
                <Reveal y={20}>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <p className="text-[13px] font-bold tracking-[3px] uppercase text-[#c55530] mb-3">
                                Journal & News
                            </p>
                            <h2 className="text-[40px] md:text-[56px] font-black text-black leading-[0.9] tracking-[-3px]">
                                The Latest <br /><span className="text-[#FFD600] stroke-black">Insights.</span>
                            </h2>
                        </div>
                        <a 
                            href="/blog" 
                            className="hidden md:inline-flex items-center text-[15px] font-black uppercase tracking-wider text-black hover:text-[#c55530] transition-colors"
                        >
                            View all posts →
                        </a>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Big Post */}
                    <div className="lg:col-span-7">
                        <Reveal delay={0.3} x={-20}>
                            <a href={`/blog/${latestPost.slug}`} className="group block no-underline">
                                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl mb-8 border border-black/5">
                                    {latestPost.image_url ? (
                                        <Image
                                            src={latestPost.image_url}
                                            alt={latestPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                                            <span className="text-gray-300 font-black">NANO</span>
                                        </div>
                                    )}
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <div className="bg-[#FFD600] text-black px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">
                                            {latestPost.categories?.name || 'Story'}
                                        </div>
                                        <div className="bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                                            Latest
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[32px] md:text-[44px] font-black text-black leading-[1.1] tracking-[-1px] mb-4 group-hover:text-[#c55530] transition-colors">
                                        {latestPost.title}
                                    </h3>
                                    <p className="text-[18px] md:text-[20px] text-black/60 font-medium leading-[1.6] mb-6 line-clamp-2">
                                        {latestPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-[12px] font-black uppercase">
                                            {latestPost.author_name?.substring(0, 2) || 'NT'}
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-bold text-black">{latestPost.author_name}</p>
                                            <p className="text-[13px] text-black/40 font-medium">
                                                {new Date(latestPost.published_at || latestPost.created_at).toLocaleDateString(undefined, { 
                                                    month: 'short', day: 'numeric', year: 'numeric' 
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Reveal>
                    </div>

                    {/* Right Column: List of 3 */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        {recentPosts.map((post, idx) => (
                            <Reveal key={post.id} delay={idx * 0.15} x={20}>
                                <a href={`/blog/${post.slug}`} className="group flex gap-6 items-start no-underline">
                                    <div className="relative w-32 h-32 flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg border border-black/5">
                                        {post.image_url ? (
                                            <Image
                                                src={post.image_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-50" />
                                        )}
                                    </div>
                                    <div className="flex flex-col py-1">
                                        <div className="text-[#c55530] text-[12px] font-bold uppercase tracking-wider mb-2">
                                            {post.categories?.name || 'Story'}
                                        </div>
                                        <h3 className="text-[18px] md:text-[20px] font-black text-black leading-tight group-hover:text-[#c55530] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-[14px] text-black/50 font-medium mt-2">
                                            {new Date(post.published_at || post.created_at).toLocaleDateString(undefined, { 
                                                month: 'short', day: 'numeric', year: 'numeric' 
                                            })}
                                        </p>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="/blog" className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-[15px] font-black uppercase tracking-wider hover:bg-[#c55530] transition-all">
                        View all posts →
                    </a>
                </div>
            </div>
        </section>
    );
}
