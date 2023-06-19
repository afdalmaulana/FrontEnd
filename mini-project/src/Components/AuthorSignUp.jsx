import { Button, useDisclosure } from "@chakra-ui/react"
import ModalAuthor from "./ModalAuthor"
import { useState } from "react";

export default function AuthorSignUp(){

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    function submitHandler(e){
        setUserName(`${userName}`);
        // setUserEmail(`${email}`);
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button colorScheme='yellow' onClick={onOpen} onChange={submitHandler}>Submito</Button>
        <ModalAuthor isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </>
    )
}