import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "dce45g85",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}