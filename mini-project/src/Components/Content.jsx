import { Avatar, Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BiBookBookmark } from "react-icons/bi";

export default function Content({data}){
    return (
        <>
        <Box height={'850px'} w={'1200px'}>
          <Tabs>
        <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Stack>
            {data.map((item) => {
                return (
                    <Card>
                        <CardHeader>
                            <Heading size={'md'}>
                                {" "}
                                {item.title}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{item.desc}</Text>
                        </CardBody>
                    </Card>
                )
            })}
        </Stack>
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