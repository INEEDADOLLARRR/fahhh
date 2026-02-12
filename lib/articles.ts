import matter from 'gray-matter';

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    tags: string[];
    image?: string;
    content: string;
}

// 1. Get all markdown files from src/content/articles
const modules = import.meta.glob('/src/content/articles/*.md', { as: 'raw', eager: true });

export const getAllArticles = (): Article[] => {
    const articles = Object.keys(modules).map((path) => {
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        const fileContent = modules[path];
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            author: data.author,
            tags: data.tags || [],
            image: data.image,
            content,
        };
    });

    // Sort by date descending
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
    const articles = getAllArticles();
    return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, tags: string[]): Article[] => {
    const articles = getAllArticles();
    return articles
        .filter(article => article.slug !== currentSlug) // Exclude current
        .filter(article => article.tags.some(tag => tags.includes(tag))) // Match tags
        .slice(0, 3); // Limit to 3
};
