import { getCurrentProjectStyle } from "@/lib/projects/rotation";
import ProjectStyle1 from "@/components/projects/ProjectStyle1";
import ProjectStyle2 from "@/components/projects/ProjectStyle2";
import ProjectStyle3 from "@/components/projects/ProjectStyle3";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

// Ensure Next.js evaluates date-based rotation on every request
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects — Om Interiors Interior Design",
  description: "Explore our portfolio of luxury interior design projects.",
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
      {renderActiveStyle()}
    </PageLoaderWrapper>
  );
}
