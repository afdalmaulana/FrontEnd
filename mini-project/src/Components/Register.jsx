import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const navigate = useNavigate();
    function toSignUp(){
        navigate('/pageregister')
    }
    
    return (
        <>
        <Box mt={'10px'} mr={'10px'}> 
            <Button colorScheme={'yellow'} borderRadius={'50px'} onClick={toSignUp}>Sign Up</Button>
        </Box>
        </>
    )
}