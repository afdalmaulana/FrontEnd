import React, { useRef, useState } from 'react';
import { Box, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Timer(){
    const countRef = useRef(null);
    const [timer, setTimer] = useState({
        hour:0,
        minute: 0,
        second: 0
    });
    console.log(timer);
    
    // untuk mengubah value pada variable const maka digunakan anonymous function
    function onStart(){
        countRef.current = setInterval(() => {
                setTimer((timer) => {
                    const newSecond = timer.second + 1;
                    const newMinute = timer.minute + Math.floor(newSecond/60)
                    const newHour = timer.hour + Math.floor(newMinute/60);
                    return {
                        hour: newHour,
                        minute: newMinute % 60,
                        second: newSecond % 60
                    }
                })
        }, 10);
    }
    function formatTime(timer){
        const getSecond = `0${timer.second}`.slice(-2);
        const getMinutes = `0${timer.minute}`.slice(-2);
        const getHours = `0${timer.hour}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSecond}`;
    }
    function onStop(){
        clearInterval(countRef.current);
    }
    function onReset(){
        setTimer({hour:0,minute:0,second:0});
    }

    return (
        <> 
        <Box mt={'20px'}>
        <Link to={'/filter'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Filter
        </Button></Link>
        <Link to={'/'}><Button colorScheme='teal' variant='solid' ml={'20px'}>
        Home
        </Button></Link>
        </Box>
        <Box w={'400px'} h={'300px'} bgGradient={'linear(to-r, #0CCDA3, blue.500)'} m={'200px auto'} borderRadius={'10px'}> 
        <Stack>
          <Flex justify={'center'}>
            <Text fontSize={'4xl'} color={'whiteAlpha.800'} fontFamily={'cursive'} pt={'10px'}>Stopwatch</Text>
          </Flex>
          <Flex justify={'center'}>
            <Text fontSize={'6xl'} fontFamily={'monospace'} color={'whiteAlpha.800'}>
                {/* {"00"}:{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60} */}
                {formatTime(timer)}
                </Text>
          </Flex>
          <Flex pt={'40px'} justify={'center'}>
            <HStack spacing={'24px'}>
          <Button colorScheme='whatsapp' variant='solid' size={'lg'} onClick={onStart}>Start</Button>
          <Button colorScheme='red' variant={'solid'} size={'lg'} onClick={onStop}>Stop</Button>
          <Button colorScheme='yellow' variant={'solid'} size={'lg'} onClick={onReset}>Reset</Button>
          {/* kalau tidak buat function maka kita buatkan anonymous di button stop dengan syntax onClick={() => setTimer(0)}  */}
            </HStack>
          </Flex>
        </Stack>
      </Box>
        </>
    )
}