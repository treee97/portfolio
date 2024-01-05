import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import CollaboratingProjects from "./components/sections/CollaboratingProjects";

export default function Home() {
  return (
    <>
      <About />
      <CollaboratingProjects />
      <Projects />
      <Contact />
      {/* <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#B91879] place-self-center text-[170px] font-bold">
          ITA - PROFILES
        </div>
      </div> */}
    </>
  );
}
