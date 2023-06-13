import { Avatar, AvatarBadge, AvatarGroup, Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import {ChatIcon, ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Box w={'100%'} backgroundColor={'whiteAlpha.500'} h={'60px'} border={'1px'} borderColor={'blackAlpha.300'} pt={'10px'} pos="sticky" zIndex={2}>
            <Flex ml={'40px'}>
            <IconButton aria-label='Search database' icon={<SearchIcon />} h={'30px'} backgroundColor={'white'}/>
            <Input placeholder='Search' w={'200px'} h={'30px'}/>
            <Spacer/>
            <Button backgroundColor={'whiteAlpha.500'} onClick={onOpen} marginRight={'10px'} leftIcon={<ChatIcon/>} variant=''>Write</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
      <ButtonGroup>
        <Button colorScheme={'twitter'} borderRadius={'50px'}>Signup</Button>
        <Button backgroundColor={'white'} borderRadius={'50px'} variant=''>Signin</Button>
      </ButtonGroup>
            <Menu>
            <Avatar src='https://bit.ly/broken-link' boxSize={9}/>
    <MenuButton as={Button} backgroundColor={'white'} w={'5px'} rightIcon={<ChevronDownIcon />} variant=''></MenuButton>
    <MenuList w={'300px'} marginRight={'10px'}>
        <Center>
        <Text mt={'20px'}>Get a started on Medium</Text>
        </Center>
        <Center>
        <Button colorScheme='whatsapp' w={'200px'} h={'30px'} borderRadius={'50px'} mt={'20px'}>Sign up</Button>
        </Center>
        <Center>
        <Button border={'1px'} borderColor={'black'} w={'200px'} h={'30px'} borderRadius={'50px'} mt={'20px'}>Sign in</Button>
        </Center>
        <MenuItem mt={'30px'}>Become a member</MenuItem>
        <MenuItem>Create a mastodon account</MenuItem>
        <MenuItem>Apply for author verification</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
</Menu>
            </Flex>
        </Box>
    )
}