
export default function QuickstartPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Quick Start Guide</h1>

            {/* Introduction */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    SwanDigitals is an AI-powered customer service platform that helps businesses automate support conversations
                    across multiple channels including WhatsApp, web chat, and email. This guide will walk you through
                    setting up your account and connecting your first channel in under 5 minutes.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-800">
                        <strong>Prerequisites:</strong> A valid email address and access to a WhatsApp Business account
                        (optional, for WhatsApp integration).
                    </p>
                </div>
            </section>

            {/* Account Setup */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Account Setup</h2>
                <p className="text-slate-600 mb-4">Follow these steps to create your SwanDigitals account:</p>
                <ol className="list-decimal list-inside space-y-3 text-slate-600">
                    <li>Visit <strong>chat.swandigitals.com</strong> and click <strong>Get Started Free</strong></li>
                    <li>Enter your business email and create a secure password</li>
                    <li>Verify your email address via the link sent to your inbox</li>
                    <li>Complete your profile by adding your company name and logo</li>
                    <li>Your workspace will be automatically created and ready to use</li>
                </ol>
            </section>

            {/* Testing the AI */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Testing the AI</h2>
                <p className="text-slate-600 mb-4">
                    Once your channel is connected, test your AI chatbot to ensure it&apos;s responding correctly.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-slate-600">
                    <li>Navigate to <strong>Inbox → Demo Inbox</strong> or your connected channel</li>
                    <li>Send a test message through your website widget or WhatsApp</li>
                    <li>The AI should respond within seconds with an automated reply</li>
                    <li>Check the conversation panel on the left to see the message flow</li>
                    <li>If responses seem off, visit <strong>AI → Training</strong> to review your knowledge base</li>
                </ol>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                        <strong>Success:</strong> Your chatbot is ready when it responds accurately to basic queries.
                        Train it further by adding documents to your knowledge base.
                    </p>
                </div>
            </section>

            {/* Next Steps */}
            <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <p className="text-slate-600 mb-4">
                    Now that your chatbot is live, explore these resources to get the most out of SwanDigitals:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Platform Guide</strong> — Learn about dashboard features, routing rules, and labels</li>
                    <li><strong>Integrations</strong> — Connect your CRM, email, WhatsApp, and other business tools</li>
                    <li><strong>AI Training</strong> — Upload documents to improve chatbot accuracy</li>
                </ul>
            </section>
        </>
    );
}