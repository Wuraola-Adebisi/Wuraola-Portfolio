import Nav from "../components/layout/Nav.jsx";
import SiteFooter from "../components/footer/sitefooter.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import TagList from "../components/shared/TagList.jsx";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useSeo } from "../hooks/useSeo.js";
import { resume } from "../data/resume.js";

const PDF_FILENAME = "Wuraola_Adebisi_Resume.pdf";
const FALLBACK_PDF = `/${PDF_FILENAME}`;

const sectionLabel =
  "text-[10px] uppercase tracking-[0.25em] font-mono text-brand-fire";

export default function ResumePage() {
  const { settings } = useSiteSettings();

  useSeo({
    title: "Resume | Wuraola Adebisi",
    description:
      "Resume of Wuraola Adebisi, frontend engineer: featured projects, education, and tech stack. Available to download as a PDF.",
    path: "/resume",
  });

  const sanityPdfUrl = settings?.resumeFile?.asset?.url;
  const pdfHref = sanityPdfUrl
    ? `${sanityPdfUrl}?dl=${PDF_FILENAME}`
    : FALLBACK_PDF;

  return (
    <div className="min-h-screen bg-brand-cream text-black antialiased">
      <Nav />

      <main>
        <Reveal>
          <header className="pt-14 sm:pt-16 pb-10 px-6 border-b border-neutral-200">
            <div className="max-w-3xl mx-auto space-y-5">
              <p className={sectionLabel}>Resume</p>

              <h1 className="text-3xl sm:text-4xl font-semibold text-black">
                {resume.name}
              </h1>

              <p className="text-base text-neutral-600">{resume.title}</p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={pdfHref}
                  download={PDF_FILENAME}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-white bg-neutral-900 px-4 py-2.5 transition-colors duration-200 hover:bg-brand-fire"
                >
                  Download PDF
                  <span aria-hidden="true">↓</span>
                </a>

                {resume.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 transition-colors duration-200 hover:border-[#FE0600] hover:text-brand-fire"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal>
          <section className="px-6 pt-14">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className={sectionLabel}>Summary</h2>
              <p className="text-base text-neutral-800 leading-relaxed">
                {resume.summary}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 pt-14">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className={sectionLabel}>Featured Projects</h2>

              <div className="space-y-10">
                {resume.projects.map((project) => (
                  <div
                    key={project.name}
                    className="space-y-3 border-t border-neutral-200 pt-8 first:border-t-0 first:pt-0"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {project.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-mono text-neutral-600">
                        {project.kind}
                      </p>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 leading-relaxed marker:text-neutral-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 pt-14">
            <div className="max-w-3xl mx-auto space-y-3 border-t border-neutral-200 pt-10">
              <h2 className={sectionLabel}>Education</h2>
              <div className="space-y-1">
                <p className="text-base font-semibold text-neutral-900">
                  {resume.education.degree}
                </p>
                <p className="text-sm text-neutral-700">
                  {resume.education.school}
                </p>
                <p className="text-sm text-neutral-600">
                  {resume.education.years}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 pt-14 pb-24">
            <div className="max-w-3xl mx-auto space-y-6 border-t border-neutral-200 pt-10">
              <h2 className={sectionLabel}>Tech Stack</h2>

              <div className="space-y-5">
                {resume.stack.map((group) => (
                  <div key={group.label} className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
                      {group.label}
                    </p>
                    <TagList items={group.tools} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
