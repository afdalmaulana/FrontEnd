import { Box, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Box mt={"100px"}>
        <Image
          src="https://ustatic.priceza.co.id/img/upload/tokopedia-guide-banner.jpg"
          ml={"180px"}
          borderRadius={"20px"}
          mt={"20px"}
          h={"300px"}
          w={'1100px'}
        ></Image>
      </Box>
    </>
  );
}
