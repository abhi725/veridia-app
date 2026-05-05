"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CaseStudiesGrid() {
    const [filter, setFilter] = useState('all');

    const caseStudies = [
        {
            company: "FinanceOne",
            industry: "banking",
            logo: "🏦",
            headline: "85% Automation Rate in 30 Days",
            results: ["$1.2M annual savings", "3 week deployment", "92% CSAT"],
            quote: "SwanDigitals deployed in 3 days what took Kore.ai 3 months.",
            person: "Sarah Johnson, CTO",
            featured: true
        },
        {
            company: "HealthPlus",
            industry: "healthcare",
            logo: "🏥",
            headline: "HIPAA Compliant AI Support",
            results: ["91% automation", "$890K saved", "24/7 coverage"],
            quote: "True on-premise was critical for our compliance needs.",
            person: "Dr. Michael Lee, COO",
            featured: false
        },
        {
            company: "RetailPro",
            industry: "retail",
            logo: "🛒",
            headline: "Holiday Season Support at Scale",
            results: ["10M conversations/month", "2.1M saved", "88% automation"],
            quote: "Scaled from 1M to 10M conversations without adding staff.",
            person: "Emma Wilson, VP Support",
            featured: false
        },
        {
            company: "TechCorp Global",
            industry: "technology",
            logo: "💻",
            headline: "Internal IT Helpdesk Transformation",
            results: ["72% ticket deflection", "50% faster resolution", "Employee NPS +40"],
            quote: "Our IT team can finally focus on strategic projects.",
            person: "David Chen, CIO",
            featured: false
        },
        {
            company: "InsureMax",
            industry: "insurance",
            logo: "📋",
            headline: "Claims Processing Automation",
            results: ["60% claims automated", "4 day faster processing", "$2.5M saved"],
            quote: "Customers can now file and track claims 24/7.",
            person: "Jennifer Adams, CDO",
            featured: false
        },
        {
            company: "BankSafe Credit Union",
            industry: "banking",
            logo: "💳",
            headline: "Member Services Excellence",
            results: ["93% automation", "Air-gapped deploy", "100% compliance"],
            quote: "Full data sovereignty was non-negotiable for us.",
            person: "Robert Kim, CISO",
            featured: false
        }
    ];

    const industries = [
        { id: 'all', label: 'All Industries' },
        { id: 'banking', label: 'Banking' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'retail', label: 'Retail' },
        { id: 'technology', label: 'Technology' },
        { id: 'insurance', label: 'Insurance' }
    ];

    const filtered = filter === 'all' ? caseStudies : caseStudies.filter(c => c.industry === filter);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => setFilter(ind.id)}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${filter === ind.id
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            {ind.label}
                        </button>
                    ))}
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((study, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{study.logo}</span>
                                <div>
                                    <div className="font-bold text-lg">{study.company}</div>
                                    <div className="text-sm text-slate-500 capitalize">{study.industry}</div>
                                </div>
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{study.headline}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {study.results.map((result, j) => (
                                    <span key={j} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                        {result}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-600 italic mb-4">"{study.quote}"</p>
                            <p className="text-sm text-slate-500">— {study.person}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


