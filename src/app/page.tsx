import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Achievements } from "@/components/sections/Achievements";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { GithubSection } from "@/components/sections/GithubSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <About />
      <Projects />
      <TechStack />
      <Achievements />
      <SoftSkills />
      <GithubSection />
      <Contact />
    </>
  );
}