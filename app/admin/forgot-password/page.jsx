'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { ChevronLeft, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleResetRequest = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/admin/reset-password`,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Password reset link sent! Check your inbox.");
        }
        setLoading(false);
    };

    return (
        <div className="h-screen bg-white flex font-primary overflow-hidden">
            {/* Left Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-24 py-12 relative z-10">
                <Reveal y={20}>
                    <div className="mb-10">
                        <Link 
                            href="/admin/login" 
                            className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold text-[14px] mb-12 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Login
                        </Link>
                        <h1 className="text-[32px] md:text-[44px] font-black text-black leading-tight tracking-[-1px] mb-4">
                            Forgot <br />Password?
                        </h1>
                        <p className="text-black/50 font-medium text-[16px]">
                            Enter your email and we'll send you a cinematic recovery link.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2} y={30}>
                    <form onSubmit={handleResetRequest} className="flex flex-col gap-8 max-w-[440px]">
                        <div className="relative group">
                            <label className="block text-black/40 text-[13px] font-bold uppercase tracking-widest mb-3 ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20 group-focus-within:text-black transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@nanosocials.com"
                                    required
                                    className="w-full bg-[#f3f4f6] border-none rounded-2xl px-16 py-5 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/20"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white h-16 rounded-2xl text-[16px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFD600] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden shadow-xl group"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Send Reset Link
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                    <p className="mt-12 text-black/40 text-[14px] font-medium">
                        Remember your password? <Link href="/admin/login" className="text-black font-black hover:underline">Log in</Link>
                    </p>
                </Reveal>
            </div>

            {/* Right Side: Image Content */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/IMG_4614.jpg"
                    alt="Creators"
                    fill
                    className="object-cover scale-110 blur-[2px]"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-center p-20 text-white text-center">
                    <Reveal delay={0.5} y={40}>
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-10">
                            <Mail className="w-10 h-10 text-[#FFD600]" />
                        </div>
                        <h2 className="text-[32px] font-black mb-6">Security Check.</h2>
                        <p className="text-[20px] font-medium leading-[1.6] opacity-80 max-w-[500px] mx-auto italic">
                            "Authentication is the gateway to your cinematic management dashboard. We ensure your access is as secure as our storytelling."
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
