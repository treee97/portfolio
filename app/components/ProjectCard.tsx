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
    cardPicture: string;
    picture: string;
  };
}

const ProjectCard = ({ data }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="min-h-min min-w-full border-2 border-myprimary relative rounded-md cursor-pointer overflow-hidden hover:bg-black "
        onClick={onOpen}
      >
        <Image
          src={data.cardPicture}
          alt="project thumbnail"
          className="w-full h-auto border"
          width={1300}
          height={756}
        />

        {/* si la image es importada de manera estatica => ex img from ../etc/hi.png */}
        {/* add utility component somehow that will add an icon related to the technology used. */}
      </div>
      <ProjectModal data={data} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProjectCard;
