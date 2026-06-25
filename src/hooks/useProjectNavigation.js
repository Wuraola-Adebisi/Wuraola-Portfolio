export function useProjectNavigation(slug, projects) {
  const currentIndex = projects.findIndex((p) => p.slug?.current === slug);
  const hasSiblings = currentIndex !== -1 && projects.length > 1;

  const prevProject = hasSiblings
    ? projects[(currentIndex - 1 + projects.length) % projects.length]
    : null;

  const nextProject = hasSiblings
    ? projects[(currentIndex + 1) % projects.length]
    : null;

  return { prevProject, nextProject };
}