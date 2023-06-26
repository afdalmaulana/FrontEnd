import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
export default function SignIn() {
  const userLogin = useSelector((state) => state.UserReducer.login);
  const login = localStorage.getItem("token");
  const navigate = useNavigate();
  function toSigninPage() {
    navigate("/signPage");
  }
  function toSignUp() {
    navigate("/pageregister");
  }
  return (
    <>
      <Box mt={"10px"} mr={"50px"}>
        {!login && !userLogin ? (
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
              <MenuItem mt={"30px"}>Become a member</MenuItem>
              <MenuItem>Get a membership</MenuItem>
              <MenuItem>Apply for author verification</MenuItem>
              <MenuItem>Close</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <UserProfile />
        )}
      </Box>
    </>
  );
}
