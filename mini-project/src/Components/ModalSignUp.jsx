import { Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, InputGroup, InputRightElement, Stack, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AuthorSignUp from "./AuthorSignUp";

export default function ModalSignUp({isOpen,onClose}){
    const btnRef = React.useRef()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
    return (
        <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Text>Username</Text>
            <Input placeholder='Enter your username' mt={'10px'}/>
            <Text mt={'20px'}>Email</Text>
            <Input placeholder='Enter a valid email' mt={'10px'}/>
            <Text mt={'20px'}>Phone number</Text>
            <Input placeholder='Enter a phone number' mt={'10px'}/>

            <Text mt={'20px'}>Password</Text>
            <InputGroup size='md'>
            <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password'/>
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}> {show ? 'Hide' : 'Show'}</Button>
                </InputRightElement>
            </InputGroup>
            <Stack mt={'20px'}>
                    <Button leftIcon={<FaGoogle/>} borderRadius={'50px'}>Signup with Google</Button>
                    <Button leftIcon={<FaFacebook/>} colorScheme={'facebook'} borderRadius={'50px'}>Signup with Facebook</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            
            <AuthorSignUp/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>    
    )
}
