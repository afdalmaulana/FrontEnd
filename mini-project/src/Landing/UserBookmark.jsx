import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useEditableControls,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import { useSelector } from "react-redux";
import ItemBookmark from "../Components/ItemBookmark";

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
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box>
                      <ItemBookmark bookmark={bookmarkBlog}/>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </GridItem>
          <GridItem>
            <Box>
              <Stack mt={"80px"} ml={"50px"}>
                <Avatar src="https://bit.ly/broken-link" size={"xl"} />
                <Text fontSize={"20px"} fontWeight={"medium"}>
                  Nama Pengguna
                </Text>
                <Text fontSize={"15px"} color={"green"}>
                  <Link to={"/accountsetting"}>Account Setting</Link>
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
