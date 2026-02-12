import React from 'react';
import { getAllArticles } from '../lib/articles';
import { BlogCard } from '../components/blog/BlogCard';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogIndex = () => {
    const articles = getAllArticles();
    const featuredArticle = articles[0];
    const remainingArticles = articles.slice(1);

    return (
        <>
            <SEO
                title="Noteworthy | Roofers Scaling Blog"
                description="Insights, guides, and strategies to help roofing contractors scale their business."
            />
            <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Header */}
                    <div className="mb-16">
                        <Reveal>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-6">
                                Noteworthy. <br />
                                <span className="text-zinc-400">Roofers Scaling Blog.</span>
                            </h1>
                            <p className="text-xl text-zinc-500 max-w-2xl">
                                Strategies, guides, and insights for modern roofing contractors.
                            </p>
                        </Reveal>
                    </div>

                    {/* Featured Article Hero */}
                    {featuredArticle && (
                        <Reveal>
                            <Link to={`/blog/${featuredArticle.slug}`} className="group block mb-24">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-md">
                                    <div className="order-2 lg:order-1">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-blue-50 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                                                {featuredArticle.tags[0] || 'Featured'}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight group-hover:text-accent transition-colors">
                                            {featuredArticle.title}
                                        </h2>
                                        <p className="text-lg text-zinc-500 mb-8 line-clamp-3">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-primary font-bold">
                                                {featuredArticle.author[0]}
                                            </div>
                                            <div className="text-sm">
                                                <p className="font-bold text-primary">{featuredArticle.author}</p>
                                                <p className="text-zinc-400">{featuredArticle.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2 h-[300px] lg:h-[400px] overflow-hidden rounded-2xl relative">
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    )}

                    {/* Standard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {remainingArticles.map((article, index) => (
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
                        <div className="text-center py-24">
                            <h3 className="text-2xl font-bold text-zinc-300">No articles yet. Check back soon!</h3>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};
