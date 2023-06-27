import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
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
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export default function ModalForgetPassword({ isOpen, onClose }) {
  const toast = useToast();

  const resetPassword = async (values) => {
    try {
      const respon = await axios.put(
        `https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass`,
        {
          email: values.email,
          FE_URL: "http://localhost:3000",
        }
      );
      console.log(respon);
      toast({
        title: "Password reset link send to your email",
        description: "Check your email",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log("ini erorr", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetSchema,
    onSubmit: (values) => {
      resetPassword(values);
      onClose();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <Input
                    required
                    placeholder="Email"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"300px"}
                    mt={"20px"}
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <ModalFooter>
                  <Button
                    mt={"20px"}
                    w={"200px"}
                    borderRadius={"50px"}
                    onClick={onClose}
                    colorScheme="red"
                  >
                    Close
                  </Button>
                  <Button
                    mt={"20px"}
                    w={"200px"}
                    borderRadius={"50px"}
                    type="submit"
                    colorScheme="yellow"
                  >
                    Get a link
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
