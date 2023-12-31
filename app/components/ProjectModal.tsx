"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

import { useDisclosure } from "@nextui-org/modal";

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
  isOpen: boolean;
  onClose: () => void;
}
const ProjectModal = ({ data, isOpen, onClose }: Props) => {
  return (
    <>
      <Modal
        backdrop="blur"
        placement="auto"
        isOpen={isOpen}
        onClose={onClose}
        className="mt-"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className="text-myprimary">{data.title}</span>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-1 ">
                  <div className="col-span-2">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="h-full w-full rounded-lg object-fill"
                    />
                  </div>
                  {/* En el mismo componente hacemos un map de pictures array.

                  Si es % 2 == 0 => par entonces classname col-span-2
                  Aumentar las pictures visibles a 5?*/}

                  {/* USE GRID AREA + Z-INDEX TO SET UP THE MAIN SCREEN WITH THE THOUGHTS FLOATING + FRAMER MOTION
                  https://www.youtube.com/watch?v=EiNiSFIPIQE&t=38s
                  */}
                  <div className="relative row-span-2">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="cover"
                      fill
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="">
                    <Image
                      src={data.picture}
                      alt="Project picture"
                      objectFit="contain"
                      width={900}
                      height={700}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <p className="max-h-72 overflow-y-auto lg:max-h-32">
                  {data.description}
                </p>
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
