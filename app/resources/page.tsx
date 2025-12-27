"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { FileText, Video, BookOpen, Download, Mic, GraduationCap } from 'lucide-react';

export default function ResourcesPage() {
    const resourceTypes = [
        { icon: <FileText className="w-8 h-8" />, title: "Blog", desc: "Latest insights on AI, automation, and enterprise strategy", link: "/blog", count: "50+ articles" },
        { icon: <Download className="w-8 h-8" />, title: "Whitepapers", desc: "In-depth research and industry reports", link: "/whitepapers", count: "15 guides" },
        { icon: <Video className="w-8 h-8" />, title: "Webinars", desc: "Expert sessions on AI implementation and best practices", link: "/webinars", count: "Monthly live" },
        { icon: <BookOpen className="w-8 h-8" />, title: "Documentation", desc: "Technical guides, API reference, and tutorials", link: "/documentation", count: "Full docs" },
        { icon: <Mic className="w-8 h-8" />, title: "Videos", desc: "Product demos, customer stories, and tutorials", link: "/videos", count: "30+ videos" },
        { icon: <GraduationCap className="w-8 h-8" />, title: "AI Guide", desc: "Beginner to advanced AI chatbot education", link: "/ai-guide", count: "Free course" }
    ];

    const featuredResources = [
        { type: "Whitepaper", title: "The Ultimate Guide to Enterprise AI Chatbots 2024", desc: "50 pages of strategies, benchmarks, and implementation blueprints", downloads: "5,000+" },
        { type: "Webinar", title: "How FinanceOne Achieved 85% Automation in 30 Days", desc: "Live case study with their CTO Sarah Johnson", views: "3,200+" },
        { type: "Blog", title: "Veridia vs Kore.ai vs Yellow.ai: Complete 2024 Comparison", desc: "Features, pricing, and deployment comparison", reads: "12,000+" }
    ];

    const tools = [
        { title: "ROI Calculator", desc: "Calculate your potential savings with AI automation", link: "/roi-calculator", cta: "Calculate Now" },
        { title: "Case Studies", desc: "Real results from 500+ enterprise deployments", link: "/case-studies", cta: "View Stories" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📚 Resource Center"
                title="Learn Enterprise AI"
                subtitle="Free guides, whitepapers, webinars, and documentation to help you succeed with AI chatbots"
                primaryCTA={{ text: "Browse All Resources", href: "#resources" }}
                secondaryCTA={{ text: "Subscribe", href: "#subscribe" }}
            />

            {/* Resource Types Grid */}
            <section id="resources" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resourceTypes.map((resource, i) => (
                            <Link key={i} href={resource.link} className="group p-8 border-2 border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    {resource.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600">{resource.title}</h3>
                                <p className="text-slate-600 mb-4">{resource.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{resource.count}</span>
                                    <span className="text-orange-600 font-semibold">Explore →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Resources */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredResources.map((resource, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                                <div className="text-sm text-orange-600 font-semibold mb-2">{resource.type.toUpperCase()}</div>
                                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                                <p className="text-slate-600 mb-6">{resource.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-500">
                                        {resource.downloads ? `${resource.downloads} downloads` :
                                            resource.views ? `${resource.views} views` :
                                                `${resource.reads} reads`}
                                    </span>
                                    <button className="text-orange-600 font-semibold hover:underline">Access →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Interactive Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tools.map((tool, i) => (
                            <Link key={i} href={tool.link} className="group p-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl text-white hover:scale-[1.02] transition-all">
                                <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                                <p className="text-white/90 mb-6">{tool.desc}</p>
                                <span className="inline-block px-6 py-2 bg-white text-slate-900 rounded-full font-semibold">
                                    {tool.cta} →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section id="subscribe" className="py-20 bg-slate-50">
                <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-slate-600 mb-8">Weekly AI insights, case studies, and product updates. Join 5,000+ subscribers.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 rounded-full border-2 border-slate-300 focus:border-orange-500 outline-none flex-1"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
