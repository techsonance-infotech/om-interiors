import type { Metadata } from "next";
import GalleryClientComponent from "@/components/gallery/GalleryClientComponent";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "3D Interior Render & Design Gallery Surat | OM Interior",
  description:
    "Explore 3D interior design renders and high-resolution project portfolio by OM Interior in Surat, Gujarat. Showcasing living rooms, bedrooms, kitchens, and luxury home concepts.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "3D Interior Render & Design Gallery Surat | OM Interior",
    description:
      "Explore 3D interior design renders and high-resolution project portfolio by OM Interior in Surat, Gujarat. Showcasing living rooms, bedrooms, kitchens, and luxury home concepts.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", url: "/gallery" }]} />
      <GalleryClientComponent />
    </>
  );
}
