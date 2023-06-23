import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import ModalLogin from "../../ModalLogin";
import { useSelector } from "react-redux";
import CreateBlog from "./CreateBlog";

export default function WriteBlog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const login = useSelector((state) => state.UserReducer.login);

  return (
    <>
      <Box mt={"10px"}>
        {!login ? (
          <Button
            backgroundColor={"whiteAlpha.500"}
            hover={"black"}
            onClick={onOpen}
            marginRight={"10px"}
            leftIcon={<ChatIcon />}
            variant=""
          >
            Write
          </Button>
        ) : (
          <CreateBlog />
        )}
        <ModalLogin isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
}
