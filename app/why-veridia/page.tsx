"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Award, Zap, Shield, DollarSign, Clock, Code } from 'lucide-react';
import Link from 'next/link';

export default function WhyVeridiaPage() {
    const advantages = [
        { icon: <Zap className="w-6 h-6" />, title: "10x Faster Deployment", description: "Go live in 2-4 weeks while competitors take 3-6 months. Pre-built templates accelerate every project." },
        { icon: <DollarSign className="w-6 h-6" />, title: "60% Lower TCO", description: "No setup fees, no expensive consultants, no annual contracts. Enterprise features at startup prices." },
        { icon: <Shield className="w-6 h-6" />, title: "True On-Premise", description: "Unlike Yellow.ai's cloud-only VPCs, deploy entirely in your own data center with zero external dependencies." },
        { icon: <Code className="w-6 h-6" />, title: "Modern Tech Stack", description: "Built on Gemini AI and modern frameworks. IBM's legacy Watson can't match our innovation speed." },
        { icon: <Clock className="w-6 h-6" />, title: "No-Code & Pro-Code", description: "Business users build with no-code. Developers customize with full API access. Best of both worlds." },
        { icon: <Award className="w-6 h-6" />, title: "90% Automation Rate", description: "Our customers achieve industry-leading automation, higher than any competitor's published benchmarks." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="⭐ Why Choose Veridia"
                title="Built to Win Against the Giants"
                subtitle="We studied Kore.ai, Yellow.ai, IBM watsonx, and Cognigy. Then we built something better. Here's exactly why companies choose us."
                primaryCTA={{ text: "See the Difference", href: "/demo" }}
                secondaryCTA={{ text: "View Comparisons", href: "/compare/vs-kore" }}
            />

            {/* Core Advantages */}
            <FeatureGrid features={advantages} />

            {/* Competitor Comparison Summary */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Stack Up</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="px-6 py-4 text-left font-semibold">Factor</th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">Veridia</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Yellow.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">IBM</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Deployment Time</td><td className="px-6 py-3 text-center text-green-600 font-bold">2-4 weeks</td><td className="px-6 py-3 text-center">3-6 months</td><td className="px-6 py-3 text-center">4-8 weeks</td><td className="px-6 py-3 text-center">6-12 months</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Starting Price</td><td className="px-6 py-3 text-center text-green-600 font-bold">$499/mo</td><td className="px-6 py-3 text-center">$5,000+/mo</td><td className="px-6 py-3 text-center">$3,000+/mo</td><td className="px-6 py-3 text-center">$10,000+/mo</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">True On-Premise</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">✅</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">No-Code Builder</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">Limited</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Modern AI (Gemini/GPT-4)</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">⚠️</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Setup Fees</td><td className="px-6 py-3 text-center text-green-600 font-bold">$0</td><td className="px-6 py-3 text-center">$10,000+</td><td className="px-6 py-3 text-center">$5,000+</td><td className="px-6 py-3 text-center">$50,000+</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Annual Contract Required</td><td className="px-6 py-3 text-center text-green-600 font-bold">No</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Individual Comparisons */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Detailed Competitor Comparisons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/compare/vs-kore" className="p-8 border-2 border-orange-200 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600">vs Kore.ai</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ 10x faster deployment</li>
                                <li>✅ 60% lower cost</li>
                                <li>✅ Simpler no-code builder</li>
                            </ul>
                            <span className="text-orange-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-yellow" className="p-8 border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">vs Yellow.ai</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ True on-premise (not VPC)</li>
                                <li>✅ Full data sovereignty</li>
                                <li>✅ No vendor lock-in</li>
                            </ul>
                            <span className="text-blue-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-ibm" className="p-8 border-2 border-purple-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600">vs IBM watsonx</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Modern AI (Gemini vs Watson)</li>
                                <li>✅ 1/5th the cost</li>
                                <li>✅ Developer-first APIs</li>
                            </ul>
                            <span className="text-purple-600 font-semibold">See full comparison →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        "We evaluated all four major platforms. Veridia was live before the others finished their demos."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 text-lg">Michael Chen</div>
                            <div className="text-slate-600">VP of Digital, GlobalRetail Inc.</div>
                        </div>
                    </div>
                    <Link href="/case-studies" className="text-orange-600 font-semibold hover:underline">
                        Read more customer stories →
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See the Veridia Difference?</h2>
                    <p className="text-xl text-white/80 mb-8">Get a personalized comparison based on your specific requirements</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Your Custom Comparison
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
