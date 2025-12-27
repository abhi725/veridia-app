"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function AIGlossaryPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const glossaryTerms = [
        { term: "Agent", definition: "An AI-powered virtual assistant that can autonomously perform tasks, make decisions, and interact with users through natural language conversation.", category: "Core" },
        { term: "Chatbot", definition: "A software application designed to simulate conversation with human users, especially over the Internet. Modern chatbots use AI to understand and respond naturally.", category: "Core" },
        { term: "Conversational AI", definition: "A set of technologies that enable computers to understand, process, and respond to human language in a natural, human-like manner.", category: "Core" },
        { term: "Entity Extraction", definition: "The process of identifying and extracting specific pieces of information (entities) from user input, such as dates, names, locations, or custom values.", category: "NLU" },
        { term: "Fine-Tuning", definition: "The process of taking a pre-trained AI model and training it further on a specific dataset to improve its performance for a particular task or domain.", category: "AI/ML" },
        { term: "Generative AI", definition: "AI systems that can create new content—text, images, code, etc.—based on patterns learned from training data. Examples include GPT-4 and Gemini.", category: "AI/ML" },
        { term: "Hallucination", definition: "When an AI model generates information that is false, nonsensical, or not grounded in the input or training data. A key challenge in LLM deployment.", category: "AI/ML" },
        { term: "Intent", definition: "The goal or purpose behind a user's message. Intent detection is the process of determining what the user wants to accomplish.", category: "NLU" },
        { term: "Knowledge Base", definition: "A structured repository of information that a chatbot can reference to answer user questions. Can include FAQs, documents, and unstructured data.", category: "Core" },
        { term: "Large Language Model (LLM)", definition: "AI models trained on vast amounts of text data that can understand and generate human-like text. Examples include GPT-4, Gemini, and Claude.", category: "AI/ML" },
        { term: "Multi-Turn Conversation", definition: "A dialogue that spans multiple exchanges, where the AI must maintain context and remember previous messages to respond appropriately.", category: "NLU" },
        { term: "Natural Language Processing (NLP)", definition: "The branch of AI that focuses on the interaction between computers and humans through natural language.", category: "NLU" },
        { term: "Natural Language Understanding (NLU)", definition: "A subset of NLP focused on machine reading comprehension—understanding the meaning and intent behind human language.", category: "NLU" },
        { term: "On-Premise Deployment", definition: "Installing and running software on servers located within an organization's own data center, rather than in the cloud. Provides full data control.", category: "Deployment" },
        { term: "Prompt Engineering", definition: "The practice of designing and optimizing prompts given to AI models to elicit desired responses or behaviors.", category: "AI/ML" },
        { term: "RAG (Retrieval-Augmented Generation)", definition: "A technique that combines retrieval of relevant documents with generative AI to provide more accurate, grounded responses.", category: "AI/ML" },
        { term: "Sentiment Analysis", definition: "The process of determining the emotional tone behind text—positive, negative, or neutral. Used to gauge customer satisfaction.", category: "NLU" },
        { term: "Slot Filling", definition: "The process of collecting required information (slots) from users to complete a task, such as gathering a date, time, and location for a booking.", category: "NLU" },
        { term: "Training Data", definition: "The dataset used to train an AI model. Quality and diversity of training data directly impacts model performance.", category: "AI/ML" },
        { term: "Voice Bot", definition: "An AI assistant that uses speech recognition and synthesis to communicate with users via voice rather than text.", category: "Core" }
    ];

    const categories = ["All", "Core", "NLU", "AI/ML", "Deployment"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTerms = glossaryTerms.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || term.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <SiteLayout>
            <Hero
                badge="📖 AI Glossary"
                title="AI & Chatbot Glossary"
                subtitle="Essential terms and definitions for understanding AI chatbots, NLU, and conversational AI technology."
                primaryCTA={{ text: "Download PDF", href: "#" }}
                secondaryCTA={{ text: "AI Guide", href: "/ai-guide" }}
            />

            {/* Search & Filter */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search terms..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-full focus:border-purple-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                                            ? 'bg-purple-500 text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Alphabet Navigation */}
            <section className="py-4 bg-slate-50 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {alphabet.map((letter, i) => (
                            <button
                                key={i}
                                className="w-8 h-8 rounded-full bg-white text-slate-600 font-semibold text-sm hover:bg-purple-500 hover:text-white transition-colors"
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Glossary Terms */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <p className="text-slate-500 mb-8">{filteredTerms.length} terms found</p>
                    <div className="space-y-6">
                        {filteredTerms.map((item, i) => (
                            <div key={i} className="border-b border-slate-200 pb-6">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{item.category}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mt-2">{item.term}</h3>
                                        <p className="text-slate-600 mt-2">{item.definition}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Learn More</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/ai-guide" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="font-bold">AI Guide</h3>
                            <p className="text-sm text-slate-500">Complete 6-chapter course</p>
                        </Link>
                        <Link href="/documentation" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="text-4xl mb-3">📖</div>
                            <h3 className="font-bold">Documentation</h3>
                            <p className="text-sm text-slate-500">Technical reference</p>
                        </Link>
                        <Link href="/webinars" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="text-4xl mb-3">🎙️</div>
                            <h3 className="font-bold">Webinars</h3>
                            <p className="text-sm text-slate-500">Expert sessions</p>
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
