import BlurImage from "../shared/BlurImage.jsx";
import { urlFor } from "../../lib/sanityClient";

export default function CaseStudyMedia({ title, image, video }) {
  const heroUrl = image ? urlFor(image).width(1600).quality(85).url() : null;
  const heroLqip = image?.asset?.metadata?.lqip;
  const videoUrl = video?.asset?.url ?? null;

  if (!heroUrl && !videoUrl) return null;

  return (
    <section className="px-6 pt-10">
      <div className="max-w-5xl mx-auto">
        {videoUrl ? (
          <div className="overflow-hidden rounded-xl bg-black shadow-md shadow-neutral-300/40">
            <video
              src={videoUrl}
              poster={heroUrl}
              controls
              playsInline
              preload="metadata"
              aria-label={`${title} screen recording`}
              className="w-full aspect-video object-contain"
            />
          </div>
        ) : (
          <BlurImage
            src={heroUrl}
            lqip={heroLqip}
            alt={title}
            hoverLift
            className="w-full aspect-video"
          />
        )}
      </div>
    </section>
  );
}
