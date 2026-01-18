import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Integrations - 100+ Pre-built Connectors | SwanDigitals',
    description: 'Connect SwanDigitals with your entire tech stack. 100+ pre-built integrations for CRM, Core Banking, ITSM, HR, E-commerce, and more.',
    keywords: ['Chatbot Integrations', 'CRM Integration', 'Banking Integration', 'ITSM Integration', 'API Connectors'],
    alternates: {
        canonical: 'https://swandigitals.com/integrations',
    },
};

export default function IntegrationsPage() {
    const integrationCategories = [
        {
            category: "CRM & Sales",
            icon: "📊",
            color: "blue",
            integrations: [
                "Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics 365", "Pipedrive",
                "Freshsales", "SugarCRM", "Insightly", "Nimble", "Copper"
            ]
        },
        {
            category: "Core Banking",
            icon: "🏦",
            color: "green",
            integrations: [
                "Finacle", "Temenos", "Oracle FLEXCUBE", "TCS BaNCS", "FIS",
                "Fiserv", "Jack Henry", "Infosys Finacle", "Mambu", "Thought Machine"
            ]
        },
        {
            category: "ITSM & Helpdesk",
            icon: "🔧",
            color: "purple",
            integrations: [
                "ServiceNow", "Jira Service Desk", "Zendesk", "Freshdesk", "Zoho Desk",
                "ManageEngine ServiceDesk Plus", "BMC Helix", "Ivanti", "ConnectWise", "SysAid"
            ]
        },
        {
            category: "HR & Payroll",
            icon: "👥",
            color: "pink",
            integrations: [
                "Workday", "SAP SuccessFactors", "BambooHR", "ADP", "Namely",
                "Gusto", "Zenefits", "Oracle HCM Cloud", "UltiPro", "Paylocity"
            ]
        },
        {
            category: "E-Commerce",
            icon: "🛒",
            color: "orange",
            integrations: [
                "Shopify", "WooCommerce", "Magento", "BigCommerce", "Wix",
                "PrestaShop", "OpenCart", "Volusion", "Squarespace", "3dcart"
            ]
        },
        {
            category: "Communication",
            icon: "💬",
            color: "indigo",
            integrations: [
                "WhatsApp Business API", "Slack", "Microsoft Teams", "Discord", "Telegram",
                "Facebook Messenger", "Instagram DM", "Twitter DM", "LINE", "WeChat"
            ]
        },
        {
            category: "Payment Gateways",
            icon: "💳",
            color: "teal",
            integrations: [
                "Stripe", "Razorpay", "PayPal", "Square", "Paytm",
                "PhonePe", "Google Pay", "CCAvenue", "Instamojo", "PayU"
            ]
        },
        {
            category: "Marketing Automation",
            icon: "📧",
            color: "red",
            integrations: [
                "Mailchimp", "Marketo", "Pardot", "ActiveCampaign", "Constant Contact",
                "SendGrid", "Campaign Monitor", "GetResponse", "Drip", "ConvertKit"
            ]
        },
        {
            category: "Analytics",
            icon: "📈",
            color: "yellow",
            integrations: [
                "Google Analytics", "Mixpanel", "Amplitude", "Segment", "Heap",
                "Pendo", "Hotjar", "FullStory", "Kissmetrics", "Matomo"
            ]
        },
        {
            category: "Cloud Storage",
            icon: "☁️",
            color: "cyan",
            integrations: [
                "Google Drive", "Dropbox", "OneDrive", "Box", "Amazon S3",
                "iCloud", "pCloud", "Sync.com", "Tresorit", "MEGA"
            ]
        },
        {
            category: "ERP Systems",
            icon: "🏢",
            color: "slate",
            integrations: [
                "SAP ERP", "Oracle ERP Cloud", "Microsoft Dynamics ERP", "NetSuite", "Odoo",
                "Sage Intacct", "Epicor", "Infor", "IFS", "Acumatica"
            ]
        },
        {
            category: "Healthcare",
            icon: "⚕️",
            color: "emerald",
            integrations: [
                "Epic EHR", "Cerner", "Allscripts", "Meditech", "Athenahealth",
                "eClinicalWorks", "NextGen Healthcare", "Practice Fusion", "Kareo", "CureMD"
            ]
        },
        {
            category: "Video Conferencing",
            icon: "📹",
            color: "violet",
            integrations: [
                "Zoom", "Microsoft Teams", "Google Meet", "Cisco Webex", "GoToMeeting",
                "BlueJeans", "Whereby", "Jitsi", "Skype", "8x8"
            ]
        },
        {
            category: "Project Management",
            icon: "📋",
            color: "lime",
            integrations: [
                "Asana", "Trello", "Monday.com", "ClickUp", "Basecamp",
                "Wrike", "Smartsheet", "Notion", "Airtable", "Jira"
            ]
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { border: string, bg: string, text: string }> = {
            blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
            green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
            purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
            pink: { border: "border-pink-200", bg: "bg-pink-50", text: "text-pink-700" },
            orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700" },
            indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-700" },
            teal: { border: "border-teal-200", bg: "bg-teal-50", text: "text-teal-700" },
            red: { border: "border-red-200", bg: "bg-red-50", text: "text-red-700" },
            yellow: { border: "border-yellow-200", bg: "bg-yellow-50", text: "text-yellow-700" },
            cyan: { border: "border-cyan-200", bg: "bg-cyan-50", text: "text-cyan-700" },
            slate: { border: "border-slate-200", bg: "bg-slate-50", text: "text-slate-700" },
            emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700" },
            violet: { border: "border-violet-200", bg: "bg-violet-50", text: "text-violet-700" },
            lime: { border: "border-lime-200", bg: "bg-lime-50", text: "text-lime-700" }
        };
        return colors[color] || colors.blue;
    };

    return (
        <SiteLayout>
            <Hero
                badge="🔌 Integrations"
                title="Connect Your Entire Stack"
                subtitle="100+ pre-built integrations to connect SwanDigitals with your favorite tools. CRM, ITSM, Banking, HR, and more."
                primaryCTA={{ text: "Request Integration", href: "/contact" }}
                secondaryCTA={{ text: "View API Docs", href: "/documentation" }}
            />

            {/* Stats */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                            <div className="text-slate-600">Pre-built Integrations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">14</div>
                            <div className="text-slate-600">Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">REST</div>
                            <div className="text-slate-600">API Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">Custom</div>
                            <div className="text-slate-600">Connectors</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Integrations by Category</h2>
                    <div className="space-y-12">
                        {integrationCategories.map((cat, index) => {
                            const colors = getColorClasses(cat.color);
                            return (
                                <div key={index} className={`p-8 rounded-2xl border-2 ${colors.border} ${colors.bg}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl">{cat.icon}</span>
                                        <h3 className={`text-2xl font-bold ${colors.text}`}>{cat.category}</h3>
                                        <span className="ml-auto text-sm font-semibold text-slate-500">
                                            {cat.integrations.length} integrations
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {cat.integrations.map((integration, i) => (
                                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center font-medium text-slate-700 hover:shadow-md transition-all">
                                                {integration}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* API Documentation */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Build Custom Integrations</h2>
                    <p className="text-xl text-slate-600 text-center mb-12">
                        Use our REST API to build custom integrations with any system
                    </p>
                    <div className="bg-white p-10 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-4xl mb-3">📚</div>
                                <h3 className="font-bold mb-2">REST API</h3>
                                <p className="text-sm text-slate-600">Full RESTful API with webhooks</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">🔧</div>
                                <h3 className="font-bold mb-2">SDKs</h3>
                                <p className="text-sm text-slate-600">Python, Node.js, Java libraries</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="font-bold mb-2">Webhooks</h3>
                                <p className="text-sm text-slate-600">Real-time event notifications</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="/documentation" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all">
                                Browse API Documentation →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Don't See Your Integration?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Our engineering team can build custom connectors for your specific needs.
                        Average delivery time: 2-3 weeks.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                        Request Custom Integration
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Integration FAQs</h2>
                    <div className="space-y-6">
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Are integrations included in all plans?</summary>
                            <p className="mt-4 text-slate-700">Yes, all pre-built integrations are included in all plans at no extra cost.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How secure are the integrations?</summary>
                            <p className="mt-4 text-slate-700">All integrations use encrypted API calls with token-based authentication. Data is transmitted via TLS 1.3.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How long does it take to set up an integration?</summary>
                            <p className="mt-4 text-slate-700">Most pre-built integrations can be configured in under 15 minutes using our visual integration builder.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Do you support on-premise integrations?</summary>
                            <p className="mt-4 text-slate-700">Yes, we support secure connections to on-premise systems via VPN or direct database connections for air-gapped deployments.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Stack?</h2>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
