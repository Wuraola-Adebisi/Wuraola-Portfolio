import ToolStack from "./ToolStack.jsx";
import Services from "./Services.jsx";
import BlurImage from "../shared/BlurImage.jsx";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { urlFor } from "../../lib/sanityClient";

const FALLBACK_PHOTO_URL =
  "https://res.cloudinary.com/dnkfg07ov/image/upload/v1781643384/BLAC8476_xi7utl.jpg";

export default function About() {
  const { settings } = useSiteSettings();

  const aboutPhoto = settings?.aboutPhoto;
  const photoUrl = aboutPhoto
    ? urlFor(aboutPhoto).width(800).quality(85).url()
    : FALLBACK_PHOTO_URL;
  const photoLqip = aboutPhoto?.asset?.metadata?.lqip;

  return (
    <section id="about" className="bg-neutral-950 text-white px-6 pt-14 pb-24">
      <div className="max-w-6xl mx-auto">
        <ToolStack />

        <div className="my-16 border-t border-neutral-800" />

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE0600] mb-10">
          About
        </p>

        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-start">
          <div>
            <p className="text-neutral-200 leading-[1.9]">
              Hi, I'm a frontend developer.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              I think in structure and hierarchy: what a person needs to see
              first, and what they need to understand before they can act.
              An interface that requires explanation has already failed at
              its one job.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              That same instinct is why I believe functionality and design
              are equally yoked: each pulling its own weight, neither one
              sacrificed for the other. That's the standard I bring to every
              project.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              That instinct comes from years across marketing and
              communications, motion design, social, and video, eventually
              leading a digital team, all of it really one job: making a
              message land, not just exist.
            </p>

            <p className="mt-8 text-neutral-200 leading-[1.9]">
              Here's what that looks like in practice.
            </p>

            <div className="mt-10">
              <Services />
            </div>

            <p className="mt-10 text-neutral-400 text-sm">
              Outside of that, I live on Pinterest, you'll usually find me
              curating a board or knee deep in YouTube videos.
            </p>
          </div>

          <div>
            <BlurImage
              src={photoUrl}
              lqip={photoLqip}
              alt="Wuraola Adebisi"
              objectFit="cover"
              noShadow
              className="w-full aspect-4/5"
            />

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
          </div>
        </div>
      </div>
    </section>
  );
}