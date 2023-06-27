import { Box, Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import ModalChangePhone from "./ModalChangePhone";

export default function ChangePhone() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button rightIcon={<BsArrowUpRight />} onClick={onOpen} variant={""}>
        Change
      </Button>
      <ModalChangePhone isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
