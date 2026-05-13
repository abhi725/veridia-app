"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    /** Optional heading override (defaults to "Frequently Asked Questions") */
    heading?: string;
}

export default function FAQ({ items, heading }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 70);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Generate FAQPage JSON-LD schema automatically from props
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
            {/* FAQPage Schema — auto-generated from props */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-2xl mx-auto px-5 lg:px-8">
                <div className="text-center mb-14">
                    <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                        FAQ
                    </span>
                    <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900">
                        {heading || 'Frequently Asked Questions'}
                    </h2>
                </div>

                <div className="space-y-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="reveal border border-slate-100 rounded-2xl overflow-hidden shadow-card hover:border-orange-100 transition-colors duration-200"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50/80 transition-colors duration-150 cursor-pointer gap-4"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-sm md:text-base text-slate-800 leading-snug">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-orange-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`faq-content ${openIndex === index ? 'open' : ''}`}
                            >
                                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
