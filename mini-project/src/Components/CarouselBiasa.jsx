import Slider from "react-slick";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Image, Text } from "@chakra-ui/react";
import React, { useState } from 'react';
import {
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowDown } from "react-icons/io";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
  };
export default function CarouselBiasa({data}){
    const [slider, setSlider] = useState(null);
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
      return (
        <>
        <Box position={'relative'} bgColor={'yellow'} overflow={"hidden"} height={'600px'}>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
        >
        <BiRightArrowAlt size="40px" />
      </IconButton>

          <Slider {...settings} ref={setSlider}>
          {data.map((item) => {
              return (
                  <Card maxW='md' maxH='lg'>
                    <CardBody>
                      <Image
                          src={item.images}
                          borderRadius='lg' w={'300px'} h={'200px'}
                          />
                      <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>
                          This sofa is perfect for modern tropical spaces, baroque inspired
                          spaces, earthy toned spaces and for people who love a chic design with a
                          sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                          $450
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                          Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                          Add to cart
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                )
            })}
          </Slider>
            </Box>
        </>
      );
    }