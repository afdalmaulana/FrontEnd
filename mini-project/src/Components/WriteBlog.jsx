import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import ModalLogin from "./ModalLogin";

export default function WriteBlog(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Box mt={'10px'}>
        <Button backgroundColor={'whiteAlpha.500'} onClick={onOpen} marginRight={'10px'} leftIcon={<ChatIcon/>} variant=''>Write</Button>
        <ModalLogin isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </Box>
        </>
    )
}