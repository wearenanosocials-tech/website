import "./globals.css";

const BASE_URL = "https://nanosocials.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nano Socials — Where Brands Meet Authentic Creators",
    template: "%s | Nano Socials",
  },
  description:
    "Nano Socials is a UGC and influencer marketing platform connecting brands with authentic nano-creators in Africa and beyond. Launch campaigns, track performance, and pay creators — all in one place.",
  keywords: [
    "influencer marketing",
    "UGC platform",
    "nano influencers",
    "creator economy",
    "brand campaigns",
    "content creators Africa",
    "user generated content",
    "Nano Socials",
  ],
  authors: [{ name: "Nano Socials", url: BASE_URL }],
  creator: "Nano Socials",
  publisher: "Nano Socials",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Nano Socials — Where Brands Meet Authentic Creators",
    description:
      "Brands launch missions. Creators earn for impact. Join the platform redefining authentic influence in Africa and emerging markets.",
    url: BASE_URL,
    siteName: "Nano Socials",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Socials — Where Brands Meet Authentic Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nanosocials",
    creator: "@nanosocials",
    title: "Nano Socials — Where Brands Meet Authentic Creators",
    description:
      "Brands launch missions. Creators earn for impact. Join the platform redefining authentic influence.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here when ready:
    // google: "YOUR_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-primary h-full bg-white text-[#333] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
