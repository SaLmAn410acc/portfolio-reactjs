import { CheckIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/polymet/data/portfolio-data";
import {
  ProjectImageCarousel,
  ProjectMockup,
} from "@/polymet/components/project-mockups";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDetailDialog({ project, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dark max-h-[90svh] max-w-3xl overflow-y-auto rounded-3xl border-white/10 bg-card/95 p-0 text-foreground backdrop-blur-xl sm:rounded-3xl">
        {project && (
          <>
            <div className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 p-5 sm:p-8">
              <div
                aria-hidden="true"
                className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]"
              />
              {project.images?.length ? (
                <ProjectImageCarousel images={project.images} className="relative" />
              ) : (
                <ProjectMockup type={project.mockup} className="relative" />
              )}
            </div>

            <div className="p-6 sm:p-8">
              <DialogHeader className="text-left">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {project.index} · {project.category}
                </p>
                <DialogTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="pt-1 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Key features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Tech stack
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-foreground/90"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
