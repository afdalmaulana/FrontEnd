import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { BsFillBellFill } from "react-icons/bs";

export default function Notif(){
    return (
        <>
        <IconButton
            icon={<BsFillBellFill />}
            mt={"20px"}
            ml={"10px"}
            variant={"ghost"}
          ></IconButton>
        </>
    )
}