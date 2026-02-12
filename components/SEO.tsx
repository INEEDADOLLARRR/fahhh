import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    article?: {
        publishedTime: string;
        modifiedTime: string;
        authors: string[];
        tags: string[];
    };
}

export const SEO = ({
    title = "Roofers Scaling | High-Converting Websites for Roofing Contractors",
    description = "We build SEO-optimized, high-converting websites for roofing contractors. Get more leads, booked jobs, and local visibility with a custom roofing website.",
    canonical = "https://roofersscaling.com",
    ogImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    article
}: SEOProps) => {
    const siteUrl = "https://roofersscaling.com";
    const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": article ? "BlogPosting" : "ProfessionalService",
        "name": title,
        "headline": title,
        "image": ogImage,
        "description": description,
        "url": fullCanonical,
        ...(article ? {
            "datePublished": article.publishedTime,
            "dateModified": article.modifiedTime,
            "author": {
                "@type": "Person",
                "name": article.authors[0]
            },
            "keywords": article.tags.join(", "),
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": fullCanonical
            },
            "publisher": {
                "@type": "Organization",
                "name": "Roofers Scaling",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://roofersscaling.com/logo.png"
                }
            }
        } : {
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "addressCountry": "US"
            },
            "telephone": "+1-512-555-0199",
            "priceRange": "$$$"
        })
    };

    return (
        <Helmet>
            {/* Standard Metrics */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? "article" : "website"} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};
