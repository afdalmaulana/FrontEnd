import { Box, Button, Flex, HStack, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ModalSignUp({isOpen,onClose}){
    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
            <ModalContent w={'2000px'} h={'500px'}>
            <ModalHeader>Enter your valid username and password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    <Stack p={'20px'}>
                        <InputGroup>
                        <Stack>
                        <Text isRequired>Username</Text>
                        <Input placeholder="Enter your username" w={'300px'} isRequired></Input>
                        <Text isRequired>Password</Text>
                        <Input placeholder="Your password" type="password" w={'300px'} isRequired></Input>
                        </Stack>
                        </InputGroup>

                        <Button colorScheme={'yellow'} w={'220px'} ml={'auto'} mr={'auto'} borderRadius={'40px'} mt={'10px'}>Submit</Button>
                        

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