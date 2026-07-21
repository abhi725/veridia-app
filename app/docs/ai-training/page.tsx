
export default function AITrainingPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">AI Training & Knowledge Base</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    Train your SwanAI chatbot to answer customer queries accurately by building a knowledge base.
                    The AI uses RAG (Retrieval Augmented Generation) to provide context-aware responses from your documents.
                </p>
            </section>

            {/* Supported AI Providers */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">AI Providers</h2>
                <p className="text-slate-600 mb-6">
                    SwanDigitals supports multiple AI providers. Switch between them anytime based on your needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Primary AI Engine</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Fast, cost-effective, tuned for Hindi and Indian context.
                        </p>
                        <code className="text-xs bg-slate-100 px-2 py-1 rounded">default</code>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Alternative AI Engine</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Robust cloud-based alternative with excellent general-purpose reasoning.
                        </p>
                        <code className="text-xs bg-slate-100 px-2 py-1 rounded">alternative-cloud-model</code>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Advanced Reasoning Engine</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Best for nuanced, detailed responses. Available on higher plans.
                        </p>
                        <code className="text-xs bg-slate-100 px-2 py-1 rounded">advanced</code>
                    </div>
                </div>

                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800">
                        <strong>Switching AI:</strong> Go to <strong>Settings → AI → Provider</strong> to change your AI model.
                        Configuration changes apply immediately to all conversations.
                    </p>
                </div>
            </section>

            {/* Document Types */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Supported Document Types</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">📄</div>
                        <h3 className="font-medium text-slate-900">PDF</h3>
                        <p className="text-sm text-slate-500">Product manuals, policies</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">📝</div>
                        <h3 className="font-medium text-slate-900">Word (.docx)</h3>
                        <p className="text-sm text-slate-500">FAQs, guides</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🔗</div>
                        <h3 className="font-medium text-slate-900">URLs</h3>
                        <p className="text-sm text-slate-500">Website pages (auto-scraped)</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">📋</div>
                        <h3 className="font-medium text-slate-900">Text (.txt)</h3>
                        <p className="text-sm text-slate-500">Raw content</p>
                    </div>
                </div>
            </section>

            {/* Building Knowledge Base */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Building Your Knowledge Base</h2>

                <div className="space-y-6">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">Method 1: Manual Upload</h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>AI → Knowledge Base</strong></li>
                            <li>Click <strong>Add Documents</strong></li>
                            <li>Select files from your computer or paste URLs</li>
                            <li>Add tags for organization (e.g., "pricing", "support", "products")</li>
                            <li>Click <strong>Upload & Index</strong></li>
                            <li>Wait 1-5 minutes for indexing to complete</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">Method 2: Website Crawler</h3>
                        <p className="text-slate-600 mb-4">
                            Automatically crawl your website and import all content into the knowledge base.
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Go to <strong>AI → Knowledge Base → Import from URL</strong></li>
                            <li>Enter your website URL (e.g., https://swandigitals.com)</li>
                            <li>Set crawl depth (how many clicks deep to go)</li>
                            <li>Exclude paths: <code className="bg-slate-100 px-1 rounded">/blog, /pricing-old</code></li>
                            <li>Click <strong>Start Crawl</strong></li>
                            <li>Review imported content and remove irrelevant pages</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">Method 3: Programmatic Build</h3>
                        <p className="text-slate-600 mb-4">
                            Use the KB Builder API for automated knowledge base updates.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-300">
                            <pre>{`# Python example with SwanAI SDK
from swanai import KBBuilder

builder = KBBuilder(api_key="your_key")
builder.add_urls([
    "https://example.com/faq",
    "https://example.com/pricing"
])
builder.add_files(["./policy.pdf", "./faq.docx"])
builder.build()`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multilingual Training */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Multilingual Training</h2>
                <p className="text-slate-600 mb-6">
                    Train the AI to respond in Hindi, regional Indian languages, and Hinglish.
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Training for Hindi Responses</h3>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            <li>Add documents with Hindi content or Hindi-English bilingual content</li>
                            <li>Navigate to <strong>AI → Settings → Language</strong></li>
                            <li>Select <strong>Hindi</strong> as primary response language</li>
                            <li>Enable <strong>Hinglish mode</strong> for mixed Hindi-English responses</li>
                            <li>Test with queries like "मूल्य क्या है?" or " kitna price hai?"</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Supported Languages</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                            {['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Gujarati', 'Bengali', 'Malayalam', 'Punjabi'].map((lang) => (
                                <div key={lang} className="px-3 py-2 bg-slate-100 rounded text-sm text-center">
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing & Optimization */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Testing & Optimization</h2>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">AI Playground</h3>
                        <p className="text-slate-600 mb-3">
                            Test how your chatbot responds to different queries before going live.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>AI → Playground</strong></li>
                            <li>Type a customer question</li>
                            <li>Review the AI response and source citations</li>
                            <li>If answers are poor, add more relevant documents or improve existing content</li>
                        </ol>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-800">
                            <strong>Tip:</strong> Use specific terms from your industry. The AI learns from your documents,
                            so include domain-specific terminology for better accuracy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Voice AI</strong> — Enable AI-powered phone support</li>
                    <li><strong>Automation</strong> — Set up routing rules and escalation logic</li>
                    <li><strong>Platform Guide</strong> — Learn more platform features</li>
                </ul>
            </section>
        </>
    );
}
