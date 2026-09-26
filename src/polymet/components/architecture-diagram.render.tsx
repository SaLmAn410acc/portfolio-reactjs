import { ArchitectureDiagram } from "@/polymet/components/architecture-diagram";

export default function ArchitectureDiagramRender() {
  return (
    <div className="dark flex min-h-screen items-center justify-center bg-background p-8 text-foreground">
      <div className="w-full max-w-md">
        <ArchitectureDiagram />
      </div>
    </div>
  );
}
