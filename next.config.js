/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Fix: metadataBase warning — ensures OG/Twitter images resolve correctly
  // This suppresses the persistent build log warning across all pages
  experimental: {},
  // NOTE: async headers() is intentionally removed.
  // With output:'export', Next.js generates purely static HTML/CSS/JS files.
  // The headers() function has ZERO effect on static exports — they are never sent.
  // Security headers (X-Frame-Options, HSTS, CSP, etc.) MUST be configured at the
  // server/CDN level: Nginx, Cloudflare, Vercel headers, or _headers file.
  // See: nginx-headers.conf in this repo root for the correct server-side config.
};

module.exports = nextConfig;

