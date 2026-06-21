export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  image,
  liveUrl,
  domain,
  role,
  context,
  tech
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image,
  liveUrl,
  domain,
  role,
  context,
  tech,
  problem,
  decisions,
  outcome,
  secondaryImages
}`;