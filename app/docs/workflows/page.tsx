
export default function WorkflowsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">n8n Workflow Automation</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    Connect SwanDigitals with other apps using n8n workflow automation. Trigger actions based on
                    customer conversations, sync data to your CRM, and automate repetitive tasks.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-800">
                        <strong>Available in:</strong> Growth Hub, Performance Pro, and Scale plans.
                    </p>
                </div>
            </section>

            {/* Pre-built Workflows */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Pre-built Workflows</h2>
                <p className="text-slate-600 mb-6">
                    SwanDigitals includes ready-to-use workflows for common automation scenarios.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-green-200 bg-green-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">New Lead Alert</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Triggers when a new conversation is labeled as hot-lead or has pricing keywords.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Sends Slack/email notification</li>
                            <li>• Creates a task in your tool of choice</li>
                            <li>• Adds to CRM automatically</li>
                        </ul>
                    </div>

                    <div className="border border-green-200 bg-green-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Hot Lead + HubSpot Sync</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Syncs qualified leads to HubSpot with full conversation context.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Creates contact in HubSpot</li>
                            <li>• Adds conversation summary</li>
                            <li>• Sets lead status</li>
                        </ul>
                    </div>

                    <div className="border border-green-200 bg-green-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Demo Booked Alert</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Notifies sales team when customer requests a demo.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Sends email/SMS to sales</li>
                            <li>• Creates calendar invite</li>
                            <li>• Adds demo-booked label</li>
                        </ul>
                    </div>

                    <div className="border border-green-200 bg-green-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Human Handoff Alert</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Triggers when customer requests human agent.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Notifies available agents</li>
                            <li>• Creates escalation task</li>
                            <li>• Logs handoff reason</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Setting Up n8n */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Setting Up n8n</h2>

                <div className="space-y-6">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">1. Connect SwanDigitals to n8n</h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>Settings → Integrations → n8n</strong></li>
                            <li>Enter your n8n instance URL (e.g., https://n8n.swandigitals.com)</li>
                            <li>Generate an API key for authentication</li>
                            <li>Click <strong>Test Connection</strong></li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">2. Enable Webhooks in SwanDigitals</h3>
                        <p className="text-slate-600 mb-4">
                            Configure which events should trigger n8n workflows. See the{' '}
                            <a href="/docs/integrations" className="text-orange-600 hover:underline">Integrations guide</a>{' '}
                            for detailed webhook setup instructions.
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Go to <strong>Settings → Developers → Webhooks</strong></li>
                            <li>Click <strong>Add Webhook</strong></li>
                            <li>Select events: <code className="bg-slate-100 px-1 rounded">conversation.created</code>,{' '}
                                <code className="bg-slate-100 px-1 rounded">message.created</code>, etc.</li>
                            <li>Enter your n8n webhook URL</li>
                            <li>Save and enable the webhook</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Common Integrations */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Common Integrations</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">HubSpot</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Sync leads and contacts to HubSpot for a complete customer view.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Create/update contacts</li>
                            <li>• Create tasks and deals</li>
                            <li>• Log conversation notes</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Slack</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Get real-time notifications in Slack channels.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Hot lead alerts</li>
                            <li>• Demo booking notifications</li>
                            <li>• Support escalation alerts</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Google Sheets</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Log leads and conversations to spreadsheets.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Lead capture logging</li>
                            <li>• Conversation metrics</li>
                            <li>• Agent performance tracking</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Google Calendar</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Create calendar events for demos and follow-ups.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Demo scheduling</li>
                            <li>• Follow-up reminders</li>
                            <li>• Agent availability</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Email (Gmail/SMTP)</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Send automated emails based on conversation events.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Welcome emails</li>
                            <li>• Follow-up sequences</li>
                            <li>• Support confirmations</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">WhatsApp (via Meta)</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Trigger WhatsApp messages from workflow events.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Appointment reminders</li>
                            <li>• Order updates</li>
                            <li>• Shipping notifications</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Automation</strong> — Learn about built-in macros and rules</li>
                    <li><strong>Integrations</strong> — More connection options</li>
                    <li><strong>Troubleshooting</strong> — Debug workflow issues</li>
                </ul>
            </section>
        </>
    );
}
