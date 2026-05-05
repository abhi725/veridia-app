
export default function AutomationPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Automation & Macros</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    Automate repetitive tasks with SwanDesk's built-in automation rules, macros, and SwanAI bot integration.
                    Reduce agent workload by up to 70% with smart automation.
                </p>
            </section>

            {/* SwanAI Bot Setup */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">SwanAI Bot Setup</h2>
                <p className="text-slate-600 mb-6">
                    Connect SwanAI as an agent bot to automatically respond to customer messages.
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">1. Configure SwanAI Bot</h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>Settings → Agents → SwanAI Bot</strong></li>
                            <li>Enable the bot and select which inboxes to connect</li>
                            <li>Set <strong>Response Delay</strong> (time before AI starts responding)</li>
                            <li>Configure <strong>Max Messages</strong> before handoff to human</li>
                            <li>Enable/disable specific channels (WhatsApp, web chat, etc.)</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">2. Automation Rules</h3>
                        <p className="text-slate-600 mb-4">
                            SwanDesk automatically applies these rules when SwanAI Bot is enabled:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Assign SwanAI bot to all new conversations</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Auto-label WhatsApp conversations by source</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Detect sales intent (price, pricing, cost, demo, ₹)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Flag support issues (problem, issue, error, complaint)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Detect human escalation keywords (agent, human, manager)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Labels */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Labels System</h2>
                <p className="text-slate-600 mb-6">
                    Use labels to categorize conversations for easy filtering and reporting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Lead Status Labels</h3>
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">hot-lead</span>
                            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">warm-lead</span>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">cold-lead</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3">
                            Auto-applied based on conversation content and keywords.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Source Labels</h3>
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">whatsapp-lead</span>
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">website-lead</span>
                            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">meta-lead</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3">
                            Auto-applied based on channel type.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Service Labels</h3>
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">support</span>
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">complaint</span>
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">needs-agent</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3">
                            Auto-applied based on conversation content.
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Action Labels</h3>
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">converted</span>
                            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">pricing-shared</span>
                            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">follow-up</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3">
                            Applied manually or via macros.
                        </p>
                    </div>
                </div>
            </section>

            {/* Macros */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Macros</h2>
                <p className="text-slate-600 mb-6">
                    Macros automate repetitive actions — apply labels, send canned responses, and assign conversations with one click.
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Pre-built Macros</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Mark as Hot Lead</h4>
                                <p className="text-sm text-slate-500">Adds hot-lead label, assigns to sales team</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Book Demo</h4>
                                <p className="text-sm text-slate-500">Creates follow-up task, sends booking link</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Send Full Pricing</h4>
                                <p className="text-sm text-slate-500">Attaches pricing PDF, adds pricing-shared label</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Human Handoff</h4>
                                <p className="text-sm text-slate-500">Labels conversation, notifies agents, closes bot</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Resolve & Survey</h4>
                                <p className="text-sm text-slate-500">Marks resolved, sends CSAT survey</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-medium text-slate-800 mb-2">Escalate to Manager</h4>
                                <p className="text-sm text-slate-500">Assigns to manager team, adds urgent label</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Creating Custom Macros</h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>Settings → Macros</strong></li>
                            <li>Click <strong>New Macro</strong></li>
                            <li>Enter macro name and description</li>
                            <li>Add actions:
                                <ul className="list-disc list-inside ml-6 mt-2 text-sm text-slate-500">
                                    <li>Apply label</li>
                                    <li>Assign to agent/team</li>
                                    <li>Send canned response</li>
                                    <li>Set status (Open, Pending, Resolved)</li>
                                    <li>Add internal note</li>
                                </ul>
                            </li>
                            <li>Save macro with a shortcut code (e.g., <code className="bg-slate-100 px-1 rounded">/hotlead</code>)</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>n8n Workflows</strong> — Advanced automation with external systems</li>
                    <li><strong>Custom Attributes</strong> — Store custom data on conversations and contacts</li>
                    <li><strong>Integrations</strong> — Connect CRM, email, WhatsApp, and other tools</li>
                    <li><strong>Troubleshooting</strong> — Debug automation issues</li>
                </ul>
            </section>
        </>
    );
}
