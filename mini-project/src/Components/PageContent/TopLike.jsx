import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";

export default function TopLike({like}){
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
                        src={item.images}
                        borderRadius="lg"
                        w={"400px"}
                        h={"200px"}
                        alignItems={"center"}
                      />
                    </Center>
                    <Stack mt="6" spacing="2">
                      <Heading size="md">{item.title}</Heading>
                      <Text fontSize={"12"}>{item.desc} hhhh</Text>
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
    )
}