import { Avatar, AvatarBadge, AvatarGroup, Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import {ChatIcon, ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import { FaSketch } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import SearchBar from './SearchBar';
import WriteBlog from './WriteBlog';
import ModalLogin from './ModalLogin';
import CreateBlog from './CreateBlog';
import { Link } from 'react-router-dom';
import AvatarProfile from './AvatarProfile';
import MembershipLogin from './MembershipLogin';
import SignIn from './SignIn';
import Register from './Register';

export default function Navbar(){
    return(
        <Box w={'100%'} backgroundColor={'white'} h={'60px'} border={'1px'} borderColor={'blackAlpha.300'} top={'0'} position={'fixed'} zIndex={10}>
            <Flex ml={'30px'}>
                <Link to={'/'}>
                <Button variant={''} mt={'10px'}>
                <BiBookBookmark size={'30px'} color='gold'></BiBookBookmark>Golden Book
                </Button>
                </Link>
            <SearchBar/>
            <Spacer/>
            <ButtonGroup>
                <CreateBlog/>
                <WriteBlog/>
                <MembershipLogin/>
                <Register/>
                <SignIn/>
            </ButtonGroup>
      <AvatarProfile/>
            
            </Flex>
        </Box>
    )
}