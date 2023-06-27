import { Box, Button, useDisclosure, useToast } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import ModalChangeEmail from "./ModalChangeEmail";

export default function ChangeEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button rightIcon={<BsArrowUpRight />} onClick={onOpen} variant={""}>
        Change
      </Button>
      <ModalChangeEmail isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
