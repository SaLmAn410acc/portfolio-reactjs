import { HeroSection } from "@/polymet/components/hero-section";
import { GridBackground } from "@/polymet/components/grid-background";

export default function HeroSectionRender() {
  return (
    <div className="dark relative isolate min-h-screen bg-background text-foreground">
      <GridBackground />
      <HeroSection />
    </div>
  );
}
