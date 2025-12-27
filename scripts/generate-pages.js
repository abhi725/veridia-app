// Page generation utility - creates template pages for all routes
const fs = require('fs');
const path = require('path');

const baseDir = 'f:/website softwares/veridia-app/app';

const pageTemplate = (title, subtitle, badge = '') => `"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';

export default function Page() {
    return (
        <SiteLayout>
            <Hero
                ${badge ? `badge="${badge}"` : ''}
                title="${title}"
                subtitle="${subtitle}"
                primaryCTA={{ text: "Get Started", href: "/demo" }}
                secondaryCTA={{ text: "Learn More", href: "/documentation" }}
            />
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-lg">
                        <h2>Overview</h2>
                        <p className="text-lg text-slate-700">${subtitle}</p>
                        <p className="text-lg text-slate-700 mt-4">
                            Contact our team to learn more about how ${title} can transform your business operations.
                        </p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
`;

// Define all pages
const pages = {
    // TIER 2: Product Pages
    'integrations': { title: 'Integrations', subtitle: '75+ pre-built integrations with your favorite tools', badge: '🔌 Integrations' },
    'deployment': { title: 'Deployment Options', subtitle: 'Cloud, on-premise, or hybrid deployment for maximum flexibility', badge: '🚀 Deployment' },
    'api': { title: 'API & Developers', subtitle: 'RESTful APIs, SDKs, and comprehensive developer documentation', badge: '💻 Developers' },
    'features/conversational-ai': { title: 'Conversational AI', subtitle: 'Natural, human-like conversations powered by advanced AI', badge: '💬 Conversational AI' },
    'features/nlu': { title: 'Natural Language Understanding', subtitle: 'Advanced NLU that understands context, intent, and sentiment', badge: '🧠 NLU' },
    'features/analytics': { title: 'Analytics Dashboard', subtitle: 'Real-time insights into conversations, performance, and ROI', badge: '📊 Analytics' },

    // TIER 3: Solutions
    'solutions': { title: 'Solutions Overview', subtitle: 'Industry and use-case specific AI solutions', badge: '✨ Solutions' },
    'solutions/customer-service': { title: 'Customer Service Automation', subtitle: 'Automate 90% of customer support tickets', badge: '🎧 Customer Service' },
    'solutions/employee-experience': { title: 'Employee Experience', subtitle: 'Internal HR and IT support automation', badge: '👥 Employee EX' },
    'solutions/it-helpdesk': { title: 'IT Helpdesk', subtitle: 'Resolve IT tickets instantly with AI', badge: '🖥️ IT Support' },
    'solutions/sales': { title: 'Sales Assistant', subtitle: 'AI-powered sales support and lead qualification', badge: '💼 Sales' },
    'solutions/banking': { title: 'Banking & Financial Services', subtitle: 'GDPR-compliant banking chatbots', badge: '🏦 Banking' },
    'solutions/healthcare': { title: 'Healthcare', subtitle: 'HIPAA-compliant healthcare AI assistants', badge: '🏥 Healthcare' },
    'solutions/retail': { title: 'Retail & E-commerce', subtitle: 'Shopping assistance and order tracking', badge: '🛍️ Retail' },

    // TIER 4: Resources
    'resources': { title: 'Resource Center', subtitle: 'Guides, whitepapers, and educational content', badge: '📚 Resources' },
    'blog': { title: 'Blog', subtitle: 'Latest insights on AI, automation, and customer experience', badge: '✍️ Blog' },
    'documentation': { title: 'Documentation', subtitle: 'Technical docs, API reference, and guides', badge: '📖 Docs' },
    'whitepapers': { title: 'Whitepapers', subtitle: 'In-depth research and industry reports', badge: '📄 Whitepapers' },
    'webinars': { title: 'Webinars', subtitle: 'Live and recorded educational webinars', badge: '🎥 Webinars' },
    'videos': { title: 'Video Library', subtitle: 'Product demos, tutorials, and customer stories', badge: '📹 Videos' },
    'ai-guide': { title: 'AI Guide', subtitle: 'Learn about enterprise AI and chatbot best practices', badge: '🎓 AI Guide' },
    'roi-calculator': { title: 'ROI Calculator', subtitle: 'Calculate potential savings and ROI from automation', badge: '💰 ROI Calculator' },

    // TIER 5: Comparison
    'why-veridia': { title: 'Why Choose Veridia', subtitle: 'Faster, leaner, and more affordable than competitors', badge: '⭐ Why Veridia' },
    'compare/vs-kore': { title: 'Veridia vs Kore.ai', subtitle: '10x faster deployment, 60% lower cost', badge: '🆚 vs Kore.ai' },
    'compare/vs-yellow': { title: 'Veridia vs Yellow.ai', subtitle: 'True on-premise, full data sovereignty', badge: '🆚 vs Yellow.ai' },
    'compare/vs-ibm': { title: 'Veridia vs IBM watsonx', subtitle: 'Modern tech stack, developer-friendly', badge: '🆚 vs IBM' },

    // TIER 6: Company & Legal
    'leadership': { title: 'Leadership Team', subtitle: 'Meet the team building the future of enterprise AI', badge: '👔 Leadership' },
    'partners': { title: 'Partners', subtitle: 'Technology and integration partners', badge: '🤝 Partners' },
    'careers': { title: 'Careers', subtitle: 'Join our growing team', badge: '💼 Careers' },
    'privacy': { title: 'Privacy Policy', subtitle: 'How we protect and handle your data', badge: '🔒 Privacy' },
    'terms': { title: 'Terms of Service', subtitle: 'Terms and conditions of use', badge: '📋 Terms' }
};

// Generate all pages
Object.keys(pages).forEach(route => {
    const page = pages[route];
    const dir = path.join(baseDir, route);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const content = pageTemplate(page.title, page.subtitle, page.badge);
    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

console.log(`Created ${Object.keys(pages).length} pages!`);
