import React from 'react'
import {Button, Box, Text, FormControl, FormLabel, Input, FormHelperText, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, useDisclosure, Menu, MenuList, MenuItem, MenuButton} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
export default function Example(){
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
          return (
            <Box>
              <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
            <Box bg='green' w='100%' p={4} color='white'>
            <Text fontSize={'6xl'} color={'red.300'}>CHAKRA KHAN</Text>
            <Button colorScheme='teal' variant='outline'>Button</Button>
            <Button colorScheme='linkedin'>Linkedin</Button>
            </Box>
            <FormControl>
            <FormLabel ml={'20px'}>Email address</FormLabel>
            <Input ml={'20px'} w={'300px'} type='email' />
            <FormHelperText ml={'20px'}>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button
                ml='4'
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
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Custom backdrop filters!</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              </Box>
    )
}