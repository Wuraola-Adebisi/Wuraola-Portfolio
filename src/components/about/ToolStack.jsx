export default function ToolStack() {
  const groups = [
    {
      label: "Frontend",
      tools: [
        "React",
        "TypeScript",
        "React Router",
        "JavaScript",
        "HTML",
        "CSS",
        "REST APIs",
      ],
    },
    {
      label: "State & Data",
      tools: [
        "TanStack Query",
        "Zustand",
        "Supabase",
        "PostgreSQL",
        "dnd-kit",
        "Recharts",
      ],
    },
    {
      label: "Backend & Auth",
      tools: ["Supabase Auth", "OAuth (Google/GitHub)", "Row Level Security"],
    },
    {
      label: "UI & Styling",
      tools: [
        "Tailwind CSS",
        "Responsive Design",
        "Figma",
        "UI Animation",
        "Accessibility (ARIA)",
      ],
    },
    {
      label: "CMS & Data",
      tools: ["Sanity (Headless CMS)", "GROQ", "Image Optimization"],
    },
    {
      label: "Tooling & Workflow",
      tools: [
        "Vite",
        "Bun",
        "ESLint",
        "Git",
        "GitHub",
        "GitHub Actions (CI/CD)",
        "Vercel",
      ],
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

            <div className="flex flex-wrap gap-1.5">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs text-neutral-50 border border-neutral-700 rounded px-2 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}