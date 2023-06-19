import { Box, Stack, Text } from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";

export default function Membership() {
  return (
    <>
      <Navbar />
      <Stack>
        <Box mt={"60px"}>
          <Text>This is membership Page</Text>
        </Box>
      </Stack>
    </>
  );
}
