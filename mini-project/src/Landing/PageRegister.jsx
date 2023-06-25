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
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import React, { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrasiSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Username must contain at least  characters, one uppercase, one number and one special case character"
    )
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Password is required"),
  phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be number"),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Username must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .min(6, "Password must be 6 characters minimum")
    .required("Password is required"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    'Must match "password" value'
  ),
});



export default function PageRegister() {
  const navigate = useNavigate();
  function toHome(){
    navigate("/")
  }
  const toast = useToast();
  const register = async (values) => {
  try {
    const { name, email, phone, password, confirm } = values;
    console.log(values)
    const res = await axios.post(
      "https://minpro-blog.purwadhikabootcamp.com/api/auth/", 
      {
        username: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirm,
        FE_URL : "http://localhost:3000"
      },
    );
    console.log("ini register",res);
    if(res.status === 200){
      toast({
        title: "Register Success, Please check your email to verify",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      toHome();
    }
  } catch (error) {
    console.log(error);
    toast({
      description : "Account not verify",
      status : "error",
      duration:2000,
      isClosable:true,
    })
  }
};
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
    },
    validationSchema: RegistrasiSchema,
    onSubmit: (values) => {
      register(values);
    },
  });
  // const OverlayTwo = () => (
  //   <ModalOverlay
  //     bg="none"
  //     backdropFilter="auto"
  //     backdropInvert="80%"
  //     backdropBlur="2px"
  //   />
  // );
  // const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Navbar />
      <Box h={"100vh"} w={"100%"}>
        <Navbar />
        <Stack>
          <Box w={"800px"} h={"800px"} m={"100px auto"} align={"center"}>
            <Text fontSize={"7xl"} fontFamily={"initial"}>
              Sign Up
            </Text>
            <Box w={"260px"}>
              <Flex justify={"space-around"}>
                <Text>Already have any account ? </Text>
                <Link to={"/signPage"}>
                  <Text color={"green"}>Sign in</Text>
                </Link>
              </Flex>
            </Box>
            <Flex justifyContent={"space-around"} mt={"50px"}>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <Stack>
                    <FormControl
                      isInvalid={formik.touched.name && formik.errors.name}
                    >
                      <FormLabel></FormLabel>
                      <Input
                        type="text"
                        placeholder="Username"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"320px"}
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.name && formik.errors.name && (
                        <FormErrorMessage>
                          {formik.errors.name}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={formik.touched.email && formik.errors.email}
                    >
                      <FormLabel></FormLabel>
                      <Input
                        placeholder="Email"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"320px"}
                        mt={'20px'}
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.email && formik.errors.email && (
                        <FormErrorMessage>
                          {formik.errors.email}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={formik.touched.phone && formik.errors.phone}
                    >
                      <FormLabel></FormLabel>
                      <Input
                        placeholder="Phone Number"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"320px"}
                        id="phone"
                        name="phone"
                        type="text"
                        mt={'20px'}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.phone && formik.errors.phone && (
                        <FormErrorMessage>
                          {formik.errors.phone}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                    >
                      <FormLabel></FormLabel>
                      <InputGroup>
                        <Input
                          id="password"
                          name="password"
                          mt={'20px'}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          variant={"flushed"}
                          borderColor={"black"}
                          w={"280px"}
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
                        <FormErrorMessage>
                          {formik.errors.password}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.confirm && formik.errors.confirm
                      }
                    >
                      <FormLabel></FormLabel>
                      <InputGroup>
                        <Input
                          id="confirm"
                          name="confirm"
                          value={formik.values.confirm}
                          onChange={formik.handleChange}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Confirm password"
                          variant={"flushed"}
                          borderColor={"black"}
                          mt={'20px'}
                          w={"280px"}
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
                      {formik.touched.confirm && formik.errors.confirm && (
                        <FormErrorMessage>
                          {formik.errors.confirm}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  </Stack>
                  <Stack>
                    <Button
                      colorScheme="yellow"
                      w={"300px"}
                      borderRadius={"50px"}
                      mt={"10px"}
                      rightIcon={<ArrowForwardIcon />}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Stack>
                </form>
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
