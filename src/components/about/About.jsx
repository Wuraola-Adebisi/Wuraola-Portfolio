import ToolStack from "./ToolStack.jsx";

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE0600]">
            About
          </p>

        <h2 className="mt-5 text-5xl md:text-6xl font-sans font-semibold leading-tight">
  Frontend development shaped by communication, structure, and design
  thinking
</h2>
        </div>

        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-start">
          <div className="text-neutral-300 leading-[1.9]">
            <p className="text-neutral-200">
              I'm a frontend developer with a background in Marketing
              Communications and a degree in Communication and Language Arts
              from the University of Ibadan. Before development, I worked across
              motion design, social media, video editing, graphics, and
              eventually led a digital team. That range taught me to think
              across every part of how a product reaches people, the message,
              the visuals, and now the interface itself.
            </p>

            <p className="mt-6">
              That background still defines how I work. I think in structure and
              hierarchy: what a person needs to see first, and what they need to
              understand before they can act. An interface that requires
              explanation has already failed at its one job.
            </p>

            <p className="mt-6">
              Most of the time I see a design before I build it, the layout,
              the palette, how it should feel, sometimes even in dreams. It's
              not really abstract to me, it's close to physical.
            </p>

            <p className="mt-6 text-neutral-200">
              That same instinct is why I believe functionality and design are
              equally yoked: each pulling its own weight, neither one sacrificed
              for the other. That's the standard I bring to every project:
              messaging, structure, and interface working as one thing instead
              of three separate jobs.
            </p>

            <p className="mt-6 text-neutral-400 text-sm">
              Outside of that, I live on Pinterest, you'll usually find me
              curating a board or knee deep in YouTube videos.
            </p>
          </div>

          <div>
            <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
              <img
                src="https://res.cloudinary.com/dnkfg07ov/image/upload/v1781643384/BLAC8476_xi7utl.jpg"
                alt="Wuraola Adebisi"
                className="w-full aspect-4/5 object-cover"
              />
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Education
                </p>
                <p className="mt-1 text-sm text-neutral-300">
                  Communication & Language Arts
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Experience Lens
                </p>
                <p className="mt-1 text-sm text-neutral-300">
                  Marketing communications and audience-focused product
                  environments
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Based In
                </p>
                <p className="mt-1 text-sm text-neutral-300">Nigeria</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-800">
              <ToolStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}