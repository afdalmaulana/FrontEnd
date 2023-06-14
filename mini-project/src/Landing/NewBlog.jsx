import { Button, Input, InputGroup, Stack, Textarea } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function NewBlog(){
    return (
        <>
        <Navbar/>
        {/* <Box mt={'50px'}> */}
        <Stack>
        <InputGroup mt={'80px'}>
            <Stack>
        <Input placeholder="Title" w={'600px'} h={'100px'} marginLeft={'450px'} fontSize={'50px'}></Input>
        <Textarea placeholder="Input your imagination" w={'600px'} h={'200px'} marginLeft={'450px'}></Textarea>
        <Button w={'200px'} ml={'450px'} colorScheme={'whatsapp'}>Publish</Button>
            </Stack>

        </InputGroup>
        </Stack>
        {/* </Box> */}

        </>
    )
}