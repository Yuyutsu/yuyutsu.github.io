import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { WhatIBuild } from "@/components/WhatIBuild";
import { OpenSource } from "@/components/OpenSource";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Philosophy } from "@/components/Philosophy";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <OpenSource />
        <Projects />
        <Experience />
        <Philosophy />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
