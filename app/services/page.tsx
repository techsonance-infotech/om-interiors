import type { Metadata } from "next";
import { getCurrentServiceStyle } from "@/lib/services/rotation";
import ServiceStyle1 from "@/components/services/ServiceStyle1";
import ServiceStyle2 from "@/components/services/ServiceStyle2";
import ServiceStyle3 from "@/components/services/ServiceStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

// Ensure Next.js evaluates the date-based rotation on every request
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Interior Design Services in Surat, Gujarat | OM Interior",
  description:
    "Explore interior design services by OM Interior in Surat, Gujarat. Specialized in residential interiors, modular kitchens, living room design, bedroom interiors, space planning, and office design.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Interior Design Services in Surat, Gujarat | OM Interior",
    description:
      "Explore interior design services by OM Interior in Surat, Gujarat. Specialized in residential interiors, modular kitchens, living room design, bedroom interiors, space planning, and office design.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

interface PageProps {
  searchParams: Promise<{
    style?: string;
  }>;
}

export default async function ServicesPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeStyle = getCurrentServiceStyle(resolvedSearchParams.style);

  const renderActiveStyle = () => {
    switch (activeStyle) {
      case "style1":
        return <ServiceStyle1 />;
      case "style2":
        return <ServiceStyle2 />;
      case "style3":
        return <ServiceStyle3 />;
      default:
        return <ServiceStyle1 />;
    }
  };

  return (
    <PageLoaderWrapper label="OM INTERIORS SERVICES">
      <BreadcrumbSchema items={[{ name: "Services", url: "/services" }]} />
      {renderActiveStyle()}
    </PageLoaderWrapper>
  );
}
