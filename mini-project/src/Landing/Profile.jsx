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
import UserAvatar from "../Components/PageContent/components/UserAvatar";
import { useSelector } from "react-redux";
import ProfilePage from "./UpdateProfile";

export default function Profile() {
  const { user } = useSelector((state) => state.UserReducer);
  const { newArticle } = useSelector((state) => state.BlogReducer);
  // const [avatarImage, setAvatarImage] = useState('');

  // const handleAvatarChange = (imageUrl) => {
  //   setAvatarImage(imageUrl);
  // };

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
                {user.username}
              </Text>
              <Tabs w={"650px"}>
                <TabList>
                  <Tab>Change Profile Picture</Tab>
                  <Tab>About</Tab>
                  <Tab>Your Write</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <ProfilePage />
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Flex>
                        <Box>
                          {/* <Avatar
                            as={Button}
                            type="file"
                            src="https://bit.ly/broken-link"
                            size={"xl"}
                          /> */}
                          {/* <AvatarUser imageUrl={avatarImage}/>
                          <AvatarUploader onAvatarChange={handleAvatarChange}/> */}
                        </Box>
                        <Box>
                          {/* <Text ml={"20px"} fontSize={"2xl"}>
                            {user.username}
                          </Text>
                          <Input type="file" variant={""}></Input> */}
                          <Editable
                            bgColor={"blackAlpha.200"}
                            w={"500px"}
                            h={"200px"}
                            textAlign="center"
                            defaultValue="Tell us about your self"
                            fontSize="50px"
                            isPreviewFocusable={false}
                            borderRadius={"20px"}
                          >
                            <EditablePreview />
                            {/* Here is the custom input */}
                            <Input as={EditableInput} h={"200px"} />
                            <EditableControls />
                          </Editable>
                        </Box>
                      </Flex>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      Maafkan, aku belum bisa mengambil data blog yang aku tulis
                      dari API
                      {newArticle.map((newArticle) => (
                        <Card
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                        >
                          <Image
                            objectFit="cover"
                            maxW={{ base: "100%", sm: "200px" }}
                            src=""
                            alt="Caffe Latte"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">
                                {newArticle.title === "COBAA"}
                              </Heading>
                              <Text py="2">{newArticle.content}</Text>
                              <Text>{newArticle.country}</Text>
                              <Text>{newArticle.CategoryId}</Text>
                              <Text>{newArticle.keywords}</Text>
                            </CardBody>
                            <CardFooter></CardFooter>
                          </Stack>
                        </Card>
                      ))}
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
