import { useEffect, useRef, useState } from "react";

function shouldSkipMotion() {
  if (typeof window === "undefined") return true;
  if (!("IntersectionObserver" in window)) return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(shouldSkipMotion);

  useEffect(() => {
    if (visible) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const stateClasses = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <div
      ref={ref}
      className={`transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none ${stateClasses} ${className}`}
    >
      {children}
    </div>
  );
}
