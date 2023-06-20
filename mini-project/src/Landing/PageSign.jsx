import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
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
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";

export default function PageSign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [phone, setPhone] = useState("");

  // kita membuat hooks useState penampung untuk menampilkan data di function setelah di klik
  // kenapa kita tidak langsung memasukkan useState const [name, setName] = useState('') ke dalam function?
  // karena useState tidak bisa kita masukkan ke dalam function
  // dan apabila di function kita langsung memanggil setName, maka sebelum button di klik, name akan tampil duluan
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function submitHandler(e) {
    setUserName(`${name}`);
    setUserEmail(`${email}`);
    setUserPhone(`${phone}`);
    setUserPassword(`${password}`);
    const hasMinLength = password.length >= 6;
    const hasSymbol = /[!@#$%^&*]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    if (hasMinLength && hasSymbol && hasUppercase) {
      // Password is valid
      setIsValid(true);
      // Perform further actions
    } else {
      // Password is invalid
      setIsValid(false);
    }
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Box h={"100vh"} w={"100%"}>
        <Navbar />
        <Stack>
          <Box w={"800px"} h={"800px"} m={"100px auto"} align={"center"}>
            <Text fontSize={"7xl"} fontFamily={"initial"}>
              Sign In
            </Text>
            <Flex ml={"50px"} w={"300px"} fontSize={"15px"}>
              <Text>Don't have ay account ? </Text>
              <Link to={"/pageregister"}>
                <Text color={"green"}>Create one</Text>
              </Link>
            </Flex>
            <Flex justifyContent={"space-around"} mt={"50px"}>
              <Box>
                <FormControl>
                  <Stack>
                    <Input
                      type="text"
                      placeholder="Username"
                      variant={"flushed"}
                      borderColor={"black"}
                      w={"300px"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Input>
                    <Input
                      required
                      placeholder="Email"
                      variant={"flushed"}
                      borderColor={"black"}
                      w={"300px"}
                      value={email}
                      mt={"20px"}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <InputGroup>
                      <Input
                        pr="4.5rem"
                        mt={"20px"}
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        variant={"flushed"}
                        borderColor={"black"}
                        w={"280px"}
                        InputRightElement
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                    </InputGroup>
                    <Stack>
                      <Button
                        colorScheme="yellow"
                        w={"300px"}
                        borderRadius={"50px"}
                        mt={"10px"}
                        rightIcon={<ArrowForwardIcon />}
                        onClick={() => {
                          setOverlay(<OverlayTwo />);
                          onOpen();
                          submitHandler();
                        }}
                      >
                        Submit
                      </Button>
                      {!isValid && (
                        <Text color={"red"}>
                          Password should have at least 6 characters, at least 1
                          symbol, and at least 1 uppercase letter
                        </Text>
                      )}
                      {isValid && (
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                          {overlay}
                          <ModalContent>
                            <ModalHeader>Your Data</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <Text>Username : {userName}</Text>
                              <Text>email : {userEmail}</Text>
                              <Text>phone : {userPhone}</Text>
                              <Text>password : {userPassword}</Text>
                              {/* <Text>Gender : {userGender}</Text> */}
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={onClose}>Close</Button>
                              <Button colorScheme="yellow">Submit</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      )}
                    </Stack>
                  </Stack>
                </FormControl>
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
