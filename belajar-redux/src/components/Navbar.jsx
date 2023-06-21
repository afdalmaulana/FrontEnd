import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { BsFillCartFill, BsFillBellFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import SearchBar from "./SearchBar";
import AddCart from "./AddCart";
import Notif from "./Notif";
import Email from "./Email";
import AvatarProfile from "./AvatarProfile";

export default function Navbar({ belanja }) {
  return (
    <>
      <Box
        h={"80px"}
        shadow={"lg"}
        top={"0"}
        position={"fixed"}
        zIndex={10}
        w={"100%"}
        bgColor={"white"}
      >
        <Flex>
          <Text mt={"2px"} ml={"50px"} fontSize={"5xl"} color={"green.500"}>
            tokopedia
          </Text>
          <Button mt={"20px"} variant={""} color={"blackAlpha.500"}>
            Kategori
          </Button>
          <SearchBar />
          <AddCart />
          <Notif />
          <Box bgColor={'blackAlpha.200'} h={'50px'} mt={'15px'}>
          <Divider orientation="vertical"/>
          </Box>
          <Email />
          <AvatarProfile/>
        </Flex>
      </Box>
    </>
  );
}
