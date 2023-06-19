import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  function toSignin() {
    navigate("/signPage");
  }
  return (
    <>
      <Box mt={"10px"} mr={"20px"}>
        <Button colorScheme={"yellow"} borderRadius={"50px"} onClick={toSignin}>
          Sign in
        </Button>
      </Box>
    </>
  );
}
