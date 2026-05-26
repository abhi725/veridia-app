
export default function VoiceAIPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Voice AI</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    SwanAI Voice enables AI-powered voice agents that handle inbound and outbound phone calls.
                    Built on enterprise telephony, it provides real-time speech-to-text transcription, AI-powered responses,
                    and seamless transfer to human agents when needed.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-800">
                        <strong>Available in:</strong> PERFORMANCE PRO and SOVEREIGN ENTERPRISE plans. Requires cloud voice or Exotel/SIP trunking account.
                    </p>
                </div>
            </section>

            {/* Supported Providers */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Supported Telephony Providers</h2>
                <p className="text-slate-600 mb-6">
                    SwanAI Voice integrates with leading cloud telephony and SIP providers to ensure reliable call handling.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Cloud Voice Engines</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            High-performance voice processing with built-in ASR (Automatic Speech Recognition) and ultra low-latency responses.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Webhook-based integration</li>
                            <li>• Real-time transcription</li>
                            <li>• Voice Activity Detection (VAD)</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">SIP Telephony</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Enterprise-grade telephony with global reach. Supports SIP trunking, outbound campaigns,
                            and programmable voice workflows.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• SIP trunking support</li>
                            <li>• Programmable voice</li>
                            <li>• Call recording & storage</li>
                        </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Exotel</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            India-focused telephony provider with excellent local network coverage.
                            Ideal for businesses with high-volume inbound calling.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• IVR integration</li>
                            <li>• Missed call services</li>
                            <li>• Local number inventory</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Setting Up Voice */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Setting Up Voice AI</h2>

                <div className="space-y-6">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">1. Connect Telephony Provider</h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>Settings → Voice AI → Telephony</strong></li>
                            <li>Select your provider (Cloud Provider / SIP Trunking / Exotel)</li>
                            <li>Enter your API credentials:
                                <ul className="list-disc list-inside ml-6 mt-2 text-sm text-slate-500">
                                    <li><strong>Cloud Provider:</strong> API Key or connection token from your provider dashboard</li>
                                    <li><strong>SIP Trunking:</strong> Credentials or connection token from your SIP provider console</li>
                                    <li><strong>Exotel:</strong> API Key and App ID from exotel.com</li>
                                </ul>
                            </li>
                            <li>Click <strong>Test Connection</strong> to verify credentials</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">2. Provision Phone Numbers</h3>
                        <p className="text-slate-600 mb-4">
                            Acquire phone numbers for inbound voice calls. SwanAI will manage call routing.
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Go to <strong>Settings → Voice AI → Phone Numbers</strong></li>
                            <li>Click <strong>Add Number</strong></li>
                            <li>Choose number type:
                                <ul className="list-disc list-inside ml-6 mt-2 text-sm text-slate-500">
                                    <li><strong>Toll-free:</strong> 1800 numbers for customer support</li>
                                    <li><strong>Local:</strong> STD codes for regional presence</li>
                                    <li><strong>Mobile:</strong> Direct mobile numbers for campaigns</li>
                                </ul>
                            </li>
                            <li>Select your preferred area code and quantity</li>
                            <li>Confirm purchase (numbers are billed per month)</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">3. Configure Voice Agent</h3>
                        <p className="text-slate-600 mb-4">
                            Train your voice AI with custom prompts, welcome messages, and conversation flows.
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Navigate to <strong>Voice AI → Agent Settings</strong></li>
                            <li>Set your <strong>Welcome Message</strong> (what the AI says when call connects)</li>
                            <li>Configure <strong>AI Prompt</strong> (instructions for how the AI should behave)</li>
                            <li>Set <strong>Transfer Keywords</strong> (e.g., "agent", "human", "representative")</li>
                            <li>Enable <strong>Call Recording</strong> if compliance requires</li>
                            <li>Set <strong>Max Call Duration</strong> (default: 10 minutes)</li>
                        </ol>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-3">4. Connect to SwanDigitals Inbox</h3>
                        <p className="text-slate-600 mb-4">
                            Voice call transcripts automatically sync to SwanDigitals for unified customer view.
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Go to <strong>Settings → Channels → Voice</strong></li>
                            <li>Click <strong>Connect Voice Inbox</strong></li>
                            <li>Select or create a SwanDigitals inbox for voice calls</li>
                            <li>Configure <strong>post-call summary</strong> (AI-generated summary after each call)</li>
                            <li>Enable <strong>transcript sync</strong> to attach full conversation to ticket</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Multilingual Voice */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Multilingual Voice Support</h2>
                <p className="text-slate-600 mb-6">
                    SwanAI Voice supports 10+ Indian languages for voice interactions:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Hindi', 'English', 'Hinglish', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam'].map((lang) => (
                        <div key={lang} className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm text-slate-700">
                            {lang}
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4">
                    Configure language preference in <strong>Voice AI → Agent Settings → Language</strong>
                </p>
            </section>

            {/* Outbound Campaigns */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Outbound Voice Campaigns</h2>
                <p className="text-slate-600 mb-4">
                    Schedule automated outbound calls for appointment reminders, promotions, or lead follow-ups.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-slate-600">
                    <li>Navigate to <strong>Voice AI → Campaigns</strong></li>
                    <li>Click <strong>Create Campaign</strong></li>
                    <li>Upload your contact list (CSV with phone numbers)</li>
                    <li>Select the voice agent and phone number to use</li>
                    <li>Set schedule (time window for calls)</li>
                    <li>Configure retry logic for failed attempts</li>
                    <li>Launch campaign and monitor in real-time dashboard</li>
                </ol>
            </section>

            {/* Next Steps */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>AI Training</strong> — Add knowledge base for accurate voice responses</li>
                    <li><strong>Automation</strong> — Set up call routing rules and escalation</li>
                    <li><strong>SwanPlans</strong> — Compare plans for voice AI limits</li>
                </ul>
            </section>
        </>
    );
}
