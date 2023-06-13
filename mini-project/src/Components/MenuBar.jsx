import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MenuBar(){
    return (
        <>
        <Box height={'900px'} w={'500px'} border={'2px'} color={'blackAlpha.200'} pl={'20px'}>
        <Image width="140" height="140" src="https://img.icons8.com/stickers/100/reading.png" alt="reading" mt={'20px'}/>
        <Text color={'blackAlpha.600'} fontSize={'15px'} w={'300px'}>a publication from medium on personal development</Text>
        <Button colorScheme='facebook' borderRadius={'50px'} mt={'10px'}>Follow</Button>
        <Text color={'blackAlpha.600'} mt={'30px'}>Connect with us</Text>
        <Link href='https://www.instagram.com/afdalmaulanaaa/'>
        <Image width="10" height="10" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
        </Link>
        <Text color={'blackAlpha.800'} mt={'30px'}>Editors</Text>
        <Box mt={'20px'} w={'300px'}>
            <Flex>
            <Avatar bg='teal.500' mr={'20px'} color={'black'}/>
            <Text color={'black'}>Muh. Afdal Maulana Said</Text>
            </Flex>
        </Box>
        <Text color={'black'} mt={'40px'} fontSize={'3xl'} fontFamily={'sans-serif'}>Sign up for Daily Tip</Text>
        <Text color={'black'} mr={'50px'} fontSize={'15px'} w={'300px'} fontFamily={'serif'}>A quick morning email to help you start each day on the right foot.</Text>
        <Input w={'300px'} placeholder="Your email" mt={'10px'} borderTop={'none'} borderLeft={'none'} borderRight={'none'} variant={''} color={'black'} borderBottom={'1px'}></Input>
        <Button borderRadius={'50px'} leftIcon={<EmailIcon/>} mt={'20px'} backgroundColor={'white'} variant={'outline'}>Get this newsletter</Button>
        </Box>
        {/* <Box height={'850px'} w={'1200px'} bgGradient='linear(to-r, green.200, pink.500)'> */}
        {/* <Text fontSize={'6xl'}>Happy Reading</Text> */}
        {/* </Box> */}
        </>
    )
}