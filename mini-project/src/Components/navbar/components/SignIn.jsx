import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import GetStarted from "./GetStarted";
export default function SignIn() {
  const { onClose } = useDisclosure();
  const userLogin = useSelector((state) => state.UserReducer.login);
  const login = localStorage.getItem("token");
  
  return (
    <>
      <Box mt={"10px"} mr={"50px"}>
        {!login && !userLogin ? (
          <GetStarted/>
        ) : (
          <UserProfile />
        )}
      </Box>
    </>
  );
}
