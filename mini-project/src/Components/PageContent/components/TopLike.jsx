import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, likeBlog } from "../../../redux/reducer/BlogReducer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TopLike() {
  const login = useSelector((state) => state.UserReducer.login);
  const [like, setLike] = useState([]);
  const [likes, setLikes] = useState({});

  const topLike = async () => {
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?size=10&sort=DESC&orderBy=total_fav"
      );
      setLike(respon.data.result);
      // console.log("isi id :", like)
      const likesData = respon.data.result.reduce((acc, item) => {
        acc[item.id] = item.total_fav;
        return acc;
      }, {});
      setLikes(likesData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    topLike();
  }, []);
  const dispatch = useDispatch();

  const toast = useToast();
  function toToastAdd() {
    toast({
      title: "Bookmark Success",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  function noToast() {
    toast({
      title: "Bookmark failed",
      status: "error",
      description: "You need to login first, to save the blog",
      duration: 3000,
      isClosable: true,
    });
  }

  const getLike = (item) => {
    const token = localStorage.getItem("token");
    // console.log("id like: ", item);
    if (token) {
      toast({
        title: "Like Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return dispatch(likeBlog(item));
    } else {
      toast({
        title: "Please Login First",
        status: "error",
        description: "You need to login first, to like the blog",
        duration: 3000,
        isClosable: true,
      });
    }
    // console.log("ini like", like.id);
  };
  return (
    <>
      <Box ml={"40px"} mt={"100px"}>
        <Text fontSize={"5xl"} fontWeight={"bold"} fontFamily={"mono"}>
          10 Top Like
        </Text>
        <Flex wrap={"wrap"} gap={"20px"} id="blogTopLike">
          {like.map((item) => {
            console.log("ini isi likeees:", like);
            return (
              <Card key={item.id} w="430px" maxH="lg" shadow={"dark-lg"}>
                <CardBody justifyContent={"center"}>
                  {/* <Center> */}
                  <Box
                    height={"140px"}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    borderRadius="lg"
                    backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                  ></Box>
                  {/* <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius="lg"
                      w={"400px"}
                      h={"100px"}
                      alignItems={"center"}
                    /> */}
                  {/* </Center> */}
                  <Stack mt="6" spacing="2">
                    <Heading size="md">{item.title}</Heading>
                    <Text color="blue.600" fontSize="10px">
                      creator : {item.User.username}
                    </Text>
                    <Text fontSize={"12px"} noOfLines={2}>
                      {item.content}
                    </Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Published: {new Date(item.createdAt).toLocaleDateString()}
                    </Text>
                    <Text color={"yellow.500"}>
                      Category : {item.Category.name}
                    </Text>
                    <Flex>
                      <Box mt={"10px"}>
                        <GrLike color="red" size={"20px"} />
                      </Box>
                      <Text color="black" fontSize="1xl" mt={"8px"}>
                        {/* : {likes[item.id] || 0} likes */}: {item.total_fav}{" "}
                        likes
                      </Text>
                    </Flex>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant={"ghost"}
                      rounded={"full"}
                      leftIcon={<GrLike />}
                      onClick={() => getLike(item.id)}
                    >
                      Like
                    </Button>
                    {!login ? (
                      <IconButton
                        variant={"ghost"}
                        size={"md"}
                        rounded={"full"}
                        aria-label="Bookmark"
                        onClick={() => noToast()}
                        icon={<BsFillBookmarkStarFill />}
                      />
                    ) : (
                      <IconButton
                        variant={"ghost"}
                        size={"md"}
                        rounded={"full"}
                        aria-label="Bookmark"
                        onClick={() =>
                          dispatch(addToBookmark(item), toToastAdd())
                        }
                        icon={<BsFillBookmarkStarFill />}
                      />
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
