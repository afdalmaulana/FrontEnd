import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaSketch } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import WriteBlog from "./WriteBlog";
import CreateBlog from "./CreateBlog";
import { Link } from "react-router-dom";
import AvatarProfile from "./AvatarProfile";
import SignIn from "./SignIn";
import Register from "../Register";
import SearchBar from "./SearchBar";
import Category from "./Category";
import { useState } from "react";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const [isSign, setIsSign] = useState(true);
  return (
    <Box
      shadow={"lg"}
      w={"100%"}
      backgroundColor={"white"}
      h={"60px"}
      border={"1px"}
      borderColor={"blackAlpha.300"}
      top={"0"}
      position={"fixed"}
      zIndex={10}
    >
      <Flex ml={"30px"}>
        <Link to={"/"}>
          <Button variant={""} mt={"10px"}>
            <BiBookBookmark size={"30px"} color="gold"></BiBookBookmark>
            <Box>
              <Flex gap={"2px"}>
                <Text fontSize={"35px"}>Golden </Text>
                <Text fontSize={"35px"} fontWeight={"bolder"}>
                  {" "}
                  Book
                </Text>
                <SearchBar />
              </Flex>
            </Box>
          </Button>
        </Link>
        <Spacer />
        <ButtonGroup>
          <Category/>
          {isSign ? <CreateBlog/> : <WriteBlog/>}
          {isSign ? "" : <SignIn/>}
          {/* <SignIn /> */}
          {/* <Register/> */}
          {/* <SignIn/> */}
        </ButtonGroup>
        {isSign ? <UserProfile/> : <AvatarProfile/>}
      </Flex>
    </Box>
  );
}
