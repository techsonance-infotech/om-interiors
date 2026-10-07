import ProjectStyle2 from "@/components/projects/ProjectStyle2";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export const metadata = {
  title: "Projects Style 2 — Om Interiors",
  description: "Explore our portfolio of interior design projects style 2.",
};

export default function ProjectsStyle2Page() {
  return (
    <PageLoaderWrapper label="OM INTERIORS PROJECTS">
      <ProjectStyle2 />
    </PageLoaderWrapper>
  );
}
