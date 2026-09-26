import { motion } from "framer-motion";
import {
  AccessibilityIcon,
  GaugeIcon,
  HeartHandshakeIcon,
  MoveUpRightIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";
import { PHILOSOPHY } from "@/polymet/data/portfolio-data";
import { Reveal, useStagger } from "@/polymet/components/reveal";

const ICONS: Record<string, LucideIcon> = {
  performance: GaugeIcon,
  usability: AccessibilityIcon,
  scalability: MoveUpRightIcon,
  maintainability: WrenchIcon,
  ux: HeartHandshakeIcon,
};

export function PhilosophySection() {
  const { container, item } = useStagger(0.08);

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-card/40 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div aria-hidden="true" className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

        <div className="relative">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-primary">06</span> · Philosophy
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="philosophy-heading"
              className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              I care about the <span className="text-gradient">details.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {PHILOSOPHY.body}
            </p>
          </Reveal>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3"
          >
            {PHILOSOPHY.highlights.map((h) => {
              const Icon = ICONS[h.id] ?? GaugeIcon;
              return (
                <motion.li
                  key={h.id}
                  variants={item}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-background/60 py-2 pl-2 pr-5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary/25 to-accent/20 text-foreground transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </span>
                  {h.label}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
