import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="work" className="pt-14 sm:pt-16 pb-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}