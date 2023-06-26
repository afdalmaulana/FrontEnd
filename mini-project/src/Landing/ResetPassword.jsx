import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function ResetPassword() {
  const resetPassword = async (values) => {
    const url = window.location.href.split("/");
    const token = url.pop();
    console.log(url);
    console.log(token);
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
          FE_URL: "http:/localhost/3000",
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"200px"} ml={"250px"}>
          <Stack
            w={"500px"}
            pl={"50px"}
            shadow={"lg"}
            borderRadius={"20px"}
            h={"500px"}
            ml={"250px"}
          >
            <Text
              fontSize={"1xl"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              mt={"20px"}
            >
              New password
            </Text>
            <Input
              placeholder="New Password"
              fontSize={"20px"}
              variant={"outline"}
              w={"400px"}
              mt={"5px"}
            />
            <Text
              fontSize={"1xl"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              mt={"20px"}
            >
              Confirm new password
            </Text>
            <Input
              placeholder="Confirm Password"
              fontSize={"20px"}
              variant={"outline"}
              w={"400px"}
              mt={"5px"}
            />
            <Button
              colorScheme="yellow"
              w={"400px"}
              borderRadius={"50px"}
              mt={"50px"}
              rightIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
