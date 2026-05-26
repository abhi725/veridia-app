import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import IntegrationCard from '@/components/ui/IntegrationCard';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Integrations - 100+ Pre-built Connectors',
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
                { name: "Salesforce", image: "/integrations/salesforce.png", isNative: false },
                { name: "HubSpot", image: "/integrations/hubspot.png", isNative: true },
                { name: "Zoho CRM", image: "/integrations/zoho.png", isNative: true },
                { name: "Microsoft Dynamics 365", image: "/integrations/dynamics-365.png", isNative: false },
                { name: "Pipedrive", image: "/integrations/pipedrive.png", isNative: false },
                { name: "Freshsales", image: "/integrations/freshsales.png", isNative: false },
                { name: "SugarCRM", image: "/integrations/sugarcrm.png", isNative: false },
                { name: "Insightly", image: "/integrations/insightly.png", isNative: false },
                { name: "Nimble", image: "/integrations/nimble.png", isNative: false },
                { name: "Copper", image: "/integrations/copper.png", isNative: false }
            ]
        },
        {
            category: "Core Banking",
            icon: "🏦",
            color: "green",
            integrations: [
                { name: "Infosys Finacle", image: "/integrations/infosys-finacle.png", isNative: false },
                { name: "Temenos", image: "/integrations/temenos.png", isNative: false },
                { name: "Oracle FLEXCUBE", image: "/integrations/oracle-flexcube.png", isNative: false },
                { name: "TCS BaNCS", image: "/integrations/tcs-bancs.png", isNative: false },
                { name: "FIS", image: "/integrations/fis.png", isNative: false },
                { name: "Fiserv", image: "/integrations/fiserv.png", isNative: false },
                { name: "Jack Henry", image: "/integrations/jack-henry.png", isNative: false },
                { name: "Mambu", image: "/integrations/mambu.png", isNative: false },
                { name: "Thought Machine", image: "/integrations/thought-machine.png", isNative: false }
            ]
        },
        {
            category: "ITSM & Helpdesk",
            icon: "🔧",
            color: "purple",
            integrations: [
                { name: "ServiceNow", image: "/integrations/servicenow.png", isNative: false },
                { name: "Jira Service Desk", image: "/integrations/jira-service-desk.png", isNative: false },
                { name: "Zendesk", image: "/integrations/zendesk.png", isNative: true },
                { name: "Freshdesk", image: "/integrations/freshdesk.png", isNative: true },
                { name: "Zoho Desk", image: "/integrations/zoho-desk.png", isNative: true },
                { name: "ManageEngine", image: "/integrations/manageengine.png", isNative: false },
                { name: "BMC Helix", image: "/integrations/bmc-helix.png", isNative: false },
                { name: "Ivanti", image: "/integrations/ivanti.png", isNative: false },
                { name: "ConnectWise", image: "/integrations/connectwise.png", isNative: false },
                { name: "SysAid", image: "/integrations/sysaid.png", isNative: false }
            ]
        },
        {
            category: "HR & Payroll",
            icon: "👥",
            color: "pink",
            integrations: [
                { name: "Workday", image: "/integrations/workday.png", isNative: false },
                { name: "SAP SuccessFactors", image: "/integrations/sap-successfactors.png", isNative: false },
                { name: "BambooHR", image: "/integrations/bamboohr.png", isNative: false },
                { name: "ADP", image: "/integrations/adp.png", isNative: false },
                { name: "Namely", image: "/integrations/namely.png", isNative: false },
                { name: "Gusto", image: "/integrations/gusto.png", isNative: false },
                { name: "Zenefits", image: "/integrations/zenefits.png", isNative: false },
                { name: "Oracle HCM", image: "/integrations/oracle-hcm.png", isNative: false },
                { name: "UltiPro", image: "/integrations/ultipro.png", isNative: false },
                { name: "Paylocity", image: "/integrations/paylocity.png", isNative: false }
            ]
        },
        {
            category: "E-Commerce",
            icon: "🛒",
            color: "orange",
            integrations: [
                { name: "Shopify", image: "/integrations/shopify.png", isNative: true },
                { name: "WooCommerce", image: "/integrations/woocommerce.png", isNative: true },
                { name: "Magento", image: "/integrations/magento.png", isNative: false },
                { name: "BigCommerce", image: "/integrations/bigcommerce.png", isNative: false },
                { name: "Wix", image: "/integrations/wix.png", isNative: false },
                { name: "PrestaShop", image: "/integrations/prestashop.png", isNative: false },
                { name: "OpenCart", image: "/integrations/opencart.png", isNative: false },
                { name: "Volusion", image: "/integrations/volusion.png", isNative: false },
                { name: "Squarespace", image: "/integrations/squarespace.png", isNative: false },
                { name: "3dcart", image: "/integrations/3dcart.png", isNative: false }
            ]
        },
        {
            category: "Communication",
            icon: "💬",
            color: "indigo",
            integrations: [
                { name: "WhatsApp", image: "/integrations/whatsapp.png", isNative: true },
                { name: "Slack", image: "/integrations/slack.png", isNative: true },
                { name: "Microsoft Teams", image: "/integrations/microsoft-teams.png", isNative: true },
                { name: "Discord", image: "/integrations/discord.png", isNative: true },
                { name: "Telegram", image: "/integrations/telegram.png", isNative: true },
                { name: "Messenger", image: "/integrations/messenger.png", isNative: true },
                { name: "Instagram", image: "/integrations/instagram.png", isNative: true },
                { name: "Twitter", image: "/integrations/twitter.png", isNative: false },
                { name: "LINE", image: "/integrations/line.png", isNative: false },
                { name: "WeChat", image: "/integrations/wechat.png", isNative: false }
            ]
        },
        {
            category: "Payment Gateways",
            icon: "💳",
            color: "teal",
            integrations: [
                { name: "Stripe", image: "/integrations/stripe.png", isNative: true },
                { name: "Razorpay", image: "/integrations/razorpay.png", isNative: true },
                { name: "PayPal", image: "/integrations/paypal.png", isNative: true },
                { name: "Square", image: "/integrations/square.png", isNative: false },
                { name: "Paytm", image: "/integrations/paytm.png", isNative: true },
                { name: "PhonePe", image: "/integrations/phonepe.png", isNative: true },
                { name: "Google Pay", image: "/integrations/google-pay.png", isNative: true },
                { name: "CCAvenue", image: "/integrations/ccavenue.png", isNative: false },
                { name: "Instamojo", image: "/integrations/instamojo.png", isNative: false },
                { name: "PayU", image: "/integrations/payu.png", isNative: false }
            ]
        },
        {
            category: "Marketing Automation",
            icon: "📧",
            color: "red",
            integrations: [
                { name: "Mailchimp", image: "/integrations/mailchimp.png", isNative: false },
                { name: "Marketo", image: "/integrations/marketo.png", isNative: false },
                { name: "Pardot", image: "/integrations/pardot.png", isNative: false },
                { name: "ActiveCampaign", image: "/integrations/activecampaign.png", isNative: false },
                { name: "Constant Contact", image: "/integrations/constant-contact.png", isNative: false },
                { name: "SendGrid", image: "/integrations/sendgrid.png", isNative: true },
                { name: "Campaign Monitor", image: "/integrations/campaign-monitor.png", isNative: false },
                { name: "GetResponse", image: "/integrations/getresponse.png", isNative: false },
                { name: "Drip", image: "/integrations/drip.png", isNative: false },
                { name: "ConvertKit", image: "/integrations/convertkit.png", isNative: false }
            ]
        },
        {
            category: "Analytics",
            icon: "📈",
            color: "yellow",
            integrations: [
                { name: "Google Analytics", image: "/integrations/google-analytics.png", isNative: false },
                { name: "Mixpanel", image: "/integrations/mixpanel.png", isNative: false },
                { name: "Amplitude", image: "/integrations/amplitude.png", isNative: false },
                { name: "Segment", image: "/integrations/segment.png", isNative: false },
                { name: "Heap", image: "/integrations/heap.png", isNative: false },
                { name: "Pendo", image: "/integrations/pendo.png", isNative: false },
                { name: "Hotjar", image: "/integrations/hotjar.png", isNative: false },
                { name: "FullStory", image: "/integrations/fullstory.png", isNative: false },
                { name: "Kissmetrics", image: "/integrations/kissmetrics.png", isNative: false },
                { name: "Matomo", image: "/integrations/matomo.png", isNative: false }
            ]
        },
        {
            category: "ERP Systems",
            icon: "🏢",
            color: "slate",
            integrations: [
                { name: "SAP ERP", image: "/integrations/sap-erp.png", isNative: false },
                { name: "Oracle ERP", image: "/integrations/oracle-erp.png", isNative: false },
                { name: "Microsoft Dynamics", image: "/integrations/microsoft-dynamics.png", isNative: false },
                { name: "NetSuite", image: "/integrations/netsuite.png", isNative: false },
                { name: "Odoo", image: "/integrations/odoo.png", isNative: false },
                { name: "Sage Intacct", image: "/integrations/sage-intacct.png", isNative: false },
                { name: "Epicor", image: "/integrations/epicor.png", isNative: false },
                { name: "Infor", image: "/integrations/infor.png", isNative: false },
                { name: "IFS", image: "/integrations/ifs.png", isNative: false },
                { name: "Acumatica", image: "/integrations/acumatica.png", isNative: false }
            ]
        },
        {
            category: "Healthcare",
            icon: "⚕️",
            color: "emerald",
            integrations: [
                { name: "Epic EHR", image: "/integrations/epic-ehr.png", isNative: false },
                { name: "Cerner", image: "/integrations/cerner.png", isNative: false },
                { name: "Allscripts", image: "/integrations/allscripts.png", isNative: false },
                { name: "Meditech", image: "/integrations/meditech.png", isNative: false },
                { name: "Athenahealth", image: "/integrations/athenahealth.png", isNative: false },
                { name: "eClinicalWorks", image: "/integrations/eclinicalworks.png", isNative: false },
                { name: "NextGen", image: "/integrations/nextgen.png", isNative: false },
                { name: "Practice Fusion", image: "/integrations/practice-fusion.png", isNative: false },
                { name: "Kareo", image: "/integrations/kareo.png", isNative: false },
                { name: "CureMD", image: "/integrations/curemd.png", isNative: false }
            ]
        },
        {
            category: "Video Conferencing",
            icon: "📹",
            color: "violet",
            integrations: [
                { name: "Zoom", image: "/integrations/zoom.png", isNative: false },
                { name: "MS Teams", image: "/integrations/ms-teams.png", isNative: false },
                { name: "Google Meet", image: "/integrations/google-meet.png", isNative: false },
                { name: "Webex", image: "/integrations/webex.png", isNative: false },
                { name: "GoToMeeting", image: "/integrations/gotomeeting.png", isNative: false },
                { name: "BlueJeans", image: "/integrations/bluejeans.png", isNative: false },
                { name: "Whereby", image: "/integrations/whereby.png", isNative: false },
                { name: "Jitsi", image: "/integrations/jitsi.png", isNative: false },
                { name: "Skype", image: "/integrations/skype.png", isNative: false },
                { name: "8x8", image: "/integrations/8x8.png", isNative: false }
            ]
        },
        {
            category: "Project Management",
            icon: "📋",
            color: "lime",
            integrations: [
                { name: "Asana", image: "/integrations/asana.png", isNative: false },
                { name: "Trello", image: "/integrations/trello.png", isNative: false },
                { name: "Monday.com", image: "/integrations/monday.png", isNative: false },
                { name: "ClickUp", image: "/integrations/clickup.png", isNative: false },
                { name: "Basecamp", image: "/integrations/basecamp.png", isNative: false },
                { name: "Wrike", image: "/integrations/wrike.png", isNative: false },
                { name: "Smartsheet", image: "/integrations/smartsheet.png", isNative: false },
                { name: "Notion", image: "/integrations/notion.png", isNative: true },
                { name: "Airtable", image: "/integrations/airtable.png", isNative: false },
                { name: "Jira", image: "/integrations/jira.png", isNative: true }
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

            {/* Credibility / Trust Banner */}
            <section className="py-8 bg-amber-50/60 border-y border-amber-200/80">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="p-3 bg-amber-100 text-amber-800 rounded-xl text-2xl">
                            🛡️
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-amber-900 mb-1">
                                Secure Integration Architecture & Compliance Notice
                            </h3>
                            <p className="text-sm text-amber-800 leading-relaxed max-w-5xl">
                                To protect sensitive banking, healthcare, and enterprise data in accordance with <strong>DPDP Act 2023</strong> and <strong>RBI cyber security guidelines</strong>, SwanDigitals runs on a segregated integration model. We separate <strong>Native Integrations</strong> (directly built into our core messaging engine) from <strong>API & Custom Workflow Integrations</strong> (securely connected via local REST APIs, air-gapped webhooks, or n8n workflow managers).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
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
