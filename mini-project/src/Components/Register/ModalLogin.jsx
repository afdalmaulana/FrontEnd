import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function ModalLogin({ isOpen, onClose }) {
  const navigate = useNavigate();
  function toSignPage() {
    navigate("/signPage");
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"2000px"} h={"500px"}>
          <ModalHeader>Create an account to start writing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={"20px"}>
            <Button
                colorScheme={"yellow"}
                w={"220px"}
                ml={"auto"}
                mr={"auto"}
                borderRadius={"40px"}
                mt={"10px"}
                onClick={toSignPage}
              >
                Sign up
              </Button>
              <Button
                color={"black"}
                w={"220px"}
                ml={"auto"}
                mr={"auto"}
                borderRadius={"40px"}
                leftIcon={<FaGoogle />}
              >
                Sign up with Google
              </Button>
              <Button
                colorScheme={"facebook"}
                w={"220px"}
                ml={"auto"}
                mr={"auto"}
                borderRadius={"40px"}
                leftIcon={<FaFacebookSquare />}
                mt={"10px"}
              >
                Sign up with Facebook
              </Button>
              <Flex ml={"50px"} w={"300px"} mt={"50px"} fontSize={"15px"}>
                <Text>Already have ay account ? </Text>
                <Link to={"/signPage"}>
                  <Text color={"green"}>Sign in</Text>
                </Link>
              </Flex>
              <Text mt={"50px"} fontSize={"10px"}>
                Click “Sign Up” to agree to Medium Terms of Service and
                acknowledge that Medium Privacy Policy applies to you.
              </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
