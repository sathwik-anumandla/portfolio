import Link from "next/link";
import BlogCard from "@/components/ui/blog-card";
import { blogs } from "@/lib/blogs";

export default function Blogs() {
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section className="border-b border-white/20 pb-7 pt-3">
      <div className="mb-5">
        <h2 className="font-melodrama text-2xl font-bold text-(--color-primary)">
          Blogs
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {recentBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}

        <Link href="/blogs">
          <div className="hover:text-(--color-primary) transition-all duration-400 text-(--color-secondary) flex items-center gap-1 mt-2 text-sm">
            <span>view all blogs...</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
