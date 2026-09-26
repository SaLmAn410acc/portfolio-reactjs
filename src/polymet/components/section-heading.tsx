import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/polymet/components/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
            align === "center" && "justify-center",
          )}
        >
          <span className="text-primary">{index}</span>
          <span className="h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id={id}
          className="text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
