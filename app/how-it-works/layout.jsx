// This layout provides metadata for the /how-it-works route.
// The page itself is a "use client" component, so metadata must live here in a server component.

export const metadata = {
    title: "How It Works",
    description:
        "See exactly how Nano Socials works — from creating a campaign and setting requirements, to receiving creator applications, approving content, and paying out through our secure global fintech system.",
    alternates: { canonical: "https://nanosocials.com/how-it-works" },
    openGraph: {
        title: "How It Works | Nano Socials",
        description: "A streamlined process for brands and creators — from campaign launch to final payout. Designed for velocity, transparency, and results.",
        url: "https://nanosocials.com/how-it-works",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "How Nano Socials Works" }],
    },
};

export default function HowItWorksLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://nanosocials.com/how-it-works#webpage",
        url: "https://nanosocials.com/how-it-works",
        name: "How It Works — Nano Socials",
        description: "Step-by-step breakdown of how brands and creators use Nano Socials to collaborate on UGC campaigns.",
        isPartOf: { "@id": "https://nanosocials.com/#website" },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://nanosocials.com" },
                { "@type": "ListItem", position: 2, name: "How It Works", item: "https://nanosocials.com/how-it-works" },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
