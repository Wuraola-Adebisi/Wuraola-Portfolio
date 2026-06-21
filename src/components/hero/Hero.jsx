export default function Hero() {
  return (
    <section className="flex items-center px-6 pt-[8vh] pb-[4vh] sm:pt-[12vh] sm:pb-[6vh] bg-white">
      <div className="max-w-2xl">
        <p className="text-lg text-neutral-600 mb-2">Hi there,</p>

        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
          I'm Wuraola Adebisi.
        </h1>

        <p className="font-mono text-sm tracking-wide text-neutral-400 mb-10">
          I'm a frontend developer, and this is some of what I've built.
        </p>

        <a
          href="#work"
          className="font-mono text-sm tracking-wide text-black underline decoration-neutral-300 underline-offset-4 hover:text-[#FE0600] hover:decoration-[#FE0600] transition"
        >
          See the work ↓
        </a>
      </div>
    </section>
  );
}