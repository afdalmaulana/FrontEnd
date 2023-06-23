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
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import ItemBookmark from "../Components/ItemBookmark";

export default function Profile() {
  const bookmarkBlog = useSelector((state) => state.BlogReducer.blog);
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size={"20px"}
          icon={<EditIcon />}
          {...getEditButtonProps()}
          variant={""}
        />
      </Flex>
    );
  }
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
                Nama Pengguna
              </Text>
              <Tabs w={"650px"}>
                <TabList>
                  <Tab>Bookmark</Tab>
                  <Tab>About</Tab>
                  <Tab>Change Profile Picture</Tab>
                  <Tab>Your Write</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box>
                      <ItemBookmark bookmark={bookmarkBlog}/>
                     
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Editable
                      bgColor={"blackAlpha.200"}
                      h={"200px"}
                      textAlign="center"
                      defaultValue="Tell us about your self"
                      fontSize="50px"
                      isPreviewFocusable={false}
                    >
                      <EditablePreview />
                      {/* Here is the custom input */}
                      <Input as={EditableInput} h={"200px"} />
                      <EditableControls />
                    </Editable>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Flex>
                        <Box>
                          <Avatar as={Button}
                            src="https://bit.ly/broken-link"
                            size={"xl"}
                          />
                        </Box>
                        <Box>
                          <Text ml={"20px"} fontSize={"2xl"}>
                            Nama Pengguna
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Image
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                          alt="Caffe Latte"
                        />

                        <Stack>
                          <CardBody>
                            <Heading size="md">The perfect latte</Heading>

                            <Text py="2">
                              Caffè latte is a coffee beverage of Italian origin
                              made with espresso and steamed milk.
                            </Text>
                          </CardBody>

                          <CardFooter>
                            <Button variant="solid" colorScheme="blue">
                              Buy Latte
                            </Button>
                          </CardFooter>
                        </Stack>
                      </Card>
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
