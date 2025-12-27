"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function BlogPage() {
    const featuredPost = {
        title: "Why Enterprise AI Chatbots Fail: Lessons from 500 Deployments",
        excerpt: "After helping 500 companies deploy AI chatbots, we've identified the 5 most common reasons why projects fail—and how to avoid them.",
        author: "Sarah Chen",
        role: "VP of Customer Success",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        category: "Strategy"
    };

    const posts = [
        { title: "Veridia vs Kore.ai: 2024 Comparison Guide", excerpt: "Complete breakdown of features, pricing, and deployment times.", category: "Comparison", date: "Dec 12, 2024", readTime: "12 min" },
        { title: "True On-Premise vs Dedicated VPC: What's the Difference?", excerpt: "Why Yellow.ai's 'on-premise' isn't really on-premise.", category: "Security", date: "Dec 10, 2024", readTime: "6 min" },
        { title: "How FinanceOne Achieved 85% Automation in 30 Days", excerpt: "A detailed case study of our fastest enterprise deployment.", category: "Case Study", date: "Dec 8, 2024", readTime: "10 min" },
        { title: "The ROI of AI Customer Service: Complete Calculator", excerpt: "Use our formula to calculate your potential savings.", category: "ROI", date: "Dec 5, 2024", readTime: "5 min" },
        { title: "Building Multi-Turn Conversations That Feel Natural", excerpt: "Technical deep dive into context retention and dialog management.", category: "Technical", date: "Dec 3, 2024", readTime: "15 min" },
        { title: "GDPR, HIPAA, SOC 2: Enterprise Compliance Guide", excerpt: "How to choose AI vendors that meet your compliance needs.", category: "Security", date: "Dec 1, 2024", readTime: "9 min" }
    ];

    const categories = ["All", "Strategy", "Technical", "Security", "Comparison", "Case Study", "ROI"];

    return (
        <SiteLayout>
            <Hero
                badge="📝 Veridia Blog"
                title="AI Insights for Enterprise"
                subtitle="Strategies, case studies, and technical guides from the Veridia team. Learn how to deploy AI chatbots that actually work."
                primaryCTA={{ text: "Subscribe to Newsletter", href: "#subscribe" }}
            />

            {/* Featured Post */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-white/80 text-sm font-semibold mb-4">FEATURED ARTICLE</div>
                    <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-xl text-white/90 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                        <div>
                            <div className="font-bold">{featuredPost.author}</div>
                            <div className="text-white/80 text-sm">{featuredPost.role} • {featuredPost.readTime}</div>
                        </div>
                    </div>
                    <Link href="/blog/enterprise-ai-failures" className="inline-block px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all">
                        Read Article →
                    </Link>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${i === 0 ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <article key={i} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
                                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{post.category}</span>
                                        <span className="text-xs text-slate-500">{post.readTime}</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="text-xs text-slate-500">{post.date}</div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section id="subscribe" className="py-20 bg-slate-50">
                <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get AI Insights Weekly</h2>
                    <p className="text-slate-600 mb-8">Join 5,000+ enterprise leaders getting our latest strategies and updates.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 rounded-full border-2 border-slate-300 focus:border-orange-500 outline-none flex-1 max-w-md"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
                </div>
            </section>
        </SiteLayout>
    );
}
