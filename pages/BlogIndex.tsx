import React from 'react';
import { getAllArticles } from '../lib/articles';
import { BlogCard } from '../components/blog/BlogCard';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/ui/Reveal';

export const BlogIndex = () => {
    const articles = getAllArticles();

    return (
        <>
            <SEO
                title="Roofing Tips & Insights | Apex Roofing Blog"
                description="Expert advice on roof maintenance, repair costs, and selecting the right contractor. Read our latest articles."
                canonical="https://roofprosites.com/blog"
            />

            <div className="pt-32 pb-24 bg-background min-h-screen">
                <div className="container mx-auto px-4">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Reveal>
                            <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight">
                                Roofing Insights
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-xl text-secondary">
                                Expert advice to help you protect your biggest investment.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <Reveal key={article.slug} delay={index * 0.1}>
                                <BlogCard
                                    title={article.title}
                                    excerpt={article.excerpt}
                                    date={article.date}
                                    slug={article.slug}
                                    image={article.image}
                                    category={article.tags[0] || 'General'}
                                />
                            </Reveal>
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="text-center text-secondary py-20">
                            <p>No articles found. Check back soon!</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};
