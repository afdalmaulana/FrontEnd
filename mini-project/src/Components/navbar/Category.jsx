import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Category(){
    const navigate = useNavigate();
    function toCategory(){
        navigate('/category');
    }
    return (
        <>
            <Box>
                <Button onClick={toCategory} variant={''} mt={'10px'}>Category</Button>
            </Box>
        </>
    )
}