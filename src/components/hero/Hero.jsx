export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE0600]">
          Portfolio
        </p>

        <h1 className="mt-10 font-geist font-semibold leading-[0.9] text-black text-6xl md:text-8xl lg:text-[9rem]">
          WURAOLA
          <br />
          ADEBISI
        </h1>

        <p className="mt-10 text-xl md:text-2xl font-medium text-neutral-900">
          Frontend Developer
        </p>

        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          I build modern web interfaces with a focus on clarity, structure, and
          usability. My work is informed by a background in communication,
          marketing, and design.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="px-3 py-2 border border-neutral-200 text-xs uppercase tracking-wider text-neutral-600">
            Frontend Development
          </span>

          <span className="px-3 py-2 border border-neutral-200 text-xs uppercase tracking-wider text-neutral-600">
            UI & UX Implementation
          </span>

          <span className="px-3 py-2 border border-neutral-200 text-xs uppercase tracking-wider text-neutral-600">
            Design Systems
          </span>
        </div>

        <div className="mt-14">
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-[#FE0600] transition"
          >
            View Work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
