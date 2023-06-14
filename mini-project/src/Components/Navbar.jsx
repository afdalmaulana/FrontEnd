import { Avatar, AvatarBadge, AvatarGroup, Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import {ChatIcon, ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import { FaSketch } from "react-icons/fa";
import SearchBar from './SearchBar';
import WriteBlog from './WriteBlog';
import ModalLogin from './ModalLogin';
import CreateBlog from './CreateBlog';
import { Link } from 'react-router-dom';
import Register from './Register';

export default function Navbar(){
    return(
        <Box w={'100%'} backgroundColor={'white'} h={'60px'} border={'1px'} borderColor={'blackAlpha.300'} pt={'10px'} pos={'fixed'} zIndex={5}>
            <Flex ml={'30px'}>
                <Link to={'/'}>
                <Button variant={''}>
                <FaSketch size={'30px'} color='gold'></FaSketch>
                </Button>
                </Link>
            <SearchBar/>
            <Spacer/>
            <ButtonGroup>
                <CreateBlog/>
                <WriteBlog/>
            </ButtonGroup>
      <ButtonGroup>
        <Register/>
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