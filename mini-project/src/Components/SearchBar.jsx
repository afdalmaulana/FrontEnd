import { SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function SearchBar(){
    return (
        <Box>
            <InputGroup>
            <InputLeftElement>
            <IconButton aria-label='Search database' icon={<SearchIcon />} size={'5px'} backgroundColor={'white'}/>
            </InputLeftElement>
            <Input placeholder='Search' w={'200px'} h={'30px'} mt={'5px'}/>
            </InputGroup>
        </Box>
    )
}