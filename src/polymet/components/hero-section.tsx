import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadIcon,
  MapPinIcon,
} from "lucide-react";
import { HERO, PROFILE } from "@/polymet/data/portfolio-data";
import { EASE, StaggerText, useStagger } from "@/polymet/components/reveal";
import { ActionLink } from "@/polymet/components/action-link";
import { ArchitectureDiagram } from "@/polymet/components/architecture-diagram";

export function HeroSection() {
  const { container, item, reduce } = useStagger(0.07, 0.1);
  const headlineWords = HERO.headline.split(" ");
  const splitAt = headlineWords.length - 3;
  const lead = headlineWords.slice(0, splitAt).join(" ");
  const tail = headlineWords.slice(splitAt).join(" ");

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:pt-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="
              mb-7 inline-flex max-w-full
              items-center gap-2
              overflow-hidden
              rounded-full
              border border-white/10
              bg-white/[0.03]
              py-1.5 pl-1.5 pr-3
              backdrop-blur-sm
              sm:gap-3 sm:pr-4
  "
          >
            <span
              className="
                shrink-0 rounded-full
                bg-gradient-to-r from-primary/25 to-accent/25
                px-2 py-0.5
                font-mono text-[9px] font-medium
                tracking-[0.12em]
                text-foreground
                sm:px-2.5 sm:text-[11px] sm:tracking-[0.2em]
    "
            >
              {HERO.eyebrow}
            </span>

            <span
              className="
                min-w-0 truncate
                text-xs font-medium text-foreground
                sm:text-sm
              "
            >
              {PROFILE.name}
            </span>
          </motion.div>

          <h1
            id="hero-heading"
            className="text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.35rem]"
          >
            <StaggerText text={lead} delay={0.2} />{" "}
            <StaggerText
              text={tail}
              delay={0.2 + splitAt * 0.06}
              wordClassName="text-gradient"
            />
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO.body}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ActionLink href="#projects" variant="primary">
              View My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ActionLink>
            <ActionLink href="#contact" variant="secondary">
              Let's Talk
            </ActionLink>
            {/* <ActionLink href={PROFILE.cvUrl} download variant="ghost">
              <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </ActionLink> */}
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">
              Core stack
              <span className="h-px flex-1 max-w-16 bg-white/10" />
              <span className="inline-flex items-center gap-1 normal-case tracking-normal">
                <MapPinIcon className="h-3 w-3" /> {PROFILE.location}
              </span>
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
              {HERO.badges.map((b, i) => (
                <motion.li
                  key={b}
                  initial={
                    reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.95 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.9 + i * 0.05,
                    duration: 0.5,
                    ease: EASE,
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10"
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl"
          />
          <ArchitectureDiagram />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
      >
        <ArrowDownIcon
          className={reduce ? "h-3.5 w-3.5" : "h-3.5 w-3.5 animate-bounce"}
        />
        Scroll
      </a>
    </section>
  );
}
