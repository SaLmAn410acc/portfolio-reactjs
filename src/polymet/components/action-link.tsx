import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "h-12 px-6 text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] hover:shadow-[0_14px_50px_-8px_hsl(var(--primary)/0.85)] hover:-translate-y-0.5",
  secondary:
    "h-12 px-6 text-foreground bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5",
  ghost:
    "h-12 px-4 text-muted-foreground hover:text-foreground",
};

function Shine({ variant }: { variant: Variant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
    />
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const ActionLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "primary", className, children, ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], className)} {...props}>
      <Shine variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  ),
);
ActionLink.displayName = "ActionLink";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, type = "button", ...props }, ref) => (
    <button ref={ref} type={type} className={cn(base, variants[variant], className)} {...props}>
      <Shine variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  ),
);
ActionButton.displayName = "ActionButton";
