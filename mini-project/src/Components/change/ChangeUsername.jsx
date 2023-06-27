import { Button, useDisclosure } from "@chakra-ui/react";

import { BsArrowUpRight } from "react-icons/bs";
import ModalChangeUsername from "./ModalChangeUsername";

export default function ChangeUsername() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button rightIcon={<BsArrowUpRight />} onClick={onOpen} variant={""}>
        Change
      </Button>
      <ModalChangeUsername isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
