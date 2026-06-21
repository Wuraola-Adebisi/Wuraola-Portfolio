import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanityClient";
import { PROJECT_BY_SLUG_QUERY } from "../lib/queries";

export function useProjectDetail(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    Promise.resolve()
      .then(() => {
        if (isMounted) setLoading(true);
        return sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug });
      })
      .then((data) => {
        if (isMounted) {
          setProject(data);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { project, loading, error };
}