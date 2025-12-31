import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { Solutions } from "@/components/sections/Solutions";
import { Differentiators } from "@/components/sections/Differentiators";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Materials } from "@/components/sections/Materials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Certifications } from "@/components/sections/Certifications";
import { ToolStack } from "@/components/sections/ToolStack";
import { Preloader } from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 overflow-x-hidden text-white selection:bg-accent selection:text-black">
      <Preloader />
      <Header />
      <Hero />
      <ToolStack />
      <Methodology />
      <Solutions />
      <Projects />
      <Differentiators />
      <Testimonials />
      <Certifications />
      <Materials />
      <Contact />
      <Footer />
    </main>
  );
}
