"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      // Sequential post-hydration script loading
      await loadScript("/js/vendors.js");
      if (cancelled) return;
      await loadScript("/js/designesia.js");
      if (cancelled) return;
      await loadScript("/js/swiper.js");
      if (cancelled) return;
      await loadScript("/js/custom-swiper-1.js");
      if (cancelled) return;

      // Re-trigger theme reinitialization & WOW scroll animations
      if ((window as any).reinitTheme) {
        (window as any).reinitTheme();
      }
      if ((window as any).WOW) {
        try {
          new (window as any).WOW({ live: true }).init();
        } catch (e) {}
      }
      if ((window as any).initOwlCarousels) {
        try {
          (window as any).initOwlCarousels();
        } catch (e) {}
      }
      setTimeout(() => {
        if ((window as any).initOwlCarousels) {
          try {
            (window as any).initOwlCarousels();
          } catch (e) {}
        }
      }, 100);

      if ((window as any).jQuery) {
        const $ = (window as any).jQuery;
        $("#de-loader").hide();
        window.dispatchEvent(new Event("resize"));
        $(window).trigger("scroll");
      }

      if ((window as any)._lenisInstance) {
        try {
          (window as any)._lenisInstance.resize();
        } catch (e) {}
      }

      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        if ((window as any)._lenisInstance) {
          try {
            (window as any)._lenisInstance.resize();
          } catch (e) {}
        }
      }, 300);
    };

    initScripts();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
