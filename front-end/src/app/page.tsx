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
      <section id="contact" className="w-full min-w-300 max-w-500 h-screen min-h-200 max-h-350 flex justify-center">
        <div className="w-3/4 h-full flex">
          <div className="w-2/3 h-full py-50 bg-blue-500">
            <form className="w-full h-full flex flex-col">
              <fieldset>
                <input className="w-full bg-white" placeholder="Name"></input>
              </fieldset>
            </form>
          </div>
          <div className="w-1/3 h-full bg-red-500"></div>
        </div>
      </section>
    </main>
  );
}
