import { Link } from "react-router-dom";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        {(prevProject || nextProject) && (
          <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-10">
            <div>
              {prevProject && (
                <Link
                  to={`/projects/${prevProject.slug?.current}`}
                  className="group block"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600] mb-1">
                    ← Previous
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-[#FE0600] transition-colors">
                    {prevProject.title}
                  </p>
                </Link>
              )}
            </div>

            <div className="text-right">
              {nextProject && (
                <Link
                  to={`/projects/${nextProject.slug?.current}`}
                  className="group block"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600] mb-1">
                    Next →
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-[#FE0600] transition-colors">
                    {nextProject.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 transition-colors duration-200 hover:border-[#FE0600] hover:text-[#FE0600]"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}