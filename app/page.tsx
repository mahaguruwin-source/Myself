import SideNav from "@/components/Sidenav";
import Experience from "@/components/Experience";
import SectionHero from "@/components/SectionHero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
       <>
      <SideNav />

      <main className="lg:ml-80 ml-16">
        <SectionHero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}