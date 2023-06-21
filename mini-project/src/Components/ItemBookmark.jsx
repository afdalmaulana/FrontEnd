import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
            src={item.images}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{item.title}</Heading>
              <Text py="2">{item.desc}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        ;
      </>
    )
  });
}
