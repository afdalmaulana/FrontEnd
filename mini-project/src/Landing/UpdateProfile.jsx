import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
export default function UpdateProfile(){
    return(
        <>
      <Box>
        <Navbar/>
        <Box mt={'200px'} ml={'250px'}>
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
            Username
          </Text>
          <Input
            mt={"5px"}
            placeholder="New Username"
            fontSize={"20px"}
            w={"400px"}
            variant={"outline"}
          />
          <Text
            fontSize={"1xl"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            mt={"20px"}
          >
            Email
          </Text>
          <Input
            placeholder="New Email"
            fontSize={"20px"}
            variant={"outline"}
            w={"400px"}
            mt={"5px"}
          />
          <Text
            fontSize={"1xl"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            mt={"5px"}
          >
            Phone number
          </Text>
          <Input
            placeholder="New Phone number"
            fontSize={"20px"}
            variant={"outline"}
            w={"400px"}
            mt={"5px"}
          />
          <Button colorScheme="yellow" w={"400px"} mt={'50px'}>
            Change
          </Button>
        </Stack>
        </Box>
        
      </Box>
    </>
  );
}