"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";

interface PhysicsSceneProps {
    onTriggerDashboard: () => void;
}

export default function PhysicsScene({ onTriggerDashboard }: PhysicsSceneProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
        >
            {/* Animated background blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="flex items-center justify-between px-8 md:px-12 py-6">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg"></div>
                        <span className="text-2xl font-bold text-white">Veridia AI</span>
                    </motion.div>

                    <motion.nav
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:flex gap-8 text-white/80"
                    >
                        <a href="#features" className="hover:text-white transition-colors cursor-pointer">Features</a>
                        <a href="#pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</a>
                        <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
                        <button className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                            Login
                        </button>
                    </motion.nav>
                </header>

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-8">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center max-w-5xl"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-white/90">Powered by Advanced AI</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            The Future of
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Intelligent Chatbots
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                            Experience next-generation AI conversations that understand context, sentiment, and intent.
                            Transform your customer engagement with Veridia's intelligent chatbot platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                onClick={onTriggerDashboard}
                                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Launch Dashboard
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                            >
                                Watch Demo
                            </motion.button>
                        </div>

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
                        >
                            <FeatureCard
                                icon={<Zap className="w-8 h-8" />}
                                title="Lightning Fast"
                                description="Instant responses powered by cutting-edge AI technology"
                                color="from-pink-500 to-rose-500"
                            />
                            <FeatureCard
                                icon={<Shield className="w-8 h-8" />}
                                title="Enterprise Security"
                                description="SOC 2 compliant with bank-level encryption"
                                color="from-blue-500 to-cyan-500"
                            />
                            <FeatureCard
                                icon={<BarChart3 className="w-8 h-8" />}
                                title="Advanced Analytics"
                                description="Real-time insights into customer conversations"
                                color="from-green-500 to-emerald-500"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}) {
    return (
        <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:border-white/20">
            <div className={`inline-flex p-3 bg-gradient-to-br ${color} rounded-xl mb-4 text-white`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/60 text-sm">{description}</p>
        </div>
    );
}
