import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import { faqData } from '@/data/faqs';
import FAQ from '@/components/ui/FAQ';

export const metadata: Metadata = {
    title: 'SwanDigitals FAQ | Questions Answered',
    description: 'A practical guide for Indian SMEs. Find answers about our Voice AI, WhatsApp integration, data handling, pricing, and everyday use cases.',
    keywords: ['SwanDigitals FAQ', 'SME AI Knowledge Base', 'SwanDigitals Help', 'Voice AI FAQs', 'WhatsApp API Questions'],
    alternates: {
        canonical: 'https://swandigitals.com/faqs',
    },
}

export default function FAQsPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'FAQs',
                item: 'https://swandigitals.com/faqs'
            }
        ]
    };

    // Generate a single unified FAQPage schema for ALL questions to maximize SEO
    // We do this here at the page level so we don't rely purely on the individual <FAQ /> component schemas
    const allQuestions = faqData.flatMap(category => category.items);
    const unifiedFaqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allQuestions.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Inject unified schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedFaqSchema) }}
            />

            <Hero
                badge="📚 Knowledge Base"
                title="Everything You Need to Know About SwanDigitals"
                subtitle="A practical guide for Indian small businesses. Browse our FAQ below to learn how we help you handle WhatsApp, calls, and customer chats."
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "Contact Support", href: "/contact" }}
            />

            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* Left Sidebar Navigation */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Categories</h3>
                                <nav className="space-y-2">
                                    {faqData.map((category) => (
                                        <a 
                                            key={category.id} 
                                            href={`#${category.id}`}
                                            className="block px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                        >
                                            {category.title}
                                        </a>
                                    ))}
                                </nav>
                                
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <h4 className="text-sm font-bold text-slate-900 mb-2">Still have questions?</h4>
                                    <p className="text-xs text-slate-500 mb-4">Our team is ready to help you map out your automation strategy.</p>
                                    <a href="/contact" className="block w-full py-2 text-center text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-3/4 space-y-16">
                            {faqData.map((category) => (
                                <section key={category.id} id={category.id} className="scroll-mt-24">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                                        <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                                    </div>
                                    
                                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
                                        {/* We use the existing FAQ component but pass a hidden heading to avoid double rendering the H2 */}
                                        <FAQ items={category.items} heading={category.title} disableSchema={true} className="py-2" />
                                    </div>
                                </section>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Final CTA */}
            <section className="py-20 bg-white border-t border-slate-200 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Didn't find what you were looking for?</h2>
                    <p className="text-lg text-slate-600 mb-8">Schedule a personalized walkthrough with our solution architects.</p>
                    <a href="/demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Book a Discovery Call
                    </a>
                </div>
            </section>
        </SiteLayout>
    );
}
