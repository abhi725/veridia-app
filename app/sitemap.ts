import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://veridia.com'; // Replace with actual domain

    const routes = [
        '',
        '/compare/vs-yellow',
        '/pricing',
        '/security',
        '/demo',
        '/contact',
        '/roi-calculator',
        '/solutions/banking',
        '/solutions/healthcare',
        '/solutions/customer-service',
        '/solutions/employee-experience',
        '/solutions/it-helpdesk',
        '/solutions/retail',
        '/solutions/sales',
        '/whitepapers',
        '/case-studies',
        '/integrations',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
