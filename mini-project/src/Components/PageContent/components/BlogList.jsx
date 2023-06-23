import React, { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import axios from "axios";

export default function BlogList() {
  const [blogList, setBlogList] = useState([])
  async function getBlog(){
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog"
      )
      setBlogList(respon.data.result)
    } catch (error) {
      console.log(error)
    }
  }
  getBlog();
  return (
    <>
      <Box ml={"40px"} mt={"100px"}>
        <Text fontSize={"5xl"} fontWeight={"bold"} fontFamily={"mono"}>
          All Blog and Book
        </Text>
        <Flex wrap={"wrap"} gap={"20px"}>
          {blogList.map((item) => {
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
                    <Text fontSize={"12"}>{item.content}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      <Button rightIcon={<AiFillEye />} variant={""}>
                        Read more
                      </Button>
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
                    <Button
                      variant=""
                      color="black"
                      rightIcon={<BsFillBookmarkStarFill />}
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
