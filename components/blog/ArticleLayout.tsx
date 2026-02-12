import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface ArticleLayoutProps {
    children: React.ReactNode;
    meta: {
        title: string;
        date: string;
        author: string;
        tags: string[];
        image?: string;
    };
    toc?: { id: string; text: string; level: number }[];
}

export const ArticleLayout = ({ children, meta, toc = [] }: ArticleLayoutProps) => {
    return (
        <div className="min-h-screen bg-background pt-24 pb-24">
            {/* Back Link */}
            <div className="container mx-auto px-4 mb-8">
                <Link to="/blog" className="inline-flex items-center text-sm font-medium text-secondary hover:text-accent transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
                </Link>
            </div>

            <article className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {/* Header */}
                        <header className="mb-10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {meta.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-50 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                                {meta.title}
                            </h1>

                            <div className="flex items-center gap-6 text-secondary text-sm border-b border-gray-100 pb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                        {/* Placeholder Avatar */}
                                        <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                                            {meta.author.charAt(0)}
                                        </div>
                                    </div>
                                    <span className="font-medium text-primary">{meta.author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{format(new Date(meta.date), 'MMMM d, yyyy')}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {meta.image && (
                            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
                                <img
                                    src={meta.image}
                                    alt={meta.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-primary 
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-md
              prose-strong:text-primary">
                            {children}
                        </div>

                        {/* Share Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <h4 className="font-bold text-primary">Share this article</h4>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-secondary">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / TOC */}
                    <aside className="hidden lg:block lg:col-span-4 pl-8">
                        <div className="sticky top-32">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
                                <nav className="flex flex-col gap-2">
                                    {toc.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`text-sm hover:text-accent transition-colors block py-1 
                        ${item.level === 3 ? 'pl-4 text-secondary/80' : 'text-secondary font-medium'}`}
                                        >
                                            {item.text}
                                        </a>
                                    ))}
                                    {toc.length === 0 && <p className="text-sm text-gray-400 italic">No sections available.</p>}
                                </nav>
                            </div>

                            {/* CTA Widget */}
                            <div className="mt-8 bg-primary rounded-2xl p-6 text-white text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="font-bold text-xl mb-2 relative z-10">Need a New Roof?</h3>
                                <p className="text-blue-100 text-sm mb-6 relative z-10">Get a free, no-obligation inspection from our certified pros.</p>
                                <Link to="/contact" className="block w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold transition-colors relative z-10">
                                    Get Free Estimate
                                </Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </article>
        </div>
    );
};
