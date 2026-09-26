import { useState, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, type Project } from "@/polymet/data/portfolio-data";
import { SectionHeading } from "@/polymet/components/section-heading";
import { EASE } from "@/polymet/components/reveal";
import {
  ProjectImageCarousel,
  ProjectMockup,
} from "@/polymet/components/project-mockups";
import { ProjectDetailDialog } from "@/polymet/components/project-detail-dialog";

function ProjectCard({
  project,
  reversed,
  onOpen,
}: {
  project: Project;
  reversed: boolean;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, hsl(var(--primary) / 0.12), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: EASE }}
      onMouseMove={onMove}
      className="glow-border group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-card/40"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className={cn("relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12")}>
        <div className={cn("flex flex-col", reversed && "lg:order-2")}>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="text-primary">{project.index}</span>
            <span className="h-px w-6 bg-white/15" />
            <span className="uppercase tracking-[0.18em]">{project.category}</span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-foreground/85"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpen}
              aria-haspopup="dialog"
              className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View details
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <a
              href={project.link}
              aria-label={`Visit ${project.name}`}
              className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              target="_blank"
            >
              Visit
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className={cn("relative", reversed && "lg:order-1")}>
          <div
            aria-hidden="true"
            className="absolute inset-4 -z-0 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-60"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-3 sm:p-4">
            <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]">
              {project.images?.length ? (
                <ProjectImageCarousel images={project.images} />
              ) : (
                <ProjectMockup type={project.mockup} />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        id="projects-heading"
        index="04"
        eyebrow="Projects"
        title="Selected work."
        description="Production applications spanning internal ERP tooling, CRM platforms and SaaS products."
      />

      <div className="mt-14 space-y-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            reversed={i % 2 === 1}
            onOpen={() => {
              setSelected(p);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <ProjectDetailDialog
        project={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  );
}
