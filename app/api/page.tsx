"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import { Code, Terminal, FileJson, Book, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function APIPage() {
    const sdks = [
        { lang: "Python", icon: "🐍", install: "pip install veridia-sdk", docs: "/docs/python" },
        { lang: "Node.js", icon: "💚", install: "npm install @veridia/sdk", docs: "/docs/nodejs" },
        { lang: "Java", icon: "☕", install: "maven: com.veridia:sdk", docs: "/docs/java" },
        { lang: "Go", icon: "🔵", install: "go get github.com/veridia/go-sdk", docs: "/docs/go" }
    ];

    const endpoints = [
        { method: "POST", path: "/v1/conversations", description: "Start a new conversation" },
        { method: "POST", path: "/v1/messages", description: "Send a message to chatbot" },
        { method: "GET", path: "/v1/conversations/{id}", description: "Get conversation history" },
        { method: "POST", path: "/v1/intents", description: "Create custom intent" },
        { method: "GET", path: "/v1/analytics", description: "Fetch analytics data" },
        { method: "POST", path: "/v1/webhooks", description: "Configure webhooks" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💻 API & Developers"
                title="Build with Veridia"
                subtitle="RESTful APIs, SDKs, and comprehensive documentation. Like IBM's Developer Hub, but designed for modern developers who value simplicity and speed."
                primaryCTA={{ text: "View API Docs", href: "/documentation" }}
                secondaryCTA={{ text: "Get API Key", href: "/demo" }}
            />

            {/* Quick Start */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Quick Start in 5 Minutes</h2>

                    <div className="bg-slate-900 rounded-2xl p-8 text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-slate-400">Terminal</span>
                        </div>
                        <pre className="text-sm overflow-x-auto">
                            <code className="text-green-400"># Install SDK</code>
                            {`
pip install veridia-sdk

`}<code className="text-green-400"># Initialize and send message</code>
                            {`
from veridia import VeridiaClient

client = VeridiaClient(api_key="your_api_key")

response = client.chat(
    bot_id="your_bot_id",
    message="Hello, I need help with my order",
    user_id="user_123"
)

print(response.message)  # AI response
print(response.intent)   # Detected intent
print(response.sentiment) # Sentiment score
`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* SDKs */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Official SDKs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sdks.map((sdk, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="text-4xl mb-4">{sdk.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{sdk.lang}</h3>
                                <code className="text-sm bg-slate-100 px-3 py-1 rounded block mb-4 overflow-x-auto">
                                    {sdk.install}
                                </code>
                                <Link href={sdk.docs} className="text-orange-600 font-semibold hover:underline">
                                    View Docs →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Core API Endpoints</h2>
                    <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="px-6 py-4 text-left font-semibold">Method</th>
                                    <th className="px-6 py-4 text-left font-semibold">Endpoint</th>
                                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {endpoints.map((ep, i) => (
                                    <tr key={i} className="border-t hover:bg-slate-50">
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-sm font-mono ${ep.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {ep.method}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-sm">{ep.path}</td>
                                        <td className="px-6 py-4 text-slate-600">{ep.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/documentation" className="text-orange-600 font-semibold hover:underline">
                            View complete API reference →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Developer-First Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap className="w-6 h-6" />, title: "Low Latency", desc: "<100ms p99 response time with global edge locations" },
                            { icon: <Shield className="w-6 h-6" />, title: "Secure by Default", desc: "OAuth 2.0, API key rotation, rate limiting built-in" },
                            { icon: <Code className="w-6 h-6" />, title: "Webhooks", desc: "Real-time events for intents, handoffs, and analytics" },
                            { icon: <Terminal className="w-6 h-6" />, title: "CLI Tool", desc: "Manage bots, deploy, and debug from command line" },
                            { icon: <FileJson className="w-6 h-6" />, title: "OpenAPI Spec", desc: "Auto-generate clients in any language" },
                            { icon: <Book className="w-6 h-6" />, title: "Rich Docs", desc: "Interactive examples, guides, and tutorials" }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Building Today</h2>
                    <p className="text-xl text-white/80 mb-8">Get your free API key and build your first chatbot in minutes</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Get Free API Key
                        </Link>
                        <Link href="/documentation" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Read Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
