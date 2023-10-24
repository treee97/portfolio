import projects from "@/app/data/hardcodedProjects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <h2 className="title">Projects</h2>
      <h3 className="text-center mb-4">
        Click on a project to see{" "}
        <span className="text-myprimary underline">details.</span>
      </h3>

      <div className="gap-[2px] grid md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center">
        {/* USE GRID to display them */}
        {projects.map((proj, index) => (
          <ProjectCard data={proj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
