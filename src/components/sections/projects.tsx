import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="border-b border-white/20 pb-7 pt-3">
      <div className="mb-5">
        <h2 className="font-melodrama text-2xl font-bold  text-(--color-primary)">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        {/* View all projects link */}
        <Link href="/projects">
          <div className="hover:text-(--color-primary) transition-all duration-400 text-(--color-secondary) flex items-center gap-1 mt-2 text-sm">
            <span>view all projects...</span>
          </div>
        </Link>
      </div>
    </section>
  );
}