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
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
            alt="bloglist"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{item.title}</Heading>
              <Text py="2">{item.content}</Text>
            </CardBody>

            <CardFooter></CardFooter>
          </Stack>
        </Card>
      </>
    );
  });
}
