import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
export default function CreateBlog(){
    const navigate = useNavigate();
    
    function toNewBlog(){
        navigate("/newBlog")
    }
    return (
        <>
        <ButtonGroup mt={'10px'}>
        <Button backgroundColor={'whiteAlpha.500'} leftIcon={<FaPencilAlt/>} variant={''} onClick={toNewBlog} p={'10px'}>Start Writing
        </Button>
        </ButtonGroup>
        </>
    )
}