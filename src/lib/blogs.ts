export type Blog = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  content: string; // filename in src/content/blogs/
  tags: string[];
};

export const blogs: Blog[] = [
  {
    slug: "example-post",
    title: "Example",
    date: "may 2025",
    readTime: "3 min read",
    description: "A sample blog post.",
    content: "example-post.md",
    tags: ["backend", "learning"],},
];
