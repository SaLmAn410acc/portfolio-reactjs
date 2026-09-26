import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  DatabaseIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  WaypointsIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/polymet/components/reveal";

type Layer = {
  id: string;
  label: string;
  role: string;
  icon: LucideIcon;
  tech: string[];
  note: string;
};

const LAYERS: Layer[] = [
  {
    id: "frontend",
    label: "Frontend",
    role: "Interface layer",
    icon: MonitorSmartphoneIcon,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    note: "Responsive, accessible UI with typed components and predictable state.",
  },
  {
    id: "api",
    label: "API",
    role: "Contract layer",
    icon: WaypointsIcon,
    tech: ["REST", "WebSockets", "NextAuth", "Stripe"],
    note: "Typed request/response contracts, real-time channels and auth flows.",
  },
  {
    id: "backend",
    label: "Backend",
    role: "Service layer",
    icon: ServerCogIcon,
    tech: ["Node.js", "Express.js", "Java", "Spring Boot"],
    note: "Business logic and services exposed through clean, versionable APIs.",
  },
  {
    id: "database",
    label: "Database",
    role: "Persistence layer",
    icon: DatabaseIcon,
    tech: ["PostgreSQL", "MySQL"],
    note: "Relational data modelled for integrity and efficient queries.",
  },
];

function Connector({ active, reduce }: { active: boolean; reduce: boolean | null }) {
  return (
    <div className="relative mx-auto h-7 w-px" aria-hidden="true">
      <svg className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 overflow-visible" viewBox="0 0 2 28" preserveAspectRatio="none">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="28"
          stroke="hsl(var(--foreground) / 0.18)"
          strokeWidth="1"
          strokeDasharray="3 3"
          style={
            reduce ? undefined : { animation: "dash-flow 1.2s linear infinite" }
          }
        />
      </svg>
      {!reduce && (
        <motion.span
          className={cn(
            "absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full",
            active
              ? "bg-primary shadow-[0_0_10px_2px_hsl(var(--primary)/0.8)]"
              : "bg-foreground/30",
          )}
          animate={{ top: ["-4px", "28px"], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setInterval(
      () => setActiveIdx((i) => (i + 1) % LAYERS.length),
      2600,
    );
    return () => window.clearInterval(t);
  }, [reduce, paused]);

  const active = LAYERS[activeIdx];

  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/[0.08] bg-card/60 p-1.5 shadow-[0_30px_120px_-30px_hsl(var(--primary)/0.35)] backdrop-blur-md",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rounded-[20px] border border-white/[0.05] bg-background/60">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            system / request-flow
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            live
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div role="tablist" aria-label="Application layers" aria-orientation="vertical">
            {LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              const isActive = i === activeIdx;
              return (
                <Fragment key={layer.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="layer-detail"
                    id={`layer-tab-${layer.id}`}
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={cn(
                      "group relative flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "border-primary/40 bg-primary/[0.07]"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/15",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="layer-glow"
                        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_-8px_hsl(var(--primary)/0.55)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-colors",
                        isActive
                          ? "border-primary/40 bg-gradient-to-br from-primary/30 to-accent/20 text-foreground"
                          : "border-white/10 bg-white/[0.03] text-muted-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-foreground">
                        {layer.label}
                      </span>
                      <span className="block font-mono text-[11px] text-muted-foreground">
                        {layer.role}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </button>
                  {i < LAYERS.length - 1 && (
                    <Connector active={i === activeIdx} reduce={reduce} />
                  )}
                </Fragment>
              );
            })}
          </div>

          <div
            id="layer-detail"
            role="tabpanel"
            aria-labelledby={`layer-tab-${active.id}`}
            className="mt-4 min-h-[112px] rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {active.note}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${active.label} technologies`}>
                  {active.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-foreground/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
