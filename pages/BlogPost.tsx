import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getArticleBySlug } from '../lib/articles';
import { ArticleLayout } from '../components/blog/ArticleLayout';
import { SEO } from '../components/SEO';

export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = getArticleBySlug(slug || '');

    useEffect(() => {
        if (!article) {
            navigate('/blog');
        }
    }, [article, navigate]);

    if (!article) return null;

    // Generate TOC from content (simple regex approach for simplicity, 
    // or we could write a remark plugin, but this is faster for now)
    const toc = article.content.match(/^#{2,3} (.*)/gm)?.map(heading => {
        const level = heading.startsWith('###') ? 3 : 2;
        const text = heading.replace(/^#{2,3} /, '');
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        return { id, text, level };
    }) || [];

    return (
        <>
            <SEO
                title={article.title}
                description={article.excerpt}
                ogImage={article.image}
                canonical={`https://roofprosites.com/blog/${article.slug}`}
                article={{
                    publishedTime: article.date,
                    modifiedTime: article.date,
                    authors: [article.author],
                    tags: article.tags
                }}
            />
            <ArticleLayout meta={article} toc={toc}>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                    components={{
                        // Override basic elements if needed, though Tailwind typography handles most
                    }}
                >
                    {article.content}
                </ReactMarkdown>
            </ArticleLayout>
        </>
    );
};
