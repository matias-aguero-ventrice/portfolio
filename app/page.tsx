import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollProgress } from "@/components/ScrollProgress";

/* Lazy load de componentes no-criticos (code splitting) */
const CursorGlow = dynamic(() => import("@/components/CursorGlow").then((m) => m.CursorGlow));
const CommandPalette = dynamic(() => import("@/components/CommandPalette").then((m) => m.CommandPalette));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop").then((m) => m.ScrollToTop));
const EasterEggs = dynamic(() => import("@/components/EasterEggs").then((m) => m.EasterEggs));
const PresentationMode = dynamic(() => import("@/components/PresentationMode").then((m) => m.PresentationMode));
const ChatBot = dynamic(() => import("@/components/ChatBot").then((m) => m.ChatBot));
const GitHubStats = dynamic(() => import("@/components/sections/GitHubStats").then((m) => m.GitHubStats));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));
const PageLoader = dynamic(() => import("@/components/PageLoader").then((m) => m.PageLoader));

export default function Home() {
  return (
    <PageLoader>
      <ScrollProgress />
      <CursorGlow />
      <CommandPalette />
      <ScrollToTop />
      <EasterEggs />
      <PresentationMode />
      <ChatBot />
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
