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
        className="relative min-h-min min-w-full cursor-pointer overflow-hidden rounded-md border-2 border-myprimary"
        onClick={onOpen}
      >
        <div className="absolute inset-0 opacity-70 hover:bg-black">
          <span className="absolute bottom-0 left-0 p-2 text-white opacity-100">
            {data.title}
          </span>
        </div>
        <Image
          src={data.cardPicture}
          alt="project thumbnail"
          className="h-auto w-full border"
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
