import type { Metadata } from "next";
import BlogClientComponent from "@/components/blog/BlogClientComponent";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interior Design Blog & Ideas Surat | OM Interior Studio",
  description:
    "Read interior design guides, space planning tips, modular kitchen ideas, and material selection advice from OM Interior studio in Surat, Gujarat.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Interior Design Blog & Ideas Surat | OM Interior Studio",
    description:
      "Read interior design guides, space planning tips, modular kitchen ideas, and material selection advice from OM Interior studio in Surat, Gujarat.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "/blog" }]} />
      <BlogClientComponent />
    </>
  );
}
