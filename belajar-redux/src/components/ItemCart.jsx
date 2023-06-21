import { Box, HStack, Image, Text } from "@chakra-ui/react";

export default function ItemCart({cartItem}) {
  return cartItem?.map((item) => {
    return (
      <Box
        sx={{
          height: "70px",
          padding: "10px",
          marginBottom: "10px",
          borderBottom: "1px solid lightGrey",
        }}
        key={item.id}
      >
        <HStack>
          <Image boxSize="50px" src={item?.image} />
          <Text>{item.merk}</Text>
          <Text>{item.price}</Text>
        </HStack>
      </Box>
    );
  });
}
