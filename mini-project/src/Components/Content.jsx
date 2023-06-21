import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GrLike } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AiFillEye, AiOutlineArrowRight } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import TopLike from "./PageContent/TopLike";
import BlogList from "./PageContent/BlogList";
import jsonTopLike from '../json-dummy/listBlog.json'
import jsonAllBlog from '../json-dummy/listBlog.json'

export default function Content() {
  const blogLike = jsonTopLike.topLike;
  const allBlog = jsonAllBlog.blogList
  // console.log(blogList);  
  const navigate = useNavigate();
  function toSign() {
    navigate("/signPage");
  }
  return (
    <>
      <Box>
        <Stack>
          <Box>
            <Box w={"750px"} m={"auto"}>
              <Text
                align={"center"}
                mt={"50px"}
                fontSize={"4xl"}
                fontWeight={"bolder"}
              >
                Blog atau buku yang di tulis oleh beberapa orang yang memiliki
                imajinasi yang luar biasa
              </Text>
              <Box w={"650px"} m={"auto"}>
                <Text align={"center"} mt={"20px"} fontSize={"2xl"}>
                  Pilih dari 100+ blog atau buku yang dapat disesuaikan dengan
                  mood dan pilihan anda untuk dibaca
                </Text>
              </Box>
              <Button
                rightIcon={<ArrowForwardIcon />}
                ml={"200px"}
                mt={"50px"}
                fontSize={"2xl"}
                variant={""}
              >
                Lihat semua Buku atau Blog
              </Button>
            </Box>
          </Box>
        </Stack>
        <TopLike like={blogLike} />
        <Box ml={"250px"} mt={"100px"}>
          <Stack>
            <Flex>
              <Box>
                <Image
                  src="https://images.unsplash.com/photo-1581970196594-f0a8ad70eaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                  h={"600px"}
                  w={"500px"}
                ></Image>
              </Box>
              <Box pt={"100px"} pl={"50px"}>
                <Stack
                  fontSize={"5xl"}
                  fontWeight={"bolder"}
                  lineHeight={"40px"}
                  fontFamily={"initial"}
                >
                  <Text>Golden Book</Text>
                  <Text>Kebebasan Total</Text>
                  <Text>Dalam Membaca</Text>
                </Stack>
                <Stack w={"400px"} fontSize={"2xl"} mt={"20px"}>
                  <Text>
                    Mulai menulis blog atau buku tentang imajinasi anda atau
                    mulai membaca blog atau buku yang tersedia di Golden Book
                    yang dapat anda sesuaikan dengan minat atau rasa penasaran
                    anda terhadap tulisan yang ada pada Golden Book
                  </Text>
                </Stack>
                <Button
                  mt={"45px"}
                  fontSize={"2xl"}
                  variant={""}
                  rightIcon={<AiOutlineArrowRight />}
                  onClick={toSign}
                >
                  Mulai
                </Button>
              </Box>
            </Flex>
            {/* <Image src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            w={'300px'}
            ></Image> */}
          </Stack>
        </Box>
        <BlogList allBlogList={allBlog}/>
      </Box>
    </>
  );
}
