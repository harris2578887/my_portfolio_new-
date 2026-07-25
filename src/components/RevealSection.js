import React, { useEffect, useRef, useState } from "react";

/**
 * Futuristic expand / collapse on scroll.
 * Sections grow in when entering view and gently collapse when leaving.
 */
function RevealSection({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal-section ${visible ? "is-expanded" : "is-collapsed"} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="reveal-inner">{children}</div>
    </Tag>
  );
}

export default RevealSection;
