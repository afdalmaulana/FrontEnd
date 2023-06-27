import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.UserReducer);
  const [profilePicture, setProfilePicture] = useState(
    "url_to_initial_profile_picture.jpg"
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleProfilePictureUpdate = () => {
    // Perform necessary logic to update the profile picture using the selected file
    const reader = new FileReader();
    reader.onload = () => {
      const newProfilePicture = reader.result;
      setProfilePicture(newProfilePicture);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <Box>
        <Flex>
          <Box>
            <Avatar src={profilePicture} alt="Profile Picture" size="xl" />
          </Box>
          <Box ml={'20px'}>
            <Text fontSize={'20px'} fontWeight={'bold'}>{user.username}</Text>
            <Input type="file" onChange={handleFileChange} mt={'10px'} variant={""} />
            <Button onClick={handleProfilePictureUpdate}>Update Picture</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
