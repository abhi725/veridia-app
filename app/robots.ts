import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Standard crawlers
            { userAgent: '*', allow: '/', disallow: '/private/' },
            // Allow AI Retrieval Bots (appear in AI search answers)
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'OAI-SearchBot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Claude-User', allow: '/' },
            { userAgent: 'Applebot-Extended', allow: '/' },
            // Allow AI Training Bots (enables AI citation & GEO discoverability)
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'Bytespider', allow: '/' },
        ],
        sitemap: 'https://swandigitals.com/sitemap.xml',
    };
}
