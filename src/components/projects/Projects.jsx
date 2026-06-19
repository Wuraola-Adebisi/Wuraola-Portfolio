import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="work" className="pt-32 pb-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-900">
            Selected Projects
          </h2>
 
          <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
            Frontend projects spanning product, e-commerce, editorial, event,
            and brand-focused experiences.
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