import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDesk vs Yellow.ai - The On-Premise Alternative | 2026 Comparison',
    description: 'Yellow.ai is cloud-only. SwanDesk gives you true data sovereignty with air-gapped deployment. Compare deployment options, pricing, and features.',
    keywords: ['Yellow.ai Alternative', 'Yellow.ai vs SwanDesk', 'Sovereign Data AI', 'On-Premise Chatbot', 'Yellow.ai Pricing Comparison'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-yellow',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function VsYellowPage() {
    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="VS Yellow.ai"
                title="The On-Premise Alternative to Yellow.ai"
                subtitle="Yellow.ai is cloud-only. SwanDesk gives you true data sovereignty with air-gapped deployment."
                primaryCTA={{ text: "Book Comparison Demo", href: "/demo" }}
                secondaryCTA={{ text: "See Our Security", href: "/security" }}
            />

            {/* Comparison Badge */}
            <section className="bg-green-50 py-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
                        <div className="flex items-center gap-2 text-green-700">
                            <span>✅ Air-Gapped</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                            <span>✅ Flat Pricing</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                            <span>✅ Faster Go-Live</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* At-a-Glance Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Stack Up</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-slate-200 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="px-6 py-4 text-left font-semibold"></th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-400">SwanDesk</th>
                                    <th className="px-6 py-4 text-center font-semibold">Yellow.ai</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t bg-green-50">
                                    <td className="px-6 py-4 font-semibold">Data Sovereignty</td>
                                    <td className="px-6 py-4 text-center text-green-700 font-bold">✅ Air-gapped option</td>
                                    <td className="px-6 py-4 text-center text-red-600">❌ Cloud-only</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-semibold">Pricing Model</td>
                                    <td className="px-6 py-4 text-center text-green-700 font-bold">✅ Flat annual license</td>
                                    <td className="px-6 py-4 text-center text-orange-600">⚠️ Usage-based (unpredictable)</td>
                                </tr>
                                <tr className="border-t bg-slate-50">
                                    <td className="px-6 py-4 font-semibold">Deployment Time</td>
                                    <td className="px-6 py-4 text-center text-green-700 font-bold">✅ 21 days average</td>
                                    <td className="px-6 py-4 text-center text-orange-600">⚠️ 60+ days</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-semibold">On-Premise Option</td>
                                    <td className="px-6 py-4 text-center text-green-700 font-bold">✅ Full offline mode</td>
                                    <td className="px-6 py-4 text-center text-red-600">❌ Not available</td>
                                </tr>
                                <tr className="border-t bg-slate-50">
                                    <td className="px-6 py-4 font-semibold">Indian Data Centers</td>
                                    <td className="px-6 py-4 text-center text-green-700">✅ Mumbai-based</td>
                                    <td className="px-6 py-4 text-center text-green-700">✅ Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Deep Dive Differentiators */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Differentiators</h2>

                    {/* True Data Sovereignty */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg mb-8">
                        <h3 className="text-2xl font-bold mb-4">We Don't Just Host in India; We Host in *Your* Datacenter</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-red-600 mb-2">❌ Yellow.ai's Limitation</h4>
                                <p className="text-slate-700">Even with 'India hosting', your data still touches Yellow's global infrastructure.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-600 mb-2">✅ Our Advantage</h4>
                                <p className="text-slate-700">100% air-gapped deployment. Your data never leaves your perimeter.</p>
                            </div>
                        </div>
                        <Link href="/security" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700">
                            See Our Security Architecture →
                        </Link>
                    </div>

                    {/* Predictable Pricing */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg mb-8">
                        <h3 className="text-2xl font-bold mb-4">No More 'Token Tax' or Surprise Bills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-orange-600 mb-2">⚠️ Yellow.ai's Model</h4>
                                <p className="text-slate-700">Usage-based pricing means your bill grows with success.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-600 mb-2">✅ Our Model</h4>
                                <p className="text-slate-700">Flat annual license. Unlimited conversations.</p>
                            </div>
                        </div>
                        <Link href="/pricing" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700">
                            See Our Pricing →
                        </Link>
                    </div>

                    {/* Faster Implementation */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Go Live in Weeks, Not Months</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-orange-600 mb-2">⚠️ Yellow.ai Timeline</h4>
                                <p className="text-slate-700">Average 60-90 days for enterprise deployments</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-600 mb-2">✅ Our Timeline</h4>
                                <p className="text-slate-700 mb-4">21-day average (verified by customers)</p>
                                <p className="text-sm text-slate-600">
                                    Most SwanDesk implementations complete in 3 weeks, compared to Yellow.ai's typical 60-90 day enterprise deployment timeline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* When Yellow.ai Makes Sense */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Yellow.ai Might Be Right for You If...</h2>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>You need support in 135+ languages (we do 10+ Indian languages)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>You're already on Yellow's ecosystem and integration is seamless</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>You prefer pure cloud with no on-premise option</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-slate-600 italic">
                            We believe in transparency. Here are Yellow's strengths.
                        </p>
                    </div>
                </div>
            </section>

            {/* Migration Guide */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Switching from Yellow.ai? We Make It Easy.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">📤</div>
                            <h3 className="font-bold mb-2">Step 1</h3>
                            <p className="text-sm text-slate-600">Export conversation history</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">🧠</div>
                            <h3 className="font-bold mb-2">Step 2</h3>
                            <p className="text-sm text-slate-600">Retrain agents on our platform</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="font-bold mb-2">Step 3</h3>
                            <p className="text-sm text-slate-600">Parallel testing before cutover</p>
                        </div>
                    </div>
                    <div className="bg-green-100 border-2 border-green-300 rounded-xl p-6 text-center">
                        <p className="font-bold text-green-900">Zero downtime migration or your money back</p>
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/demo" className="text-blue-600 font-semibold hover:underline">
                            Request Migration Plan →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-6">
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Can I migrate from Yellow mid-contract?</summary>
                            <p className="mt-4 text-slate-700">Yes, we'll work with your timeline and can run in parallel during transition.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Will I lose my training data?</summary>
                            <p className="mt-4 text-slate-700">No, we can import your conversation history and training corpus.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How does pricing compare?</summary>
                            <p className="mt-4 text-slate-700">Generally 30-40% lower total cost of ownership (TCO) when accounting for scale.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">See SwanDesk vs Yellow.ai in Your Use Case</h2>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Book Comparison Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
