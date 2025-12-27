"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Cloud, Server, Laptop, Shield, Zap, Lock } from 'lucide-react';

export default function DeploymentPage() {
    const options = [
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud (SaaS)",
            desc: "Multi-tenant cloud hosted on AWS, Azure, or GCP. Fastest deployment.",
            color: "blue",
            features: ["Deploy in hours", "Auto-scaling", "Managed updates", "99.9% SLA"],
            bestFor: "Most businesses, startups, fast deployment"
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "On-Premise",
            desc: "Deploy entirely in your data center. Full data control.",
            color: "orange",
            features: ["Full data sovereignty", "Your security policies", "Air-gapped option", "100% control"],
            bestFor: "Banks, healthcare, government, regulated industries"
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Hybrid",
            desc: "AI in cloud, sensitive data on-premise. Best of both worlds.",
            color: "purple",
            features: ["Flexible architecture", "Data locality", "Cloud AI power", "Compliance-friendly"],
            bestFor: "Enterprise with mixed requirements"
        }
    ];

    const regions = [
        { name: "US East", location: "Virginia", provider: "AWS" },
        { name: "US West", location: "Oregon", provider: "AWS" },
        { name: "EU West", location: "Ireland", provider: "AWS" },
        { name: "EU Central", location: "Frankfurt", provider: "Azure" },
        { name: "Asia Pacific", location: "Singapore", provider: "GCP" },
        { name: "Australia", location: "Sydney", provider: "AWS" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🚀 Deployment Options"
                title="Deploy Your Way"
                subtitle="Cloud, on-premise, or hybrid. Deploy in hours, not months. Unlike Yellow.ai, we offer true on-premise deployment."
                primaryCTA={{ text: "Discuss Deployment", href: "/demo" }}
                secondaryCTA={{ text: "View Security", href: "/security" }}
            />

            {/* Deployment Options */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Choose Your Deployment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {options.map((opt, i) => (
                            <div key={i} className={`p-8 rounded-2xl border-2 ${opt.color === 'orange' ? 'border-orange-300 bg-orange-50' : 'border-slate-200 bg-white'
                                }`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${opt.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                        opt.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                                            'bg-purple-100 text-purple-600'
                                    }`}>
                                    {opt.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{opt.title}</h3>
                                <p className="text-slate-600 mb-6">{opt.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {opt.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm">
                                            <span className="text-green-600">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-sm text-slate-500">
                                    <span className="font-semibold">Best for:</span> {opt.bestFor}
                                </div>
                                {opt.color === 'orange' && (
                                    <div className="mt-4 text-xs text-orange-600 font-semibold">⭐ Most Popular for Enterprises</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Regions */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Global Cloud Regions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {regions.map((region, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm">
                                <div className="font-bold">{region.name}</div>
                                <div className="text-sm text-slate-500">{region.location}</div>
                                <div className="text-xs text-slate-400 mt-1">{region.provider}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA & Security */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Infrastructure & Security</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">99.9% Uptime SLA</h3>
                            <p className="text-slate-600 text-sm">Enterprise SLA with guaranteed uptime and financial credits</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">SOC 2 & GDPR</h3>
                            <p className="text-slate-600 text-sm">Certified compliance with major security standards</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Data Encryption</h3>
                            <p className="text-slate-600 text-sm">AES-256 at rest, TLS 1.3 in transit</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Not Sure Which Deployment Is Right?</h2>
                    <p className="text-xl text-white/80 mb-8">Our team will help you choose the best option for your needs</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
