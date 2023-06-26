import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Stack,
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
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const changePassword = async (values) => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const { currentPassword, password, confirmPassword } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        {
          currentPassword: currentPassword,
          password: password,
          confirmPassword: confirmPassword,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon);
      toast({
        title: "Password change",
        description: "your password has been change",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      toHome();
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
                  Current Password
                </FormLabel>
                <InputGroup>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    mt={"20px"}
                    value={formik.values.currentPassword}
                    onChange={formik.handleChange}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"400px"}
                    InputRightElement
                    // value={password}
                  />
                  <Button
                    size="sm"
                    onClick={handleClick}
                    mt={"10px"}
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
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    mt={"20px"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"400px"}
                    InputRightElement
                    // value={password}
                  />
                  <Button
                    size="sm"
                    onClick={handleClick}
                    mt={"10px"}
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
                <FormLabel
                  fontSize={"1xl"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                  mt={"20px"}
                >
                  Confirm New Password
                </FormLabel>
                <InputGroup>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    mt={"20px"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"400px"}
                    InputRightElement
                    // value={password}
                  />
                  <Button
                    size="sm"
                    onClick={handleClick}
                    mt={"10px"}
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
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}
