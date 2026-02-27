import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyNano from '@/components/WhyNano';
import CreatorScroll from '@/components/CreatorScroll';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';

export const metadata = {
    title: "Nano Socials — Where Brands Meet Authentic Creators",
    description:
        "Nano Socials is a UGC and influencer marketing platform connecting brands with authentic nano-creators across Africa and beyond. Launch campaigns, track performance, and pay creators — all in one place.",
    alternates: { canonical: "https://nanosocials.com" },
    openGraph: {
        title: "Nano Socials — Where Brands Meet Authentic Creators",
        description: "Brands launch missions. Creators earn for impact. The platform redefining authentic influence.",
        url: "https://nanosocials.com",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nano Socials" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://nanosocials.com/#website",
            url: "https://nanosocials.com",
            name: "Nano Socials",
            description: "UGC and influencer marketing platform connecting brands with authentic creators.",
            potentialAction: {
                "@type": "SearchAction",
                target: { "@type": "EntryPoint", urlTemplate: "https://nanosocials.com/?s={search_term_string}" },
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://nanosocials.com/#organization",
            name: "Nano Socials",
            url: "https://nanosocials.com",
            logo: {
                "@type": "ImageObject",
                url: "https://nanosocials.com/og-image.jpg",
                width: 1200,
                height: 630,
            },
            sameAs: [
                "https://twitter.com/nanosocials",
                "https://instagram.com/nanosocials",
            ],
            description: "A creator collaboration platform helping brands and authentic nano-creators work together at scale across Africa and emerging markets.",
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main>
                <HeroSection />
                <WhyNano />
                <CreatorScroll />
                <DualCTA />
            </main>
            <Footer />
        </>
    );
}
