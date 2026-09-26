import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fixed, subtle animated grid with soft blue/violet glows. */
export function GridBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]"
        style={reduce ? undefined : { animation: "grid-drift 18s linear infinite" }}
      />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.13] blur-[120px]" />
      <div className="absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full bg-accent/[0.08] blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
    </div>
  );
}
