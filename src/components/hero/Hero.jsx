export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE0600]">
              Portfolio
            </p>

            <h1 className="mt-10 font-geist font-semibold leading-[0.9] text-black text-6xl md:text-8xl lg:text-[9rem]">
              WURAOLA
              <br />
              ADEBISI
            </h1>
          </div>

          <div className="hidden md:block text-right shrink-0 ml-12 pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              Status
            </p>
            <p className="mt-1 text-sm text-neutral-900 font-medium">
              Open to opportunities
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              Stack
            </p>
            <p className="mt-1 text-sm text-neutral-700">
              React · Tailwind · JavaScript
            </p>
          </div>
        </div>

        <p className="mt-10 text-xl md:text-2xl font-medium text-neutral-900">
          Frontend Developer
        </p>

        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          Interfaces should guide attention without forcing interpretation.
          I build frontend systems where structure and design reinforce each
          other instead of competing.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="px-3 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider">
            Frontend Development
          </span>

          <span className="px-3 py-2 border border-neutral-300 text-xs uppercase tracking-wider text-neutral-700">
            UI &amp; UX Implementation
          </span>

          <span className="px-3 py-2 border border-neutral-300 text-xs uppercase tracking-wider text-neutral-700">
            Design Systems
          </span>
        </div>

        <div className="mt-14">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-900 hover:text-[#FE0600] transition"
          >
            View Work
            <span className="h-px w-10 bg-neutral-400 group-hover:w-16 group-hover:bg-[#FE0600] transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}