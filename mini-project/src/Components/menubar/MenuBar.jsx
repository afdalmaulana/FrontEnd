import { EmailIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  BsFillBookmarkStarFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import SearchBar from "../navbar/SearchBar";
import MembershipLogin from "../MembershipLogin";

export default function MenuBar() {
  return (
    <>
      <Box
        height={"900px"}
        w={"400px"}
        border={"1px"}
        borderColor={"blackAlpha.200"}
        zIndex={2}
        h={"650px"}
        pos={"sticky"}
        top={"50"}
      >
        <SearchBar />

        <Box mt={"10px"} w={"300px"}>
          <Text>Discover more of what matters to you</Text>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Programming
          </Button>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Data Science
          </Button>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Technology
          </Button>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Productivity
          </Button>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Writing
          </Button>
          <Button
            borderRadius={"50px"}
            w={"80px"}
            h={"30px"}
            m={"5px"}
            fontSize={"10px"}
          >
            Fashion
          </Button>
        </Box>
        <Box w={"300px"} color={"blackAlpha.700"} mt={"20px"}>
          <span>Click the </span>
          <Box display={"inline-block"}>
            <BsFillBookmarkStarFill />
          </Box>
          <span>
            {" "}
            on any story to easily add it to your reading list or a custom list
            that you can share.
          </span>
        </Box>
      </Box>

      {/* <Box height={'850px'} w={'1200px'} bgGradient='linear(to-r, green.200, pink.500)'> */}
      {/* <Text fontSize={'6xl'}>Happy Reading</Text> */}
      {/* </Box> */}
    </>
  );
}
