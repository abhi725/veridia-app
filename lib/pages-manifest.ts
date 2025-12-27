// This file generates all remaining 38 pages programmatically
// Each page follows a consistent template structure

const pages = {
    // TIER 1: Core Pages (6 more)
    '/about': { title: 'About Veridia AI', content: 'Learn about our mission to revolutionize enterprise AI' },
    '/contact': { title: 'Contact Us', content: 'Get in touch with our team' },
    '/demo': { title: 'Book a Demo', content: 'Schedule a personalized demo' },
    '/security': { title: 'Security & Compliance', content: 'SOC 2, GDPR, HIPAA certified' },
    '/case-studies': { title: 'Customer Success Stories', content: 'See how companies use Veridia' },

    // TIER 2: Product Pages (7 pages)
    '/features': { title: 'Features Overview', content: 'Explore all Veridia capabilities' },
    '/features/conversational-ai': { title: 'Conversational AI', content: 'Natural language understanding' },
    '/features/nlu': { title: 'Natural Language Understanding', content: 'Advanced NLU powered by Gemini' },
    '/features/analytics': { title: 'Analytics Dashboard', content: 'Real-time insights and reporting' },
    '/integrations': { title: 'Integrations', content: '75+ pre-built integrations' },
    '/deployment': { title: 'Deployment Options', content: 'Cloud, on-premise, or hybrid' },
    '/api': { title: 'API & Developers', content: 'RESTful APIs and SDKs' },

    // TIER 3: Solutions (8 pages)
    '/solutions': { title: 'Solutions Overview', content: 'Industry and use-case specific solutions' },
    '/solutions/customer-service': { title: 'Customer Service Automation', content: 'Automate 90% of support tickets' },
    '/solutions/employee-experience': { title: 'Employee Experience', content: 'Internal helpdesk automation' },
    '/solutions/it-helpdesk': { title: 'IT Helpdesk', content: 'Resolve IT tickets instantly' },
    '/solutions/sales': { title: 'Sales Assistant', content: 'AI-powered sales support' },
    '/solutions/banking': { title: 'Banking & Financial Services', content: 'Compliant banking chatbots' },
    '/solutions/healthcare': { title: 'Healthcare', content: 'HIPAA-compliant healthcare AI' },
    '/solutions/retail': { title: 'Retail & E-commerce', content: 'Shop ping assistance and support' },

    // TIER 4: Resources (8 pages)
    '/resources': { title: 'Resource Center', content: 'Guides, whitepapers, and more' },
    '/blog': { title: 'Blog', content: 'Latest insights on AI and automation' },
    '/documentation': { title: 'Documentation', content: 'Technical docs and guides' },
    '/whitepapers': { title: 'Whitepapers', content: 'In-depth industry reports' },
    '/webinars': { title: 'Webinars', content: 'Live and recorded webinars' },
    '/videos': { title: 'Video Library', content: 'Product demos and tutorials' },
    '/ai-guide': { title: 'AI Guide', content: 'Learn about enterprise AI' },
    '/roi-calculator': { title: 'ROI Calculator', content: 'Calculate your savings' },

    // TIER 5: Comparison (4 pages)
    '/why-veridia': { title: 'Why Choose Veridia', content: 'Our competitive advantages' },
    '/compare/vs-kore': { title: 'Veridia vs Kore.ai', content: '10x faster deployment' },
    '/compare/vs-yellow': { title: 'Veridia vs Yellow.ai', content: 'True on-premise hosting' },
    '/compare/vs-ibm': { title: 'Veridia vs IBM watsonx', content: 'Modern tech stack' },

    // TIER 6: Company & Legal (5 pages)
    '/leadership': { title: 'Leadership Team', content: 'Meet our executive team' },
    '/partners': { title: 'Partners', content: 'Technology and integration partners' },
    '/careers': { title: 'Careers', content: 'Join our growing team' },
    '/privacy': { title: 'Privacy Policy', content: 'How we protect your data' },
    '/terms': { title: 'Terms of Service', content: 'Terms and conditions' },
};

export default pages;
