import { Button, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";

export default function ModalSignUp({isOpen,onClose}){
    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
            <ModalContent w={'2000px'} h={'500px'}>
            <ModalHeader>Create an account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    <Stack p={'20px'}>
                        <InputGroup>
                        <Stack>
                        <Text isRequired>Firstname</Text>
                        <Input placeholder="Enter your name" w={'300px'} isRequired></Input>
                        <Text isRequired>Lastname</Text>
                        <Input placeholder="Enter your name" w={'300px'} isRequired></Input>
                        <Text isRequired>Password</Text>
                        <Input placeholder="Your password" type="password" w={'300px'} isRequired></Input>
                        </Stack>
                        </InputGroup>

                        <Button colorScheme={'facebook'} w={'220px'} ml={'auto'} mr={'auto'} borderRadius={'40px'} mt={'10px'}>Sign up with Facebook</Button>
                        <Text mt={'50px'} ml={'auto'} mr={'auto'}>Already have an account ? </Text>
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