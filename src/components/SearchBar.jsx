import { Box, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchBar(){
    return (
        <>
            <Box>
            <InputGroup>
              <Input
                placeholder="Cari zakat profesi"
                mt={"20px"}
                w={"800px"}
                rightic
              ></Input>
              <InputRightElement>
                <IconButton icon={<BiSearchAlt />} mt={"40px"}></IconButton>
              </InputRightElement>
            </InputGroup>
          </Box>
        </>
    )
}