import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { GrLike } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";

export default function Content({data}){
    return (
        <>
        <Box height={'800px'} w={'1200px'}>
          <Tabs>
        <TabList>
        <Tab>Home</Tab>
        <Tab>Recent</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Stack>
            {data.map((item) => {
                return (
                  <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={item.images}
                    alt='Caffe Latte'
                  />
                
                  <Stack>
                    <CardBody>
                      <Heading size='lg'>{item.title}</Heading>
                      <Text fontSize={'12px'}>{item.author}</Text>
                      <Text py='2'>{item.desc}</Text>
                      <Button borderRadius={'50px'} variant='' rightIcon={<IoIosArrowDown/>}>Read More</Button>
                    </CardBody>
                
                    <CardFooter>
                      <Button borderRadius={'50px'} variant='' rightIcon={<BsFillBookmarkStarFill/>}></Button>
                      <Button variant='' colorScheme='blue' borderRadius={'50px'} leftIcon={<GrLike/>}> Like
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
                )
            })}
        </Stack>
    </TabPanel>
    <TabPanel>
    <Stack>
      <p>This is recent</p>
            {data.map((item) => {
                return (
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                    >
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={item.images}
                        alt='Caffe Latte'
                      />
                      <Stack>
                          <CardBody>
                            <Heading size='lg'>{item.title}</Heading>

                            <Text py='2'>{item.desc}</Text>
                            <Button variant='' rightIcon={<IoIosArrowDown/>}>Read More</Button>
                          </CardBody>
                            <CardFooter>
                              <Button variant='solid' colorScheme='blue'>
                                Buy Latte
                              </Button>
                            </CardFooter>
                          </Stack>
                        </Card>
                )
            })}
        </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
        </>
    )
}