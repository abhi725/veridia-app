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
            // Block AI Training Bots (protect proprietary content from model training)
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            { userAgent: 'Google-Extended', disallow: '/' },
            { userAgent: 'CCBot', disallow: '/' },
            { userAgent: 'anthropic-ai', disallow: '/' },
            { userAgent: 'Bytespider', disallow: '/' },
        ],
        sitemap: 'https://swandigitals.com/sitemap.xml',
    };
}
