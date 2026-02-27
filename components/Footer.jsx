import Image from 'next/image';

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
    </svg>
);

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
    </svg>
);

export default function Footer() {
    const footerLinks = [
        {
            title: 'Platform',
            links: [
                { name: 'Copyright & IP Policy', href: '/copyright-policy' },
                { name: 'Community Guidelines', href: '/community-guidelines' },
                { name: 'Acceptable Use Policy', href: '/acceptable-use' },
            ]
        },
        {
            title: 'Terms',
            links: [
                { name: 'Brand Terms', href: '/brand-terms' },
                { name: 'Creator Terms', href: '/creator-terms' },
                { name: 'Terms of Service', href: '/terms' },
            ]
        },
        {
            title: 'Policies',
            links: [
                { name: 'Creator Payout Policy', href: '/creator-payout-policy' },
                { name: 'Refund & Dispute Policy', href: '/refund-dispute-policy' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
            ]
        }
    ];

    return (
        <footer className="bg-black pt-24 pb-12 text-white border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start text-left">
                        <div className="mb-8">
                            <Image
                                src="/Nano logo (white).png"
                                alt="Nano"
                                width={200}
                                height={50}
                                className="w-[180px] h-auto object-contain"
                                unoptimized
                            />
                        </div>
                        <p className="text-[16px] text-white/50 leading-relaxed max-w-[280px] mb-8">
                            Join the community that's redefining influence through authentic co-creation.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { href: 'https://www.instagram.com/nano.socials?igsh=azFodjN3dTI0c216', label: 'Instagram', icon: <InstagramIcon /> },
                                { href: 'https://x.com/nanosocials?s=21', label: 'X (Twitter)', icon: <XIcon /> },
                                { href: 'https://www.linkedin.com/company/nanosocials/', label: 'LinkedIn', icon: <LinkedInIcon /> },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 transition-all duration-300 hover:bg-[#FFD600] hover:text-black hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-[14px] font-black uppercase tracking-[2px] text-white mb-8">
                                {group.title}
                            </h3>
                            <ul className="space-y-4">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[15px] text-white/40 font-medium no-underline transition-colors hover:text-[#FFD600]"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[13px] text-white/30 font-medium">
                        © 2025 Nano Socials. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="https://app.nanosocials.com/signin" className="text-[13px] font-black text-[#FFD600] uppercase tracking-wider hover:opacity-80 transition-opacity">
                            Brand Portal
                        </a>
                        <a href="https://app.nanosocials.com/signin" className="text-[13px] font-black text-[#FFD600] uppercase tracking-wider hover:opacity-80 transition-opacity">
                            Ninja Portal
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
