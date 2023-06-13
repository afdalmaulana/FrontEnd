import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  export const Cards = () => {
    const listName = [
      { name: "abdul", age: 23 },
      { name: "abdi", age: 18 },
    ];
    const [data, setData] = useState(listName);
  
    return (
      <Box>
          {data.map((item) => {
            return (
        <Card maxW="lg" ml={'250px'} textAlign={'center'} mt={'20px'} bgGradient={'linear(to-r, #0CCDA3, blue.500)'}>
              <CardBody>
                <Stack spacing="3">
                  <Heading size="md">Ini card</Heading>
                  <Text>{item.name}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {item.age}
                  </Text>
                </Stack>
              </CardBody>
          <Divider />
        </Card>
            );
          })}
      </Box>
    );
  };