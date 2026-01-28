import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import IntegrationCard from '@/components/ui/IntegrationCard';
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
                { name: "Salesforce", image: "/integrations/salesforce.png" },
                { name: "HubSpot", image: "/integrations/hubspot.png" },
                { name: "Zoho CRM", image: "/integrations/zoho.png" },
                { name: "Microsoft Dynamics 365", image: "/integrations/dynamics-365.png" },
                { name: "Pipedrive", image: "/integrations/pipedrive.png" },
                { name: "Freshsales", image: "/integrations/freshsales.png" },
                { name: "SugarCRM", image: "/integrations/sugarcrm.png" },
                { name: "Insightly", image: "/integrations/insightly.png" },
                { name: "Nimble", image: "/integrations/nimble.png" },
                { name: "Copper", image: "/integrations/copper.png" }
            ]
        },
        {
            category: "Core Banking",
            icon: "🏦",
            color: "green",
            integrations: [
                { name: "Infosys Finacle", image: "/integrations/infosys-finacle.png" },
                { name: "Temenos", image: "/integrations/temenos.png" },
                { name: "Oracle FLEXCUBE", image: "/integrations/oracle-flexcube.png" },
                { name: "TCS BaNCS", image: "/integrations/tcs-bancs.png" },
                { name: "FIS", image: "/integrations/fis.png" },
                { name: "Fiserv", image: "/integrations/fiserv.png" },
                { name: "Jack Henry", image: "/integrations/jack-henry.png" },
                { name: "Mambu", image: "/integrations/mambu.png" },
                { name: "Thought Machine", image: "/integrations/thought-machine.png" }
            ]
        },
        {
            category: "ITSM & Helpdesk",
            icon: "🔧",
            color: "purple",
            integrations: [
                { name: "ServiceNow", image: "/integrations/servicenow.png" },
                { name: "Jira Service Desk", image: "/integrations/jira-service-desk.png" },
                { name: "Zendesk", image: "/integrations/zendesk.png" },
                { name: "Freshdesk", image: "/integrations/freshdesk.png" },
                { name: "Zoho Desk", image: "/integrations/zoho-desk.png" },
                { name: "ManageEngine", image: "/integrations/manageengine.png" },
                { name: "BMC Helix", image: "/integrations/bmc-helix.png" },
                { name: "Ivanti", image: "/integrations/ivanti.png" },
                { name: "ConnectWise", image: "/integrations/connectwise.png" },
                { name: "SysAid", image: "/integrations/sysaid.png" }
            ]
        },
        {
            category: "HR & Payroll",
            icon: "👥",
            color: "pink",
            integrations: [
                { name: "Workday", image: "/integrations/workday.png" },
                { name: "SAP SuccessFactors", image: "/integrations/sap-successfactors.png" },
                { name: "BambooHR", image: "/integrations/bamboohr.png" },
                { name: "ADP", image: "/integrations/adp.png" },
                { name: "Namely", image: "/integrations/namely.png" },
                { name: "Gusto", image: "/integrations/gusto.png" },
                { name: "Zenefits", image: "/integrations/zenefits.png" },
                { name: "Oracle HCM", image: "/integrations/oracle-hcm.png" },
                { name: "UltiPro", image: "/integrations/ultipro.png" },
                { name: "Paylocity", image: "/integrations/paylocity.png" }
            ]
        },
        {
            category: "E-Commerce",
            icon: "🛒",
            color: "orange",
            integrations: [
                { name: "Shopify", image: "/integrations/shopify.png" },
                { name: "WooCommerce", image: "/integrations/woocommerce.png" },
                { name: "Magento", image: "/integrations/magento.png" },
                { name: "BigCommerce", image: "/integrations/bigcommerce.png" },
                { name: "Wix", image: "/integrations/wix.png" },
                { name: "PrestaShop", image: "/integrations/prestashop.png" },
                { name: "OpenCart", image: "/integrations/opencart.png" },
                { name: "Volusion", image: "/integrations/volusion.png" },
                { name: "Squarespace", image: "/integrations/squarespace.png" },
                { name: "3dcart", image: "/integrations/3dcart.png" }
            ]
        },
        {
            category: "Communication",
            icon: "💬",
            color: "indigo",
            integrations: [
                { name: "WhatsApp", image: "/integrations/whatsapp.png" },
                { name: "Slack", image: "/integrations/slack.png" },
                { name: "Microsoft Teams", image: "/integrations/microsoft-teams.png" },
                { name: "Discord", image: "/integrations/discord.png" },
                { name: "Telegram", image: "/integrations/telegram.png" },
                { name: "Messenger", image: "/integrations/messenger.png" },
                { name: "Instagram", image: "/integrations/instagram.png" },
                { name: "Twitter", image: "/integrations/twitter.png" },
                { name: "LINE", image: "/integrations/line.png" },
                { name: "WeChat", image: "/integrations/wechat.png" }
            ]
        },
        {
            category: "Payment Gateways",
            icon: "💳",
            color: "teal",
            integrations: [
                { name: "Stripe", image: "/integrations/stripe.png" },
                { name: "Razorpay", image: "/integrations/razorpay.png" },
                { name: "PayPal", image: "/integrations/paypal.png" },
                { name: "Square", image: "/integrations/square.png" },
                { name: "Paytm", image: "/integrations/paytm.png" },
                { name: "PhonePe", image: "/integrations/phonepe.png" },
                { name: "Google Pay", image: "/integrations/google-pay.png" },
                { name: "CCAvenue", image: "/integrations/ccavenue.png" },
                { name: "Instamojo", image: "/integrations/instamojo.png" },
                { name: "PayU", image: "/integrations/payu.png" }
            ]
        },
        {
            category: "Marketing Automation",
            icon: "📧",
            color: "red",
            integrations: [
                { name: "Mailchimp", image: "/integrations/mailchimp.png" },
                { name: "Marketo", image: "/integrations/marketo.png" },
                { name: "Pardot", image: "/integrations/pardot.png" },
                { name: "ActiveCampaign", image: "/integrations/activecampaign.png" },
                { name: "Constant Contact", image: "/integrations/constant-contact.png" },
                { name: "SendGrid", image: "/integrations/sendgrid.png" },
                { name: "Campaign Monitor", image: "/integrations/campaign-monitor.png" },
                { name: "GetResponse", image: "/integrations/getresponse.png" },
                { name: "Drip", image: "/integrations/drip.png" },
                { name: "ConvertKit", image: "/integrations/convertkit.png" }
            ]
        },
        {
            category: "Analytics",
            icon: "📈",
            color: "yellow",
            integrations: [
                { name: "Google Analytics", image: "/integrations/google-analytics.png" },
                { name: "Mixpanel", image: "/integrations/mixpanel.png" },
                { name: "Amplitude", image: "/integrations/amplitude.png" },
                { name: "Segment", image: "/integrations/segment.png" },
                { name: "Heap", image: "/integrations/heap.png" },
                { name: "Pendo", image: "/integrations/pendo.png" },
                { name: "Hotjar", image: "/integrations/hotjar.png" },
                { name: "FullStory", image: "/integrations/fullstory.png" },
                { name: "Kissmetrics", image: "/integrations/kissmetrics.png" },
                { name: "Matomo", image: "/integrations/matomo.png" }
            ]
        },
        {
            category: "ERP Systems",
            icon: "🏢",
            color: "slate",
            integrations: [
                { name: "SAP ERP", image: "/integrations/sap-erp.png" },
                { name: "Oracle ERP", image: "/integrations/oracle-erp.png" },
                { name: "Microsoft Dynamics", image: "/integrations/microsoft-dynamics.png" },
                { name: "NetSuite", image: "/integrations/netsuite.png" },
                { name: "Odoo", image: "/integrations/odoo.png" },
                { name: "Sage Intacct", image: "/integrations/sage-intacct.png" },
                { name: "Epicor", image: "/integrations/epicor.png" },
                { name: "Infor", image: "/integrations/infor.png" },
                { name: "IFS", image: "/integrations/ifs.png" },
                { name: "Acumatica", image: "/integrations/acumatica.png" }
            ]
        },
        {
            category: "Healthcare",
            icon: "⚕️",
            color: "emerald",
            integrations: [
                { name: "Epic EHR", image: "/integrations/epic-ehr.png" },
                { name: "Cerner", image: "/integrations/cerner.png" },
                { name: "Allscripts", image: "/integrations/allscripts.png" },
                { name: "Meditech", image: "/integrations/meditech.png" },
                { name: "Athenahealth", image: "/integrations/athenahealth.png" },
                { name: "eClinicalWorks", image: "/integrations/eclinicalworks.png" },
                { name: "NextGen", image: "/integrations/nextgen.png" },
                { name: "Practice Fusion", image: "/integrations/practice-fusion.png" },
                { name: "Kareo", image: "/integrations/kareo.png" },
                { name: "CureMD", image: "/integrations/curemd.png" }
            ]
        },
        {
            category: "Video Conferencing",
            icon: "📹",
            color: "violet",
            integrations: [
                { name: "Zoom", image: "/integrations/zoom.png" },
                { name: "MS Teams", image: "/integrations/ms-teams.png" },
                { name: "Google Meet", image: "/integrations/google-meet.png" },
                { name: "Webex", image: "/integrations/webex.png" },
                { name: "GoToMeeting", image: "/integrations/gotomeeting.png" },
                { name: "BlueJeans", image: "/integrations/bluejeans.png" },
                { name: "Whereby", image: "/integrations/whereby.png" },
                { name: "Jitsi", image: "/integrations/jitsi.png" },
                { name: "Skype", image: "/integrations/skype.png" },
                { name: "8x8", image: "/integrations/8x8.png" }
            ]
        },
        {
            category: "Project Management",
            icon: "📋",
            color: "lime",
            integrations: [
                { name: "Asana", image: "/integrations/asana.png" },
                { name: "Trello", image: "/integrations/trello.png" },
                { name: "Monday.com", image: "/integrations/monday.png" },
                { name: "ClickUp", image: "/integrations/clickup.png" },
                { name: "Basecamp", image: "/integrations/basecamp.png" },
                { name: "Wrike", image: "/integrations/wrike.png" },
                { name: "Smartsheet", image: "/integrations/smartsheet.png" },
                { name: "Notion", image: "/integrations/notion.png" },
                { name: "Airtable", image: "/integrations/airtable.png" },
                { name: "Jira", image: "/integrations/jira.png" }
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
                            <div className="text-4xl font-bold text-orange-600 mb-2">13</div>
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
                                <div key={index} className={`p-8 rounded-2xl border ${colors.border} ${colors.bg}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl">{cat.icon}</span>
                                        <h3 className={`text-2xl font-bold ${colors.text}`}>{cat.category}</h3>
                                        <span className="ml-auto text-sm font-semibold text-slate-500">
                                            {cat.integrations.length} integrations
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {cat.integrations.map((integration: any, i) => (
                                            <IntegrationCard key={i} integration={integration} />
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
