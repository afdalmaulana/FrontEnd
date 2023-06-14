import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BiBookBookmark } from "react-icons/bi";

export default function TittleWebsite(){
    return (
        <>
        <Box bgImage={'https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80'}  mt={'50px'} h={'500px'}>
          <Flex>
        <Text fontSize={'6xl'} mt={'100px'} ml={'100px'} color={'whiteAlpha.900'} fontFamily={'monospace'}>Golden Book</Text>
        <Box mt={'100px'} ml={'5px'}>
          <BiBookBookmark size={'30px'} color="gold"/>
        </Box>
          </Flex>
          <Box w={'300px'} ml={'100px'}>
          <Text>Discover stories, thinking and expensive experience from writes on any topic</Text>
          <Button mt={'20px'}>Start Reading</Button>
          </Box>
          </Box>
        </>
    )
}