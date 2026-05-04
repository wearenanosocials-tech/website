import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/Motion';
import { supabase } from '@/lib/supabase';

// Refetch the post every minute to ensure scheduled posts appear
export const revalidate = 60; 

export async function generateStaticParams() {
    const { data: posts } = await supabase.from('posts').select('slug').eq('status', 'published');
    return posts?.map((post) => ({
        slug: post.slug,
    })) || [];
}

export default async function BlogPost({ params: paramsPromise }) {
    const params = await paramsPromise;
    const { slug } = params;

    // Fetch post from Supabase
    // We only allow viewing if it's published or if it was scheduled and the time has passed
    const { data: post, error } = await supabase
        .from('posts')
        .select('*, categories(name), authors(*)')
        .eq('slug', slug)
        .or('status.eq.published,and(status.eq.scheduled,published_at.lte.now())')
        .single();

    if (error || !post) {
        notFound();
    }

    const author = post.authors || { name: post.author_name || 'Nano Team' };

    return (
        <>
            <Header />
            <main className="pt-[80px] bg-white text-black min-h-screen">
                {/* --- Hero --- */}
                <article className="pb-24">
                    <header className="py-24 px-6 bg-[#fafafa] border-b border-black/5">
                        <div className="max-w-[800px] mx-auto">
                            <Reveal y={20}>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="bg-[#FFD600] text-black px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">
                                        {post.categories?.name || 'Story'}
                                    </span>
                                    <span className="text-[14px] text-black/40 font-bold">
                                        {new Date(post.published_at || post.created_at).toLocaleDateString(undefined, {
                                            month: 'long', day: 'numeric', year: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2} y={30}>
                                <h1 className="text-[40px] md:text-[64px] font-black text-black leading-[1.05] tracking-[-3px] mb-8">
                                    {post.title}
                                </h1>
                            </Reveal>
                            <Reveal delay={0.4} y={30}>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center text-white text-[14px] font-black uppercase shadow-xl">
                                        {author.image_url ? (
                                            <Image src={author.image_url} alt={author.name} fill className="object-cover" />
                                        ) : (
                                            author.name?.substring(0, 2) || 'NT'
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-[16px] font-black text-black">{author.name}</p>
                                        <p className="text-[14px] text-black/40 font-medium tracking-tight">
                                            {author.bio || 'Nano Impact Writer'}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </header>

                    {/* --- Image --- */}
                    <div className="max-w-[1100px] mx-auto px-6 -mt-12">
                        <Reveal delay={0.6} y={40}>
                            <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border border-black/5 bg-black">
                                {post.image_url ? (
                                    <Image
                                        src={post.image_url}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-90"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                        <span className="text-gray-600 font-black">NANO SOCIALS</span>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    </div>

                    {/* --- Content --- */}
                    <div className="max-w-[800px] mx-auto px-6 pt-20">
                        <div className="prose prose-xl prose-stone max-w-none">
                            {/* We use the same 'tiptap' class to ensure formatting matches the editor */}
                            <div 
                                className="tiptap blog-content text-[20px] leading-[1.8] text-black/80 font-medium space-y-8"
                                dangerouslySetInnerHTML={{ __html: post.content }} 
                            />
                        </div>
                    </div>
                </article>

                {/* --- Footer CTA --- */}
                <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                        <Image src="/Nano head - White.png" alt="" fill className="object-contain scale-150 rotate-12" />
                    </div>
                    <div className="max-w-[800px] mx-auto text-center relative z-10">
                        <h2 className="text-[48px] font-black tracking-[-2px] mb-8">Ready to make an <span className="text-[#FFD600]">impact?</span></h2>
                        <a 
                            href="https://app.nanosocials.com/signup" 
                            className="inline-flex items-center bg-[#FFD600] text-black px-10 py-5 rounded-full text-[18px] font-black no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,214,0,0.3)]"
                        >
                            Become a Creator Ninja →
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
