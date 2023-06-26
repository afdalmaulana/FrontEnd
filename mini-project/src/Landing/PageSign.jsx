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

const LoginSchema = Yup.object().shape({
  name: Yup.string().min(5, "username must have 5 characters minimum"),
  // .required("username is required"),
  email: Yup.string().email("Invalid email address format"),
  // .required("email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
  phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be number"),
});

export default function PageSign() {
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }

  const login = useSelector((state) => state.UserReducer.login);
  console.log(login);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
      if (!login) {
        toast({
          description: "Login Success, Happy Reading",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        toHome();
      } else {
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
                      isInvalid={formik.touched.name && formik.errors.name}
                    >
                      <FormLabel htmlFor="name"></FormLabel>
                      <Input
                        placeholder="Username"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"310px"}
                        id="name"
                        name="name"
                        type="text"
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
                      <FormLabel htmlFor="email"></FormLabel>
                      <Input
                        placeholder="Email"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"310px"}
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        mt={"20px"}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.email && formik.errors.email && (
                        <FormErrorMessage>
                          {formik.errors.email}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    {/* <FormControl
                      isInvalid={formik.touched.phone && formik.errors.phone}
                    >
                      <FormLabel htmlFor="phone"></FormLabel>
                      <Input
                        placeholder="Phone"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"310px"}
                        id="phone"
                        name="phone"
                        type="text"
                        value={formik.values.phone}
                        mt={"20px"}
                        onChange={formik.handleChange}
                      ></Input>
                      {formik.touched.phone && formik.errors.phone && (
                        <FormErrorMessage>
                          {formik.errors.phone}
                        </FormErrorMessage>
                      )}
                    </FormControl> */}
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
                <Text>Forget your password ? </Text>
                <Button onClick={onOpen} mt={"10px"}>
                  Hit Me
                </Button>
                <ModalForgetPassword
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
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
