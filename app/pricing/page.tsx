import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Check, X, Zap, Gift, BadgePercent, MessageSquare, Phone, Users, Shield, Building2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pricing | SwanDigitals - AI Chatbot & Voice Plans for Indian Business',
    description: 'Flexible pricing for AI chatbot and voice solutions. From pilot programs to enterprise on-premise deployment. Contact us for a custom quote.',
}

export default function PricingPage() {
    const plans = [
        {
            name: "Pilot / PoV",
            price: "₹10,000",
            originalPrice: "₹12,500",
            period: "one-time",
            description: "SMBs & Mid-Market Proof-of-Value",
            duration: "4-6 weeks",
            features: [
                { name: "Flows", value: "Up to 3" },
                { name: "Channels", value: "WhatsApp + Web" },
                { name: "Human Agents", value: "2 Seats" },
                { name: "Conversations", value: "2,000 OR 5hr Voice" },
                { name: "Setup Time", value: "1 Week Fast Setup" },
                { name: "Pilot Credit", value: "Refundable against first 3 months" },
            ],
            cta: "Start Pilot",
            ctaLink: "/demo",
            highlighted: false,
            badge: "LOW RISK",
            icon: <Zap className="w-8 h-8" />
        },
        {
            name: "Growth",
            price: "₹12,000",
            originalPrice: "₹15,000",
            period: "/month",
            setupFee: "₹20,000 one-time setup",
            description: "Growing SMB Teams",
            features: [
                { name: "Conversations", value: "10k WhatsApp OR 1k Voice Mins" },
                { name: "Channels", value: "Web + WhatsApp + Voice" },
                { name: "Human Agents", value: "5 Seats (Unified Inbox)" },
                { name: "Dashboards", value: "Basic Analytics" },
                { name: "Integrations", value: "2 Included" },
                { name: "Overage", value: "Pass-through + 10% Platform fee" },
            ],
            cta: "Get Started",
            ctaLink: "/contact",
            highlighted: false,
            badge: null,
            icon: <MessageSquare className="w-8 h-8" />
        },
        {
            name: "Professional",
            price: "₹28,000",
            originalPrice: "₹35,000",
            period: "/month",
            setupFee: "₹40,000 one-time setup",
            description: "Mid-Market Operations",
            features: [
                { name: "Conversations", value: "30k OR 5k Voice Mins" },
                { name: "Voice AI", value: "Native Voice AI" },
                { name: "Human Agents", value: "Unlimited Seats" },
                { name: "Logic Engine", value: "Advanced Workflows" },
                { name: "Year-1 Bonus", value: "1 Free Integration OR 10hrs Custom" },
                { name: "Deployment", value: "Private Cloud" },
            ],
            cta: "Start Trial",
            ctaLink: "/demo",
            highlighted: true,
            badge: "MOST POPULAR",
            icon: <Phone className="w-8 h-8" />
        },
        {
            name: "Enterprise Plan",
            price: null,
            description: "Enterprise On-Premise",
            features: [
                { name: "Deployment", value: "On-Prem / Your Server" },
                { name: "Conversations", value: "Unlimited" },
                { name: "Support", value: "Named CSM + SLA" },
                { name: "Security", value: "SSO + Governance Onboarding" },
                { name: "Multi-Year", value: "10-20% Discount Available" },
                { name: "Annual Support", value: "Included" },
            ],
            cta: "Contact Sales",
            ctaLink: "/contact",
            highlighted: false,
            badge: "ENTERPRISE",
            icon: <Building2 className="w-8 h-8" />
        }
    ];

    const discountRules = [
        {
            icon: <Gift className="w-6 h-6 text-orange-500" />,
            title: "Pilot → Convert Credit",
            description: "Full pilot fee refund if you sign a 12-month contract"
        },
        {
            icon: <BadgePercent className="w-6 h-6 text-orange-500" />,
            title: "Multi-Year Discounts",
            description: "10-20% off for 2-3 year Enterprise commitments"
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-500" />,
            title: "Volume-Based Discounts",
            description: "Tied to committed conversations, minutes, or integrations"
        }
    ];

    const faqItems = [
        { question: "What is the Pilot / PoV tier?", answer: "Our Pilot tier is a low-risk entry point for businesses wanting to test SwanDigitals before committing. It includes up to 3 flows, 2 channels (WhatsApp + Web), 2 human agent seats, and up to 2,000 conversations OR 5 hours of voice equivalent. Setup takes just 1 week. If you convert to a paid plan within 3 months, the pilot fee is refunded!" },
        { question: "How does pricing work?", answer: "We offer flexible, custom pricing based on your specific needs. Contact our sales team for a personalized quote that matches your conversation volume, channels, and deployment requirements." },
        { question: "How does the pilot credit refund work?", answer: "If you sign a 12-month contract within 3 months of completing your pilot, we'll credit your full pilot payment towards your subscription. This gives you a risk-free way to evaluate SwanDigitals." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit/debit cards, UPI, and net banking. Enterprise customers can opt for invoice-based billing with NET30 terms." },
        { question: "What's included in the Enterprise Plan?", answer: "Enterprise Plan is our full-featured tier for large organizations. It includes on-premise or managed private cloud deployment, unlimited everything, a named Customer Success Manager, SLA guarantees, SSO integration, and governance onboarding. Multi-year licensing discounts of 10-20% are available." },
        { question: "Do you offer a channel/partner SKU?", answer: "Yes! For partners and resellers serving price-sensitive SMB/D2C customers, we offer a white-label Channel SKU with adjusted SLAs. Contact our partnership team for details." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💼 Flexible Pricing"
                title="Plans That Grow With Your Business"
                subtitle="Start with a low-risk pilot. No annual lock-in. Upgrade when you're ready. Contact us for custom pricing."
                primaryCTA={{ text: "Start Pilot", href: "/demo" }}
                secondaryCTA={{ text: "Talk to Sales", href: "/contact" }}
            />

            {/* Pricing Cards */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Plan</h2>
                        <p className="text-lg text-slate-600">Contact us for custom pricing tailored to your needs</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${plan.highlighted ? 'border-orange-500 relative' : 'border-slate-200'}`}
                            >
                                {plan.badge && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full ${plan.highlighted ? 'bg-orange-500' : plan.badge === 'LOW RISK' ? 'bg-green-500' : 'bg-slate-700'}`}>
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="text-center mb-6 pt-2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                                    {(plan as any).price ? (
                                        <div className="my-3">
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-3xl font-bold text-slate-900">{(plan as any).price}</span>
                                                <span className="text-sm text-slate-500">{(plan as any).period}</span>
                                            </div>
                                            {(plan as any).originalPrice && (
                                                <p className="text-sm text-slate-400 line-through">{(plan as any).originalPrice}</p>
                                            )}
                                            {(plan as any).setupFee && (
                                                <p className="text-xs text-slate-500 mt-1">+ {(plan as any).setupFee}</p>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="my-3">
                                            <span className="text-2xl font-bold text-slate-900">Custom Pricing</span>
                                            <p className="text-sm text-slate-500">Tailored to your needs</p>
                                        </div>
                                    )}
                                    <p className="text-sm text-slate-500 mb-2">{plan.description}</p>
                                    {plan.duration && (
                                        <p className="text-xs text-orange-600 font-medium">{plan.duration}</p>
                                    )}
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-slate-700">{feature.name}: <strong>{feature.value}</strong></span>
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

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Why SwanDigitals?</h2>
                    <p className="text-slate-600 text-center mb-12">Enterprise features at competitive prices</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">100% Data Sovereignty</h3>
                            <p className="text-slate-600">On-premise or private cloud. Your data never leaves your control.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Native Voice AI</h3>
                            <p className="text-slate-600">Phone conversations with &lt;500ms latency. No add-ons required.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                            <p className="text-slate-600">Named CSM for Enterprise. Fast response times across all plans.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discounting Rules */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Smart Discounting</h2>
                    <p className="text-slate-600 text-center mb-12">We reward commitment, not negotiation</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {discountRules.map((rule, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {rule.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{rule.title}</h3>
                                <p className="text-slate-600 text-sm">{rule.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Feature Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Full Feature Comparison</h2>
                    <p className="text-slate-600 text-center mb-12">See exactly what you get with each plan</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Feature</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Pilot</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Growth</th>
                                    <th className="text-center py-4 px-4 font-semibold text-orange-600 bg-orange-50">Professional</th>
                                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">WhatsApp Conversations</td>
                                    <td className="py-3 px-4 text-center">2,000</td>
                                    <td className="py-3 px-4 text-center">10,000/mo</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">30,000/mo</td>
                                    <td className="py-3 px-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Voice Minutes</td>
                                    <td className="py-3 px-4 text-center">5 hours</td>
                                    <td className="py-3 px-4 text-center">1,000/mo</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">5,000/mo</td>
                                    <td className="py-3 px-4 text-center">Custom</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Channels</td>
                                    <td className="py-3 px-4 text-center">WhatsApp + Web</td>
                                    <td className="py-3 px-4 text-center">Web + WhatsApp + Voice</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">All Channels</td>
                                    <td className="py-3 px-4 text-center">All Channels</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Human Agents</td>
                                    <td className="py-3 px-4 text-center">2 Seats</td>
                                    <td className="py-3 px-4 text-center">5 Seats</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Unlimited</td>
                                    <td className="py-3 px-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Integrations</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center">2</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Unlimited + 1 Free Custom</td>
                                    <td className="py-3 px-4 text-center">Custom ERP/CBS</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Deployment</td>
                                    <td className="py-3 px-4 text-center">Shared Cloud</td>
                                    <td className="py-3 px-4 text-center">Shared Cloud</td>
                                    <td className="py-3 px-4 text-center bg-orange-50">Private Cloud</td>
                                    <td className="py-3 px-4 text-center">On-Premise</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Named CSM</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center bg-orange-50"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">SLA Guarantee</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center bg-orange-50">99.5%</td>
                                    <td className="py-3 px-4 text-center">99.9%+</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Native Voice AI</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center bg-orange-50"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Advanced Analytics</td>
                                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center">Basic</td>
                                    <td className="py-3 px-4 text-center bg-orange-50"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SMB Channel Partner Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">For Partners & Resellers</h2>
                    <p className="text-lg text-white/80 mb-6">
                        White-label reseller SKU available for D2C/SMB volume.
                        Restricted SLAs, no on-prem guarantee. Preserve your margins.
                    </p>
                    <Link href="/partners" className="inline-block px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all">
                        Become a Partner
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-white/80 mb-8">Start with a low-risk pilot. Refundable if you convert within 3 months.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all">
                            Start Pilot Program
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
