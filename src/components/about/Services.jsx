export default function Services() {
  const services = [
    {
      label: "Frontend Development",
      description: "Responsive interfaces, from a design or from scratch.",
    },
    {
      label: "Landing & Marketing Pages",
      description: "Focused pages for campaigns and launches.",
    },
    {
      label: "E-Commerce & Interactive Builds",
      description: "Storefronts, carts, and checkout flows.",
    },
    {
      label: "CMS-Backed Websites",
      description: "Content-managed sites clients can update themselves.",
    },
  ];

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8 text-[#FE0600]">
        Services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.label}
            className="border border-neutral-800 bg-neutral-900/60 rounded-lg p-5"
          >
            <p className="text-sm font-semibold text-neutral-50 mb-1.5">
              {service.label}
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}