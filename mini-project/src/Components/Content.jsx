import { Avatar, Box, Button, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export default function Content(){
    return (
        <>
        <Box height={'850px'} w={'1200px'}>
        <Text fontSize={'6xl'}>Happy Reading</Text>
        <Tabs variant='enclosed' borderColor={'black'}>
        <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>This is Home</p>
    </TabPanel>
    <TabPanel>
      <p>This is About</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
        </>
    )
}