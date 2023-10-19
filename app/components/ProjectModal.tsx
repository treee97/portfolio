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
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data.title}
              </ModalHeader>
              <ModalBody>
                <p className="border-b border-myprimary">Description</p>
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
