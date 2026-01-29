import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Home from "@/components/home/home";
import Projects from "@/components/projects/projects";

export default function HomePage() {
  return (
    /*--Desktop View--*/
    <main className="w-full min-w-200 min-h-screen flex flex-col items-center">
      <Home />
      <div className="w-full h-20 bg-linear-to-b from-transparent via-black/10 to-black/10"></div>
      <Experience />
      <div className="w-full h-20 bg-linear-to-b from-black/10 via-transparent to-transparent"></div>
      <Projects />
      <Contact />
    </main>
  );
}
