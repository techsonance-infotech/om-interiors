import { getCurrentServiceStyle } from "@/lib/services/rotation";
import ServiceStyle1 from "@/components/services/ServiceStyle1";
import ServiceStyle2 from "@/components/services/ServiceStyle2";
import ServiceStyle3 from "@/components/services/ServiceStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

// Ensure Next.js evaluates the date-based rotation on every request
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Services — Om Interiors Interior Design",
  description: "Explore our range of luxury interior design services.",
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
      {renderActiveStyle()}
    </PageLoaderWrapper>
  );
}
