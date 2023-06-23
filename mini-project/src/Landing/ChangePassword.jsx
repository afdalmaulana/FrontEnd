import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import React, { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userOldPassword, setUserOldPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  function submitHandler(e) {
    setUserOldPassword(`${oldPassword}`);
    setUserNewPassword(`${newPassword}`);
    setUserConfirmPassword(`${confirmPassword}`);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"200px"} ml={"400px"}>
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
              Old password
            </Text>
            <Input
              mt={"5px"}
              placeholder="Type here"
              fontSize={"20px"}
              w={"400px"}
              variant={"outline"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              colorScheme="yellow"
              w={"400px"}
              borderRadius={"50px"}
              mt={"50px"}
              rightIcon={<ArrowForwardIcon />}
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
                submitHandler();
              }}
            >
              Submit
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Your Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Old Password : {userOldPassword}</Text>
                  <Text>New Password : {userNewPassword}</Text>
                  <Text>Confirm Password : {userConfirmPassword}</Text>
                  {/* <Text>Gender : {userGender}</Text> */}
                </ModalBody>
                <ModalFooter>
                  <ButtonGroup gap={'10px'}>
                  <Button onClick={onClose} bgColor={'red.300'}>Close</Button>
                  <Button colorScheme="yellow">Submit</Button>
                  </ButtonGroup>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
