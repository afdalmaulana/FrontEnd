import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const ChangeSchema = Yup.object().shape({
  currentPassword: Yup.string().required("currentPassword is required"),
  password: Yup.string()
    .required("password is required")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least  characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function ChangePassword() {
  const toast = useToast();
  const changePassword = async (values) => {
    const { currentPassword, password, confirmPassword } = values;
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        {
          currentPassword: currentPassword,
          password: password,
          confirmPassword: confirmPassword,
          FE_URL: "http://localhost:3000",
        }
      );
      console.log(respon.data.success);
      toast({
        title: "Password change",
        description: "your password has been change",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "your password is not change",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ChangeSchema,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"200px"} ml={"280px"}>
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
                  id="password"
                  name="password"
                  type="text"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              >
                <FormLabel
                  fontSize={"1xl"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                  mt={"20px"}
                >
                  Confirm New Password
                </FormLabel>
                <Input
                  mt={"5px"}
                  placeholder="Type here"
                  fontSize={"20px"}
                  w={"400px"}
                  variant={"outline"}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="text"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <FormErrorMessage>
                      {formik.errors.confirmPassword}
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
        </Box>
      </Box>
    </>
  );
}
