import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import Slider from "react-slick";
import axios from "axios";

export default function CarouselNew() {
  const [latest, setLatest] = useState([]);
  async function latestBlog() {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=ASC"
      );
      // console.log(res.data.result);
      setLatest(res.data.result);
    } catch (error) {
      console.log(error);
    }
  }
  latestBlog();

  // new
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextImage = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentContentIndex((currentContentIndex + 1) % latest.length);
      setTransition(false);
    }, 500);
  };
  const prevImage = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentContentIndex(
        currentContentIndex === 0 ? latest.length - 1 : currentContentIndex - 1
      );
      setTransition(false);
    }, 500);
  };

  // const populerBlog = jsonPopulerBlog.populerBlog;
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>

      <Box h={"600px"} id="carousel" mt={"50px"}>
      <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Stack>
          <IconButton
            // mt={"10px"}
            bgColor={"yellow"}
            aria-label="left-arrow"
            variant="outline"
            position="absolute"
            left={side}
            top={'1080px'}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>

          <IconButton
            // mt={"-2200px"}
            bgColor={"yellow"}
            aria-label="right-arrow"
            variant="outline"
            position="absolute"
            right={side}
            top={'1080px'}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
        </Stack>

        <Text
          fontSize={"5xl"}
          ml={"40px"}
          id="#carousel"
          fontFamily={"mono"}
          fontWeight={"bold"}
        >
          Latest Article{" "}
        </Text>
        <Divider />
        <Slider {...settings} ref={setSlider}>
          {latest.map((item) => {
            return (
              <Card maxW="md" maxH="lg">
                <CardBody justifyContent={"center"}>
                  <Center>
                    <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius="lg"
                      w={"400px"}
                      h={"200px"}
                      alignItems={"center"}
                    />
                  </Center>
                  <Stack mt="6" spacing="2">
                    <Text fontSize={'12px'} fontWeight={'bold'}>{item.title}</Text>
                    <Text color="blue.600" fontSize="10px">
                      {item.User.username}
                    </Text>
                    <Text fontSize={"8px"}>{item.content}</Text>
                    <Text color={'yellow.500'}>Category : {item.Category.name}</Text>

                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant=""
                      colorScheme="white"
                      leftIcon={<GrLike />}
                    >
                      Like
                    </Button>
                    <Button
                      variant=""
                      color="black"
                      rightIcon={<BsFillBookmarkStarFill />}
                    ></Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Slider>
      </Box>
    </>
  );
}
