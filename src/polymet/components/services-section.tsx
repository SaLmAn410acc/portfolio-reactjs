import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  LayersIcon,
  LayoutTemplateIcon,
  PaletteIcon,
  PlugZapIcon,
  ServerIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type Service } from "@/polymet/data/portfolio-data";
import { SectionHeading } from "@/polymet/components/section-heading";
import { useStagger } from "@/polymet/components/reveal";

const ICONS: Record<Service["icon"], LucideIcon> = {
  layers: LayersIcon,
  layout: LayoutTemplateIcon,
  server: ServerIcon,
  palette: PaletteIcon,
  workflow: WorkflowIcon,
  plug: PlugZapIcon,
};

export function ServicesSection() {
  const { container, item } = useStagger(0.07);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        id="services-heading"
        index="05"
        eyebrow="Services"
        title="How I can help."
        description="From a focused UI build to a complete, real-time web application."
      />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <motion.li
              key={s.id}
              variants={item}
              className="group relative flex min-h-[240px] flex-col bg-background p-7 transition-colors duration-500 hover:bg-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-foreground transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-auto pt-10 text-lg font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ArrowUpRightIcon
                aria-hidden="true"
                className="absolute bottom-7 right-7 h-4 w-4 translate-y-1 text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
