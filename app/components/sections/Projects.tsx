import projects from "@/app/data/hardcodedProjects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <h2>Projects</h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
      consectetur repudiandae porro ipsa, illum enim dolor, nemo
      {projects.map((proj, index) => (
        <ProjectCard data={proj} key={index} />
      ))}
    </div>
  );
};

export default Projects;
