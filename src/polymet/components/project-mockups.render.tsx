import { ProjectMockup } from "@/polymet/components/project-mockups";

export default function ProjectMockupsRender() {
  return (
    <div className="dark grid min-h-screen gap-8 bg-background p-8 text-foreground lg:grid-cols-3">
      <ProjectMockup type="kanban" />
      <ProjectMockup type="crm" />
      <ProjectMockup type="forms" />
    </div>
  );
}
