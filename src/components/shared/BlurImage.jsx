import { useState } from "react";

export default function BlurImage({
  src,
  lqip,
  alt,
  className = "",
  fit = "cover",
  hoverLift = false,
  plain = false,
}) {
  const [loaded, setLoaded] = useState(false);

  const liftClasses = hoverLift
    ? "transition-transform duration-300 hover:-translate-y-1"
    : "";

  const frameClasses = plain
    ? "overflow-hidden"
    : "overflow-hidden rounded-xl shadow-md shadow-neutral-300/40";

  if (fit === "natural") {
    return (
      <div
        className={`relative ${frameClasses} ${liftClasses} ${className}`}
      >
        {lqip && !loaded && (
          <img
            src={lqip}
            alt=""
            aria-hidden="true"
            className="w-full block blur-xl"
          />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full block transition-opacity duration-500 ${
            loaded ? "opacity-100 relative" : "opacity-0 absolute top-0 left-0"
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${frameClasses} ${liftClasses} ${className}`}
    >
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