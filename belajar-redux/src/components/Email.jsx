import { IconButton } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";

export default function Email(){
    return (
        <>
        <IconButton
            icon={<HiMail />}
            mt={"20px"}
            ml={"10px"}
            variant={"ghost"}
          ></IconButton>
        </>
    )
}