export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  image{
    ...,
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    }
  },
  liveUrl,
  domain,
  role,
  context,
  tech
}`;

// GROQ query to fetch a single project by slug, including every
// case-study field, for the ProjectCaseStudy page.
export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image{
    ...,
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    }
  },
  liveUrl,
  domain,
  role,
  context,
  tech,
  problem,
  decisions,
  outcome,
  secondaryImages[]{
    ...,
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    }
  }
}`;