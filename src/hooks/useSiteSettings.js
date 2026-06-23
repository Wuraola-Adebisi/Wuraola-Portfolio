import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanityClient";
import { SITE_SETTINGS_QUERY } from "../lib/queries";

export function useSiteSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    sanityClient
      .fetch(SITE_SETTINGS_QUERY)
      .then((data) => {
        if (isMounted) {
          setSettings(data);
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
  }, []);

  return { settings, loading, error };
}