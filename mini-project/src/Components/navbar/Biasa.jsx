import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Biasa(){
    const navigate = useNavigate();
    function toBiasa(){
        navigate('/biasa');
    }
    return(
        <>
            <Box>
        <Button onClick={toBiasa}>BIasa</Button>
            </Box>
        </>
    )
}