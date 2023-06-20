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
  Text,
} from "@chakra-ui/react";

export default function Produk({ belanja }) {
  return (
    <>
      <Box pl={"150px"}>
        <Flex wrap={"wrap"} gap={"20px"} ju>
          <Card maxW="200px">
            <CardBody>
              <Image src="" borderRadius="lg" w={"200px"} h={"150px"} />
              <Stack mt="2" spacing="3">
                <Text></Text>
                <Text color="blue.600" fontSize="20px"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
}
