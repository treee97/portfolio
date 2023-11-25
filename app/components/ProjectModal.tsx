"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import getIcon from "../utils/getIcon";
import Image from "next/image";

interface Props {
  data: {
    title: string;
    link: string;
    description: string;
    techStack: string[];
    picture: string;
  };
  onClose: () => void;
  isOpen: boolean;
}

const ProjectModal = ({ data, isOpen, onClose }: Props) => {
  return (
    <>
      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        className="m-4"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className="text-myprimary">{data.title}</span>
              </ModalHeader>
              <ModalBody className="">
                {/* <Image
                  src={data.picture}
                  alt="Project picture"
                  objectFit="contain"
                  width={900}
                  height={700}
                  className="w-full h-auto"
                /> */}
                <div className="grid grid-cols-3 gap-1">
                  <div className="border border-red-600 col-span-2">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* USE GRID AREA + Z-INDEX TO SET UP THE MAIN SCREEN WITH THE THOUGHTS FLOATING + FRAMER MOTION
                  https://www.youtube.com/watch?v=EiNiSFIPIQE&t=38s
                  */}
                  <div className="border border-red-600 row-span-2">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="cover"
                      width={900}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="border border-red-600">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="border border-red-600">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p>{data.description}</p>
                <p className="flex items-start gap-4">
                  {data.techStack.map((tech, i) => getIcon(tech, i))}
                </p>
                <Link href={data.link} target="_blank">
                  {data.link}
                </Link>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
