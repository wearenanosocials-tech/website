'use client';

import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Nano', href: '/about' },
    { label: 'How Nano Works', href: '/how-it-works' },
    { label: 'Pricing and Fees', href: '/pricing' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-[10px] z-[1000] py-4 border-b border-black/5 transition-all duration-300">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center justify-between gap-6">

                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                            <Image
                                src="https://nanosocials.com/wp-content/uploads/2025/12/Nano-logo-Black-scaled.png"
                                alt="Nano Logo"
                                width={130}
                                height={50}
                                className="h-[50px] w-[130px] object-contain"
                                unoptimized
                            />
                        </div>

                        {/* Desktop Nav — centre */}
                        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-[15px] font-medium text-black no-underline relative group transition-colors duration-300 hover:text-[#c55530] whitespace-nowrap"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c55530] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                            <a
                                href="https://app.nanosocials.com/signin"
                                className="inline-flex items-center px-5 py-2.5 rounded-full text-[15px] font-semibold text-black no-underline border-2 border-black transition-all duration-300 hover:bg-black hover:text-[#FFD600] hover:-translate-y-0.5"
                            >
                                Sign In
                            </a>
                            <a
                                href="https://app.nanosocials.com/signup"
                                className="inline-flex items-center px-5 py-2.5 rounded-full text-[15px] font-semibold bg-black text-[#FFD600] no-underline border-2 border-black transition-all duration-300 hover:bg-[#FFD600] hover:text-black hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                            >
                                Sign Up
                            </a>
                        </div>

                        {/* Hamburger (mobile) */}
                        <button
                            className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <span className={`w-[25px] h-[3px] bg-black rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-x-[8px] translate-y-[8px]' : ''}`} />
                            <span className={`w-[25px] h-[3px] bg-black rounded-sm transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-[25px] h-[3px] bg-black rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 translate-x-[7px] -translate-y-[7px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 w-[300px] h-screen bg-black z-[1002] transition-all duration-300 pt-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col justify-between h-full px-6 pb-10">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-[18px] font-medium text-white no-underline py-3 border-b border-white/10 transition-colors duration-300 hover:text-[#FFD600]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Auth Buttons */}
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://app.nanosocials.com/signin"
                            className="text-center px-6 py-4 rounded-full text-[16px] font-bold no-underline text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            Sign In
                        </a>
                        <a
                            href="https://app.nanosocials.com/signup"
                            className="text-center bg-[#FFD600] text-black px-6 py-4 rounded-full text-[16px] font-bold no-underline transition-all duration-300 border-2 border-[#FFD600] hover:bg-transparent hover:text-[#FFD600]"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[1001] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMenu}
            />
        </>
    );
}
