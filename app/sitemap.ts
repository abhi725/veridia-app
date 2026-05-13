import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://swandigitals.com';
    const now = new Date();

    // Core pages — highest priority
    const corePages = [
        { url: '', priority: 1.0, changeFrequency: 'daily' as const },
        { url: '/platform', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/demo', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/leadership', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/deployment', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/integrations', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/why-swandesk', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/roi-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/security', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    // Solution/industry pages — high priority for ICP targeting
    const solutionPages = [
        '/solutions',
        '/solutions/banking',
        '/solutions/healthcare',
        '/solutions/customer-service',
        '/solutions/employee-experience',
        '/solutions/it-helpdesk',
        '/solutions/retail',
        '/solutions/sales',
    ].map((url) => ({ url, priority: 0.8, changeFrequency: 'weekly' as const }));

    // Comparison pages — important for competitive search queries
    const comparePages = [
        '/compare/vs-yellow',
        '/compare/vs-kore',
        '/compare/vs-intercom',
        '/compare/vs-zendesk',
        '/compare/vs-haptik',
        '/compare/vs-drift',
        '/compare/vs-ibm',
        '/compare/vs-pega',
        '/compare/vs-kasisto',
        '/compare/vs-personetics',
        '/compare/vs-verloop',
        '/compare/vs-gupshup',
    ].map((url) => ({ url, priority: 0.7, changeFrequency: 'monthly' as const }));

    // Resource & tool pages
    const resourcePages = [
        { url: '/resources', priority: 0.6, changeFrequency: 'weekly' as const },
        { url: '/case-studies', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/whitepapers', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/tools/ofac-sanctions-search', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    // Legal pages — lowest priority
    const legalPages = [
        '/privacy',
        '/terms',
    ].map((url) => ({ url, priority: 0.3, changeFrequency: 'yearly' as const }));

    const allPages = [
        ...corePages,
        ...solutionPages,
        ...comparePages,
        ...resourcePages,
        ...legalPages,
    ];

    return allPages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
