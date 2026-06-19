import ToolStack from "./ToolStack.jsx";

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-14">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE0600]">
            About
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-geist font-semibold leading-[0.95]">
            Frontend development shaped by communication, structure, and design thinking
          </h2>

        </div>

        {/* 2 COLUMN LAYOUT */}
        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-start">

          {/* LEFT */}
          <div className="text-neutral-300 leading-[1.9]">

            <p className="text-neutral-200">
              I’m a frontend developer with a background in Marketing Communications and a degree in Communication and Language Arts from the University of Ibadan. My transition into development came from working in startup environments where I focused on messaging, user engagement, and how digital products communicate with people.
            </p>

            <p className="mt-6">
              That experience still shapes how I build. I think in structure, hierarchy, and clarity of interaction. Interfaces should guide attention without forcing interpretation. If users have to figure out how something works, the system has already failed in its communication.
            </p>

            <p className="mt-6 text-neutral-200">
              I treat frontend development as system design. Function without design creates friction. Design without function fails in practice. The goal is balance where both reinforce each other instead of competing.
            </p>

            <p className="mt-6">
              Today, I build with React and modern frontend tools, focusing on interfaces that are clear, consistent, and structurally intentional.
            </p>

          </div>

          {/* RIGHT */}
          <div>

            <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
              <img
                src="https://res.cloudinary.com/dnkfg07ov/image/upload/v1781643384/BLAC8476_xi7utl.jpg"
                alt="Wuraola Adebisi"
                className="w-full aspect-[4/5] object-cover"
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
                  Marketing communications and audience-focused product environments
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Based In
                </p>
                <p className="mt-1 text-sm text-neutral-300">
                  Nigeria
                </p>
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