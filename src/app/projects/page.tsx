import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/projects";
import { ArrowLeftIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects built by Sathwik Anumandla — backend tools, web apps, and terminal utilities.",
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto w-4/5 md:w-3/5 xl:w-2/5 max-w-xl space-y-5 py-10">
      <Link
        href="/"
        className="text-(--color-secondary) hover:text-(--color-primary) transition-colors flex items-center gap-1.5 mb-8 text-sm group"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
        <span>back to home</span>
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="font-melodrama text-4xl font-bold text-(--color-primary) mb-2">
            Projects
          </h1>
          <p className="text-(--color-secondary)">
            A collection of projects I&apos;ve worked on
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
