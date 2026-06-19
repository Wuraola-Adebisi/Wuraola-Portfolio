import { contactLinks } from "./contactLinks.js";

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-50 px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-geist font-semibold text-neutral-900 leading-tight">
            Let’s build something intentional
          </h2>

          <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
            Open to frontend roles and product work. Reach out for collaborations or opportunities.
          </p>

        </div>

        {/* PRIMARY ACTION */}
        <div className="mt-12">

          <a
            href="mailto:the.wuraola.adebisi@gmail.com"
            className="inline-flex items-center gap-3 px-5 py-3 border border-neutral-900 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition"
          >
            Email Me
            <span className="text-[#FE0600]">→</span>
          </a>

        </div>

        {/* SECONDARY LINKS */}
        <div className="mt-14 grid gap-3">

          {/* PHONE (explicit addition) */}
          <a
            href="tel:+2349034106259"
            className="flex items-center justify-between py-4 border-b border-neutral-200 group hover:border-neutral-400 transition"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Phone
              </p>
              <p className="mt-1 text-sm text-neutral-900">
                +234 903 410 6259
              </p>
            </div>

            <span className="text-neutral-400 group-hover:text-[#FE0600] transition group-hover:translate-x-1">
              ↗
            </span>
          </a>

          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 border-b border-neutral-200 group hover:border-neutral-400 transition"
            >

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {link.label}
                </p>

                <p className="mt-1 text-sm text-neutral-900">
                  {link.value}
                </p>
              </div>

              <span className="text-neutral-400 group-hover:text-[#FE0600] transition group-hover:translate-x-1">
                {link.icon}
              </span>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}