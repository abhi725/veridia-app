import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import CaseStudiesGrid from '@/components/ui/CaseStudiesGrid';

export const metadata: Metadata = {
    title: 'Customer Success Stories & Case Studies',
    description: 'See how enterprises like FinanceOne and RetailPro achieve 85% automation and $1M+ savings with SwanDigitals. Real results from Indian banking, healthcare, and retail.',
    keywords: ['AI Chatbot Case Studies', 'Enterprise AI Success Stories', 'Banking Chatbot ROI', 'Healthcare AI Case Study', 'Retail AI Examples'],
    alternates: {
        canonical: 'https://swandigitals.com/case-studies',
    },
}

export default function CaseStudiesPage() {
    const featured = {
        company: "FinanceOne",
        industry: "banking",
        logo: "🏦",
        headline: "85% Automation Rate in 30 Days",
        results: ["$1.2M annual savings", "3 week deployment", "92% CSAT"],
        quote: "SwanDigitals deployed in 3 days what took Kore.ai 3 months.",
        person: "Sarah Johnson, CTO",
        featured: true
    };

    return (
        <SiteLayout>
            <Hero
                badge="📊 Customer Success"
                title="Real Results. Real Customers."
                subtitle="See how enterprise companies achieved 85%+ automation rates and $1M+ savings with SwanDigitals."
                primaryCTA={{ text: "Add Your Story", href: "/contact" }}
                secondaryCTA={{ text: "Book Demo", href: "/demo" }}
            />

            {/* Featured Case Study */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-white/80 text-sm font-semibold mb-2">FEATURED CASE STUDY</div>
                            <div className="text-5xl mb-4">{featured.logo}</div>
                            <h2 className="text-3xl font-bold mb-4">{featured.company}: {featured.headline}</h2>
                            <p className="text-xl text-white/90 mb-6">"{featured.quote}"</p>
                            <p className="text-white/80">— {featured.person}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                            <h3 className="font-bold text-lg mb-4">Key Results:</h3>
                            <ul className="space-y-3">
                                {featured.results.map((result, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span className="text-lg">{result}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/case-studies/financeone" className="inline-block mt-6 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all">
                                Read Full Story
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CaseStudiesGrid />

            {/* Aggregate Stats */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Aggregate Customer Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
                            <div className="text-slate-600">Enterprise Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">86%</div>
                            <div className="text-slate-600">Avg Automation Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">$1.2M</div>
                            <div className="text-slate-600">Avg Annual Savings</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">21 days</div>
                            <div className="text-slate-600">Avg Deployment Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
                    <p className="text-xl text-white/80 mb-8">See how we can help you achieve 85%+ automation</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Your Custom Analysis
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
