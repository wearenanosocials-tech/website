const BASE_URL = "https://nanosocials.com";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Disallow any private/app routes if they ever end up here
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
