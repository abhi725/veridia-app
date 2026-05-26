export default function PlatformPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Platform Guide</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    This guide covers all the core features of the SwanDigitals platform. Learn how to navigate the dashboard,
                    train your AI, set up routing rules, and organize your support workflow.
                </p>
            </section>

            {/* Dashboard Overview */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Dashboard Overview</h2>
                <p className="text-slate-600 mb-6">
                    The SwanDigitals dashboard is your command center for managing customer conversations.
                    Here&apos;s what you&apos;ll find:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Main Inbox</h3>
                        <p className="text-sm text-slate-600">
                            All incoming conversations from connected channels appear here. Use filters to sort by status,
                            priority, or channel.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Active Conversations</h3>
                        <p className="text-sm text-slate-600">
                            Real-time view of conversations currently being handled by agents or the AI.
                            Green badge shows unread count.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Filters & Views</h3>
                        <p className="text-sm text-slate-600">
                            Create custom views for different teams, channels, or query types.
                            Save filters for quick access.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Quick Stats</h3>
                        <p className="text-sm text-slate-600">
                            See response times, resolution rates, and CSAT scores at a glance.
                            Data refreshes in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Routing & Handoffs */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Routing & Handoffs</h2>
                <p className="text-slate-600 mb-6">
                    Configure rules to automatically route conversations to the right team or agent, and
                    set conditions for when the AI should hand off to a human.
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Automatic Routing Rules</h3>
                        <p className="text-slate-600 mb-3">
                            Route conversations based on keywords, customer attributes, or channel type:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li><strong>Keyword-based:</strong> &quot;billing&quot; → Billing team inbox</li>
                            <li><strong>Channel-based:</strong> WhatsApp → Tier 1 support</li>
                            <li><strong>Customer tier:</strong> Enterprise → Dedicated agents</li>
                            <li><strong>Language:</strong> Spanish queries → Spanish-speaking agents</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">AI-to-Human Handoff</h3>
                        <p className="text-slate-600 mb-3">
                            Define conditions that trigger a handoff to a human agent:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li><strong>Confidence threshold:</strong> If AI confidence &lt; 70%, escalate</li>
                            <li><strong>Keyword escalation:</strong> &quot;refund&quot;, &quot;cancel&quot;, &quot;complaint&quot; → human</li>
                            <li><strong>Customer request:</strong> Customer types &quot;agent&quot;, &quot;human&quot;</li>
                            <li><strong>Time-based:</strong> Escalate after business hours</li>
                            <li><strong>Retry limit:</strong> Escalate after 3 failed AI attempts</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-800">
                            <strong>Best Practice:</strong> Start with a high confidence threshold (80-90%) and lower it
                            as you improve your knowledge base. This ensures customers get quick, accurate responses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <p className="text-slate-600 mb-4">
                    Now that you know the platform basics, explore these related topics:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Integrations</strong> — Connect your CRM, email, WhatsApp, and other tools</li>
                    <li><strong>Automation</strong> — Set up macros, labels, and routing rules</li>
                    <li><strong>AI Training</strong> — Upload documents to improve chatbot accuracy</li>
                    <li><strong>Custom Attributes</strong> — Store custom data on conversations and contacts</li>
                </ul>
            </section>
        </>
    );
}