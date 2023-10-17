import ProjectModal from "./ProjectModal";
// We pass the data to the modal
import Image from "next/image";
interface Props {
  data: {
    title: string;
    link: string;
    description: string;
    techStack: string[];
    picture: string;
  };
}
const ProjectCard = ({ data }: Props) => {
  return (
    <div className=" h-[250px] w-[300px] border border-red-400 relative">
      <span>{data.title}</span>

      <Image
        src={data.picture}
        alt="project thumbnail"
        className="w-full h-40 border"
        width={1600}
        height={856}
      />
      {/* si la image es importada de manera estatica => ex img from ../etc/hi.png */}
      {/* add utility component somehow that will add an icon related to the technology used. */}
      <ProjectModal data={data} />
    </div>
  );
};
//
// z-index: 3; transform: translate(68px, 290px) scale(1); visibility: visible;

export default ProjectCard;
