import { Box, Button, useDisclosure } from "@chakra-ui/react";
import ModalSignIn from "./ModalSignUp";
import ModalSignUp from "./ModalSignIn";

export default function SignIn(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Box mt={'10px'}>
        <Button backgroundColor={'white'} borderRadius={'50px'} variant='' onClick={onOpen}>Signin</Button>
        <ModalSignUp isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </Box>
        </>
    )
}