import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarClockIcon,
  CodeXmlIcon,
  GlobeIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT } from "@/polymet/data/portfolio-data";
import { Reveal, useStagger } from "@/polymet/components/reveal";

const ICONS: Record<string, LucideIcon> = {
  role: BriefcaseIcon,
  specialization: CodeXmlIcon,
  location: MapPinIcon,
  experience: SparklesIcon,
  education: GraduationCapIcon,
  availability: GlobeIcon,
  notice: CalendarClockIcon,
};

export function AboutSection() {
  const { container, item } = useStagger(0.06);
  const [first, ...rest] = ABOUT.heading.split(". ");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-primary">01</span>
              <span className="h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
              About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="about-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
            >
              {first}.{" "}
              <span className="text-muted-foreground">{rest.join(". ")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {ABOUT.body}
            </p>
          </Reveal>
        </div>

        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {ABOUT.info.map((info) => {
            const Icon = ICONS[info.key] ?? SparklesIcon;
            const wide = info.key === "education" || info.key === "specialization" ||info.key  === "role";
            return (
              <motion.div
                key={info.key}
                variants={item}
                className={cn(
                  "glow-border group rounded-2xl border border-white/[0.07] bg-card/50 p-5 transition-colors duration-300 hover:bg-card/80",
                  wide && "sm:col-span-2",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {info.label}
                    </dt>
                    <dd className="mt-1.5 text-base font-medium text-foreground">
                      {info.value}
                    </dd>
                    {"detail" in info && info.detail ? (
                      <dd className="mt-1 text-sm text-muted-foreground">
                        {info.detail}
                      </dd>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}
