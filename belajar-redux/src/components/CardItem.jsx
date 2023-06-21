import { Box, Button, Flex, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import { addToCart } from "../redux/reducer/CartReducer"; 

export default function CardItem({item}){
    const dispatch = useDispatch();
    return (
        <>
            <Box key={item.id}>
                <GridItem colSpan={1}>
                <Flex sx={{
                    border: '1px solid lightGrey',
                    borderRadius: '6px',
                    padding: '20px',
                    boxShadow: '1px 1px   grey',
                    minHeight: '420px',
                    maxHeight: '420px'
                }}>
                    <VStack sx={{
                        alignItems: 'left'
                    }}>
                        <Box >
                            <Image sx={{
                                height: '200px',
                                width: '250px',
                                marginBottom: '20px'
                            }}
                            objectFit="cover" 
                            src={item.image} />
                        </Box>
                        <Box sx={{
                            minHeight: '100px',
                            minWidth: '100%'
                        }}>
                            <Text>
                                {item.merk}
                            </Text>
                            <Text>
                                Rp. {item.price}
                            </Text>
                        </Box>
                        <Button width="100%" onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>
                    </VStack>
                </Flex>

                </GridItem>
            </Box>
        </>
    )
}