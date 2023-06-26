import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
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
import Navbar from "../Components/navbar/Navbar";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAvatar from "../Components/PageContent/components/UserAvatar";

export default function AccountSetting() {
  const { username } = useSelector((state) => state.UserReducer);
  const { email } = useSelector((state) => state.UserReducer);
  const { phone } = useSelector((state) => state.UserReducer);
  const login = localStorage.getItem("token");
  const navigate = useNavigate();
  function toChangePassword() {
    navigate("/changePassword");
  }
  function toUpdateProfile() {
    navigate("/updateProfile");
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
                Settings
              </Text>
              <Tabs w={"650px"}>
                <TabList>
                  <Tab>Account</Tab>
                  <Tab>Membership</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box>
                      <Flex justifyContent={"space-between"}>
                        <Text>Username</Text>
                        <Text>{username}</Text>
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Email address</Text>
                        {!login ? "" : <Text>{email}</Text>}
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Phone number</Text>
                        <Text>{phone}</Text>
                      </Flex>
                    </Box>
                    <Box bgColor={"blackAlpha.800"}>
                      <Divider mt={"20px"} />
                    </Box>
                    <Box mt={"20px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Password</Text>
                        <Button
                          rightIcon={<BsArrowUpRight />}
                          variant={""}
                          onClick={toChangePassword}
                        >
                          Change
                        </Button>
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Update Profile</Text>
                        <Button
                          rightIcon={<BsArrowUpRight />}
                          variant={""}
                          onClick={toUpdateProfile}
                        >
                          Change
                        </Button>
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Change username</Text>
                        <Button
                          rightIcon={<BsArrowUpRight />}
                          variant={""}
                          onClick={""}
                        >
                          Change
                        </Button>
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Change email</Text>
                        <Button
                          rightIcon={<BsArrowUpRight />}
                          variant={""}
                          onClick={""}
                        >
                          Change
                        </Button>
                      </Flex>
                    </Box>
                    <Box mt={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Text>Change Phone</Text>
                        <Button
                          rightIcon={<BsArrowUpRight />}
                          variant={""}
                          onClick={""}
                        >
                          Change
                        </Button>
                      </Flex>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Text>To get membership</Text>
                    <Button
                      mt={"20px"}
                      colorScheme="yellow"
                      borderRadius={"50px"}
                    >
                      Click Here
                    </Button>
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
                  <Link to={"/profile"}>Edit Profile</Link>
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
