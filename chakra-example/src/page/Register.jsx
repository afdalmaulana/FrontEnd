import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function Register(){

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [value, setValue] = React.useState('1')

    const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayTwo />)
    return(
        <Box mt={'50px'} border={'1px'} borderRadius={'10px'} width={'500px'} height={'500px'} ml={'500px'} paddingLeft={'20px'} pt={'30px'}>
            <Text fontSize={'40px'} fontWeight={'bolder'}>Register</Text>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" placeholder="Enter your name" w={'450px'} name="name"/>
                </FormControl>
                <FormControl id="email" isRequired pt={'20px'}>
                  <FormLabel>Email</FormLabel>
                  <Input type="text" placeholder="Enter your email" w={'450px'} name="email"/>
                </FormControl>
                <FormControl id="password" isRequired pt={'20px'}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                    <Input w={'380px'} pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Enter password'/>
                        <InputRightElement width='4.5rem' mr={'20px'}>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                        </InputRightElement>
                </InputGroup>
                </FormControl>
            <Text mt={'10px'}>Gender</Text>
            <RadioGroup onChange={setValue} value={value} name="gender">
                <Stack direction='row'>
                    <Radio value='Male'>Male</Radio>
                    <Radio value='Female'>Female</Radio>
                </Stack>
                <Button rightIcon={<ArrowForwardIcon/>} mt={'30px'} ml={'180px'}
                onClick={() => {
                  setOverlay(<OverlayTwo />)
                  onOpen()
                }}
              >
                MORE
              </Button>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                  <ModalHeader>Your Data</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Custom backdrop filters!</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
    </RadioGroup>


        </Box>
    )
}