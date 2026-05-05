
export default function TroubleshootingPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Troubleshooting Guide</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    Find solutions to common issues with SwanDesk. If you can&apos;t find what you&apos;re looking for,
                    contact our support team at the bottom of this page.
                </p>
            </section>

            {/* AI Not Responding */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">AI Not Responding</h2>
                <p className="text-slate-600 mb-4">
                    If your chatbot isn&apos;t responding or gives irrelevant answers, follow this checklist:
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">1. Verify Knowledge Base Indexing</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>AI → Knowledge Base</strong></li>
                            <li>Check if your documents show &quot;Indexed&quot; status</li>
                            <li>If stuck at &quot;Processing&quot;, wait 5-10 minutes for large files</li>
                            <li>Delete and re-upload any failed documents</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">2. Check Channel Connection</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>Settings → Channels</strong></li>
                            <li>Ensure your channel shows &quot;Connected&quot; status (green indicator)</li>
                            <li>For WhatsApp: verify your phone number is active</li>
                            <li>For Web Chat: confirm the embed code is on your site</li>
                            <li>For Email: check IMAP sync is working</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">3. Review AI Configuration</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Go to <strong>AI → Settings</strong></li>
                            <li>Ensure the AI is enabled (not paused or in maintenance mode)</li>
                            <li>Check the &quot;Fallback to human&quot; threshold isn&apos;t set too high</li>
                            <li>Verify response timeout isn&apos;t too short (minimum 30 seconds)</li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-sm text-amber-800">
                            <strong>Tip:</strong> Use the &quot;Test AI&quot; button in the conversation panel to check
                            responses without sending actual messages to customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* WhatsApp Connection Errors */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">WhatsApp Connection Errors</h2>
                <p className="text-slate-600 mb-4">
                    Common WhatsApp Business API issues and how to resolve them.
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">&quot;Phone Number Not Verified&quot;</h3>
                        <p className="text-slate-600 mb-2">Your WhatsApp Business API phone number hasn&apos;t been verified by Meta.</p>
                        <ol className="list-decimal list-inside space-y-1 text-slate-600">
                            <li>Log in to your Meta Business Manager</li>
                            <li>Navigate to WhatsApp Business API settings</li>
                            <li>Complete the phone number verification process</li>
                            <li>Wait 24-48 hours for verification to process</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">&quot;Webhook URL Invalid&quot;</h3>
                        <p className="text-slate-600 mb-2">SwanDesk can&apos;t validate your webhook endpoint.</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                            <li>Ensure your SwanDesk workspace is on a paid plan</li>
                            <li>Check that your server accepts HTTPS requests</li>
                            <li>Verify the webhook URL matches the one in Meta settings</li>
                            <li>Check SwanDesk&apos;s status page for API availability</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">&quot;Message Template Rejected&quot;</h3>
                        <p className="text-slate-600 mb-2">Your message templates don&apos;t comply with Meta policies.</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                            <li>Keep template names under 30 characters</li>
                            <li>Use only alphanumeric characters and underscores</li>
                            <li>Avoid promotional language or urgency (e.g., &quot;Act now!&quot;)</li>
                            <li>Include an opt-out option (&quot;Reply STOP to unsubscribe&quot;)</li>
                            <li>Re-submit templates after fixing issues</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">&quot;Rate Limit Exceeded&quot;</h3>
                        <p className="text-slate-600 mb-2">You&apos;ve sent too many messages in a short time.</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                            <li>WhatsApp Business API has hourly/daily sending limits</li>
                            <li>Wait for the rate limit window to reset</li>
                            <li>Consider upgrading your plan for higher limits</li>
                            <li>Implement message queuing to pace outgoing messages</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Message Delivery Delays */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Message Delivery Delays</h2>
                <p className="text-slate-600 mb-4">
                    If messages are taking longer than expected to deliver, check these factors:
                </p>

                <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">Network & Latency</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Check SwanDesk status at <strong>status.swandigitals.com</strong></li>
                            <li>WhatsApp messages typically deliver within 5-30 seconds</li>
                            <li>Email delivery may take 1-5 minutes depending on provider</li>
                            <li>Web chat messages should appear instantly (&lt;2 seconds)</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">Queue & Load</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>High message volume can cause delays during peak hours</li>
                            <li>AI processing adds 2-5 seconds per response</li>
                            <li>Large knowledge base queries may take longer</li>
                            <li>Check <strong>Settings → Usage</strong> for queue depth</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-slate-900 mb-2">WhatsApp Specific</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Meta may throttle during high-traffic periods</li>
                            <li>Message templates have priority over free-form replies</li>
                            <li>New phone numbers have lower initial limits</li>
                            <li>Verify recipient hasn&apos;t blocked your number</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contacting Support */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Contacting Support</h2>
                <p className="text-slate-600 mb-6">
                    Still having issues? Our engineering team is here to help.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-slate-900">Email Support</h3>
                            <p className="text-slate-600">support@swandigitals.com</p>
                            <p className="text-sm text-slate-500">Response time: 4-8 business hours</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-slate-900">Live Chat</h3>
                            <p className="text-slate-600">Available in-app during business hours</p>
                            <p className="text-sm text-slate-500">Mon-Fri, 9 AM - 6 PM IST</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-slate-900">Raise a Ticket</h3>
                            <p className="text-slate-600">For technical issues requiring engineering review</p>
                            <p className="text-sm text-slate-500">Include your workspace ID, channel type, and error message</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}