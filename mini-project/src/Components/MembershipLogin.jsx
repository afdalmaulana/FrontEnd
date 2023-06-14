import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function MembershipLogin(){
    const navigate = useNavigate();
    function memberShip(){
        navigate("/membership")
    }
    return (
        <>
        <Box mt={'10px'}> 
        <Button variant={''} onClick={memberShip}>Membership</Button>
        </Box>
        </>
    )
}