"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import JarallaxSection from "@/components/JarallaxSection";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import { galleryData, GalleryItem } from "@/lib/galleryData";

export default function GalleryClientComponent() {
  const [activeTab, setActiveTab] = useState<"all" | "interior" | "exterior">("all");
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return galleryData;
    return galleryData.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleTabChange = (tab: "all" | "interior" | "exterior") => {
    setActiveTab(tab);
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  };

  return (
    <PageLoaderWrapper label="OM INTERIORS GALLERY">
      <main>
        <a href="#" id="back-to-top"></a>

        {/* Compact Hero Section */}
        <JarallaxSection
          className="bg-dark text-light"
          imageSrc="/images/background/2.webp"
        >
          <div className="container relative z-2 py-4" style={{ paddingTop: "50px", paddingBottom: "35px" }}>
            <div className="row gy-3 gx-5 align-items-center">
              <div className="col-md-8">
                <h1 className="mb-2 wow fadeInUp fs-36" data-wow-delay=".2s">Design Gallery</h1>
                <ul className="crumb wow fadeInUp mb-0">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Gallery</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="mb-0 fs-14 wow fadeInRight text-white-50" data-wow-delay=".2s">
                  Explore our curated 3D render gallery featuring custom residential interiors, commercial spaces, and exterior architectural designs.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom h-50 op-6"></div>
          <div className="sw-overlay op-5"></div>
        </JarallaxSection>

        {/* Filter & Gallery Section */}
        <section className="py-4">
          <div className="container">
            {/* Filter Tabs */}
            <div className="row mb-4">
              <div className="col-md-12 text-center">
                <div className="d-inline-flex border-gray rounded-1 p-2 bg-light shadow-sm">
                  <button
                    onClick={() => handleTabChange("all")}
                    className={`btn px-4 py-2 rounded-1 fw-bold fs-14 me-2 transition ${
                      activeTab === "all" ? "btn-main text-white" : "btn-link text-dark text-decoration-none"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    ALL ({galleryData.length})
                  </button>
                  <button
                    onClick={() => handleTabChange("interior")}
                    className={`btn px-4 py-2 rounded-1 fw-bold fs-14 me-2 transition ${
                      activeTab === "interior" ? "btn-main text-white" : "btn-link text-dark text-decoration-none"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    INTERIOR ({galleryData.filter((i) => i.category === "interior").length})
                  </button>
                  <button
                    onClick={() => handleTabChange("exterior")}
                    className={`btn px-4 py-2 rounded-1 fw-bold fs-14 transition ${
                      activeTab === "exterior" ? "btn-main text-white" : "btn-link text-dark text-decoration-none"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    EXTERIOR ({galleryData.filter((i) => i.category === "exterior").length})
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="row g-4">
              {displayedItems.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div
                    className="relative overflow-hidden rounded-1 border-gray hover-shadow bg-dark text-light"
                    style={{ cursor: "pointer", position: "relative" }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="overflow-hidden relative" style={{ height: "260px" }}>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-100 h-100 hover-scale-1-1 transition"
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                        loading="lazy"
                      />
                      <div className="abs top-0 end-0 p-3">
                        <span className="badge bg-dark text-white opacity-75 fs-12 uppercase tracking-wide">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-dark text-light border-top border-secondary">
                      <h5 className="mb-1 text-truncate text-white fs-16">{item.subCategory}</h5>
                      <small className="text-secondary fs-12">{item.originalFolder}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredItems.length && (
              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <button onClick={handleLoadMore} className="btn-main px-5 py-3 fs-15">
                    Load More Renders ({filteredItems.length - visibleCount} remaining)
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.92)",
              zIndex: 9999,
              padding: "20px",
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="btn text-white position-absolute top-0 end-0 m-4 fs-2 bg-transparent border-0"
              style={{ cursor: "pointer", zIndex: 10000 }}
            >
              &times;
            </button>

            <button
              onClick={handlePrevImage}
              className="btn text-white position-absolute start-0 ms-3 fs-3 bg-dark p-3 circle opacity-75"
              style={{ cursor: "pointer", zIndex: 10000 }}
            >
              &#10094;
            </button>

            <button
              onClick={handleNextImage}
              className="btn text-white position-absolute end-0 me-3 fs-3 bg-dark p-3 circle opacity-75"
              style={{ cursor: "pointer", zIndex: 10000 }}
            >
              &#10095;
            </button>

            <div
              className="text-center position-relative"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "4px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              />
              <div className="mt-3 text-white">
                <h4 className="mb-0 text-white">{selectedImage.subCategory}</h4>
                <small className="text-secondary">{selectedImage.originalFolder}</small>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageLoaderWrapper>
  );
}
