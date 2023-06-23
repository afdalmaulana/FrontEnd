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
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";

export default function BlogCategory() {
  const [category, setCategory] = useState([]);
  const blogCategory = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      // console.log(res);
      setCategory(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  blogCategory();
  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"100px"} ml={"100px"} w={"1300px"}>
          <Stack>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              Category
            </Text>
            <Flex wrap={"wrap"} gap={"50px"}>
              {category.map((item) => {
                return (
                  <Card maxW="sm" mt={"50px"} shadow={"lg"}>
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="lg">{item.name}</Heading>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button variant="solid" colorScheme="blue">
                          Open
                        </Button>
                        <Button variant="ghost" colorScheme="blue">
                          Add to cart
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                );
              })}
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
