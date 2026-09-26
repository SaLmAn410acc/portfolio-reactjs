import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { BriefcaseIcon, CheckIcon } from "lucide-react";
import { EXPERIENCE } from "@/polymet/data/portfolio-data";
import { SectionHeading } from "@/polymet/components/section-heading";
import { EASE, useStagger } from "@/polymet/components/reveal";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const { container, item } = useStagger(0.07, 0.2);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        id="experience-heading"
        index="03"
        eyebrow="Experience"
        title="Where I've been building."
        description="Professional work shipping production frontend features, integrations and tooling."
      />

      <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[15px] top-0 w-px bg-white/[0.08] sm:left-[23px]"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : scaleY }}
          className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-primary via-accent to-transparent sm:left-[23px]"
        />

        <ol className="space-y-10">
          {EXPERIENCE.map((exp) => (
            <li key={exp.company} className="relative">
              <motion.span
                aria-hidden="true"
                initial={{ scale: reduce ? 1 : 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute -left-10 top-6 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background shadow-[0_0_24px_-4px_hsl(var(--primary)/0.7)] sm:-left-16 sm:h-12 sm:w-12"
              >
                <BriefcaseIcon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              </motion.span>

              <motion.article
                initial={{ opacity: 0, x: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="glow-border relative overflow-hidden rounded-3xl border border-white/[0.07] bg-card/50 p-6 sm:p-9"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-lg text-muted-foreground">
                      at <span className="text-foreground">{exp.company}</span>
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {exp.type}
                  </span>
                </div>

                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative mt-8 grid gap-3 sm:grid-cols-2"
                >
                  {exp.points.map((p) => (
                    <motion.li
                      key={p}
                      variants={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {p}
                    </motion.li>
                  ))}
                </motion.ul>

                <ul className="relative mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6" aria-label="Technologies used">
                  {exp.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
