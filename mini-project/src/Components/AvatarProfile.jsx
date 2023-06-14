import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

export default function AvatarProfile(){
    return(
        <Box mt={'10px'}>
        <Menu>
            <Avatar src='https://bit.ly/broken-link' boxSize={9}/>
    <MenuButton as={Button} backgroundColor={'white'} w={'5px'} rightIcon={<ChevronDownIcon />} variant=''></MenuButton>
    <MenuList w={'300px'} marginRight={'10px'}>
        <Center>
        <Text mt={'20px'}>Get a started on Medium</Text>
        </Center>
        <Center>
        <Button colorScheme='whatsapp' w={'200px'} h={'30px'} borderRadius={'50px'} mt={'20px'}>Sign up</Button>
        </Center>
        <Center>
        <Button border={'1px'} borderColor={'black'} w={'200px'} h={'30px'} borderRadius={'50px'} mt={'20px'}>Sign in</Button>
        </Center>
        <MenuItem mt={'30px'}>Become a member</MenuItem>
        <MenuItem>Create a mastodon account</MenuItem>
        <MenuItem>Apply for author verification</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
</Menu>
        </Box>
    )
}