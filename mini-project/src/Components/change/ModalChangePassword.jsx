import {
  Box,
  Button,
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
  useToast,
} from "@chakra-ui/react";
// import Navbar from "../Components/navbar/Navbar";
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

export default function ModalChangePassword({ isOpen, onClose }) {
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <InputGroup>
                  <FormControl
                    isInvalid={
                      formik.touched.currentPassword &&
                      formik.errors.currentPassword
                    }
                  >
                    <Input
                      required
                      placeholder="Current Password"
                      variant={"flushed"}
                      borderColor={"black"}
                      ml={"30px"}
                      w={"300px"}
                      mt={"20px"}
                      id="currentPassword"
                      name="currentPassword"
                      type={show ? "text" : "password"}
                      value={formik.values.currentPassword}
                      onChange={formik.handleChange}
                      InputRightElement
                    ></Input>
                    {formik.touched.currentPassword &&
                      formik.errors.currentPassword && (
                        <FormErrorMessage>
                          {formik.errors.currentPassword}
                        </FormErrorMessage>
                      )}
                    <Button
                      size="sm"
                      onClick={handleClick}
                      mt={"5px"}
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
                <InputGroup>
                  <FormControl
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  >
                    <Input
                      required
                      ml={"30px"}
                      placeholder="New password"
                      variant={"flushed"}
                      borderColor={"black"}
                      w={"300px"}
                      mt={"20px"}
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    ></Input>
                    {formik.touched.password && formik.errors.password && (
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                    )}
                    <Button
                      size="sm"
                      onClick={handleClick}
                      mt={"5px"}
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
                <InputGroup>
                  <FormControl
                    isInvalid={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  >
                    <Input
                      ml={"30px"}
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
                      w={"300px"}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <FormErrorMessage>
                          {formik.errors.confirmPassword}
                        </FormErrorMessage>
                      )}
                    <Button
                      size="sm"
                      onClick={handleClick}
                      mt={"5px"}
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
                <ModalFooter>
                  <Button
                    mt={"20px"}
                    w={"150px"}
                    borderRadius={"50px"}
                    onClick={onClose}
                    colorScheme="red"
                  >
                    Close
                  </Button>
                  <Button
                    ml={"20px"}
                    mt={"20px"}
                    w={"150px"}
                    borderRadius={"50px"}
                    type="submit"
                    colorScheme="yellow"
                  >
                    Change
                  </Button>
                </ModalFooter>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
