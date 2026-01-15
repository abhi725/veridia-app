import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pricing | SwanDigitals - AI Chatbot & Voice Plans for Indian Business',
    description: 'Simple, transparent pricing in INR. No setup fees. From free testing to enterprise on-premise deployment. Start free, scale as you grow.',
}

export default function PricingPage() {
    const plans = [
        {
            name: "Free",
            price: "₹0",
            period: "/month",
            description: "Testing & Hobby Projects",
            features: [
                { name: "Chatbots", value: "1 Bot" },
                { name: "Conversations", value: "100/month" },
                { name: "Channels", value: "Web Only" },
                { name: "Voice AI", value: false },
                { name: "Human Agents", value: false },
                { name: "Integrations", value: false },
                { name: "Deployment", value: "Shared Cloud" },
            ],
            cta: "Start Free",
            ctaLink: "/demo",
            highlighted: false
        },
        {
            name: "Starter",
            price: "₹1,999",
            period: "/month",
            description: "Small Business & Brokers",
            features: [
                { name: "Chatbots", value: "3 Bots" },
                { name: "Conversations", value: "2,000/month" },
                { name: "Channels", value: "Web + WhatsApp" },
                { name: "Voice AI", value: false },
                { name: "Human Agents", value: "1 Seat" },
                { name: "Integrations", value: "Google Sheets" },
                { name: "Deployment", value: "Shared Cloud" },
            ],
            cta: "Buy Now",
            ctaLink: "/contact",
            highlighted: false
        },
        {
            name: "Business",
            price: "₹7,999",
            period: "/month",
            description: "Growing Teams",
            features: [
                { name: "Chatbots", value: "Unlimited" },
                { name: "Conversations", value: "10,000/month" },
                { name: "Channels", value: "Web + WhatsApp + Voice" },
                { name: "Voice AI", value: "500 Mins" },
                { name: "Human Agents", value: "5 Seats" },
                { name: "Integrations", value: "CRM + Webhooks (n8n)" },
                { name: "Deployment", value: "Private Cloud" },
            ],
            cta: "Start Trial",
            ctaLink: "/demo",
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Banks & Large Organizations",
            features: [
                { name: "Chatbots", value: "Unlimited" },
                { name: "Conversations", value: "Unlimited" },
                { name: "Channels", value: "All Channels" },
                { name: "Voice AI", value: "Custom Limits" },
                { name: "Human Agents", value: "Unlimited Seats" },
                { name: "Integrations", value: "Custom ERP/CBS" },
                { name: "Deployment", value: "On-Premise / Your Server" },
            ],
            cta: "Contact Sales",
            ctaLink: "/contact",
            highlighted: false
        }
    ];

    const faqItems = [
        { question: "Is there a free plan?", answer: "Yes! Our Free plan gives you 1 chatbot and 100 conversations per month. Perfect for testing and hobby projects before you commit." },
        { question: "What counts as a conversation?", answer: "A conversation is a single chat session between a user and your bot. Sessions reset after 30 minutes of inactivity. Follow-up messages within the same session count as one conversation." },
        { question: "Can I upgrade or downgrade anytime?", answer: "Absolutely. Switch plans anytime from your dashboard. Upgrades take effect immediately, downgrades apply from your next billing cycle." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit/debit cards, UPI, and net banking. Enterprise customers can opt for invoice-based billing." },
        { question: "Do you offer annual discounts?", answer: "Yes, pay annually and save 20%. Enterprise customers get custom pricing based on their specific requirements." },
        { question: "What's included in Enterprise?", answer: "Enterprise includes on-premise deployment on your own servers, custom integrations with your ERP/CBS systems, unlimited everything, dedicated support, and SLA guarantees." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="Simple Pricing"
                title="Plans That Grow With Your Business"
                subtitle="Start free. No credit card required. Upgrade when you're ready."
                primaryCTA={{ text: "Start Free", href: "/demo" }}
                secondaryCTA={{ text: "Talk to Sales", href: "/contact" }}
            />

            {/* Pricing Cards */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${plan.highlighted ? 'border-orange-500 relative' : 'border-slate-200'}`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        POPULAR
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                                    <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                        <span className="text-slate-500 ml-1">{plan.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            {feature.value === false ? (
                                                <>
                                                    <X className="w-4 h-4 text-slate-300 mr-2 flex-shrink-0" />
                                                    <span className="text-slate-400">{feature.name}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                    <span className="text-slate-700">{feature.name}: <strong>{feature.value}</strong></span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={plan.ctaLink}
                                    className={`block text-center py-3 px-4 rounded-lg font-semibold transition-all ${plan.highlighted
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Full Feature Comparison</h2>
                    <p className="text-slate-600 text-center mb-12">See exactly what you get with each plan</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Feature</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Free</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Starter</th>
                                    <th className="text-center py-4 px-4 font-semibold text-orange-600 bg-orange-50">Business</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Monthly Cost</td>
                                    <td className="py-3 px-4 text-center">₹0</td>
                                    <td className="py-3 px-4 text-center">₹1,999</td>
                                    <td className="py-3 px-4 text-center bg-orange-50 font-semibold">₹7,999</td>
                                    <td className="py-3 px-4 text-center">Custom</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Chatbots</td>
                                    <td className="py-3 px-4 text-center">1</td>
                                    <td className="py-3 px-4 text-center">3</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Unlimited</td>
                                    <td className="py-3 px-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Conversations</td>
                                    <td className="py-3 px-4 text-center">100/mo</td>
                                    <td className="py-3 px-4 text-center">2,000/mo</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">10,000/mo</td>
                                    <td className="py-3 px-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Channels</td>
                                    <td className="py-3 px-4 text-center">Web</td>
                                    <td className="py-3 px-4 text-center">Web + WhatsApp</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Web + WhatsApp + Voice</td>
                                    <td className="py-3 px-4 text-center">All Channels</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Voice AI (Calls)</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center bg-orange-50">500 Mins</td>
                                    <td className="py-3 px-4 text-center">Custom</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Human Agents</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center">1 Seat</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">5 Seats</td>
                                    <td className="py-3 px-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Integrations</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center">Google Sheets</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">CRM + Webhooks</td>
                                    <td className="py-3 px-4 text-center">Custom ERP/CBS</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Deployment</td>
                                    <td className="py-3 px-4 text-center">Shared Cloud</td>
                                    <td className="py-3 px-4 text-center">Shared Cloud</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Private Cloud</td>
                                    <td className="py-3 px-4 text-center">On-Premise</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-white/80 mb-8">Start free today. No credit card needed. Upgrade when you're ready.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all">
                            Start Free
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
