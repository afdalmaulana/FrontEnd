import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BiBookBookmark } from "react-icons/bi";

export default function TittleWebsite(){
    return (
        <>
        <Box bgImage={'menbook.jpg'} bgSize={'cover'} bgPos={'center'} mt={'50px'} h={'500px'}>
          <Flex>
        <Text fontSize={'7xl'} mt={'100px'} ml={'100px'} color={'whiteAlpha.900'} fontFamily={'monospace'}>Golden Book</Text>
        <Box mt={'100px'} ml={'5px'}>
          <BiBookBookmark size={'30px'} color="gold"/>
        </Box>
          </Flex>
          <Box w={'450px'} ml={'100px'}>
          <Text color={'yellow.300'} fontSize={'2xl'}>Discover stories, thinking and expensive experience from writes on any topic</Text>
          <Button mt={'20px'} borderRadius={'50px'} bgColor={'black'} color={'yellow.300'}>Start Reading</Button>
          </Box>
          </Box>
        </>
    )
}