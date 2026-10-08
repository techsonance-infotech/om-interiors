import type { Metadata } from "next";
import ConsultationClientComponent from "@/components/consultation/ConsultationClientComponent";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book Free Interior Design Consultation in Surat | OM Interior",
  description:
    "Schedule a free interior design consultation with OM Interior in Surat, Gujarat. Get expert spatial planning advice, 3D concept guidance, and project cost estimates.",
  alternates: {
    canonical: `${siteConfig.url}/consultation`,
  },
  openGraph: {
    title: "Book Free Interior Design Consultation in Surat | OM Interior",
    description:
      "Schedule a free interior design consultation with OM Interior in Surat, Gujarat. Get expert spatial planning advice, 3D concept guidance, and project cost estimates.",
    url: `${siteConfig.url}/consultation`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function ConsultationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Free Consultation", url: "/consultation" }]} />
      <ConsultationClientComponent />
    </>
  );
}
