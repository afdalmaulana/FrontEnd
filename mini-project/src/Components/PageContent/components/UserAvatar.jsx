import { Avatar, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function UserAvatar() {
  const { user } = useSelector((state) => state.UserReducer);
  const getAvatar = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/Public/Avatar-6.png"
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box>
        <Avatar
          src={`https://minpro-blog.purwadhikabootcamp.com/Public/Avatar-6.png`}
          size={"xl"}
        />
        <Text fontSize={"20px"} fontWeight={"medium"}>
          {user.username}
        </Text>
        <Text>ID : {user.id}</Text>
        {user.isVerified ? (
          <Text color={"green"}>Verified</Text>
        ) : (
          <Text color={"red"}>Not Verified</Text>
        )}
      </Box>
    </>
  );
}
