import { Box, Button, Flex, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Filter(){
    const listFruit = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Melon", "Watermelon"]
    const [data,setData] = useState (listFruit);

    const activity = useRef();

    function check(){
        setData(
            listFruit.filter((element) => {
                return element.toLowerCase().includes(activity.current.value.toLowerCase());
            })
        )
    }

    return (
        <>
        <Box mt={'20px'}>
        <Link to={'/'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Home
        </Button></Link>
        <Link to={'/timer'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Timer
        </Button></Link>
        </Box>
        <Box mt={'100px'} ml={'200px'} bgGradient={'linear(to-r, green.500, purple.500)'} w={'500px'} h={'500px'} borderRadius={'10px'}>
        <Text fontSize={'5xl'}>Filter</Text>
        <HStack spacing={'24px'}>
        <Text fontSize={'3xl'}>Search</Text>
        <Input w={'300px'} ref={activity} onChange={check} placeholder="Search"></Input>
        </HStack>
        {data.map((item) => {
            return (
                <Flex justifyContent="center" alignItems="center">
              <Flex
                w="300px"
                m="2"
                h="40px"
                ml={'35px'}
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                border="1px solid white"
                fontWeight="bold"
                fontSize="2xl"
              >
                {item}
              </Flex>
            </Flex>
            )
        })}
        </Box>
        </>
    )
}