import Experience from "@/components/experience/experience";
import Home from "@/components/home/home";
import Projects from "@/components/projects/projects";

export default function HomePage() {
  return (
    /*--Desktop View--*/
    <main className="w-full min-w-200 min-h-screen flex flex-col items-center">
      <Home />
      <Experience />
      <Projects />
      <section id="contact" className="w-full h-screen">

      </section>
    </main>
  );
}
