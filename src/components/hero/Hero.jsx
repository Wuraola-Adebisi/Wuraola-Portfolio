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

        <p className="mt-3 text-xl md:text-2xl font-medium text-neutral-900">
          Frontend Developer
        </p>

        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          I build frontend systems where functionality, structure, and design
          are equally aligned to create clear, usable interfaces.
        </p>

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