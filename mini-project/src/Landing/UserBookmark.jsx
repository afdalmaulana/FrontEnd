import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import { useSelector } from "react-redux";
import ItemBookmark from "../Components/PageContent/components/ItemBookmark";
import UserAvatar from "../Components/PageContent/components/UserAvatar";
import LikedArticle from "./LikedArticle";

export default function UserBookmark() {
  const bookmarkBlog = useSelector((state) => state.BlogReducer.blog);
  return (
    <>
      <Box>
        <Navbar />
        <Grid templateColumns="repeat(2,1fr)" gap={2} mt={"60px"}>
          <GridItem
            w={"1000px"}
            pl={"150px"}
            pt={"80px"}
            borderRight={"1px"}
            h={"750px"}
            borderColor={"blackAlpha.100"}
          >
            <Stack>
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                Your Library
              </Text>
              <Tabs w={"650px"}>
                <TabList>
                  <Tab>Bookmark</Tab>
                  <Tab>Liked Article</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box>
                      <ItemBookmark bookmark={bookmarkBlog} />
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <LikedArticle />
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </GridItem>
          <GridItem>
            <Box>
              <Stack mt={"80px"} ml={"50px"}>
                <UserAvatar />
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
