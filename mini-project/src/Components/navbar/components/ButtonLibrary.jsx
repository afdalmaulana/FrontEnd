import { Box, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function ButtonLibrary() {
  const libraryItem = useSelector((state) => state.BlogReducer.blog);
  //   const bookmarkBlog = useSelector((state) => state.BlogReducer.blog);
  return (
    <>
      <Box mt={"10px"}>
        <Button variant={"ghost"}>Library</Button>
        <Flex
          borderRadius="full"
          justify="center"
          align="center"
          bg="red"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            top: 0,
            marginLeft: 60,
            transform: "translate(15%, 0%)",
          }}
        >
          {libraryItem.length}
        </Flex>
      </Box>
    </>
  );
}
