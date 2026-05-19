import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { EasterEggs } from "@/components/EasterEggs";
import { PresentationMode } from "@/components/PresentationMode";

export default function Home() {
  return (
    <PageLoader>
      <ScrollProgress />
      <CursorGlow />
      <CommandPalette />
      <ScrollToTop />
      <EasterEggs />
      <PresentationMode />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Stack />
        <SectionDivider />
        <GitHubStats />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </PageLoader>
  );
}
