import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import FAQ from '@/components/ui/FAQ';
import { Headphones, TrendingUp, Clock, Users, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Automate 90% of Customer Support | SwanDigitals',
    description: 'Slash support costs by 60% with Sovereign AI Agents. Instant 24/7 responses, ticket deflection, and seamless human handoff. Hosted in India.',
    keywords: ['Customer Service Automation', 'Support Ticket Deflection', '24/7 AI Agent', 'Omni-channel Support', 'Whatsapp Customer Support Bot'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/customer-service',
    },
}

export default function CustomerServicePage() {
    const benefits = [
        { icon: <Headphones className="w-6 h-6" />, title: "Up to 90% Ticket Automation", description: "Resolve most customer queries without human intervention using AI-powered responses." },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Improved CSAT", description: "Faster resolution times and 24/7 availability typically improve customer satisfaction by 30-50%." },
        { icon: <Clock className="w-6 h-6" />, title: "< 2 Second Response", description: "Instant responses powered by edge computing and optimized AI models." },
        { icon: <Users className="w-6 h-6" />, title: "Seamless Handoff", description: "Smart routing transfers complex issues to the right agent with full context." },
        { icon: <Zap className="w-6 h-6" />, title: "Significant Cost Savings", description: "Reduce operational costs by automating repetitive queries and lowering agent workload." },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Real-Time Analytics", description: "Track resolution rates, sentiment, and identify improvement opportunities." }
    ];

    const faqItems = [
        { question: "How does SwanDesk handle complex queries?", answer: "Our AI uses multi-turn conversation management and context retention to handle complex queries. When needed, it seamlessly hands off to human agents with full conversation history." },
        { question: "Can it integrate with our existing helpdesk?", answer: "Yes! We have pre-built integrations with Zendesk, Freshdesk, Salesforce Service Cloud, Intercom, and 50+ other platforms. Custom integrations are also available." },
        { question: "What languages are supported?", answer: "SwanDesk supports English, Hindi, Tamil, Telugu, Bengali, Marathi, and Hinglish with native NLU — not just translation." },
        { question: "How long does implementation take?", answer: "Most customer service deployments go live in 2-4 weeks, including training and integration." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎧 Customer Service Automation"
                title="Automate Customer Service & Slash Costs by 60%"
                subtitle="Automate 90% of customer queries with AI that truly understands. Enterprise-grade, on-premise deployment for regulated industries."
                primaryCTA={{ text: "See Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Stats Section - Like Yellow.ai */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">Up to 90%</div>
                            <div className="text-slate-600">Automation Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">30-60%</div>
                            <div className="text-slate-600">Cost Reduction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">30-50%</div>
                            <div className="text-slate-600">CSAT Improvement</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">&lt;2s</div>
                            <div className="text-slate-600">Response Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Customer Service Challenges We Solve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { challenge: "High support ticket volume overwhelming agents", solution: "Automate 90% of repetitive queries" },
                            { challenge: "Long wait times frustrating customers", solution: "Instant 24/7 AI-powered responses" },
                            { challenge: "Inconsistent answers across agents", solution: "Unified knowledge base with AI consistency" },
                            { challenge: "Rising support costs eroding margins", solution: "60% cost reduction through automation" },
                            { challenge: "Lack of after-hours support", solution: "24/7 availability without hiring night shifts" },
                            { challenge: "Poor visibility into customer sentiment", solution: "Real-time sentiment analysis and alerts" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="text-red-500 font-medium mb-2">❌ {item.challenge}</div>
                                <div className="text-green-600 font-medium">✅ {item.solution}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <FeatureGrid features={benefits} />

            {/* What Customer Service Teams Typically Automate */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="text-sm text-orange-600 font-semibold mb-2">WHAT TEAMS AUTOMATE</div>
                        <h3 className="text-2xl font-bold mb-4">Common Use Cases for Customer Service AI</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {[
                                "Order status and tracking inquiries",
                                "Password resets and account access",
                                "FAQ and product information",
                                "Refund and return requests",
                                "Appointment scheduling",
                                "Billing and payment questions"
                            ].map((useCase, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-700">
                                    <span className="text-green-500">✓</span>
                                    {useCase}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600 text-sm">
                            Most teams see 60-80% automation within the first 3 months. Results vary based on query complexity and training data quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Works With Your Existing Tools</h2>
                    <p className="text-xl text-slate-600 mb-12">Pre-built integrations with leading helpdesk and CRM platforms</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'Zendesk', image: '/integrations/zendesk.png' },
                            { name: 'Freshdesk', image: '/integrations/freshdesk.png' },
                            { name: 'Salesforce', image: '/integrations/salesforce.png' },
                            { name: 'Intercom', image: '/integrations/intercom_new.png' },
                            { name: 'HubSpot', image: '/integrations/hubspot.png' },
                            { name: 'ServiceNow', image: '/integrations/servicenow.png' }
                        ].map((tool, i) => (
                            <div key={i} className="p-4 bg-white border border-slate-200 shadow-sm rounded-xl flex flex-col items-center justify-center gap-2 h-24 hover:shadow-md transition-all">
                                <div className="h-10 w-full flex items-center justify-center">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="text-xs font-medium text-slate-600">{tool.name}</div>
                            </div>
                        ))}
                    </div>
                    <Link href="/integrations" className="inline-block mt-8 text-orange-600 font-semibold hover:underline">
                        View all 75+ integrations →
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
                    <p className="text-xl text-white/80 mb-8">See how SwanDesk can automate 90% of your support tickets</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Your Free Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
