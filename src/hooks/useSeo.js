import { useEffect } from "react";
import {
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
} from "../lib/seo";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');

  if (!href) {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

function setJsonLd(data) {
  const id = "page-jsonld";
  let el = document.getElementById(id);

  if (!data) {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }

  el.textContent = JSON.stringify(data);
}

export function useSeo({
  title,
  description,
  path = "/",
  image,
  imageAlt,
  type = "website",
  noindex = false,
  jsonLd = null,
} = {}) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const pageTitle = title ?? DEFAULT_TITLE;
    const pageDescription = description ?? DEFAULT_DESCRIPTION;
    const pageImage = image ?? DEFAULT_IMAGE;
    const pageImageAlt = imageAlt ?? DEFAULT_IMAGE_ALT;
    const pageUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = pageTitle;

    upsertMeta("name", "description", pageDescription);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow"
    );

    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", pageImage);
    upsertMeta("property", "og:image:alt", pageImageAlt);

    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", pageImage);
    upsertMeta("name", "twitter:image:alt", pageImageAlt);

    setCanonical(noindex ? null : pageUrl);
    setJsonLd(jsonLdKey ? JSON.parse(jsonLdKey) : null);
  }, [title, description, path, image, imageAlt, type, noindex, jsonLdKey]);
}
