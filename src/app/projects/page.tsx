"use client";

import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 space-y-5 py-10">
      <Link
        href="/"
        className="text-(--color-secondary) hover:text-(--color-primary) flex items-center gap-2 mb-8"
      >
        <span>back to home</span>
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="font-melodrama text-4xl font-bold text-(--color-primary) mb-2">
            Projects
          </h1>
          <p className="text-(--color-secondary)">
            A collection of projects I've worked on
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
