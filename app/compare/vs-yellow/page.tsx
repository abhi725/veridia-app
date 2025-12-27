"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsYellowPage() {
    const comparisonRows = [
        { feature: "True On-Premise Deployment", veridia: true, competitor: false },
        { feature: "Data Sovereignty", veridia: "Full control", competitor: "Limited (VPC only)" },
        { feature: "Monthly Cost (Enterprise)", veridia: "Custom", competitor: "$8,000+" },
        { feature: "Air-Gapped Deployment", veridia: true, competitor: false },
        { feature: "ROI Calculator", veridia: true, competitor: true },
        { feature: "Agent Marketplace", veridia: true, competitor: false },
        { feature: "Voice AI", veridia: true, competitor: true },
        { feature: "WhatsApp Integration", veridia: true, competitor: true },
        { feature: "GDPR Compliance", veridia: true, competitor: true },
        { feature: "HIPAA Compliance", veridia: true, competitor: "Limited" },
        { feature: "Vendor Lock-in", veridia: "None (open standards)", competitor: "Yes" },
        { feature: "Self-Hosted Option", veridia: true, competitor: false }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Data Sovereignty Comparison"
                title="Veridia vs Yellow.ai"
                subtitle="True on-premise deployment vs cloud-only: Why regulated industries choose Veridia"
                primaryCTA={{ text: "See Security Details", href: "/security" }}
                secondaryCTA={{ text: "Book Demo", href: "/demo" }}
            />

            <ComparisonTable
                title="On-Premise vs Cloud Comparison"
                competitorName="Yellow.ai"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The On-Premise Difference</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏦 True Data Sovereignty</h3>
                            <p className="text-lg text-slate-700">
                                Yellow.ai offers a "dedicated VPC" but your data still lives in their cloud. With Veridia, your data never leaves your data center.
                            </p>
                            <p className="text-slate-600 mt-2">Critical for banking, healthcare, and government sectors</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🔒 Air-Gapped Deployment</h3>
                            <p className="text-lg text-slate-700">
                                Deploy in completely isolated networks with no internet connection. Impossible with cloud-only solutions like Yellow.ai.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🌍 No Vendor Lock-In</h3>
                            <p className="text-lg text-slate-700">
                                We use open standards and provide data export tools. Your conversation data, training models, and configurations are always yours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need True On-Premise?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Talk to our compliance team about air-gapped and on-premise options
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all inline-block">
                        Contact Security Team
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
