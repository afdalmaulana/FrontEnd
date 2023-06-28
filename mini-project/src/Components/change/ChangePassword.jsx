import { Button, useDisclosure } from "@chakra-ui/react";

import { BsArrowUpRight } from "react-icons/bs";
import ModalChangePassword from "./ModalChangePassword";


export default function ChangePassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button rightIcon={<BsArrowUpRight />} onClick={onOpen} variant={""}>
        Change
      </Button>
      <ModalChangePassword isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
