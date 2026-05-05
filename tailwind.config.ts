import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "swan-orange": "#f97316",
                "swan-pink": "#ec4899",
                "swan-charcoal": "#1e293b",
                "swan-surface": "#f8fafc",
                "swan-muted": "#64748b",
            },
            fontFamily: {
                sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
                display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out both',
                'fade-in': 'fadeIn 0.5s ease-out both',
                'slide-in-left': 'slideInLeft 0.6s ease-out both',
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 4s ease-in-out infinite',
                'pulse-amber': 'pulseAmber 2s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-24px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                pulseAmber: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.3)' },
                    '50%': { boxShadow: '0 0 0 12px rgba(245,158,11,0)' },
                },
            },
            boxShadow: {
                'orange': '0 4px 24px rgba(249,115,22,0.20)',
                'orange-lg': '0 8px 40px rgba(249,115,22,0.30)',
                'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.06)',
            },
        },
    },
    plugins: [],
};
export default config;
