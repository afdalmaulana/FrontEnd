import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { BiBookBookmark } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

export default function TittleWebsite() {
  // const navigate = useNavigate();
  // function toContent() {
  //   navigate("/carousel");
  // }

  return (
    <>
      <Box w={"100%"}>
        <Box
          bgImage={"tumpukanBuku.jpeg"}
          bgSize={"cover"}
          bgPos={"center"}
          mt={"50px"}
          h={"750px"}
        >
          <Flex>
            <Text
              fontSize={"8xl"}
              mt={"120px"}
              ml={"80px"}
              color={"black"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
            >
              Golden Book
            </Text>
            <Box mt={"120px"} ml={"5px"}>
              <BiBookBookmark size={"50px"} color="gold" />
            </Box>
          </Flex>
          <Box w={"600px"} ml={"80px"}>
            <Text color={"black"} fontSize={"3xl"} fontWeight={"bold"}>
              Discover stories, thinking and expensive experience from writes on
              any topic. Find and share real perspectives about topics that
              matter today
            </Text>
            <a href="#carousel">
              <Button mt={"20px"} borderRadius={"50px"} colorScheme={"yellow"}>
                Start Reading
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
