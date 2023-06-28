import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { MdNoAccounts } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/reducer/UserReducer";
import axios from "axios";

export default function UserProfile() {
  const { user } = useSelector((state) => state.UserReducer);
  const getAvatar = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/Public/Avatar-6.png"
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toHome() {
    navigate("/");
  }
  function toProfile() {
    navigate("/profile");
  }
  function toSetting() {
    navigate("/accountsetting");
  }
  function toBookmark() {
    navigate("/userbookmark");
  }
  return (
    <>
      <Box mr={"10px"}>
        <Menu>
          <Avatar
            src={`https://minpro-blog.purwadhikabootcamp.com/${user.imgProfile}`}
            boxSize={10}
            size={"2xl"}
          />
          <MenuButton
            as={Button}
            backgroundColor={"white"}
            w={"5px"}
            rightIcon={<ChevronDownIcon />}
            variant=""
          ></MenuButton>
          <MenuList w={"300px"} marginRight={"10px"}>
            <Button
              variant={""}
              w={"200px"}
              leftIcon={<CgProfile />}
              fontSize={"15px"}
              justifyContent={"left"}
              onClick={toProfile}
            >
              Profile
            </Button>
            <Button
              variant={""}
              w={"200px"}
              justifyContent={"left"}
              leftIcon={<AiOutlineSetting />}
              fontSize={"15px"}
              onClick={toSetting}
            >
              Setting
            </Button>
            <Button
              variant={""}
              w={"200px"}
              justifyContent={"left"}
              leftIcon={<BiBookmarks />}
              fontSize={"15px"}
              onClick={toBookmark}
            >
              Library
            </Button>
            <Button
              variant={""}
              w={"200px"}
              justifyContent={"left"}
              leftIcon={<MdNoAccounts />}
              fontSize={"15px"}
              onClick={() => dispatch(userLogout(), toHome())}
            >
              Sign Out
            </Button>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
