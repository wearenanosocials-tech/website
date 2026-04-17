'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            toast.error(error.message);
            setLoading(false);
        } else if (data.session) {
            toast.success("Welcome back, Admin!");
            router.push('/admin');
        }
    };

    return (
        <div className="h-screen bg-white flex font-primary overflow-hidden">
            {/* Left Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-24 py-12 relative z-10">
                <Reveal y={20}>
                    <div className="mb-10 lg:mb-16">
                        <Image
                            src="/Nano logo BLACK.png"
                            alt="Nano Logo"
                            width={110}
                            height={40}
                            className="mb-12"
                        />
                        <h1 className="text-[32px] md:text-[44px] font-black text-black leading-tight tracking-[-1px] mb-4">
                            Hello, <br />Welcome Back!
                        </h1>
                        <p className="text-black/50 font-medium text-[16px]">
                            We're happy to see you again, let's Stay ahead of the game.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2} y={30}>
                    <form onSubmit={handleLogin} className="flex flex-col gap-6 max-w-[440px]">
                        <div>
                            <label className="block text-black/40 text-[13px] font-bold uppercase tracking-widest mb-3 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                required
                                className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/20"
                            />
                        </div>

                        <div className="relative group/pass">
                            <label className="block text-black/40 text-[13px] font-bold uppercase tracking-widest mb-3 ml-1">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 pr-14 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/20"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-[50px] text-black/20 hover:text-black transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <Link href="/admin/forgot-password" size={20} className="absolute right-2 -bottom-8 text-[13px] font-bold text-black hover:underline transition-all">
                                Forgot Password?
                            </Link>
                        </div>

                        {error && (
                            <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-600 text-[14px] font-bold text-center border border-red-100">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full bg-black text-white h-16 rounded-2xl text-[16px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFD600] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                "LOGIN"
                            )}
                        </button>
                    </form>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                    <p className="mt-12 text-black/40 text-[14px] font-medium">
                        Don't have an account? <span className="text-black font-black cursor-pointer hover:underline">Sign up for free</span>
                    </p>
                </Reveal>
            </div>

            {/* Right Side: Image Content */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <Image
                    src="/IMG_4614.jpg"
                    alt="Creators"
                    fill
                    className="object-cover"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
                    <Reveal delay={0.5} y={40}>
                        <p className="text-[20px] md:text-[24px] font-medium leading-[1.6] max-w-[600px] italic opacity-90">
                            "Nano Socials provides a platform for authentic storytelling across Africa. We empower creators to build real value for brands through cinematic, high-impact content."
                        </p>
                        
                        <div className="flex gap-2 mt-12">
                            <div className="w-12 h-1 bg-white rounded-full" />
                            <div className="w-12 h-1 bg-white/20 rounded-full" />
                            <div className="w-12 h-1 bg-white/20 rounded-full" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
