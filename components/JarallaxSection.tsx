"use client";

import { useEffect, useRef, ReactNode } from "react";

interface JarallaxSectionProps {
  className?: string;
  imageSrc: string;
  children: ReactNode;
}

export default function JarallaxSection({
  className = "",
  imageSrc,
  children,
}: JarallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).jQuery) {
      const $ = (window as any).jQuery;
      if ($.fn.jarallax && sectionRef.current) {
        try {
          $(sectionRef.current).jarallax("destroy");
        } catch (e) {}
        try {
          $(sectionRef.current).jarallax({
            imgSrc: imageSrc,
            speed: 0.5,
          });
        } catch (e) {}
      }
    }
  }, [imageSrc]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${className}`}
      suppressHydrationWarning
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </section>
  );
}
