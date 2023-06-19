import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Content from "../Content";

export default function SearchBar({ data }) {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            size={"5px"}
            variant={"filled"}
          />
        </InputLeftElement>
        <Input placeholder="Search" w={"350px"} h={"40px"} variant={""} />
      </InputGroup>
    </Box>
  );
}
