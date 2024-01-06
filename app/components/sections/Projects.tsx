import projects from "@/app/data/hardcodedProjects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex min-h-[60vh] scroll-mt-4 flex-col items-center justify-center p-8 md:p-6"
      id="projects"
    >
      <h2 className="title">Personal Projects</h2>
      <h3 className="mb-4 text-center">
        Click on a project to see{" "}
        <span className="text-myprimary">details.</span>
      </h3>

      <div className="grid place-items-center justify-center gap-1 md:grid-cols-2 lg:grid-cols-3">
        {/* USE GRID to display them */}
        {projects.map((proj, index) => (
          <ProjectCard data={proj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
