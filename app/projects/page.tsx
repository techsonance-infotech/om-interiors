import type { Metadata } from "next";
import { getCurrentProjectStyle } from "@/lib/projects/rotation";
import ProjectStyle1 from "@/components/projects/ProjectStyle1";
import ProjectStyle2 from "@/components/projects/ProjectStyle2";
import ProjectStyle3 from "@/components/projects/ProjectStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

// Ensure Next.js evaluates date-based rotation on every request
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Interior Design Portfolio & Projects in Surat | OM Interior",
  description:
    "Explore completed interior design projects by OM Interior in Surat, Gujarat. Showcasing luxury residential homes, 2/3/4 BHK flat interiors, modular kitchens, and office designs across Vesu, Adajan, and Pal.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Interior Design Portfolio & Projects in Surat | OM Interior",
    description:
      "Explore completed interior design projects by OM Interior in Surat, Gujarat. Showcasing luxury residential homes, modular kitchens, and office designs.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

interface PageProps {
  searchParams: Promise<{
    style?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeStyle = getCurrentProjectStyle(resolvedSearchParams.style);

  const renderActiveStyle = () => {
    switch (activeStyle) {
      case "style1":
        return <ProjectStyle1 />;
      case "style2":
        return <ProjectStyle2 />;
      case "style3":
        return <ProjectStyle3 />;
      default:
        return <ProjectStyle1 />;
    }
  };

  return (
    <PageLoaderWrapper label="OM INTERIORS PROJECTS">
      <BreadcrumbSchema items={[{ name: "Projects", url: "/projects" }]} />
      {renderActiveStyle()}
    </PageLoaderWrapper>
  );
}
