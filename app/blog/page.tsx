import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "博客文章列表",
};

export default function BlogPage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl bg-white px-8 py-16 dark:bg-black sm:px-16">
        <h1 className="mb-10 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Blog
        </h1>
        <ul className="flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-zinc-500">{post.date}</time>
                <h2 className="mt-1 text-xl font-medium text-black group-hover:underline dark:text-zinc-50">
                  {post.title}
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
