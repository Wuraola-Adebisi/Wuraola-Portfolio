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
  responsibilities,
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

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  aboutPhoto{
    ...,
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    }
  }
}`;