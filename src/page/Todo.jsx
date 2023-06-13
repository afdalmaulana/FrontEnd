import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Todo(){
    const list = ["coding","eat","sleep"]
    const [data,setData] = useState (list);
    const activity = useRef();

    function onAdd(){
        const word = activity.current.value;
        setData ([...data, word]);
        activity.current.value = "";
    }
    const onDelete = (index) => {
        const arr = [...data];
        arr.splice(index, 1);
        setData(arr);
      };
    return (
        <>
        <Box mt={'20px'}>
        <Link to={'/filter'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Filter
        </Button></Link>
        <Link to={'/timer'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Timer
        </Button></Link>
        </Box>
        <Box bgGradient={'linear(to-r, #0CCDA3, red.500)'} mt={'10px'} align={'center'} h={'800px'}>
            <Text align={'center'} fontSize={'5xl'}>To-do List </Text>
            <Flex justify={'center'}>
            <Input width={'300px'} ref={activity}></Input>
            <Button colorScheme="blue" size={'md'} ml={'10px'} onClick={onAdd}>Add</Button>
            </Flex>
            {data.map((item,index) => {
                return (
                    <Flex justifyContent="center" alignItems="center">
              <Flex
                w="20vw"
                m="2"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                border="1px solid white"
                fontWeight="bold"
                fontSize="2xl"
              >
                {item}
              </Flex>
              <Button onClick={() => {onDelete(index)}}>Delete</Button>
            </Flex>
                )
            })}

        </Box>
        </>
    )
}