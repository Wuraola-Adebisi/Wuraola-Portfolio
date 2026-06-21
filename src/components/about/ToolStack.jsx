export default function ToolStack() {
  const groups = [
    {
      label: "Frontend",
      tools: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    },
    {
      label: "UI & Styling",
      tools: ["Tailwind CSS", "Responsive Design", "Figma", "UI Animation"],
    },
    {
      label: "Workflow",
      tools: ["Git", "GitHub", "Vercel"],
    },
    {
      label: "Communication",
      tools: ["Content Strategy", "Information Hierarchy"],
    },
  ];

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-6 text-[#FE0600]">
        Capabilities
      </p>

      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {group.label}
            </p>

            <p className="mt-1 text-sm leading-relaxed text-neutral-50">
              {group.tools.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}