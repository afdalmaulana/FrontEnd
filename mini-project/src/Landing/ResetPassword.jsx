import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const resetSchema = Yup.object().shape({
  password: Yup.string()
    .required("password is required")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Username must contain at least  characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("newPassword is required"),
});

export default function ResetPassword() {
  const navigate = useNavigate();
  function toSignin() {
    navigate("/signPage");
  }
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const resetPassword = async (values) => {
    const url = window.location.href.split("/");
    const token = url.pop();
    console.log(url);
    console.log(token);
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
          FE_URL: "http:/localhost/3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast({
        title: "Password reset",
        description: "Please login again",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      toSignin();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      resetPassword(values);
    },
  });
  return (
    <>
      <Box>
        <Navbar />
        <Box mt={"200px"} ml={"250px"}>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              w={"500px"}
              pl={"50px"}
              shadow={"lg"}
              borderRadius={"20px"}
              h={"300px"}
              ml={"250px"}
            >
              <FormControl
                isInvalid={formik.touched.password && formik.errors.password}
              >
                <FormLabel></FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    mt={"20px"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="New Password"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"350px"}
                    InputRightElement
                    // value={password}
                  />
                  <Button
                    size="sm"
                    onClick={handleClick}
                    mt={"25px"}
                    variant={"unstyled"}
                  >
                    {" "}
                    {show ? (
                      <RiEye2Line size={"25px"} />
                    ) : (
                      <RiEyeCloseFill size={"25px"} />
                    )}
                  </Button>
                </InputGroup>
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
                <FormLabel></FormLabel>
                <InputGroup>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    variant={"flushed"}
                    borderColor={"black"}
                    mt={"20px"}
                    w={"350px"}
                    InputRightElement
                    // value={password}
                  />
                  <Button
                    size="sm"
                    onClick={handleClick}
                    mt={"25px"}
                    variant={"unstyled"}
                  >
                    {" "}
                    {show ? (
                      <RiEye2Line size={"25px"} />
                    ) : (
                      <RiEyeCloseFill size={"25px"} />
                    )}
                  </Button>
                </InputGroup>
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
                Change
              </Button>
            </Stack>
          </form>

          {/* <Text
              fontSize={"1xl"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              mt={"20px"}
            >
              New password
            </Text> */}
          {/* <Input
              placeholder="New Password"
              fontSize={"20px"}
              variant={"outline"}
              w={"400px"}
              mt={"5px"}
            /> */}
          {/* <Text
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
            /> */}
        </Box>
      </Box>
    </>
  );
}
