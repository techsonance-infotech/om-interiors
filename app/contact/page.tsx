import type { Metadata } from "next";
import ContactClientComponent from "@/components/contact/ContactClientComponent";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact OM Interior | Interior Designer in Surat, Gujarat",
  description:
    "Get in touch with OM Interior design studio in Surat, Gujarat. Discuss your residential home interior, 2/3/4 BHK flat design, modular kitchen, or office interior project today.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact OM Interior | Interior Designer in Surat, Gujarat",
    description:
      "Get in touch with OM Interior design studio in Surat, Gujarat. Discuss your residential home interior, 2/3/4 BHK flat design, modular kitchen, or office interior project today.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <ContactClientComponent />
    </>
  );
}
