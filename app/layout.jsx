import "./globals.css";

export const metadata = {
  title: "Nano Socials — Where Brands Meet Authentic Creators",
  description:
    "Connect with nano-creators who drive real results. Nano Socials links brands with authentic content creators through missions, challenges & real-time rewards.",
  openGraph: {
    title: "Nano Socials — Where Brands Meet Authentic Creators",
    description:
      "Brands launch missions. Creators earn for impact. Join the platform redefining authentic influence.",
    url: "https://nanosocials.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Socials — Unlock Potential, Go Further",
    description:
      "Brands launch missions. Creators earn for impact. Join the platform redefining authentic influence.",
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
