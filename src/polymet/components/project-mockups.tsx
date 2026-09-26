import {
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  type WheelEvent,
} from "react";
import { cn } from "@/lib/utils";
import type { ProjectMockup as MockupType } from "@/polymet/data/portfolio-data";

function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-foreground/15", className)} />;
}

function Chrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[hsl(232_30%_6%)] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </span>
        <span className="mx-auto rounded-md bg-white/[0.04] px-3 py-0.5 font-mono text-[9px] text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

function SideNav({ items, activeIdx = 0 }: { items: string[]; activeIdx?: number }) {
  return (
    <div className="hidden w-[26%] shrink-0 flex-col gap-1 border-r border-white/[0.06] p-2 sm:flex">
      <span className="mb-2 h-4 w-4 rounded-md bg-gradient-to-br from-primary to-accent" />
      {items.map((it, i) => (
        <span
          key={it}
          className={cn(
            "truncate rounded-md px-1.5 py-1 text-[8px]",
            i === activeIdx ? "bg-primary/15 text-foreground" : "text-muted-foreground",
          )}
        >
          {it}
        </span>
      ))}
    </div>
  );
}

function KanbanMockup() {
  const cols = [
    { title: "To Do", tone: "bg-foreground/30", cards: 3 },
    { title: "In Progress", tone: "bg-primary", cards: 2 },
    { title: "Blocked", tone: "bg-rose-400", cards: 1 },
    { title: "Done", tone: "bg-emerald-400", cards: 2 },
  ];
  return (
    <Chrome title="portal / kanban">
      <div className="flex h-full">
        <SideNav items={["Kanban", "Attendance", "Progress", "Tasks", "Obstacles", "Payroll"]} />
        <div className="flex min-w-0 flex-1 flex-col p-2.5">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[10px] font-medium text-foreground">Sprint Board</span>
            <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 text-[7px] text-emerald-300">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" /> Live
            </span>
          </div>
          <div className="grid flex-1 grid-cols-4 gap-1.5">
            {cols.map((c) => (
              <div key={c.title} className="flex flex-col gap-1.5 rounded-lg bg-white/[0.025] p-1.5">
                <span className="flex items-center gap-1 text-[7px] font-medium text-muted-foreground">
                  <span className={cn("h-1.5 w-1.5 rounded-full", c.tone)} />
                  {c.title}
                </span>
                {Array.from({ length: c.cards }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "space-y-1 rounded-md border border-white/[0.07] bg-white/[0.04] p-1.5 transition-transform duration-500 group-hover:-translate-y-0.5",
                      c.title === "In Progress" && i === 0 && "border-primary/40 shadow-[0_0_14px_-4px_hsl(var(--primary)/0.8)]",
                    )}
                  >
                    <Bar className="w-4/5" />
                    <Bar className="w-1/2 bg-foreground/10" />
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary/70 to-accent/70" />
                      <span className="h-1 w-3 rounded-full bg-foreground/10" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function CrmMockup() {
  const heights = [38, 52, 44, 66, 58, 74, 62, 80, 70, 88];
  const stages = ["New", "Contacted", "Qualified", "Proposal", "Won"];
  return (
    <Chrome title="crm / leads">
      <div className="flex h-full">
        <SideNav items={["Leads", "Workflows", "History", "Parts", "Reports"]} />
        <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-foreground">Lead Pipeline</span>
            <span className="h-3.5 w-14 rounded-md border border-white/10 bg-white/[0.03]" />
          </div>
          <div className="grid grid-cols-5 gap-1">
            {stages.map((s, i) => (
              <div key={s} className="rounded-md border border-white/[0.06] bg-white/[0.03] p-1">
                <span className="block truncate text-[6.5px] text-muted-foreground">{s}</span>
                <span
                  className="mt-1 block h-1 rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${90 - i * 14}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex h-[38%] items-end gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            {heights.map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-primary/30 to-primary/80 transition-transform duration-700 group-hover:scale-y-110"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex-1 space-y-1 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-1.5">
            {[0, 1, 2, 3].map((r) => (
              <div key={r} className="flex items-center gap-1.5 rounded px-1 py-0.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-foreground/15" />
                <Bar className="w-1/3" />
                <Bar className="ml-auto w-1/5 bg-foreground/10" />
                <span
                  className={cn(
                    "h-2 w-6 rounded-full",
                    r === 0 ? "bg-primary/40" : r === 2 ? "bg-accent/40" : "bg-foreground/10",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function FormsMockup() {
  return (
    <Chrome title="app / new-form">
      <div className="flex h-full flex-col p-3">
        <div className="mb-3 flex items-center gap-1">
          {["Package", "Details", "Review", "Payment"].map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-1">
              <span
                className={cn(
                  "grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full text-[6px] font-semibold",
                  i < 2 ? "bg-primary text-primary-foreground" : "border border-white/15 text-muted-foreground",
                )}
              >
                {i + 1}
              </span>
              <span className={cn("hidden text-[7px] sm:inline", i < 2 ? "text-foreground" : "text-muted-foreground")}>{s}</span>
              {i < 3 && <span className={cn("h-px flex-1", i < 1 ? "bg-primary" : "bg-white/10")} />}
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-5 gap-2">
          <div className="col-span-3 space-y-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            {["Full name", "Email address", "Company"].map((l, i) => (
              <div key={l} className="space-y-1">
                <span className="block text-[7px] text-muted-foreground">{l}</span>
                <span
                  className={cn(
                    "block h-4 rounded-md border bg-white/[0.03]",
                    i === 1 ? "border-primary/50 shadow-[0_0_0_2px_hsl(var(--primary)/0.15)]" : "border-white/10",
                  )}
                />
              </div>
            ))}
            <div className="flex gap-1.5 pt-1">
              <span className="h-4 flex-1 rounded-md border border-white/10" />
              <span className="h-4 flex-1 rounded-md bg-foreground" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-1.5">
            {["Starter", "Pro", "Team"].map((p, i) => (
              <div
                key={p}
                className={cn(
                  "flex-1 rounded-lg border p-1.5 transition-transform duration-500",
                  i === 1
                    ? "border-primary/50 bg-gradient-to-br from-primary/15 to-accent/10 group-hover:-translate-y-0.5"
                    : "border-white/[0.07] bg-white/[0.02]",
                )}
              >
                <span className="block text-[7.5px] font-medium text-foreground">{p}</span>
                <Bar className="mt-1 w-3/4 bg-foreground/10" />
              </div>
            ))}
            <div className="flex items-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.02] p-1.5">
              <span className="h-2.5 w-4 rounded-sm bg-gradient-to-r from-violet-400 to-indigo-400" />
              <span className="text-[6.5px] text-muted-foreground">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

export function ProjectMockup({ type, className }: { type: MockupType; className?: string }) {
  return (
    <div className={cn("aspect-[16/10] w-full", className)} aria-hidden="true">
      {type === "kanban" && <KanbanMockup />}
      {type === "crm" && <CrmMockup />}
      {type === "forms" && <FormsMockup />}
    </div>
  );
}

export function ProjectImageCarousel({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
    };
    scroller.setPointerCapture(event.pointerId);
    scroller.classList.add("cursor-grabbing");
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragRef.current.active) return;

    scroller.scrollLeft =
      dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    dragRef.current.active = false;
    if (scroller.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
    scroller.classList.remove("cursor-grabbing");
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    scroller.scrollBy({ left: event.deltaY, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const slideWidth = scroller.clientWidth + 12;
    setActiveIndex(Math.min(images.length - 1, Math.round(scroller.scrollLeft / slideWidth)));
  };

  const scrollToImage = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollTo({
      left: index * (scroller.clientWidth + 12),
      behavior: "smooth",
    });
  };

  const handleDotClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    event.stopPropagation();
    scrollToImage(index);
  };

  return (
    <div className="relative z-10 w-full">
      <div
        ref={scrollerRef}
        role="region"
        aria-label="Project screenshots"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className={cn(
          "flex w-full cursor-grab touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          className,
        )}
      >
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Project screenshot ${index + 1}`}
            draggable={false}
            className="aspect-[16/10] w-full shrink-0 snap-center select-none object-contain"
          />
        ))}
      </div>
      {images.length > 1 && (
        <div
          className="relative z-20 mt-3 flex justify-center gap-1.5"
          aria-label="Choose project screenshot"
          onPointerDown={(event) => event.stopPropagation()}
        >
          {images.map((image, index) => (
            <button
              key={`${image}-dot`}
              type="button"
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={(event) => handleDotClick(event, index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeIndex === index
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-foreground/30 hover:bg-foreground/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
