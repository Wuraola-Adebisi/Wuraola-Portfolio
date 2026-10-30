import BlurImage from "../shared/BlurImage.jsx";
import { urlFor } from "../../lib/sanityClient";

export default function CaseStudyMedia({
  title,
  image,
  video,
  secondaryImages,
}) {
  const heroUrl = image ? urlFor(image).width(1600).quality(85).url() : null;
  const heroLqip = image?.asset?.metadata?.lqip;
  const videoUrl = video?.asset?.url ?? null;
  const extraImages = secondaryImages ?? [];

  if (!heroUrl && !videoUrl && extraImages.length === 0) return null;

  return (
    <section className="px-6 pt-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {videoUrl && (
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
        )}

        {heroUrl && (
          <BlurImage
            src={heroUrl}
            lqip={heroLqip}
            alt={title}
            hoverLift
            className="w-full aspect-video"
          />
        )}

        {extraImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {extraImages.map((img, i) => (
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
        )}
      </div>
    </section>
  );
}
