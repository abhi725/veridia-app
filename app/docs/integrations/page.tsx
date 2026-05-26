
export default function IntegrationsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Integration Guides</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    SwanDigitals integrates with popular business tools to help you streamline customer support workflows.
                    This guide covers the most common integrations and how to set them up.
                </p>
            </section>

            {/* WhatsApp Business */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">WhatsApp Business</h2>
                <p className="text-slate-600 mb-6">
                    Connect your Meta WhatsApp Business API account to handle customer conversations on WhatsApp,
                    the world&apos;s most popular messaging app.
                </p>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-slate-800">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                        <li>Meta Business Manager account</li>
                        <li>WhatsApp Business API access (approved by Meta)</li>
                        <li>At least one verified WhatsApp Business phone number</li>
                    </ul>

                    <h3 className="text-lg font-medium text-slate-800">Setup Steps</h3>
                    <ol className="list-decimal list-inside space-y-3 text-slate-600">
                        <li>Log in to your SwanDigitals dashboard</li>
                        <li>Navigate to <strong>Settings → Channels → WhatsApp</strong></li>
                        <li>Click <strong>Connect WhatsApp Business</strong></li>
                        <li>Authenticate with your Meta Business account</li>
                        <li>Select your WhatsApp Business phone number from the dropdown</li>
                        <li>Configure webhook URL for incoming messages (auto-generated)</li>
                        <li>Set up your greeting message and response templates</li>
                        <li>Test the connection by sending a message to your WhatsApp number</li>
                    </ol>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                        <p className="text-sm text-amber-800">
                            <strong>Important:</strong> WhatsApp has strict policies around message templates and business
                            verification. Ensure your business account is verified by Meta to avoid restrictions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Email Integration */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Email Integration</h2>
                <p className="text-slate-600 mb-6">
                    Connect your email accounts to manage customer support via email. SwanDigitals supports
                    IMAP/SMTP integration for most email providers.
                </p>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-slate-800">Supported Email Providers</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                        <li>Gmail / Google Workspace</li>
                        <li>Microsoft 365 / Outlook</li>
                        <li>Custom domain email (IMAP/SMTP)</li>
                        <li>Zoho Mail</li>
                    </ul>

                    <h3 className="text-lg font-medium text-slate-800">Configuration</h3>
                    <ol className="list-decimal list-inside space-y-3 text-slate-600">
                        <li>Go to <strong>Settings → Channels → Email</strong></li>
                        <li>Click <strong>Add Email Account</strong></li>
                        <li>Enter your email address and display name</li>
                        <li>For Gmail: Use App Password (enable 2FA first), then <code className="bg-slate-100 px-1.5 py-0.5 rounded">smtp.gmail.com</code></li>
                        <li>For Outlook: Use your regular credentials with <code className="bg-slate-100 px-1.5 py-0.5 rounded">smtp.office365.com</code></li>
                        <li>Configure IMAP settings for incoming email retrieval</li>
                        <li>Set up email routing rules (all emails → specific inbox or assign by domain)</li>
                        <li>Test the connection to ensure emails sync properly</li>
                    </ol>
                </div>
            </section>

            {/* CRM Integrations */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">CRM Integrations</h2>
                <p className="text-slate-600 mb-6">
                    Sync customer data between SwanDigitals and your CRM to create a unified view of each customer.
                </p>

                <div className="space-y-6">
                    {/* Zendesk */}
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">Zendesk</h3>
                        <p className="text-slate-600 mb-4">
                            Two-way sync with Zendesk to sync tickets, contacts, and conversation history.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>Settings → Integrations → Zendesk</strong></li>
                            <li>Enter your Zendesk subdomain and API token</li>
                            <li>Choose sync direction: SwanDigitals → Zendesk or bidirectional</li>
                            <li>Map custom fields between platforms</li>
                            <li>Enable automatic ticket creation for new conversations</li>
                        </ol>
                    </div>

                    {/* HubSpot */}
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">HubSpot</h3>
                        <p className="text-slate-600 mb-4">
                            Import contacts and sync conversation data with HubSpot CRM.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>Settings → Integrations → HubSpot</strong></li>
                            <li>Click <strong>Connect HubSpot</strong> and authorize the app</li>
                            <li>Select which properties to sync (email, name, company, etc.)</li>
                            <li>Choose whether to create HubSpot contacts automatically</li>
                            <li>Map conversation notes to HubSpot timeline</li>
                        </ol>
                    </div>

                    {/* Salesforce */}
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">Salesforce</h3>
                        <p className="text-slate-600 mb-4">
                            Enterprise-grade integration with Salesforce for large support teams.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>Settings → Integrations → Salesforce</strong></li>
                            <li>Log in with your Salesforce credentials</li>
                            <li>Select the Salesforce instance (Production or Sandbox)</li>
                            <li>Configure object mappings (Contacts, Accounts, Cases)</li>
                            <li>Set up real-time sync or scheduled batch updates</li>
                        </ol>
                        <div className="mt-4 bg-slate-50 rounded-lg p-4">
                            <p className="text-sm text-slate-600">
                                <strong>Enterprise plan required</strong> for Salesforce integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>n8n Workflows</strong> — Connect SwanDigitals to 200+ apps via webhooks</li>
                    <li><strong>Automation</strong> — Set up macros, labels, and SwanAI bot</li>
                    <li><strong>Platform Guide</strong> — Learn about the dashboard and routing</li>
                </ul>
            </section>
        </>
    );
}