import currProjects from "@/app/data/currentProjects";
import ProjectCard from "../ProjectCard";
const CollaboratingProjects = () => {
  return (
    <div className="section" id="projects">
      <h2 className="title">Im currently collaborating on these projects!</h2>

      <div className="gap-[2px] grid md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center">
        {currProjects.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CollaboratingProjects;
