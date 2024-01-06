import currProjects from "@/app/data/currentProjects";
import ProjectCard from "../ProjectCard";
const CollaboratingProjects = () => {
  return (
    <div
      className="min-h-[60vh] p-8 md:p-6 scroll-mt-4 flex flex-col justify-center items-center"
      id="projects"
    >
      <h2 className="title">Im currently collaborating on these projects!</h2>

      <div className="gap-[2px] grid md:grid-cols-2 lg:grid-cols-2 place-items-center justify-center">
        {currProjects.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CollaboratingProjects;
