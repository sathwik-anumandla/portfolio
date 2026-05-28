"use client";

import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="container mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/2 py-16">
      <Link href="/" className="text-accent hover:underline flex items-center gap-2 mb-12">
        <i className="fas fa-arrow-left"></i>
        <span>Back to home</span>
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="font-melodrama text-5xl font-bold text-accent mb-2">
            Blog
          </h1>
          <p className="text-secondary">
            Coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
