import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  BlocksIcon,
  CableIcon,
  CodeXmlIcon,
  DatabaseIcon,
  PaletteIcon,
  ServerIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SKILL_GROUPS } from "@/polymet/data/portfolio-data";
import { SectionHeading } from "@/polymet/components/section-heading";
import { EASE, Reveal } from "@/polymet/components/reveal";

const ICONS: Record<string, LucideIcon> = {
  frontend: CodeXmlIcon,
  ui: PaletteIcon,
  state: BlocksIcon,
  backend: ServerIcon,
  database: DatabaseIcon,
  apis: CableIcon,
  tools: WrenchIcon,
};

const FILTERS = [{ id: "all", title: "All" }, ...SKILL_GROUPS.map((g) => ({ id: g.id, title: g.title }))];

export function SkillsSection() {
  const [filter, setFilter] = useState("all");
  const reduce = useReducedMotion();
  const groups = filter === "all" ? SKILL_GROUPS : SKILL_GROUPS.filter((g) => g.id === filter);
  const total = SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="skills-heading"
          index="02"
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A practical toolkit across the stack — chosen for building products that are fast, reliable and easy to maintain."
        />
        <Reveal delay={0.1}>
          <p className="font-mono text-xs text-muted-foreground">
            {SKILL_GROUPS.length} categories · {total} technologies
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <LayoutGroup id="skills-filter">
          <div
            role="radiogroup"
            aria-label="Filter skills by category"
            className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "relative shrink-0 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active
                      ? "border-transparent text-foreground"
                      : "border-white/[0.08] text-muted-foreground hover:border-white/20 hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="skill-filter-pill"
                      className="absolute inset-0 rounded-full border border-primary/40 bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f.title}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </Reveal>

      <motion.div layout={!reduce} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {groups.map((group, gi) => {
            const Icon = ICONS[group.id] ?? CodeXmlIcon;
            const featured = filter === "all" && gi === 0;
            const closing = filter === "all" && gi === groups.length - 1;
            return (
              <motion.article
                key={group.id}
                layout={!reduce}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
                transition={{ duration: 0.5, delay: reduce ? 0 : (gi % 3) * 0.06, ease: EASE }}
                className={cn(
                  "glow-border group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-card/50 p-6 transition-colors duration-300 hover:bg-card/80",
                  featured && "lg:col-span-2",
                  closing && "sm:col-span-2 lg:col-span-2",
                  filter !== "all" && "sm:col-span-2 lg:col-span-3",
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent text-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {group.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground/70">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground">
                        <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
