export default function ProjectCard({ project }) {
  const {
    title,
    image,
    liveUrl,
    domain,
    role,
    context,
    tech = []
  } = project;

  return (
    <div className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300">

      {/* IMAGE */}
      <div className="bg-white p-6 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-[420px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="text-sm text-neutral-400">
            No preview available
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">

        {/* META ROW */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-mono">

          {/* DOMAIN BADGE */}
          <span className="text-[#FE0600]">
            {domain}
          </span>

          {/* ROLE */}
          <span className="text-neutral-500">
            {role}
          </span>

        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-neutral-900">
          {title}
        </h3>

        {/* CONTEXT */}
        <p className="text-sm text-neutral-500 leading-relaxed">
          {context}
        </p>

        {/* TECH LINE */}
        <p className="text-xs text-neutral-400">
          Tech: {tech.join(" · ")}
        </p>

        {/* CTA */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-[#FE0600] transition"
        >
          View Project
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </div>
  );
}