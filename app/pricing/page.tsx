import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import PricingTable from '@/components/ui/PricingTable';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Enterprise Chatbot Pricing | No Setup Fees | Veridia',
    description: 'Transparent AI chatbot pricing. No setup fees, no hidden costs. Starter plans from $499/mo. Enterprise options with on-premise deployment. Get a quote today.',
}

export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            price: "$499",
            description: "For small teams getting started with AI chatbots",
            features: [
                "Up to 5,000 conversations/month",
                "1 chatbot",
                "3 team members",
                "Web chat deployment",
                "Basic analytics",
                "Email support",
                "99% uptime SLA"
            ],
            highlighted: false
        },
        {
            name: "Professional",
            price: "$1,999",
            description: "For growing businesses with serious support needs",
            features: [
                "Up to 50,000 conversations/month",
                "5 chatbots",
                "10 team members",
                "Omnichannel (Web, WhatsApp, Slack)",
                "Advanced analytics & reports",
                "Priority support (4hr response)",
                "99.9% uptime SLA",
                "API access",
                "Custom integrations"
            ],
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations with complex requirements",
            features: [
                "Unlimited conversations",
                "Unlimited chatbots",
                "Unlimited team members",
                "All channels + voice",
                "Custom AI training",
                "Dedicated account manager",
                "24/7 phone support",
                "99.99% uptime SLA",
                "On-premise deployment",
                "SSO/SAML integration",
                "Custom SLAs",
                "Compliance (HIPAA, PCI, SOC 2)"
            ],
            highlighted: false
        }
    ];

    const faqItems = [
        { question: "Is there a free trial?", answer: "Yes! Start with a 14-day free trial on any plan. No credit card required. You'll get full access to all features so you can properly evaluate the platform." },
        { question: "What counts as a conversation?", answer: "A conversation is a single interaction session between a user and your chatbot. A session ends after 30 minutes of inactivity. Follow-up messages within the same session count as one conversation." },
        { question: "Can I change plans anytime?", answer: "Yes, you can upgrade or downgrade at any time. When upgrading, you'll be prorated for the remaining billing period. When downgrading, changes take effect at the next billing cycle." },
        { question: "Is there a setup fee?", answer: "No! Unlike Kore.ai and IBM watsonx which charge $10,000-$50,000 in setup fees, Veridia has zero setup costs on any plan." },
        { question: "Do you require annual contracts?", answer: "No. All plans are month-to-month with no long-term commitment. Enterprise customers can opt for annual billing at a 20% discount." },
        { question: "What's included in enterprise pricing?", answer: "Enterprise pricing is customized based on volume, deployment type (cloud/on-premise), and support requirements. Contact us for a quote tailored to your needs." }
    ];

    const comparisonData = [
        { feature: "Starting Price", veridia: "$499/mo", kore: "$5,000+/mo", yellow: "$3,000+/mo" },
        { feature: "Setup Fee", veridia: "$0", kore: "$10,000+", yellow: "$5,000+" },
        { feature: "Annual Contract", veridia: "No", kore: "Yes", yellow: "Yes" },
        { feature: "Free Trial", veridia: "14 days", kore: "Demo only", yellow: "Limited" },
        { feature: "On-Premise", veridia: "Included", kore: "Add-on", yellow: "Not available" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💰 Transparent Pricing"
                title="Transparent Enterprise Pricing with Zero Setup Fees"
                subtitle="No hidden fees. No setup costs. No long-term contracts. Start free and scale as you grow."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "Contact Sales", href: "/contact" }}
            />

            {/* Pricing Table */}
            <PricingTable plans={plans} />

            {/* Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
                    <p className="text-xl text-slate-600 text-center mb-12">60% lower total cost than competitors</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="px-6 py-4 text-left font-semibold">Pricing Factor</th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">Veridia</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Yellow.ai</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'border-t' : 'border-t bg-slate-50'}>
                                        <td className="px-6 py-3 font-medium">{row.feature}</td>
                                        <td className="px-6 py-3 text-center text-green-600 font-bold">{row.veridia}</td>
                                        <td className="px-6 py-3 text-center">{row.kore}</td>
                                        <td className="px-6 py-3 text-center">{row.yellow}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What's Included in Every Plan</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "No-code builder", "Pre-built templates", "Knowledge base", "Live chat handoff",
                            "Analytics dashboard", "Multi-language", "API access", "Webhooks",
                            "SSL encryption", "GDPR compliant", "Data export", "Email support"
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm">
                                <span className="text-green-600 mr-2">✓</span>{feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator Link */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
                    <p className="text-xl text-white/90 mb-8">See how much you can save with Veridia AI automation</p>
                    <Link href="/roi-calculator" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all">
                        Open ROI Calculator →
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-white/80 mb-8">Start your 14-day free trial today. No credit card required.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
