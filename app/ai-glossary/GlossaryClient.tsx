"use client";

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function GlossaryClient() {
    const [searchTerm, setSearchTerm] = useState('');

    const glossaryTerms = [
        // --- Core AI Terms ---
        { term: "Agent", definition: "An AI-powered virtual assistant that can autonomously perform tasks, make decisions, and interact with users through natural language. SwanDigitals' AI agents resolve repetitive customer queries without a human agent.", category: "Core" },
        { term: "Chatbot", definition: "A software application designed to simulate conversation with human users. Modern AI chatbots use Large Language Models (LLMs) to understand context across long conversations, unlike older rule-based keyword bots.", category: "Core" },
        { term: "Conversational AI", definition: "Technologies enabling computers to understand and respond to human language naturally. Includes intent detection, context management, and response generation. SwanDigitals' platform uses Conversational AI natively for WhatsApp, voice, and web chat.", category: "Core" },
        { term: "Entity Extraction", definition: "Identifying specific pieces of information (entities) from user input, such as data, order numbers, names, or locations. Accurate entity extraction reduces manual data entry for support agents.", category: "NLU" },
        { term: "Fine-Tuning", definition: "Training a pre-trained AI model further on a specific dataset to improve performance for a particular task or domain. SwanDigitals offers fine-tuning on customer's own support ticket history.", category: "AI/ML" },
        { term: "Generative AI", definition: "AI systems that create new content — text, images, code — based on patterns learned from training data, using large language models. Generative AI powers the response drafting in SwanDigitals' RAG system.", category: "AI/ML" },
        { term: "Hallucination", definition: "When an AI model generates false or unsupported information. SwanDigitals prevents hallucinations by grounding every response in your knowledge base using Retrieval-Augmented Generation (RAG), not open-ended generation.", category: "AI/ML" },
        { term: "Intent", definition: "The goal behind a user's message. Accurate intent detection lets the AI route queries to the right answer or the right agent, which is core to how production chatbots stay useful at scale.", category: "NLU" },
        { term: "Knowledge Base", definition: "A structured repository of information that a chatbot references to answer user questions. SwanDigitals' system ingests PDFs, URLs, and spreadsheets as your knowledge base — no coding required.", category: "Core" },
        { term: "Large Language Model (LLM)", definition: "AI models trained on vast text data that understand and generate human-like text. SwanDigitals uses advanced LLMs hosted on secure cloud infrastructure in India.", category: "AI/ML" },
        { term: "Multi-Turn Conversation", definition: "A dialogue spanning multiple exchanges where the AI maintains context from previous messages. Critical for customer support: without multi-turn context, users must repeat themselves on every message.", category: "NLU" },
        { term: "Natural Language Processing (NLP)", definition: "The branch of AI focused on interaction between computers and humans through natural language. NLP is the backbone of every chatbot, voice bot, and sentiment analysis tool.", category: "NLU" },
        { term: "Natural Language Understanding (NLU)", definition: "A subset of NLP focused on machine reading comprehension — understanding the meaning and intent behind language, not just matching keywords. NLU separates modern AI chatbots from old keyword-rule bots.", category: "NLU" },
        { term: "Prompt Engineering", definition: "Designing and optimising prompts given to AI models to produce desired, accurate responses. Prompt engineering is a major factor in response quality for production LLM deployments.", category: "AI/ML" },
        { term: "RAG (Retrieval-Augmented Generation)", definition: "A technique combining retrieval of relevant documents from your knowledge base with AI text generation. RAG grounds every chatbot answer in your actual data, significantly reducing hallucinations in production deployments.", category: "AI/ML" },
        { term: "Sentiment Analysis", definition: "Determining emotional tone behind text — positive, negative, or neutral. SwanDigitals uses real-time sentiment analysis to auto-escalate frustrated customers to a human agent before the situation worsens.", category: "NLU" },
        { term: "Voice Bot", definition: "An AI assistant using speech recognition and synthesis to communicate via voice. SwanDigitals' Voice AI speaks Hindi, Tamil, Telugu, Marathi, and more — 10 Indian languages in total, with fast, natural response latency.", category: "Core" },
        { term: "On-Premise Deployment", definition: "Running software on servers within your own datacenter, not in a public cloud. Some regulated businesses require this. SwanDigitals is a cloud platform hosted in India — we don't offer on-premise deployment, and we say so upfront.", category: "Deployment" },
        // --- India Compliance Terms (Phase 2: high-value awareness keywords) ---
        { term: "DPDP Act 2023", definition: "The Digital Personal Data Protection Act 2023 is India's first comprehensive data protection law, enacted in August 2023. It requires businesses to store and process Indian citizens' personal data within India's borders. SwanDigitals is built to be aware of the DPDP Act 2023, with 100% Indian datacenter hosting for all cloud plans.", category: "Compliance" },
        { term: "RBI Cloud Guidelines", definition: "The Reserve Bank of India's Master Direction on IT Governance (2021) and subsequent circulars require that regulated entities (banks, NBFCs, payment companies) ensure data localisation, audit rights, and business continuity for any cloud-hosted customer data. This mainly applies to regulated financial businesses — most Indian SMEs using SwanDigitals aren't directly bound by these rules.", category: "Compliance" },
        { term: "WhatsApp Business API (India)", definition: "Meta's official API for businesses to send and receive WhatsApp messages at scale. Businesses pay Meta directly per conversation (24-hour window model). SwanDigitals connects directly to Meta's Business API with 0% markup — you pay Meta's official rates, not a reseller premium.", category: "WhatsApp" },
        { term: "Green Tick Verification", definition: "WhatsApp's official business verification badge that displays a green checkmark next to a business name. Required for high-volume WhatsApp messaging. SwanDigitals preserves your existing Green Tick status during platform migrations.", category: "WhatsApp" },
        { term: "Flat-Rate SaaS Pricing", definition: "A subscription model charging a fixed monthly fee regardless of the number of users, agent seats, or conversations. Contrasts with per-seat pricing (charge per agent) or per-conversation pricing (charge per chat). SwanDigitals uses flat-rate pricing across all chatbot plans.", category: "Pricing" },
        { term: "Per-Seat Pricing", definition: "A SaaS billing model charging per agent or user licence per month. Common in legacy helpdesks like Zendesk and Intercom. For a growing team, per-seat pricing can cost far more than SwanDigitals' flat-rate plan.", category: "Pricing" },
        { term: "Air-Gapped Deployment", definition: "A security configuration where a system is completely isolated from external networks, including the public internet. Required by some defence, banking, and government clients. SwanDigitals does not offer air-gapped deployment — we're a cloud platform hosted in India, built for fast go-live.", category: "Deployment" },
        { term: "Omnichannel Support", definition: "A customer service approach where all channels — WhatsApp, email, web chat, voice, Instagram — are unified into one team inbox with shared customer history. Contrasts with single-channel tools like WATI (WhatsApp only) or Tawk.to (web chat only).", category: "Core" },
        { term: "TRAI DND Regulations", definition: "The Telecom Regulatory Authority of India's Do Not Disturb regulations restrict unsolicited commercial communications. Businesses sending outbound WhatsApp or voice messages must comply with TRAI DND rules or risk penalties.", category: "Compliance" },
    ];

    const categories = ["All", "Core", "NLU", "AI/ML", "Deployment", "Compliance", "WhatsApp", "Pricing"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTerms = glossaryTerms.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || term.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <>
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
        </>
    );
}
