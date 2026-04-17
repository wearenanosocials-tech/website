'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { Lock, CheckCircle, Eye, EyeOff, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Check if we are in a recovery flow
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                // If no session, they might have landed here by accident or link expired
                // In a real local dev env, clicking the link in the email terminal should set the session
            }
        };
        checkSession();
    }, []);

    const handleReset = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) {
            toast.error(error.message);
        } else {
            setSuccess(true);
            toast.success("Password updated successfully!");
            setTimeout(() => {
                router.push('/admin/login');
            }, 3000);
        }
        setLoading(false);
    };

    if (success) {
        return (
            <div className="h-screen bg-white flex items-center justify-center p-6 text-center">
                <Reveal y={20}>
                    <div className="max-w-[400px]">
                        <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-10">
                            <CheckCircle className="w-12 h-12 text-emerald-600" />
                        </div>
                        <h1 className="text-[32px] font-black text-black leading-tight mb-4">Password reset complete!</h1>
                        <p className="text-black/50 font-medium mb-12">
                            Your password has been updated. You'll be redirected to the login page shortly.
                        </p>
                        <button 
                            onClick={() => router.push('/admin/login')}
                            className="w-full bg-black text-white h-16 rounded-2xl font-black uppercase tracking-wider hover:bg-[#FFD600] hover:text-black transition-all"
                        >
                            Go to Login
                        </button>
                    </div>
                </Reveal>
            </div>
        );
    }

    return (
        <div className="h-screen bg-white flex font-primary overflow-hidden">
            {/* Left Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-24 py-12 relative z-10">
                <Reveal y={20}>
                    <div className="mb-12">
                        <h1 className="text-[32px] md:text-[44px] font-black text-black leading-tight tracking-[-1px] mb-4">
                            New <br />Password.
                        </h1>
                        <p className="text-black/50 font-medium text-[16px]">
                            Ensure your new password is secure and cinematic.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2} y={30}>
                    <form onSubmit={handleReset} className="flex flex-col gap-6 max-w-[440px]">
                        <div className="relative">
                            <label className="block text-black/40 text-[13px] font-bold uppercase tracking-widest mb-3 ml-1">
                                New Password
                            </label>
                            <div className="relative">
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
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20 hover:text-black transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-black/40 text-[13px] font-bold uppercase tracking-widest mb-3 ml-1">
                                Confirm New Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full bg-black text-white h-16 rounded-2xl text-[16px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFD600] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Update Password
                                </>
                            )}
                        </button>
                    </form>
                </Reveal>
            </div>

            {/* Right Side: Image Content */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <Image
                    src="/IMG_4614.jpg"
                    alt="Reset"
                    fill
                    className="object-cover h-full"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
                    <Reveal delay={0.5} y={40}>
                        <div className="w-16 h-16 rounded-2xl bg-[#FFD600] text-black flex items-center justify-center mb-10 shadow-2xl">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h2 className="text-[40px] font-black mb-6 leading-tight">Secure Your <br />Dashboard.</h2>
                        <p className="text-[20px] font-medium leading-[1.6] opacity-80 max-w-[500px] italic">
                            "A strong password is the foundation of cinematic management. Protect your creator ecosystem with authentic security."
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
