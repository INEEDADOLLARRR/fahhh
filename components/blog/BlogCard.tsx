import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image?: string;
    category: string;
}

export const BlogCard = ({ title, excerpt, date, slug, image, category }: BlogCardProps) => {
    return (
        <Link to={`/blog/${slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={image || "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-primary rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-secondary text-xs font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                    {title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {excerpt}
                </p>

                <div className="flex items-center text-accent font-semibold text-sm mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};
