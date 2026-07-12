// app/[locale]/blog/[slug]/page.tsx
import { getMarkdownContent, getAllPosts } from '../../../lib/markdown';

import type { Metadata } from 'next';

export function generateStaticParams() {
    const locales = ['en', 'fr'];

    return locales.flatMap((locale) => {
        const posts = getAllPosts(locale);
        return posts.map((post) => ({
            locale,
            slug: post.slug,
        }));
    });
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const { frontmatter } = await getMarkdownContent('content/blogs', locale, slug);

    return {
        title: frontmatter.title,
        description: frontmatter.excerpt,
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const { frontmatter, contentHtml } = await getMarkdownContent('content/blogs', locale, slug);
    console.log(contentHtml); // Log the contentHtml for debugging
    return (
        <article className="blog-post container m-3 p-4 justify-center align-center">
            <h1>{frontmatter.title}</h1>
            {frontmatter.date && (
                <time>{new Date(frontmatter.date).toLocaleDateString(locale)}</time>
            )}
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
}