import { Box } from "@chakra-ui/react";
import axios from "axios";

export default function ChangeEmail() {
  const emailChange = async (values) => {
    const respon = await axios.patch(
      "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeEmail"
    );
  };
  return (
    <>
      <Box></Box>
    </>
  );
}
