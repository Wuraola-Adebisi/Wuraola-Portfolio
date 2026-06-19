export default function ToolStack({ dark }) {
  const tools = [
    "HTML", "CSS", "JavaScript", "React",
    "Tailwind CSS", "Git", "Vercel",
    "Copywriting", "UI Design"
  ];

  return (
    <div>
      <p className={`font-mono text-[10px] uppercase mb-3 ${dark ? "text-neutral-400" : "text-[#FE0600]"}`}>
        Tool Stack
      </p>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className={`px-2 py-1 border text-[10px] font-mono ${
              dark
                ? "border-neutral-700 text-neutral-300"
                : "border-neutral-200 text-neutral-600"
            }`}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}