import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "dce45g85",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

// Converts a Sanity image reference into a usable URL, with optional
// transformations (e.g. urlFor(image).width(800).url()).
export function urlFor(source) {
  return builder.image(source);
}