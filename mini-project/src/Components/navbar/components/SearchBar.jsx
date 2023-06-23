import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function SearchBar({ data }) {
  return (
    <Box>
      <InputGroup ml={'20px'}>
        <InputLeftElement>
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            size={"5px"}
            variant={"filled"}
          />
        </InputLeftElement>
        <Input
          placeholder="Search"
          w={"400px"}
          h={"40px"}
          variant={"flushed"}
        />
      </InputGroup>
    </Box>
  );
}
