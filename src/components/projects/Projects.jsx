import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              Work
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-geist font-semibold text-neutral-900">
              Selected Projects
            </h2>
          </div>

          <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
            A curated set of frontend work focused on usability, structure, and
            interface clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
