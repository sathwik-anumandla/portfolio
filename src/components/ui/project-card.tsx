"use client";

import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="  text-(--color-secondary) hover:text-(--color-primary)">
      <div className="card-md flex items-start gap-4 py-1 px-2 rounded-xl transition-all duration-200 cursor-pointer  hover:bg-white/12 hover:text-(--color-primary)">

        {/* Content */}
        <div className="flex-1">
        <div className="flex items-center justify-between pb-0.5">
          <h3 className="text-lg font-bold transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-(--color-secondary) opacity-80">
          {project.date}
        </span>
        </div>
          <p className="text-sm leading-snug text-(--color-tertiary)">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}