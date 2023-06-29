import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import { BiBookBookmark } from "react-icons/bi";
import WriteBlog from "./components/WriteBlog";
import { Link } from "react-router-dom";
import SignIn from "./components/SignIn";
// import SearchBar from "./components/SearchBar";
// import Category from "./components/Category";

export default function Navbar() {
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
                {/* <SearchBar /> */}
              </Flex>
            </Box>
          </Button>
        </Link>
        <Spacer />
        <ButtonGroup>
          {/* <Category /> */}
          <WriteBlog />
          <SignIn />
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
