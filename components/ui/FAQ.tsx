"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-lg text-slate-900">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-600 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-slate-50 text-slate-700">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
