import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
export default function CreateBlog(){
    const navigate = useNavigate();
    
    function toCreateBlog(){
        navigate("/newBlog")
    }
    return (
        <>
        <ButtonGroup>
        <Button backgroundColor={'whiteAlpha.500'} leftIcon={<FaPencilAlt/>} variant={''} onClick={toCreateBlog} p={'10px'}>Start Writing
        </Button>
        </ButtonGroup>
        </>
    )
}