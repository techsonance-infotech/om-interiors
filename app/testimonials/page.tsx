import type { Metadata } from "next";
import TestimonialsClientComponent from "@/components/testimonials/TestimonialsClientComponent";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — Interior Designer Surat | OM Interior",
  description:
    "Read client reviews and testimonials for OM Interior in Surat, Gujarat. Discover experiences from homeowners and commercial clients who transformed their spaces with our interior studio.",
  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },
  openGraph: {
    title: "Client Reviews & Testimonials — Interior Designer Surat | OM Interior",
    description:
      "Read client reviews and testimonials for OM Interior in Surat, Gujarat. Discover experiences from homeowners and commercial clients who transformed their spaces with our interior studio.",
    url: `${siteConfig.url}/testimonials`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Testimonials", url: "/testimonials" }]} />
      <TestimonialsClientComponent />
    </>
  );
}
