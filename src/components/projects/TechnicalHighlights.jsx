export default function TechnicalHighlights({ decisions }) {
  if (!decisions?.length) return null;

  return (
    <section className="px-6 pt-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
          Technical Highlights
        </h2>
        <div className="space-y-7">
          {decisions.map((decision, i) => (
            <div key={i} className="flex gap-4">
              <p className="font-mono text-sm text-[#FE0600] pt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-neutral-900">
                  {decision.title}
                </h3>
                {decision.description && (
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {decision.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}