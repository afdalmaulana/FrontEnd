import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewArticle() {
  const [viewArticle, setViewArticle] = useState({});
  const urlId = window.location.href.split("?");
  const idBlogView = urlId[0].split("/").pop();
  const title = urlId[1].replaceAll("-", " ");

  const viewBlog = async (id, title) => {
    const token = localStorage.getItem("token");
    const respon = await axios.get(
      `https://minpro-blog.purwadhikabootcamp.com/api/blog/${idBlogView}`
    );
    setViewArticle(respon.data[0]);
  };

  useEffect(() => {
    viewBlog(idBlogView, title);
  }, []);

  console.log(viewArticle);
  return (
    <>
      <Box ml={"100px"} mt={"100px"}>
        <Card w={"1200px"} shadow={"dark-lg"} overflowY={"scroll"}>
          <Flex>
            <CardHeader>
              <Box
                height={"300px"}
                w={"500px"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                borderRadius="lg"
                backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${viewArticle.imageURL}`}
              ></Box>
            </CardHeader>
            <CardBody>
              <Text fontSize={"5xl"} fontWeight={"bold"} fontFamily={"mono"}>
                {viewArticle.title}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Published:{" "}
                {new Date(viewArticle.createdAt).toLocaleDateString()}
              </Text>
              {/* <Text color={"yellow.500"}>
                Category : {viewArticle.Category.name}
              </Text> */}
              <Box bgColor={"black"}>
                <Divider />
              </Box>
              <Box overflow={"scroll"}>
                <Text fontSize={"20px"}>{viewArticle.content}</Text>
              </Box>
            </CardBody>
          </Flex>
        </Card>
      </Box>
    </>
  );
}
