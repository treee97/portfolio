"use client";

import Image from "next/image";
import ProjectModal from "./ProjectModal";
// We pass the data to the modal
import { useDisclosure } from "@nextui-org/modal";

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
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <div
      className="min-h-min min-w-full border-2 border-myprimary relative rounded-md cursor-pointer overflow-hidden hover:bg-black "
      onClick={onOpen}
    >
      {/* <span>
        {data.title}
        <ProjectModal data={data} />
      </span> */}
      <Image
        src={data.picture}
        alt="project thumbnail"
        className="w-full h-auto border"
        width={1600}
        height={856}
      />

      <ProjectModal data={data} isOpen={isOpen} onClose={onClose} />

      {/* si la image es importada de manera estatica => ex img from ../etc/hi.png */}
      {/* add utility component somehow that will add an icon related to the technology used. */}
    </div>
  );
};

export default ProjectCard;
