import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardHeader, Flex, HStack, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export default function MenuBar(){
    return (
        <>
        <Box height={'900px'} w={'500px'}  pl={'20px'} zIndex={2} h={'650px'} pos={'sticky'} top={'50'}>
        {/* <Image width="140" height="140" src="https://img.icons8.com/stickers/100/reading.png" alt="reading" mt={'20px'}/> */}
        <Text color={'blackAlpha.600'} mt={'30px'}>Connect with Editor</Text>
            <Flex mt={'20px'}>
            <Avatar bg='teal.500' mr={'20px'} color={'black'} src="./afdal.png" h={'60px'} w={'60px'}/>
            <Text color={'black'}>Muh. Afdal Maulana Said
            <HStack spacing='10px'>
        <Box w='40px' h='40px'>
        <a href='https://www.instagram.com/afdalmaulanaaa/' target="blank">
        <Image width="10" height="10" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
        </a>
        </Box>
        <Box w='40px' h='40px'>
        <a href="https://www.linkedin.com/in/muhafdalmaulanasaid/" target="_blank">
        <Image width="10" height="10" src="https://img.icons8.com/fluency/100/linkedin.png" alt="linkedin"/>
        </a>
        </Box>
        </HStack>
            </Text>
            </Flex>
        <Text color={'blackAlpha.600'} fontSize={'15px'} w={'300px'} mt={'10px'}>a publication from golden book on personal development</Text>
        <Box mt={'20px'} w={'300px'}>
        </Box>
        <Text color={'black'} mt={'40px'} fontSize={'3xl'} fontFamily={'sans-serif'}>Sign up for Daily Tip</Text>
        <Text color={'black'} mr={'50px'} fontSize={'15px'} w={'300px'} fontFamily={'serif'}>A quick morning email to help you start each day on the right foot.</Text>
        <Input w={'300px'} placeholder="Your email" mt={'10px'} borderTop={'none'} borderLeft={'none'} borderRight={'none'} variant={''} color={'black'} borderBottom={'1px'}></Input>
        <Button borderRadius={'50px'} leftIcon={<EmailIcon/>} mt={'20px'} backgroundColor={'white'} variant={'outline'}>Get this newsletter</Button>
        <Box mt={'10px'} w={'300px'}>
        <Text>Discover more of what matters to you</Text>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Programming</Button>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Data Science</Button>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Technology</Button>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Productivity</Button>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Writing</Button>
            <Button borderRadius={'50px'} w={'80px'} h={'30px'} m={'5px'} fontSize={'10px'}>Fashion</Button>
            <Link href="#">
            <Text color={'yellow.500'} mt={'20px'}>See more topics</Text>
            </Link>
        </Box>
        </Box>
        {/* <Box height={'850px'} w={'1200px'} bgGradient='linear(to-r, green.200, pink.500)'> */}
        {/* <Text fontSize={'6xl'}>Happy Reading</Text> */}
        {/* </Box> */}
        </>
    )
}