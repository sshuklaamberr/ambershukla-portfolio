import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PracticeShowcase } from "../components/PracticeShowcase";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#050508" }}
    >
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <PracticeShowcase />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};