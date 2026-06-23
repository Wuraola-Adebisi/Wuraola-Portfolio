import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import { useProjects } from "../../hooks/useProjects";

export default function Projects() {
  const { projects, loading, error } = useProjects();

  return (
    <section id="work" className="pt-14 sm:pt-16 pb-24 px-6 bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        {error && (
          <p className="text-center text-sm text-neutral-400">
            Projects couldn't be loaded right now. Please try again shortly.
          </p>
        )}

        {!error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))
              : projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
          </div>
        )}
      </div>
    </section>
  );
}