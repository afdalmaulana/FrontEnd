import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePicture, setUser } from "../redux/reducer/UserReducer";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  function changeImg() {
    const [file] = document.getElementById("file").files;
    const imgURL = URL.createObjectURL(file);
    setImage(imgURL);
  }
  function handleSubmit() {
    const file = document.getElementById("file").files[0];
    dispatch(changePicture(file));
  }

  return (
    <>
      <Box shadow={'lg'} borderRadius={'20px'}>
        <Flex justify={"space-around"}>
          <Box mt={'20px'}>
            <Avatar
              src={`https://minpro-blog.purwadhikabootcamp.com/${user.imgProfile}`}
              alt="Profile Picture"
              size="2xl"
            />
          </Box>
          <Box ml={"20px"} mt={'20px'}>
            <Avatar src={image} size={"2xl"}></Avatar>
          </Box>
        </Flex>
        <Flex justify={"space-around"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={"medium"}>
              Current Picture
            </Text>
          </Box>
          <Box>
            <Text fontSize={"20px"} fontWeight={"medium"}>
              New Picture
            </Text>
          </Box>
        </Flex>
        <Stack>
          <Input
            ml={"180px"}
            type="file"
            onChange={changeImg}
            id="file"
            mt={"10px"}
            w={"500px"}
            variant={""}
          />
          <Button
            onClick={handleSubmit}
            w={"300px"}
            ml={"180px"}
            colorScheme="yellow"
          >
            Update Picture
          </Button>
        </Stack>
      </Box>
    </>
  );
}
