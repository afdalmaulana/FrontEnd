import { Button, useDisclosure } from "@chakra-ui/react"
import ModalAuthor from "./ModalAuthor"

export default function AuthorSignUp(){
    const { isOpen, onOpen, isClose } = useDisclosure()
    return(
        <>
        <Button colorScheme='yellow'>Submito</Button>
        <ModalAuthor isOpen={isOpen} onClose={isClose} onOpen={onOpen}/>
        </>
    )
}