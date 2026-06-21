export default function ProjectCard({ project }) {
  const { title, image, liveUrl, domain, context, tech = [] } = project;

  return (
    <div className="group bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
      <div className="bg-neutral-50 p-6 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-105 w-auto object-contain border border-neutral-200 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="text-sm text-neutral-400">No preview available</div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
          {domain}
        </p>

        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>

        <p className="text-sm text-neutral-500 leading-relaxed">{context}</p>

        <p className="text-xs text-neutral-400">Tech: {tech.join(" · ")}</p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 transition-colors duration-200 group-hover:bg-[#FE0600]/85 group-hover:border-[#FE0600] group-hover:text-white"
        >
          View Project
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}