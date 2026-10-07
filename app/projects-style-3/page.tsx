import ProjectStyle3 from "@/components/projects/ProjectStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

export const metadata = {
  title: "Projects Style 3 — Om Interiors",
  description: "Explore our portfolio of interior design projects style 3.",
};

export default function ProjectsStyle3Page() {
  return (
    <PageLoaderWrapper label="OM INTERIORS PROJECTS">
      <ProjectStyle3 />
    </PageLoaderWrapper>
  );
}
