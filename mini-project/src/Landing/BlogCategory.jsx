import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";

export default function BlogCategory(){
    return (
        <>
      <Box>
        <Navbar/>
        <Tabs mt={'100px'}>
          <TabList>
            <Tab>Technology</Tab>
            <Tab>Lifestyle</Tab>
            <Tab>Food</Tab>
            <Tab>Sport</Tab>
            <Tab>Novel</Tab>
            <Tab>Travel</Tab>
            <Tab>Fashion</Tab>
            <Tab></Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
