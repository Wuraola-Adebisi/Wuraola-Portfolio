import { useParams, Link } from "react-router-dom";
import Nav from "../components/layout/Nav.jsx";
import SiteFooter from "../components/footer/sitefooter.jsx";
import { useProjectDetail } from "../hooks/useProjectDetail";
import { urlFor } from "../lib/sanityClient";
import BlurImage from "../components/shared/BlurImage";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const { project, loading, error } = useProjectDetail(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black font-geist antialiased">
        <Nav />
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "calc(100vh - 4rem)" }}
        >
          <div className="space-y-4 w-full max-w-3xl px-6">
            <div className="h-3 w-24 bg-neutral-200 rounded animate-pulse" />
            <div className="h-8 w-2/3 bg-neutral-200 rounded animate-pulse" />
            <div className="h-80 w-full bg-neutral-200 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white text-black font-geist antialiased">
        <Nav />
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "calc(100vh - 4rem)" }}
        >
          <div className="text-center space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FE0600]">
              Not Found
            </p>
            <h1 className="text-2xl font-semibold text-neutral-900">
              This project couldn't be found.
            </h1>
            <Link
              to="/#work"
              className="inline-block text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 hover:border-[#FE0600] hover:text-[#FE0600] transition-colors"
            >
              ← Back to projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    image,
    liveUrl,
    domain,
    role,
    context,
    tech,
    problem,
    decisions,
    outcome,
    secondaryImages,
  } = project;

  const techList = tech ?? [];
  const decisionsList = decisions ?? [];
  const secondaryImagesList = secondaryImages ?? [];

  const heroUrl = image ? urlFor(image).width(1600).quality(85).url() : null;
  const heroLqip = image?.asset?.metadata?.lqip;

  return (
    <div className="min-h-screen bg-white text-black font-geist antialiased">
      <Nav />

      <main>
        {/* Header */}
        <header className="pt-14 sm:pt-16 pb-10 px-6 border-b border-neutral-200">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
              {domain} {role ? `· ${role}` : ""}
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-black">
              {title}
            </h1>

            {context && (
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                {context}
              </p>
            )}

            {techList.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {techList.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono uppercase tracking-[0.1em] text-neutral-600 border border-neutral-300 px-2.5 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 transition-colors duration-200 hover:border-[#FE0600] hover:text-[#FE0600]"
              >
                Live Site
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </header>

        {/* Hero image */}
        {heroUrl && (
          <div className="px-6 pt-10">
            <div className="max-w-5xl mx-auto">
              <BlurImage
                src={heroUrl}
                lqip={heroLqip}
                alt={title}
                hoverLift
                className="w-full aspect-video"
              />
            </div>
          </div>
        )}

        {/* Problem */}
        {problem && (
          <section className="px-6 pt-16">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
                Problem / Context
              </h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                {problem}
              </p>
            </div>
          </section>
        )}

        {/* What I Built */}
        {decisionsList.length > 0 && (
          <section className="px-6 pt-16">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
                What I Built
              </h2>
             <div className="space-y-7">
                {decisionsList.map((decision, i) => (
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
        )}

        {/* Supporting images */}
        {secondaryImagesList.length > 0 && (
          <section className="px-6 pt-16">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {secondaryImagesList.map((img, i) => (
                <BlurImage
                  key={i}
                  src={urlFor(img).width(1000).quality(85).url()}
                  lqip={img?.asset?.metadata?.lqip}
                  alt={`${title} supporting visual ${i + 1}`}
                  fit="natural"
                  hoverLift
                />
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        {outcome && (
          <section className="px-6 pt-20">
            <div className="max-w-3xl mx-auto pt-10 border-t border-neutral-200 space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#FE0600]">
                Outcome
              </h2>
              <p className="text-xl sm:text-2xl text-neutral-900 leading-snug font-medium">
                {outcome}
              </p>
            </div>
          </section>
        )}

        {/* Close */}
        <div className="px-6 py-20">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 transition-colors duration-200 hover:border-[#FE0600] hover:text-[#FE0600]"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}