import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Icon,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { GrDislike } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { dislikeBlog } from "../redux/reducer/BlogReducer";

export default function LikedArticle() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState([]);
  const getLike = async () => {
    const token = localStorage.getItem("token");
    try {
      console.log(token);
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike?size=100",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon);
      setLiked(respon.data.result);
      console.log("isi yang di liked", liked);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDislikeBlog = (item) => {
    console.log("id item likkkkkeeee", item);
    return dispatch(dislikeBlog(item, toast));
  };
  useEffect(() => {
    getLike();
  }, []);
  return (
    <>
      <Box>
        {liked.map((item) => {
          console.log("id liked blog", item.BlogId);
          return (
            <Card key={item.id} mb={"20px"} shadow={"lg"}>
              <CardHeader>
                <Heading>{item.Blog.title}</Heading>
              </CardHeader>

              <CardBody>
                <Text>{item.Blog.content}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Published: {new Date(item.createdAt).toLocaleDateString()}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant={"ghost"}
                  rounded={"full"}
                  leftIcon={<GrDislike />}
                  onClick={() => handleDislikeBlog(item.BlogId)}
                >
                  Dislike
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
