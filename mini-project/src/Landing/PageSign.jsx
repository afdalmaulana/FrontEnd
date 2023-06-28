import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BsGoogle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/reducer/UserReducer";
import ModalForgetPassword from "../Components/ForgetPassword/ModalForgetPassword";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required("Identifier is required"),
  // name: Yup.string().min(5, "username must have 5 characters minimum"),
  // // .required("username is required"),
  // email: Yup.string().email("Invalid email address format"),
  // // .required("email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
  // phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be number"),
});

export default function PageSign() {
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }

  const login = useSelector((state) => state.UserReducer.login);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      // name: "",
      // email: "",
      password: "",
      // phone: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
      console.log("ini console", values);
      try {
        toast({
          description: "Login Success, Happy Reading",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        toHome();
      } catch (error) {
        toast({
          description: "Account not verify",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });
  //
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box h={"100vh"} w={"100%"}>
        <Navbar />
        <Stack>
          <Box w={"800px"} h={"800px"} m={"100px auto"} align={"center"}>
            <Text fontSize={"7xl"} fontFamily={"initial"}>
              Sign In
            </Text>
            <Box w={"270px"}>
              <Flex justify={"space-around"}>
                <Text>Don't have any account ? </Text>
                <Link to={"/pageregister"}>
                  <Text color={"green"}>Create one</Text>
                </Link>
              </Flex>
            </Box>
            <Flex justifyContent={"space-around"} mt={"50px"}>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <Stack>
                    <FormControl
                      isInvalid={
                        formik.touched.identifier && formik.errors.identifier
                      }
                    >
                      <FormLabel htmlFor="identifier">
                        Username, Email, or Phone
                      </FormLabel>
                      <Input
                        placeholder="Type here"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"310px"}
                        id="identifier"
                        name="identifier"
                        type="text"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.identifier &&
                        formik.errors.identifier && (
                          <FormErrorMessage>
                            {formik.errors.identifier}
                          </FormErrorMessage>
                        )}
                    </FormControl>
                    <InputGroup>
                      <FormControl
                        isInvalid={
                          formik.touched.password && formik.errors.password
                        }
                      >
                        <FormLabel htmlFor="password"></FormLabel>
                        <Input
                          onChange={formik.handleChange}
                          id="password"
                          name="password"
                          value={formik.values.password}
                          pr="4.5rem"
                          mt={"20px"}
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          variant={"flushed"}
                          borderColor={"black"}
                          w={"280px"}
                          InputRightElement
                        />
                        {formik.touched.password && formik.errors.password && (
                          <FormErrorMessage>
                            {formik.errors.password}
                          </FormErrorMessage>
                        )}
                        <Button
                          size="sm"
                          onClick={handleClick}
                          mt={"30px"}
                          variant={"unstyled"}
                        >
                          {" "}
                          {show ? (
                            <RiEye2Line size={"30px"} />
                          ) : (
                            <RiEyeCloseFill size={"30px"} />
                          )}
                        </Button>
                      </FormControl>
                    </InputGroup>
                    <Stack>
                      <Button
                        colorScheme="yellow"
                        w={"300px"}
                        borderRadius={"50px"}
                        mt={"10px"}
                        rightIcon={<ArrowForwardIcon />}
                        type="submit"
                        // onClick={toHome}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Stack>
                </form>
                <Text mt={"20px"}>Forget your password ? </Text>
                <ForgetPassword />
              </Box>
              <Box>
                <Divider orientation="vertical" />
              </Box>
              <Box>
                <Stack mt={"100px"}>
                  <Button
                    w={"200px"}
                    leftIcon={<BsGoogle />}
                    colorScheme={"messenger"}
                  >
                    Login with Google
                  </Button>
                  <Button
                    w={"200px"}
                    colorScheme="facebook"
                    leftIcon={<FaFacebook />}
                  >
                    Login Facebook
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
