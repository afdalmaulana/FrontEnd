import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const ResetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export default function ForgetPassword() {
  const toast = useToast();
  const [reset, setReset] = useState(false);
  function resetButton() {
    setReset(true);
  }
  const resetPassword = async (values) => {
    // const url = window.location.href.split("/");
    // const token = url.pop();
    // console.log(url);
    // console.log(token);
    try {
      const  email  = values;
      const respon = await axios.put(
        `https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass`,
        {
          email: email,
        }
      );
      console.log(respon.data.message);
      toast({
        title: respon.data.message,
        description: "Check you email",
        status: "Success",
      });
    } catch (error) {
      console.log("ini erorr", error);
      toast({
        description: "error",
        status: "error",
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetSchema,
    onSubmit: (values) => {
      resetPassword(values);
    },
  });

  return (
    <>
      <Box w={"260px"}>
        <Flex justify={"space-around"}>
          <Text justifyContent={"left"} mt={"10px"}>
            Forgot your password ?{" "}
          </Text>
          <Button
            onClick={resetButton}
            fontSize={"20px"}
            w={"50px"}
            variant={""}
            ml={"25px"}
            mt={"2px"}
          >
            Hit me
          </Button>
        </Flex>
      </Box>
      {reset ? (
        <Box>
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
              <Button
                colorScheme="yellow"
                mt={"20px"}
                w={"200px"}
                borderRadius={"50px"}
                type="submit"
              >
                Get a link
              </Button>
            </form>
          </Stack>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
