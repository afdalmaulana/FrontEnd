import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { GrLike } from "react-icons/gr";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark } from "../../../redux/reducer/BlogReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BlogList() {
  const toast = useToast();
  function toToastAdd() {
    toast({
      title: "Bookmark Success",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  function notToast() {
    toast({
      title: "Bookmark Failed",
      status: "error",
      description: "You need to login first, to save the blog",
      duration: 3000,
      isClosable: true,
    });
  }
  const login = useSelector((state) => state.UserReducer.login);
  const dispatch = useDispatch();
  const [blogList, setBlogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  async function getBlog(page = 6) {
    try {
      const respon = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?&sort=ASC&per_page=100&page=${page}`
      );
      setBlogList(respon.data.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBlog();
  }, []);

  const handleNextPage = () => {
    const totalPages = Math.ceil(blogList.length / 2);
    if(currentPage < totalPages && currentPage < 3){
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if(currentPage > 1){
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderArticleIndex = (index) => {
    return (
      <Button
        key={index}
        onClick={() => setCurrentPage(index)}
        colorScheme={currentPage === index ? "yellow" : "gray"}
        mx={1}
        size={"sm"}
      >
        {index}
      </Button>
    );
  };

  const renderArticleIndexex = () => {
    const totalPages = Math.ceil(blogList.length / 3);
    console.log(totalPages);
    const indexes = [];
    for (let i = 1; i <= totalPages; i++) {
      indexes.push(renderArticleIndex(i));
    }
    return indexes;
  };
  // getBlog();
  return (
    <>
      {/* <Box mt={4}>
      <Swiper slidesPerView={4}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {blogList
            .slice((currentPage - 1) * 4, currentPage * 4)
            .map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card maxW="xs" minH={"xs"}>
                  <CardBody>
                    <Box
                      height={"100px"}
                      position="relative"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      borderRadius="lg"
                      backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
                    ></Box>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{blog.title}</Heading>
                      <Text noOfLines={2}>{blog.content}</Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <IconButton
                      bgColor={"white"}
                      color={"black"}
                      rounded={"full"}
                      size={"md"}
                      _hover={{
                        bgColor: "gray.100",
                      }}
                      aria-label="Bookmark"
                      icon={<BsBookmarkPlus />}
                    />
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
        </Grid>
      </Swiper>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          colorScheme="blue"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderArticleIndexex()}
        <Button
          colorScheme="blue"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(currentPage.length / 3)}
        >
          Next
        </Button>
      </Box>
    </Box> */}
      <Box ml={"40px"} mt={"100px"}>
        <Text fontSize={"5xl"} fontWeight={"bold"} fontFamily={"mono"}>
          All Blog and Book
        </Text>
        <Swiper slidesPerView={4}>
          <Flex wrap={"wrap"} gap={"20px"}>
            {blogList
              .slice((currentPage - 1) * 4, currentPage * 4)
              .map((blog) => (
                <SwiperSlide key={blog.id}>
                  <Card maxW="340px" minW={'340px'} maxH="510px" minH={'510px'} mb={'20px'}>
                    <CardBody justifyContent={"center"}>
                      <Center>
                        <Image
                          src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
                          borderRadius="lg"
                          w={"400px"}
                          h={"200px"}
                          alignItems={"center"}
                        />
                      </Center>
                      <Stack mt="6" spacing="2">
                        <Heading size="md">{blog.title}</Heading>
                        <Flex>
                          <Text color="blue.600" fontSize="10px">
                            {blog.User.username}
                          </Text>
                          <Text></Text>
                        </Flex>
                        <Text fontSize={"8px"}>{blog.content}</Text>
                        <Text color={"yellow.500"}>
                          Category : {blog.Category.name}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button
                          variant=""
                          colorScheme="white"
                          leftIcon={<GrLike />}
                        >
                          Like
                        </Button>
                        {!login ? (
                          <Button
                            variant=""
                            color="black"
                            rightIcon={<BsFillBookmarkStarFill />}
                            onClick={() => notToast()}
                          ></Button>
                        ) : (
                          <Button
                            variant=""
                            color="black"
                            rightIcon={<BsFillBookmarkStarFill />}
                            onClick={() =>
                              dispatch(addToBookmark(blog), toToastAdd())
                            }
                          ></Button>
                        )}
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
          </Flex>
        </Swiper>
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            colorScheme="yellow"
            borderRadius={'80px'}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {renderArticleIndexex()}
          <Button
          borderRadius={'80px'}
            colorScheme="yellow"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(currentPage.length / 3)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}
