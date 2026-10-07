"use client";

import { useEffect, useState } from "react";

interface PageLoaderWrapperProps {
  label?: string;
  children: React.ReactNode;
}

export default function PageLoaderWrapper({
  label = "OM INTERIORS SERVICES",
  children,
}: PageLoaderWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide preloader smoothly after page DOM mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 750);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {!hidden && (
        <div
          className={`de-loader-overlay ${!loading ? "loader-fade-out" : ""}`}
          suppressHydrationWarning
          style={{
            transition: "opacity 0.4s ease, visibility 0.4s ease",
            opacity: loading ? 1 : 0,
            visibility: loading ? "visible" : "hidden",
            pointerEvents: "none",
            display: loading ? "flex" : "none",
          }}
        >
          <div className="de-loader-content" suppressHydrationWarning>
            <div className="de-spinner" suppressHydrationWarning>
              <div suppressHydrationWarning></div>
              <div suppressHydrationWarning></div>
              <div suppressHydrationWarning></div>
              <div suppressHydrationWarning></div>
            </div>
            <span className="de-loader-text" suppressHydrationWarning>{label}</span>
          </div>
        </div>
      )}

      <div suppressHydrationWarning style={{ opacity: loading ? 0.8 : 1, transition: "opacity 0.3s ease" }}>
        {children}
      </div>
    </>
  );
}
