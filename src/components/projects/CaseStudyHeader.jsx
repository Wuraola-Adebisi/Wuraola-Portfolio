import TagList from "../shared/TagList.jsx";

export default function CaseStudyHeader({
  title,
  domain,
  role,
  context,
  tech,
  liveUrl,
}) {
  return (
    <header className="pt-14 sm:pt-16 pb-10 px-6 border-b border-neutral-200">
      <div className="max-w-3xl mx-auto space-y-5">
        <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
          {domain} {role ? `· ${role}` : ""}
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold text-black">
          {title}
        </h1>

        {context && (
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            {context}
          </p>
        )}

        <TagList items={tech} />

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 underline transition-colors duration-200 hover:border-[#FE0600] hover:text-[#FE0600]"
          >
            Live Site
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </header>
  );
}