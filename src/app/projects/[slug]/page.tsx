"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 space-y-5 py-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link
            href="/projects"
            className="text-(--color-secondary) hover:text-(--color-primary)"
          >
            back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 py-10 space-y-5">
      <Link
        href="/projects"
        className="text-(--color-secondary) hover:text-(--color-primary) flex items-center gap-2 mb-8"
      >
        <span>back to projects</span>
      </Link>

      <article className="space-y-5">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-0">
            <h1 className="font-melodrama text-4xl font-bold text-(--color-primary) mb-1.5">
              {project.title}
            </h1>
            <span className="text-(--color-secondary)">{project.date}</span>
          </div>
          <div>
            <p className="text-(--color-secondary) flex items-center gap-1.5">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--color-primary) transition-all flex items-center gap-2"
                >
                  <span>repo</span>
                </a>
              )}
              {project.live !== "#" && project.github !== "#" && <span>·</span>}
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--color-primary) transition-all flex items-center gap-2"
                >
                  <span>live</span>
                </a>
              )}
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-(--color-secondary) leading-relaxed">
            {project.content}
          </p>
        </div>

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold font-melodrama my-3">Reflections</h3>
          <p className="text-(--color-secondary) leading-snug">
            {project.reflections}
          </p>
        </div>
      </article>
    </main>
  );
}
