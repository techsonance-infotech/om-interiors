import ServiceStyle3 from "@/components/services/ServiceStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export const metadata = {
  title: "Services Style 3 — Om Interiors",
  description: "Explore our range of interior design services style 3.",
};

export default function ServicesStyle3Page() {
  return (
    <PageLoaderWrapper label="OM INTERIORS SERVICES">
      <ServiceStyle3 />
    </PageLoaderWrapper>
  );
}
