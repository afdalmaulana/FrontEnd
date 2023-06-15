import { Box, Button, Drawer, DrawerOverlay, Flex, HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function ModalSignIn({isOpen,onClose}){
    const btnRef = React.useRef()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
    return (
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
                    <Text isRequired>Username/Email/Phone number</Text>
                    <Input placeholder="Type here" w={'300px'} isRequired></Input>
                    <Text isRequired>Password</Text>
                    <InputGroup size='md'>
            <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password'/>
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}> {show ? 'Hide' : 'Show'}</Button>
                </InputRightElement>
            </InputGroup>
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