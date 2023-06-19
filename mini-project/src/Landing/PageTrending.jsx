import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

export default function PageTrending({ data }) {
  return (
    <>
      <Stack>
        <p>This is Trending</p>
        {data.map((item) => {
          return (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={item.images}
                alt=""
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{item.title}</Heading>
                  <Text fontSize={"12px"}>{item.author}</Text>
                  <Text py="2">{item.desc}</Text>
                  <Button
                    borderRadius={"50px"}
                    variant=""
                    rightIcon={<IoIosArrowDown />}
                  >
                    Read More
                  </Button>
                </CardBody>

                <CardFooter>
                  <Button
                    borderRadius={"50px"}
                    variant=""
                    rightIcon={<BsFillBookmarkStarFill />}
                  ></Button>
                  <Button
                    variant=""
                    colorScheme="blue"
                    borderRadius={"50px"}
                    leftIcon={<GrLike />}
                  >
                    {" "}
                    Like
                  </Button>
                  <Text mt={"10px"}>{item.open} Pembaca</Text>
                </CardFooter>
              </Stack>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
