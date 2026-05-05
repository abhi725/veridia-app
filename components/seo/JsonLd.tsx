
export default function JsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SwanDigitals',
        url: 'https://swandigitals.com',
        logo: 'https://swandigitals.com/logo.png',
        founder: {
            '@type': 'Person',
            name: 'Abhishek Ambad',
            url: 'https://swandigitals.com/leadership',
        },
        sameAs: [
            'https://www.linkedin.com/company/swandigitals',
            'https://twitter.com/swandigitals',
            'https://github.com/swandigitals',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-1234567890',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi'],
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SwanDigitals',
        url: 'https://swandigitals.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://swandigitals.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}


