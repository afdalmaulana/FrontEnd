import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('')
    
    // kita membuat hooks useState penampung untuk menampilkan data di function setelah di klik
    // kenapa kita tidak langsung memasukkan useState const [name, setName] = useState('') ke dalam function?
    // karena useState tidak bisa kita masukkan ke dalam function
    // dan apabila di function kita langsung memanggil setName, maka sebelum button di klik, name akan tampil duluan
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userGender, setUserGender] = useState('');
    
    
    
    function submitHandler (e) {
        setUserName (`${name}`)
        setUserEmail (`${email}`)
        setUserPassword (`${password}`)
        setUserGender (`${gender}`)
        setName('');
        setEmail('');
        setPassword('');
        setGender('');


    }

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
        <Box mt={'50px'} border={'1px'} borderRadius={'10px'} width={'500px'} height={'500px'} ml={'500px'} paddingLeft={'20px'} pt={'30px'} >
            <Text fontSize={'40px'} fontWeight={'bolder'}>Register</Text>
                <FormControl  onSubmit={submitHandler} isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" placeholder="Enter your name" w={'450px'} value={name} onChange={(e) => setName(e.target.value)} name="name"  />
                  <FormLabel>Email</FormLabel>
                  <Input type="text" placeholder="Enter your email" w={'450px'} name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                    <Input w={'380px'} pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <InputRightElement width='4.5rem' mr={'20px'}>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Text mt={'10px'}>Gender</Text>
            <RadioGroup onChange={setValue} value={value} name="gender">
                <Stack direction='row'>
                    <Radio value="Male" onChange={(e) => setGender(e.target.value)}>Male</Radio>
                    <Radio value='Female' onChange={(e) => setGender(e.target.value)}>Female</Radio>
                </Stack>
                </RadioGroup>
                <Button type="submit" onClick={submitHandler}>Submit</Button>
                </FormControl>
                {/* <Text>My Name is {userName ? userName : `...`} </Text>
                <Text>My email is {userEmail ? userEmail : `...`}</Text> */}
                <Button rightIcon={<ArrowForwardIcon/>} mt={'30px'} ml={'180px'}
                onClick={() => {
                  setOverlay(<OverlayTwo />)
                  onOpen()
                  submitHandler()
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
                    <Text>Name : {userName}</Text>
                    <Text>email : {userEmail}</Text>
                    <Text>password : {userPassword}</Text>
                    <Text>Gender : {userGender}</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
    


        </Box>
    )
}