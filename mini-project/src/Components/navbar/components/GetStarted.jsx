import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
    const {onClose} = useDisclosure();
  const navigate = useNavigate();
  function toSigninPage() {
    navigate("/signPage");
    onClose();
  }
  function toSignUp() {
    navigate("/pageregister");
    onClose();
  }
  return (
    <>
      <Menu>
        {/* <Avatar src="https://bit.ly/broken-link" boxSize={9} /> */}
        <MenuButton
          as={Button}
          colorScheme="yellow"
          borderRadius={"20px"}
          w={"150px"}
        >
          Get Started
        </MenuButton>
        <MenuList w={"300px"} marginRight={"10px"}>
          <Center>
            <Text mt={"20px"}>Get a started on Golden Book</Text>
          </Center>
          <Center>
            <Button
              colorScheme="whatsapp"
              w={"200px"}
              h={"30px"}
              borderRadius={"50px"}
              mt={"20px"}
              onClick={toSignUp}
            >
              Sign up
            </Button>
          </Center>
          <Center>
            <Button
              border={"1px"}
              borderColor={"black"}
              w={"200px"}
              h={"30px"}
              borderRadius={"50px"}
              mt={"20px"}
              onClick={toSigninPage}
            >
              Sign in
            </Button>
          </Center>
          <MenuItem mt={"30px"}>Become a membership</MenuItem>
          <MenuItem>Close</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
