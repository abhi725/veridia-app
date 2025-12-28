"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Bot, Zap, Shield, BarChart3, Globe, Users, Headphones, Briefcase, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';
import { useState } from 'react';

export default function HomePage() {
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const features = [
        {
            icon: <Bot className="w-6 h-6" />,
            title: "Advanced Conversational AI",
            description: "Powered by Gemini and Rasa for natural, context-aware conversations that feel human."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Deploy in Days, Not Months",
            description: "Get up and running 10x faster than Kore.ai with our streamlined onboarding process."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "True On-Premise Deployment",
            description: "Full data sovereignty with real on-premise hosting, not just a dedicated VPC."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Real-Time Analytics",
            description: "Track conversations, sentiment, and ROI with our comprehensive dashboard."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "75+ Integrations",
            description: "Connect with your existing tools: Zendesk, Salesforce, Slack, and more."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Enterprise-Grade Security",
            description: "SOC 2, GDPR, HIPAA compliant with bank-level encryption."
        }
    ];

    const useCases = [
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Customer Service",
            description: "Automate 90% of support inquiries. Instant responses 24/7.",
            stats: ["90% automation", "60% cost reduction", "<2s response"],
            link: "/solutions/customer-service"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Employee Experience",
            description: "HR, IT, and operations support for internal teams.",
            stats: ["70% self-service", "50% faster resolution", "+40 NPS"],
            link: "/solutions/employee-experience"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "IT Helpdesk",
            description: "Password resets, software requests, troubleshooting.",
            stats: ["72% ticket deflection", "3 min avg resolution", "24/7 support"],
            link: "/solutions/it-helpdesk"
        }
    ];

    const testimonials = [
        { quote: "Veridia deployed in 3 days what took Kore.ai 3 months. Our automation rate jumped to 85% within the first week.", name: "Sarah Johnson", role: "CTO, FinanceOne", company: "FinanceOne" },
        { quote: "The on-premise deployment was exactly what we needed. Full data control without compromising on AI capabilities.", name: "Michael Chen", role: "CISO, HealthPlus", company: "HealthPlus" },
        { quote: "We scaled from 1M to 10M conversations during Black Friday. Not a single hiccup.", name: "Emma Wilson", role: "VP Support, RetailPro", company: "RetailPro" },
        { quote: "Finally a chatbot that feels like talking to a human. Customer satisfaction is up 40%.", name: "David Park", role: "COO, TechCorp", company: "TechCorp" },
        { quote: "The ROI was immediate. We saved $2M in the first year while improving response times.", name: "Lisa Thompson", role: "CFO, BankSafe", company: "BankSafe" }
    ];

    const awards = [
        { title: "Leader", source: "Gartner Magic Quadrant", year: "2024" },
        { title: "Strong Performer", source: "Forrester Wave", year: "2024" },
        { title: "Best AI Platform", source: "G2 Reviews", year: "2024" },
        { title: "Top 10 AI Startup", source: "Forbes", year: "2024" }
    ];

    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="🚀 Trusted by 500+ Enterprise Companies"
                title="The Enterprise AI Chatbot Built for Data Sovereignty"
                subtitle="Deploy enterprise AI chatbots in days, not months. Leaner than Kore.ai, more affordable than Cognigy, and built on modern tech that IBM can't match."
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Trust Bar */}
            <section className="py-12 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="text-center text-slate-600 mb-8">Trusted by leading enterprises worldwide</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale">
                        {['Acme Corp', 'GlobalTech', 'FinanceOne', 'HealthPlus', 'RetailPro', 'BankSafe'].map((company, i) => (
                            <div key={i} className="text-center text-xl font-bold text-slate-400">{company}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <FeatureGrid features={features} />

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-white/90">Enterprise Clients</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">10M+</div>
                            <div className="text-white/90">Conversations/Month</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">90%</div>
                            <div className="text-white/90">Automation Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-white/90">Uptime SLA</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition Section - NEW */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Industry Recognition</h2>
                    <p className="text-center text-slate-600 mb-12">Recognized by leading analysts and publications</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {awards.map((award, i) => (
                            <div key={i} className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    🏆
                                </div>
                                <div className="font-bold text-slate-900">{award.title}</div>
                                <div className="text-sm text-slate-600">{award.source}</div>
                                <div className="text-xs text-orange-600 mt-1">{award.year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Tabs - NEW */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Use Cases</h2>
                    <p className="text-center text-slate-600 mb-12">See how enterprises use Veridia across departments</p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {useCases.map((uc, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveUseCase(i)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeUseCase === i
                                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {uc.icon}
                                {uc.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">{useCases[activeUseCase].title}</h3>
                                <p className="text-xl text-slate-600 mb-6">{useCases[activeUseCase].description}</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {useCases[activeUseCase].stats.map((stat, i) => (
                                        <span key={i} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">{stat}</span>
                                    ))}
                                </div>
                                <Link href={useCases[activeUseCase].link} className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                                    Learn More →
                                </Link>
                            </div>
                            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-64 flex items-center justify-center">
                                <div className="text-6xl">{activeUseCase === 0 ? '🎧' : activeUseCase === 1 ? '👥' : '🔧'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel - ENHANCED */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Customers Say</h2>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                "{testimonials[testimonialIndex].quote}"
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-slate-900">{testimonials[testimonialIndex].name}</div>
                                    <div className="text-slate-600">{testimonials[testimonialIndex].role}</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={() => setTestimonialIndex(testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1)}
                                className="w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setTestimonialIndex(i)}
                                        className={`w-3 h-3 rounded-full transition-colors ${i === testimonialIndex ? 'bg-orange-500' : 'bg-slate-300'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setTestimonialIndex(testimonialIndex === testimonials.length - 1 ? 0 : testimonialIndex + 1)}
                                className="w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Veridia */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Choose Veridia Over Competitors?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-orange-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Kore.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ 10x faster deployment (days vs months)</li>
                                <li>✅ Simpler UI, lower training costs</li>
                                <li>✅ 60% lower total cost of ownership</li>
                            </ul>
                            <Link href="/compare/vs-kore" className="text-orange-500 font-semibold mt-4 inline-block hover:underline">See full comparison →</Link>
                        </div>
                        <div className="p-8 border-2 border-blue-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Yellow.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ True on-premise, not just dedicated VPC</li>
                                <li>✅ Full data sovereignty for regulated industries</li>
                                <li>✅ No vendor lock-in with open standards</li>
                            </ul>
                            <Link href="/compare/vs-yellow" className="text-blue-500 font-semibold mt-4 inline-block hover:underline">See full comparison →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Cloud */}
            <IntegrationCloud integrations={[
                { name: 'Zendesk', logo: '🎫', category: 'Support' },
                { name: 'Salesforce', logo: '☁️', category: 'CRM' },
                { name: 'Slack', logo: '💬', category: 'Chat' },
                { name: 'Teams', logo: '💼', category: 'Chat' },
                { name: 'HubSpot', logo: '🔶', category: 'Marketing' },
                { name: 'Shopify', logo: '🛒', category: 'Ecommerce' },
                { name: 'WhatsApp', logo: '📱', category: 'Messaging' },
                { name: 'Facebook', logo: '📘', category: 'Social' },
                { name: 'Twitter', logo: '🐦', category: 'Social' },
                { name: 'Instagram', logo: '📷', category: 'Social' },
                { name: 'Gmail', logo: '📧', category: 'Email' },
                { name: 'Outlook', logo: '📨', category: 'Email' },
                { name: 'Jira', logo: '📊', category: 'Project' },
                { name: 'Stripe', logo: '💳', category: 'Payment' }
            ]} />

            {/* FAQ */}
            <FAQ items={[
                {
                    question: "How long does implementation take?",
                    answer: "Most customers go live in 2-4 weeks, compared to 3-6 months with Kore.ai or IBM watsonx. Our pre-built templates and guided onboarding make it 10x faster."
                },
                {
                    question: "Do you offer on-premise deployment?",
                    answer: "Yes! Unlike Yellow.ai which only offers dedicated cloud VPCs, we provide true on-premise deployment in your own data center for complete data sovereignty."
                },
                {
                    question: "What's your average automation rate?",
                    answer: "Our customers achieve an average 85-90% automation rate within the first month, significantly higher than industry average of 60-70%."
                },
                {
                    question: "Can I migrate from Kore.ai or other platforms?",
                    answer: "Absolutely. We offer free migration assistance and can import your existing conversation flows, intents, and training data in less than 2 weeks."
                },
                {
                    question: "What kind of support do you provide?",
                    answer: "All plans include email support. Professional plans get priority support with 4-hour response time. Enterprise customers get a dedicated account manager and 24/7 phone support."
                },
                {
                    question: "Do you have a free trial?",
                    answer: "Yes! Start with a 14-day free trial (no credit card required) with full platform access for up to 1,000 conversations."
                }
            ]} />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
                    <p className="text-xl text-white/80 mb-8">Join 500+ enterprises using Veridia to automate support and boost satisfaction.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Schedule a Demo
                        </Link>
                        <Link href="/pricing" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

