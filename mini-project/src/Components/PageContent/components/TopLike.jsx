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
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark } from "../../../redux/reducer/BlogReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function TopLike() {
  const [like, setLike] = useState([]);
  const topLike = async () => {
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?size=10&sort=DESC&orderBy=total_fav"
      );
      setLike(respon.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    topLike();
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <Box ml={"40px"} mt={"100px"}>
        <Text fontSize={"5xl"} fontWeight={"bold"} fontFamily={"mono"}>
          10 Top Like
        </Text>
        <Flex wrap={"wrap"} gap={"20px"}>
          {like.map((item) => {
            return (
              <Card maxW="md" maxH="lg">
                <CardBody justifyContent={"center"}>
                  <Center>
                    <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius="lg"
                      w={"400px"}
                      h={"200px"}
                      alignItems={"center"}
                    />
                  </Center>
                  <Stack mt="6" spacing="2">
                    <Heading size="md">{item.title}</Heading>
                    <Text fontSize={"12"}>{item.User.username}</Text>
                    <Flex>
                      <Box mt={"10px"}>
                        <AiFillHeart color="red" size={"20px"} />
                      </Box>
                      <Text color="black" fontSize="1xl" mt={"8px"}>
                        : {item.total_fav} likes
                      </Text>
                    </Flex>
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
                    <Button
                      variant=""
                      color="black"
                      rightIcon={<BsFillBookmarkStarFill />}
                      onClick={() => dispatch(addToBookmark(item))}
                    ></Button>
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
