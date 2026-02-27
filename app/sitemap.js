const BASE_URL = "https://nanosocials.com";

export default function sitemap() {
    const now = new Date();

    // Core pages — highest priority
    const coreRoutes = [
        { url: "/", priority: 1.0, changeFrequency: "weekly" },
        { url: "/about", priority: 0.9, changeFrequency: "monthly" },
        { url: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
        { url: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    ];

    // Legal/policy pages — lower priority, rarely change
    const legalRoutes = [
        { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
        { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
        { url: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
        { url: "/community-guidelines", priority: 0.3, changeFrequency: "yearly" },
        { url: "/creator-terms", priority: 0.3, changeFrequency: "yearly" },
        { url: "/creator-payout-policy", priority: 0.3, changeFrequency: "yearly" },
        { url: "/copyright-policy", priority: 0.3, changeFrequency: "yearly" },
        { url: "/brand-terms", priority: 0.3, changeFrequency: "yearly" },
        { url: "/acceptable-use", priority: 0.3, changeFrequency: "yearly" },
        { url: "/refund-dispute-policy", priority: 0.3, changeFrequency: "yearly" },
    ];

    const allRoutes = [...coreRoutes, ...legalRoutes];

    return allRoutes.map(({ url, priority, changeFrequency }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));
}
