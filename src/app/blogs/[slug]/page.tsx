import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { blogs } from "@/lib/blogs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Post not found" };
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `/blogs/${blog.slug}`,
      type: "article",
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 space-y-5 py-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link href="/blogs" className="text-(--color-secondary) hover:text-(--color-primary)">
            back to blogs
          </Link>
        </div>
      </main>
    );
  }

  const filePath = path.join(process.cwd(), "src/content/blogs", blog.content);
  const markdown = fs.readFileSync(filePath, "utf-8");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    keywords: blog.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Sathwik Anumandla",
      url: "https://sathwikanumandla.in",
    },
    url: `https://sathwikanumandla.in/blogs/${blog.slug}`,
  };

  return (
    <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 py-10 space-y-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/blogs"
        className="text-(--color-secondary) hover:text-(--color-primary) flex items-center gap-2 mb-8"
      >
        <span>back to blogs</span>
      </Link>

      <article className="space-y-5">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h1 className="font-melodrama text-4xl font-bold text-(--color-primary)">
              {blog.title}
            </h1>
            <span className="text-(--color-secondary)">{blog.date}</span>
          </div>
          <span className="text-sm text-(--color-tertiary)">{blog.readTime}</span>
        </div>

        <div className="blog-content text-(--color-secondary) leading-relaxed">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
