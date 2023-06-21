import { Box, Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

export default function LoginButton() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const login = localStorage.getItem("login");
//   localStorage.getItem("login") => login disini adalah key
  return (
    <>
      <Box mt={"20px"}>
        {!login ? (
          <Button onClick={onOpen}>Login</Button>
        ) : (
          <Button onClick={() => localStorage.removeItem("login")}>Logout</Button>
        )}
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
}
