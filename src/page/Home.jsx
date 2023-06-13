import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <>
    <Box mt={'20px'}>
    <Link to={'/filter'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
    Filter
  </Button></Link>
  <Link to={'/timer'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
    Timer
  </Button></Link>
  <Link to={'/todo'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
    To-do
  </Button></Link>
    </Box>
    <Box>
        <Cards/>
    </Box>
    </>
  );
};