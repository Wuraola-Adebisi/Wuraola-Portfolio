export default function ToolStack({ dark }) {
  const groups = [
    {
      label: "Frontend",
      tools: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      label: "UI & Styling",
      tools: ["Tailwind CSS", "Responsive Design"],
    },
    {
      label: "Workflow",
      tools: ["Git", "GitHub", "Vercel"],
    },
    {
  label: "Communication",
  tools: ["Content Strategy", "Information Hierarchy"]
},
  ];

  return (
    <div>
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-6 ${
          dark ? "text-neutral-500" : "text-[#FE0600]"
        }`}
      >
        Capabilities
      </p>

      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <p
              className={`text-[10px] uppercase tracking-[0.2em] ${
                dark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              {group.label}
            </p>

            <p
              className={`mt-1 text-sm leading-relaxed ${
                dark ? "text-neutral-300" : "text-neutral-600"
              }`}
            >
              {group.tools.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}