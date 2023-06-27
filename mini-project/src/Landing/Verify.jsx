import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";

export default function Verify() {
  const toast = useToast();

  async function verif() {
    const url = window.location.href.split("/");
    const token = url.pop();
    console.log(url);
    console.log(token);
    try {
      const verifAccount = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: verifAccount.data.message,
        description: "Happy Reading",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      document.location.href = "/";
    } catch (error) {
      toast({
        description: "erorr",
      });
    }
  }

  return (
    <>
      <Box mt={"150px"} ml={"200px"}>
        <Stack>
          <Text fontSize={"6xl"}>Verify your account</Text>
          <Text>
            Thanks for your participation, Click "Hit Me" for start reading
          </Text>
          <Button
            colorScheme="yellow"
            w={"500px"}
            fontSize={"20px"}
            borderRadius={"20px"}
            mt={"10px"}
            onClick={verif}
          >
            Hit Me !
          </Button>
        </Stack>
      </Box>
    </>
  );
}
