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
              Hi, I'm Wuraola, a frontend developer.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              I think in structure and hierarchy: what a person needs to see
              first, and what they need to understand before they can act. An
              interface that requires explanation has already failed at its one
              job.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              That's why I believe functionality and design are
              equally yoked: each pulling its own weight, neither one sacrificed
              for the other. That's the standard I bring to every project.
            </p>

            <p className="mt-3 text-neutral-300 leading-[1.9]">
              I have a background in Marketing Communications and a degree in
              Communication and Language Arts from the University of Ibadan.
              Before development, I worked across motion design, social media,
              video editing, graphics, and eventually led a digital team. That
              experience taught me how products communicate, how people engage with them, and how
              design decisions shape behavior. Development became a natural
              extension of that perspective.
            </p>

            <p className="mt-8 text-neutral-200 leading-[1.9]">
              Here's what that looks like in practice.
            </p>

            <div className="mt-10">
              <Services />
            </div>
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
