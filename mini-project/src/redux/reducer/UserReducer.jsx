import { useToast } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    imgProfile: "",
    isVerified: false,
    role: false,
  },
  login: false,
  username: [],
  email: [],
  phone: [],
};

export const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, isVerified, role } =
        action.payload;
      state.user = {
        id,
        username,
        email,
        phone,
        imgProfile,
        isVerified,
        role,
      };
    },
    userLogin: (state, action) => {
      state.login = true;
    },
    userLogout: (state, action) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    userName: (state, action) => {
      state.username.push(action.payload);
    },
    keepLoginSuccess: (state) => {
      state.login = true;
    },
  },
});

export const signIn = async (values) => {
  return async (dispatch) => {
    const toast = useToast();
    const navigate = useState();
    function toHome() {
      navigate("/");
    }
    try {
      const { name, email, password, phone } = values;
      console.log(values);
      const login = await axios.post(
        `https://minpro-blog.purwadhikabootcamp.com/api/auth/login`,
        {
          username: name,
          email: email,
          phone: phone,
          password: password,
        }
      );
      console.log("ini respon", login);
      const token = login.data.token;
      localStorage.setItem("token", token);
      dispatch(userLogin());
      dispatch(setUser(login.data.isAccountExist));
      dispatch(userName(login.data.isAccountExist.username));
      toast({
        description: "Login Success, Happy Reading",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      toHome();

      // dispatch(userEmail(login.data.isAccountExist.email));
      // dispatch(userPhone(login.data.isAccountExist.phone));
      // document.location.href = "/";
    } catch (error) {
      console.log(error);
      toast({
        description: "Account not verify",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const respon = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setUser(respon.data));
        dispatch(keepLoginSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const {
  userLogin,
  userLogout,
  setUser,
  userName,
  userEmail,
  userPhone,
  keepLoginSuccess,
} = UserReducer.actions;
export default UserReducer.reducer;
