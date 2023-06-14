import { Box, Button, useDisclosure } from "@chakra-ui/react";
import ModalSignUp from "./ModalSignIn";
import ModalSignIn from "./ModalSignUp";

export default function Register(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Box mt={'10px'}> 
            <Button colorScheme={'yellow'} borderRadius={'50px'} onClick={onOpen}>Signup</Button>
            <ModalSignIn isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </Box>
        </>
    )
}