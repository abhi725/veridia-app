import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
    title: {
        default: 'SwanDesk | AI Customer Support Platform for India',
        template: '%s | SwanDesk'
    },
    description: 'The AI-powered customer support platform built for Indian businesses. WhatsApp, Voice, Chat — all in one inbox. On-premise for BFSI. Start free.',
    keywords: ['SwanDesk', 'customer support', 'helpdesk', 'WhatsApp inbox', 'AI chatbot India', 'Sovereign AI India', 'On-premise LLM', 'DPDP Compliant AI', 'Abhishek Ambad'],
    authors: [{ name: 'Abhishek Ambad', url: 'https://swandigitals.com/leadership' }],
    creator: 'SwanDigitals',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://swandigitals.com',
        title: 'SwanDesk | AI Customer Support Platform for India',
        description: 'The AI-powered customer support platform built for Indian businesses. WhatsApp, Voice, Chat — all in one inbox. On-premise for BFSI. Start free.',
        siteName: 'SwanDigitals',
        images: [
            {
                url: '/og-image.jpg', // Ensure this image exists in public folder
                width: 1200,
                height: 630,
                alt: 'SwanDesk — AI Customer Support Platform for India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SwanDesk | AI Customer Support Platform for India',
        description: 'The AI-powered customer support platform for Indian businesses. WhatsApp, Voice, Chat — in one inbox.',
        creator: '@swandigitals',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://swandigitals.com',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://swandigitals.com/#organization',
                name: 'SwanDigitals',
                url: 'https://swandigitals.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://swandigitals.com/logo.png',
                },
                description: 'Enterprise AI Platform for Sovereign Data - On-premise chatbots and voice agents for Indian businesses',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'B31 flat, Aaykar society, Kothrud',
                    addressLocality: 'Pune',
                    postalCode: '411038',
                    addressRegion: 'Maharashtra',
                    addressCountry: 'IN',
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-7770070762',
                    contactType: 'customer service',
                    email: 'support@swandigitals.com',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi'],
                },
                founder: {
                    '@type': 'Person',
                    name: 'Abhishek Ambad',
                },
                sameAs: [
                    'https://linkedin.com/company/swandigitals',
                    'https://twitter.com/swandigitals',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': 'https://swandigitals.com/#website',
                url: 'https://swandigitals.com',
                name: 'SwanDigitals',
                publisher: {
                    '@id': 'https://swandigitals.com/#organization',
                },
                inLanguage: 'en-IN',
            },
            {
                '@type': 'SoftwareApplication',
                name: 'SwanDesk',
                operatingSystem: 'Web, On-Premise',
                applicationCategory: 'BusinessApplication',
                offers: {
                    '@type': 'AggregateOffer',
                    lowPrice: '10000',
                    highPrice: '28000',
                    priceCurrency: 'INR',
                    offerCount: '3',
                },
                featureList: [
                    'Multi-channel inbox (WhatsApp, Email, Web chat, Instagram, Telegram)',
                    'SwanAI Control Center with 12 tabs',
                    'Voice bot in 10+ Indian languages',
                    'On-premise air-gapped mode for BFSI',
                    'DPDP 2023 compliant, RBI-ready',
                    'White-label for resellers',
                    'Flat monthly pricing — no per-message billing',
                ],
            },
        ],
    };

    return (
        <html lang="en-IN">

            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={dmSans.className}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KR7FXZH"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <noscript>
                    <div style={{
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: '#fffbeb',
                        border: '2px solid #f59e0b',
                        margin: '20px',
                        borderRadius: '8px'
                    }}>
                        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>JavaScript Required</p>
                        <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
                        <p><strong>SwanDesk by SwanDigitals</strong> - AI Customer Support Platform for India</p>
                        <p>Contact: +91 7770070762 | Email: Abhishek@swandigitals.com</p>
                    </div>
                </noscript>
                {children}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KR7FXZH');
                    `}
                </Script>

                <Script id="engagebay-tracking-code" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                    var EhAPI = EhAPI || {}; EhAPI.after_load = function(){
                    EhAPI.set_account('bbk7lmu2rmvae1u1os10a6no8c', 'swandigitalshu');
                    EhAPI.execute('rules');};(function(d,s,f) {
                    var sc=d.createElement(s);sc.type='text/javascript';
                    sc.async=true;sc.src=f;var m=d.getElementsByTagName(s)[0];
                    m.parentNode.insertBefore(sc,m);
                    })(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());
                    `
                }} />

                <Script id="swan-chat-widget" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                    window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":""};
                    (function(d,t) {
                      var BASE_URL="https://chat.swandigitals.com";
                      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                      g.src=BASE_URL+"/packs/js/sdk.js";
                      g.async = true;
                      s.parentNode.insertBefore(g,s);
                      g.onload=function(){
                        window.chatwootSDK.run({
                          websiteToken: 'bwEMnvgPoGhUAAFdwrhSbvJw',
                          baseUrl: BASE_URL
                        });
                      }

                      window.addEventListener("chatwoot:ready", function () {
                        /* ── Advanced: set page context as custom attributes ── */
                        window.$chatwoot.setCustomAttributes({
                          page: window.location.pathname,
                          referrer: document.referrer || 'direct',
                          utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
                          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
                        });

                        /* ── Proactive: open widget on /pricing after 8s ── */
                        if (window.location.pathname.includes('/pricing') ||
                            window.location.pathname.includes('/demo') ||
                            window.location.pathname.includes('/contact')) {
                          setTimeout(function() {
                            window.$chatwoot.toggle('open');
                          }, 8000);
                        }
                      });
                    })(document,"script");
                    `
                }} />
            </body>
        </html>
    )
}
