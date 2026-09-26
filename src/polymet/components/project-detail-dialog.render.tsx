import { ProjectDetailDialog } from "@/polymet/components/project-detail-dialog";
import { PROJECTS } from "@/polymet/data/portfolio-data";

export default function ProjectDetailDialogRender() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <ProjectDetailDialog project={PROJECTS[1]} open onOpenChange={() => {}} />
    </div>
  );
}
