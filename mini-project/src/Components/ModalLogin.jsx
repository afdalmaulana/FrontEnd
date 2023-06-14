import { Button, ButtonGroup, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

export default function ModalLogin({isOpen,onClose}){
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent w={'2000px'} h={'500px'}>
            <ModalHeader>Create an account to start writing</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    <Stack p={'20px'}>
                        <Button color={'black'} w={'220px'} ml={'auto'} mr={'auto'} borderRadius={'40px'} leftIcon={<FaGoogle/>}>Sign up with Google</Button>
                        <Button colorScheme={'facebook'} w={'220px'} ml={'auto'} mr={'auto'} borderRadius={'40px'} leftIcon={<FaFacebookSquare/>} mt={'10px'}>Sign up with Facebook</Button>
                        <Text mt={'50px'} ml={'auto'} mr={'auto'}>Already have an account ? <a>Sign in</a></Text>
                        <Text mt={'50px'} fontSize={'10px'}>Click “Sign Up” to agree to Medium Terms of Service and acknowledge that Medium Privacy Policy applies to you.</Text>
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