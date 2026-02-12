import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image: string;
    category: string;
}

export const BlogCard = ({ title, excerpt, date, slug, image, category }: BlogCardProps) => {
    return (
        <Link to={`/blog/${slug}`} className="group flex flex-col h-full bg-transparent">
            {/* Image Container */}
            <div className="h-64 overflow-hidden rounded-2xl mb-6 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="mb-3">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                        {date}
                    </p>
                    <h3 className="text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="text-zinc-500 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {excerpt}
                </p>

                <div className="flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};
