export default function Hero() {
  return (
    <section className="flex items-center px-6 pt-[8vh] sm:pt-[12vh] bg-brand-cream">
      <div className="max-w-2xl lg:max-w-3xl">
        <p className="text-lg text-neutral-600 mb-2">Hi there,</p>

        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
          I'm Wuraola Adebisi.
        </h1>

        <p className="font-mono text-sm tracking-wide text-neutral-400 leading-relaxed">
          I'm a frontend developer who's built work spanning product,
          e-commerce, editorial, event, and brand-focused experiences, and
          this is some of it.
        </p>
      </div>
    </section>
  );
}