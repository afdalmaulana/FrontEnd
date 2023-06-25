import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const resetSchema = Yup.object().shape({
  currentPassword: Yup.string().required("currentPassword is required"),
  password: Yup.string().required("password is required"),
  newPassword: Yup.string().required("newPassword is required"),
});

export default function ChangePassword() {
  const changePassword = async (values) => {
    const { currentPassword, password, newPassword } = values;
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        {
          currentPassword: currentPassword,
          password: password,
          newPassword: newPassword,
        }
      );
      console.log(respon);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      newPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  // function submitHandler(e) {
  //   setUserOldPassword(`${oldPassword}`);
  //   setUserNewPassword(`${newPassword}`);
  //   setUserConfirmPassword(`${confirmPassword}`);
  //   setOldPassword("");
  //   setNewPassword("");
  //   setConfirmPassword("");
  // }
  // const OverlayTwo = () => (
  //   <ModalOverlay
  //     bg="none"
  //     backdropFilter="auto"
  //     backdropInvert="80%"
  //     backdropBlur="2px"
  //   />
  // );
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"200px"} ml={"400px"}>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              w={"500px"}
              pl={"50px"}
              shadow={"lg"}
              borderRadius={"20px"}
              h={"500px"}
              ml={"250px"}
            >
              <FormControl
                isInvalid={
                  formik.touched.currentPassword &&
                  formik.errors.currentPassword
                }
              >
                <FormLabel
                  fontSize={"1xl"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                  mt={"20px"}
                >
                  Old Password
                </FormLabel>
                <Input
                  mt={"5px"}
                  placeholder="Type here"
                  fontSize={"20px"}
                  w={"400px"}
                  variant={"outline"}
                  id="currentPassword"
                  name="currentPassword"
                  type="text"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.currentPassword &&
                  formik.errors.currentPassword && (
                    <FormErrorMessage>
                      {formik.errors.currentPassword}
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.password && formik.errors.password}
              >
                <FormLabel
                  fontSize={"1xl"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                  mt={"20px"}
                >
                  New Password
                </FormLabel>
                <Input
                  mt={"5px"}
                  placeholder="Type here"
                  fontSize={"20px"}
                  w={"400px"}
                  variant={"outline"}
                  id="currentPassword"
                  name="currentPassword"
                  type="text"
                  value={formik.values.paassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.newPassword && formik.errors.newPassword
                }
              >
                <FormLabel
                  fontSize={"1xl"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                  mt={"20px"}
                >
                  New Password
                </FormLabel>
                <Input
                  mt={"5px"}
                  placeholder="Type here"
                  fontSize={"20px"}
                  w={"400px"}
                  variant={"outline"}
                  id="currentPassword"
                  name="currentPassword"
                  type="text"
                  value={formik.values.newPaassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <FormErrorMessage>
                    {formik.errors.newPassword}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                colorScheme="yellow"
                w={"400px"}
                borderRadius={"50px"}
                mt={"50px"}
                rightIcon={<ArrowForwardIcon />}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>

          {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              // {overlay}
              <ModalContent>
                <ModalHeader>Your Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Old Password : {userOldPassword}</Text>
                  <Text>New Password : {userNewPassword}</Text>
                  <Text>Confirm Password : {userConfirmPassword}</Text> */}
          {/* <Text>Gender : {userGender}</Text> */}
          {/* </ModalBody> */}
          {/* <ModalFooter>
                  <ButtonGroup gap={'10px'}>
                  <Button onClick={onClose} bgColor={'red.300'}>Close</Button>
                  <Button colorScheme="yellow">Submit</Button>
                  </ButtonGroup>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
        </Box>
      </Box>
    </>
  );
}
