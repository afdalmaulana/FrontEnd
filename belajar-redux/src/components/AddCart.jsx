import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

export default function AddCart() {
  const cartItem = useSelector((state) => state.CartReducer.cart);
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
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
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                top: 0,
                left: 30,
                transform: "translate(15%, 0%)",
              }}
            >
              {cartItem.length}
            </Flex>
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
            <ItemCart cartItem={cartItem} />
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
