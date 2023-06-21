import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <Box>
        <Stack>
          <Flex>
            <Text fontSize={"3xl"} mt={"100px"} ml={"200px"}>
              Keranjang
            </Text>
            <Text color={"green"} mt={"110px"} ml={"30px"}>
              <Link to={"/"}>Back To Home</Link>
            </Text>
          </Flex>
          <Grid></Grid>
        </Stack>
      </Box>
    </>
  );
}
