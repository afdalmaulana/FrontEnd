import { Box, HStack, Stack, Text } from "@chakra-ui/react";


export default function UnderPage(){
    return(
        <>
        <Box bgColor={'#FFB84C'} mt={'600px'}>
            <HStack spacing={'50px'} ml={'50px'}>
                <Stack mt={'50px'}>
                <Text fontSize={'6xl'}>Sport</Text>
                <Box w={'300px'} h={'300px'} bgColor={'white'} mt={'20px'}>1</Box>
                </Stack>
                <Stack mt={'50px'}>
                <Text fontSize={'6xl'}>Lifestyle</Text>
                <Box w={'300px'} h={'300px'} bgColor={'white'} mt={'20px'}>2</Box>
                </Stack>
                <Stack mt={'50px'}>
                <Text fontSize={'6xl'}>Travel</Text>
                <Box w={'300px'} h={'300px'} bgColor={'white'} mt={'20px'}>1</Box>
                </Stack>
                <Stack mt={'50px'}>
                <Text fontSize={'6xl'}>Food</Text>
                <Box w={'300px'} h={'300px'} bgColor={'white'} mt={'20px'}>2</Box>
                </Stack>
            </HStack>
        </Box>
        </>
    )
}