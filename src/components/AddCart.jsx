import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AddCart({ belanja }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      {/* <IconButton
        onMouseEnter={OnOpen}
        onMouseLeave={onClose}
        icon={<BsFillCartFill />}
        mt={"20px"}
        ml={"20px"}
        variant={"ghost"}
      ></IconButton> */}
      <Box mt={"20px"} ml={"10px"}>
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Button}
            variant={"ghost"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <BsFillCartFill />
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg="red"
              style={{
                color: "white",
                width: "1.1rem",
                height: "1.1rem",
                position: "absolute",
                top: 0,
                left: -10,
                transform: "translate(15%, 0%)",
              }}
            ></Flex>
          </MenuButton>
          <MenuList
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            pos={"absolute"}
            left={"-200px"}
          >
            <Flex justifyContent={"space-between"}>
              <Text ml={"10px"}>Keranjang</Text>
              <Text mr={"10px"} color={"green"}>
                <Link to={"/cart"}>Lihat Semua</Link>
              </Text>
            </Flex>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              w={"400px"}
            >
              <CardBody>
                <Flex>
                  <Image src="" w={"120px"} h={"100px"}></Image>
                  <Text py="2"></Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button variant="ghost" colorScheme="blue"></Button>
              </CardFooter>
            </Card>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
