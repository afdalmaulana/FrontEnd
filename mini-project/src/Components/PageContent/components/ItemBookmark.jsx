import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

export default function ItemBookmark({ bookmark }) {
  return bookmark?.map((item) => {
    return (
      <>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="center"
            w={"300px"}
            h={"300px"}
            src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
            alt="bloglist"
          />

          <Stack>
            <CardBody>
              <Heading size="lg">{item.title}</Heading>
              <Box bgColor={"black"} w={"400px"}>
                <Divider />
              </Box>
              <Text py="2" color={"blue.300"}>
                creator : {item.User.username}
              </Text>
              <Text py="2">{item.content}</Text>
              <Text py="2">
                Published: {new Date(item.createdAt).toLocaleDateString()}
              </Text>
              <Tag py="2" rounded={"full"}>
                {item.Category.name}
              </Tag>
            </CardBody>

            <CardFooter></CardFooter>
          </Stack>
        </Card>
      </>
    );
  });
}
