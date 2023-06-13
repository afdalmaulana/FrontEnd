import { Avatar, AvatarBadge, AvatarGroup, Box, Button, ButtonGroup, Center, Flex, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import {ChatIcon, ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import MenuBar from '../Components/MenuBar'

export default function Home(){
    return (
        <>
        <Navbar/>
        <Flex>
        <MenuBar/>
        <Content/>
        </Flex>
        </>
    )
}