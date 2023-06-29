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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PhoneSchema = Yup.object().shape({
  currentPhone: Yup.string().required("Phone is Required"),
  newPhone: Yup.string().required("Phone is Required"),
});

export default function ModalChangePhone({ isOpen, onClose }) {
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }
  const toast = new useToast();
  const phoneChange = async (values) => {
    const token = localStorage.getItem("token");
    const { currentPhone, newPhone } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentPhone: currentPhone,
          newPhone: newPhone,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ini respon change phone", respon);
      toast({
        title: "Phone change",
        description: "Please remember your new phone number to login",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      toHome();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "your phone is not change",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPhone: "",
      newPhone: "",
    },
    validationSchema: PhoneSchema,
    onSubmit: (values) => {
      phoneChange(values);
      onClose();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Phone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  isInvalid={
                    formik.touched.currentPhone && formik.errors.currentPhone
                  }
                >
                  <Input
                    required
                    placeholder="Current phone number"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"350px"}
                    mt={"20px"}
                    id="currentPhone"
                    name="currentPhone"
                    type="number"
                    value={formik.values.currentPhone}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.currentPhone &&
                    formik.errors.currentPhone && (
                      <FormErrorMessage>
                        {formik.errors.currentPhone}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.newPhone && formik.errors.newPhone}
                >
                  <Input
                    required
                    placeholder="New phone number"
                    variant={"flushed"}
                    borderColor={"black"}
                    w={"350px"}
                    mt={"20px"}
                    id="newPhone"
                    name="newPhone"
                    type="number"
                    value={formik.values.newPhone}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.newPhone && formik.errors.newPhone && (
                    <FormErrorMessage>
                      {formik.errors.newPhone}
                    </FormErrorMessage>
                  )}
                </FormControl>
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
