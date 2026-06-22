import { useState } from "react";

export default function BlurImage({
  src,
  lqip,
  alt,
  className = "",
  fit = "cover",
}) {
  const [loaded, setLoaded] = useState(false);

  if (fit === "natural") {
    return (
      <div className={`relative ${className}`}>
        {lqip && !loaded && (
          <img
            src={lqip}
            alt=""
            aria-hidden="true"
            className="w-full blur-xl"
          />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full transition-opacity duration-500 ${
            loaded ? "opacity-100 relative" : "opacity-0 absolute top-0 left-0"
          }`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {lqip && (
        <img
          src={lqip}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover scale-105 blur-xl transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-contain transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}