import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/ui/blog-card";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Writing by Sathwik Anumandla on backend engineering, system design, and whatever else catches his curiosity.",
};

export default function BlogsPage() {
  return (
    <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 space-y-5 py-10">
      <Link
        href="/"
        className="text-(--color-secondary) hover:text-(--color-primary) flex items-center gap-2 mb-8"
      >
        <span>back to home</span>
      </Link>

      <div className="space-y-8">
        <h1 className="font-melodrama text-4xl font-bold text-(--color-primary)">
          Blogs
        </h1>

        <div className="flex flex-col gap-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
