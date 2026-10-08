import type { Metadata } from "next";
import FAQClientComponent from "@/components/faq/FAQClientComponent";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interior Design FAQs Surat | OM Interior Studio",
  description:
    "Find answers to common questions about hiring an interior designer in Surat, Gujarat. Learn about OM Interior's design process, project costs, timelines, residential services, and modular kitchens.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "Interior Design FAQs Surat | OM Interior Studio",
    description:
      "Find answers to common questions about hiring an interior designer in Surat, Gujarat. Learn about OM Interior's design process, project costs, timelines, residential services, and modular kitchens.",
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
};

const faqList = [
  {
    question: "What interior design services do you offer in Surat?",
    answer:
      "OM Interior provides residential and commercial interior design, space planning, concept development, material selection, 3D visualization, modular kitchen design, and turnkey project execution across Surat, Gujarat.",
  },
  {
    question: "How do I start a design project with OM Interior?",
    answer:
      "Simply contact us or request a free consultation through our website or phone (+91-7990114574). We will discuss your vision, spatial requirements, budget, and project timeline.",
  },
  {
    question: "Do you handle both residential and commercial spaces in Surat?",
    answer:
      "Yes, we design luxury residences, 2/3/4 BHK modern apartments, corporate offices, retail showrooms, and hospitality interiors tailored to each client's unique brand and lifestyle.",
  },
  {
    question: "How long does an interior design project take in Surat?",
    answer:
      "Timelines vary depending on project scope. Single room redesigns take 2 to 4 weeks, whereas complete 2/3/4 BHK home interiors or office fitouts typically take 6 to 12 weeks.",
  },
  {
    question: "Do you provide modular kitchen design in Surat?",
    answer:
      "Yes, we design and execute custom modular kitchens with ergonomic layouts, premium hardware, water-resistant shutters, smart storage solutions, and durable countertops.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqList} />
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />
      <FAQClientComponent />
    </>
  );
}
