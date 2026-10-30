import { useParams } from "react-router-dom";
import Nav from "../components/layout/Nav.jsx";
import SiteFooter from "../components/footer/sitefooter.jsx";
import { useProjectDetail } from "../hooks/useProjectDetail";
import { useProjects } from "../hooks/useProjects";
import { useProjectNavigation } from "../hooks/useProjectNavigation";
import BlurImage from "../components/shared/BlurImage.jsx";
import { urlFor } from "../lib/sanityClient";
import { useSeo } from "../hooks/useSeo.js";
import { SITE_NAME, SITE_URL, truncate } from "../lib/seo";
import Reveal from "../components/shared/Reveal.jsx";
import TagList from "../components/shared/TagList.jsx";
import CaseStudyLoading from "../components/projects/CaseStudyLoading.jsx";
import CaseStudyNotFound from "../components/projects/CaseStudyNotFound.jsx";
import CaseStudyHeader from "../components/projects/CaseStudyHeader.jsx";
import CaseStudyMedia from "../components/projects/CaseStudyMedia.jsx";
import TechnicalHighlights from "../components/projects/TechnicalHighlights.jsx";
import ProjectNavigation from "../components/projects/ProjectNavigation.jsx";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const { project, loading, error } = useProjectDetail(slug);
  const { projects } = useProjects();
  const { prevProject, nextProject } = useProjectNavigation(slug, projects);

  const seoTitle = project?.title
    ? `${project.title} | Case Study | ${SITE_NAME}`
    : undefined;
  const seoDescription = truncate(project?.context ?? project?.problem);
  const seoImage = project?.image
    ? urlFor(project.image).width(1200).height(630).fit("crop").quality(80).url()
    : undefined;
  const seoNotFound = Boolean(error) || (!loading && !project);

  useSeo({
    title: seoTitle,
    description: seoDescription,
    path: `/projects/${slug}`,
    image: seoImage,
    imageAlt: project?.title ? `${project.title} preview` : undefined,
    type: "article",
    noindex: seoNotFound,
    jsonLd: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: seoDescription,
          image: seoImage,
          url: `${SITE_URL}/projects/${slug}`,
          author: {
            "@type": "Person",
            name: SITE_NAME,
            url: `${SITE_URL}/`,
          },
        }
      : null,
  });

  if (loading) return <CaseStudyLoading />;
  if (error || !project) return <CaseStudyNotFound />;

  const {
    title,
    image,
    video,
    liveUrl,
    domain,
    role,
    context,
    tech,
    problem,
    responsibilities,
    decisions,
    outcome,
    secondaryImages,
  } = project;

  const secondaryImagesList = secondaryImages ?? [];

  return (
    <div className="min-h-screen bg-brand-cream text-black antialiased">
      <Nav />

      <main>
        <Reveal>
          <CaseStudyHeader
            title={title}
            domain={domain}
            role={role}
            context={context}
            tech={tech}
            liveUrl={liveUrl}
          />
        </Reveal>

        <Reveal>
          <CaseStudyMedia
            title={title}
            image={image}
            video={video}
          />
        </Reveal>

        {problem && (
          <Reveal>
            <section className="px-6 pt-16">
              <div className="max-w-3xl mx-auto space-y-3">
                <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-brand-fire">
                  Problem / Context
                </h2>
                <p className="text-lg text-neutral-800 leading-relaxed">
                  {problem}
                </p>
              </div>
            </section>
          </Reveal>
        )}

        <Reveal>
          <TechnicalHighlights decisions={decisions} />
        </Reveal>

        {responsibilities?.length > 0 && (
          <Reveal>
            <section className="px-6 pt-16">
              <div className="max-w-3xl mx-auto space-y-3">
                <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-brand-fire">
                  Responsibilities
                </h2>
                <TagList items={responsibilities} />
              </div>
            </section>
          </Reveal>
        )}

        {secondaryImagesList.length > 0 && (
          <Reveal>
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
          </Reveal>
        )}

        {outcome && (
          <Reveal>
            <section className="px-6 pt-20">
              <div className="max-w-3xl mx-auto pt-10 border-t border-neutral-200 space-y-4">
                <h2 className="text-[10px] uppercase tracking-[0.25em] font-mono text-brand-fire">
                  Outcome
                </h2>
                <p className="text-xl sm:text-2xl text-neutral-900 leading-snug font-medium">
                  {outcome}
                </p>
              </div>
            </section>
          </Reveal>
        )}

        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
