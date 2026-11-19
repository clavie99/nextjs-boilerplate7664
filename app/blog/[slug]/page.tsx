import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <article className="w-full max-w-3xl bg-white px-8 py-16 dark:bg-black sm:px-16">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-black dark:hover:text-zinc-50"
        >
          ← 返回列表
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {post.title}
        </h1>
        <time className="mt-2 block text-sm text-zinc-500">{post.date}</time>
        <div className="mt-8 flex flex-col gap-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
