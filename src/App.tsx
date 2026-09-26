import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutSection } from "@/polymet/components/about-section";
import { ContactSection } from "@/polymet/components/contact-section";
import { ExperienceSection } from "@/polymet/components/experience-section";
import { GridBackground } from "@/polymet/components/grid-background";
import { HeroSection } from "@/polymet/components/hero-section";
import { PhilosophySection } from "@/polymet/components/philosophy-section";
import { ProjectsSection } from "@/polymet/components/projects-section";
import { ServicesSection } from "@/polymet/components/services-section";
import { SiteNavbar } from "@/polymet/components/site-navbar";
import { SkillsSection } from "@/polymet/components/skills-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="dark relative isolate min-h-screen overflow-hidden bg-background text-foreground">
              <GridBackground />
              <SiteNavbar />
              <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <ServicesSection />
                <PhilosophySection />
                <ContactSection />
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
