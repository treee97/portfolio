"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { title } from "process";
interface Props {
  data: {
    title: string;
    description: string;
    techStack: string[];
    picture: string;
  };
}

const ProjectModal = ({ data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          color="warning"
          onPress={() => onOpen()}
          className="capitalize"
        >
          Open modal
        </Button>
      </div>
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
                <p>{data.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
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
