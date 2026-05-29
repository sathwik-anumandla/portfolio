import Link from "next/link";
import { Blog } from "@/lib/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="text-(--color-secondary) hover:text-(--color-primary)">
      <div className="flex items-center justify-between py-1 px-2 rounded-xl transition-all duration-200 hover:bg-white/12 hover:text-(--color-primary)">
        <h3 className="text-lg font-bold transition-colors">{blog.title}</h3>
        <span className="text-sm text-(--color-secondary) opacity-80">{blog.date}</span>
      </div>
    </Link>
  );
}
