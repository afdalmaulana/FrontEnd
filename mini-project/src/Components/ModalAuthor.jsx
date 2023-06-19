import { Button, ButtonGroup, Center, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function ModalAuthor({isOpen,onClose}){
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    function submitHandler(e){
        setUserName(`${userName}`);
        // setUserEmail(`${email}`);
    }
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
        <ModalContent w={'2000px'} h={'500px'}>
        <ModalHeader>Your data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
                <Stack p={'20px'}>
                    <Text>Username     : {userName}</Text>
                    <Text>Email        : </Text>
                    <Text>Phone number : </Text>
                    <Text>Password     : </Text>
                    </Stack>
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
        </>
    )
}