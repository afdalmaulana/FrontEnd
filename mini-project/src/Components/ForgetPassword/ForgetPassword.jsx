import { Button, useDisclosure } from "@chakra-ui/react";
import ModalForgetPassword from "./ModalForgetPassword";

export default function ForgetPassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        mt={"10px"}
        w={"200px"}
        colorScheme="yellow"
        borderRadius={"30px"}
      >
        Hit Me
      </Button>
      <ModalForgetPassword isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
