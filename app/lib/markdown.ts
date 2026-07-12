// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(
    contentDir: string, // e.g. "content" or "content/blog"
    locale: string,
    filename: string // e.g. "about" or a blog slug
) {
    const primaryPath = path.join(process.cwd(), contentDir, locale, `${filename}.md`);
    const fallbackPath = path.join(process.cwd(), contentDir, 'en', `${filename}.md`);

    const filePath = fs.existsSync(primaryPath) ? primaryPath : fallbackPath;
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const processed = await remark().use(html).process(content);

    return { frontmatter: data, contentHtml: processed.toString() };
}

// New: list all posts for a locale, frontmatter only (no HTML conversion needed)
export function getAllPosts(locale: string) {
    const dir = path.join(process.cwd(), 'content', 'blogs', locale);

    // Fallback: if the locale folder doesn't exist yet, use English
    const targetDir = fs.existsSync(dir)
        ? dir
        : path.join(process.cwd(), 'content', 'blogs', 'en');

    const files = fs.readdirSync(targetDir).filter((file) => file.endsWith('.md'));

    const posts = files.map((file) => {
        const raw = fs.readFileSync(path.join(targetDir, file), 'utf-8');
        const { data } = matter(raw);
        const slug = file.replace(/\.md$/, '');

        return {
            slug,
            title: data.title as string,
            date: data.date as string,
            excerpt: data.excerpt as string | undefined,
        };
    });

    // Sort newest first
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}