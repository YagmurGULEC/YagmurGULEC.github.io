// app/[locale]/blog/[slug]/page.tsx
import { getAllPosts } from '../../lib/markdown';




export default async function BlogPost({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const allPosts = getAllPosts(locale);

    return (
        <div className="container m-3">

            <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
            <ul className="list-disc pl-5">
                {allPosts.map((post) => (
                    <li key={post.slug} className="mb-2">
                        <a href={`/${locale}/blog/${post.slug}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </a>
                        <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString(locale)}</p>
                        {post.excerpt && <p className="text-gray-700">{post.excerpt}</p>}
                    </li>
                ))}
            </ul>
        </div>

    );
}