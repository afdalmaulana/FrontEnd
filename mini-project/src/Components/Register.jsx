import { Button, useDisclosure } from "@chakra-ui/react";
import ModalSignUp from "./ModalSignUp";

export default function Register(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme={'twitter'} borderRadius={'50px'} onClick={onOpen}>Signup</Button>
            <ModalSignUp isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </>
    )
}