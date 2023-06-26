import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
            <Box mt={'100px'} bgColor={'blackAlpha.600'}>
                <Box bgColor={'black'}>
                <Divider/>
                </Box>
                <Flex justifyContent={'space-between'} mt={'20px'} ml={'55px'}>
                {/* <Box pl={'10px'} pt={'20px'} color={'blackAlpha.600'}> */}
                <Box color={'blackAlpha.600'} mt={'20px'}>
                <Text>About</Text>
                <Text mt={'10px'}>FAQs</Text>
                <Text mt={'10px'}><Link to={'/terms'}>Terms of service</Link></Text>
                <Text mt={'10px'}>Donate </Text>
                <Text color={'blackAlpha.600'} mt={'30px'}>Connect with Editor</Text>
                <Flex mt={'10px'}>
                    {/* <Avatar bg='teal.500' mr={'20px'} color={'black'} src="./afdal.png" h={'60px'} w={'60px'}/> */}
            <Text color={'black'}>Muh. Afdal Maulana Said
            <HStack spacing='10px'>
        <Box w='40px' h='40px'>
        <Link to='https://www.instagram.com/afdalmaulanaaa/' target="blank">
        <Image width="10" height="10" src="https://img.icons8.com/fluency/100/instagram-new.png" alt="instagram-new"/>
        </Link>
        </Box>
        <Box w='40px' h='40px'>
        <Link to="https://www.linkedin.com/in/muhafdalmaulanasaid/" target="_blank">
        <Image width="10" height="10" src="https://img.icons8.com/fluency/100/linkedin.png" alt="linkedin"/>
        </Link>
        </Box>
        <Box w='40px' h='40px'>
        <Link to="https://github.com/afdalmaulana?tab=repositories" target="_blank">
        <Image width="10" height="10" src="https://img.icons8.com/sf-black-filled/100/github.png" alt="github"/>
        </Link>
        </Box>

        </HStack>
            </Text>
                    </Flex>
                </Box>
                <Box color={'blackAlpha.600'} mt={'20px'}>
                    <Text>Contact</Text>
                    <Text mt={'10px'}>Phone: 081 2421 4977</Text>
                    
                </Box>
                <Box mt={'20px'} color={'blackAlpha.600'}>
                    <Text>NewsLetter</Text>
                    <Text color={'black'} mt={'10px'} fontSize={'3xl'} fontFamily={'sans-serif'}>Sign up for Daily Tip</Text>
        <Text color={'black'} mr={'50px'} fontSize={'15px'} w={'300px'} fontFamily={'serif'}>A quick morning email to help you start each day on the right foot.</Text>
        <Stack>
        <Input w={'300px'} placeholder="Your email" mt={'10px'} borderTop={'none'} borderLeft={'none'} borderRight={'none'} variant={'flushed'} color={'white'} borderBottom={'1px'}></Input>
        <Button borderRadius={'50px'} leftIcon={<EmailIcon/>} mt={'10px'} colorScheme={'yellow'} w={'300px'} h={'50px'} fontSize={'15px'}>Get this newsletter</Button>
        </Stack>
                </Box>
                <Box bgColor={'blackAlpha.500'} ml={'-50px'}>
                    <Divider orientation='vertical' />
                </Box>
                <Box mt={'20px'} color={'blackAlpha.600'} ml={'-100px'}>
                    <Text>Privacy and Policy</Text>
                    <Text mt={'10px'}>References</Text>
                </Box>
                <Box>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </Box>
                </Flex>
            
                
                <Text textAlign={'center'}>Copyrigth &copy; 2023 Golden Book: Muh. Afdal Maulana Said</Text>
            </Box>
        </>
    )
}