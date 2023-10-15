import ProjectModal from "./ProjectModal";
// We pass the data to the modal
interface Props {
  data: {
    title: string;
    description: string;
    techStack: string[];
    picture: string;
  };
}
const ProjectCard = ({ data }: Props) => {
  return (
    <div className="border h-40 w-40">
      Title: {data.title}
      TechStack: {data.techStack}
      {/* add utility component somehow that will add an icon related to the technology used. */}
      <ProjectModal data={data} />
    </div>
  );
};

export default ProjectCard;
