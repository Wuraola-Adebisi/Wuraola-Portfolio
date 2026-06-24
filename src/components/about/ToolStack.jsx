export default function ToolStack() {
  const groups = [
    {
      label: "Frontend",
      tools: ["React", "React Router", "JavaScript", "HTML", "CSS", "REST APIs"],
    },
    {
      label: "UI & Styling",
      tools: ["Tailwind CSS", "Responsive Design", "Figma", "UI Animation"],
    },
    {
      label: "Tooling & Build",
      tools: ["Vite", "Bun", "ESLint"],
    },
    {
      label: "Workflow",
      tools: ["Git", "GitHub", "GitHub Actions (CI/CD)", "Vercel"],
    },
   {
      label: "CMS & Data",
      tools: ["Sanity (Headless CMS)", "GROQ", "Image Optimization"],
    },
    {
      label: "Communication",
      tools: ["Content Strategy", "Information Hierarchy"],
    },
  ];

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8 text-[#FE0600]">
        Capabilities
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.label}
            className="border border-neutral-800 bg-neutral-900/60 rounded-lg p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {group.label}
            </p>

            <p className="text-base leading-relaxed text-neutral-50">
              {group.tools.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}