import ServiceStyle2 from "@/components/services/ServiceStyle2";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export const metadata = {
  title: "Services Style 2 — Om Interiors",
  description: "Explore our range of interior design services style 2.",
};

export default function ServicesStyle2Page() {
  return (
    <PageLoaderWrapper label="OM INTERIORS SERVICES">
      <ServiceStyle2 />
    </PageLoaderWrapper>
  );
}
