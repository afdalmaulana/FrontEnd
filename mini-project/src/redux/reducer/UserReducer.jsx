import { Alert, AlertIcon, useToast } from "@chakra-ui/react";
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
    userLogin: (state) => {
      state.login = true;
    },
    userLogout: (state, action) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.login = true;
    },
    handleProfile: (state, action) => {
      state.imgProfile.push(action.payload);
    },
  },
});

export const signIn = (values) => {
  return async (dispatch) => {
    try {
      // const { name, email, password, phone } = values;
      console.log(values);
      const login = await axios.post(
        `https://minpro-blog.purwadhikabootcamp.com/api/auth/login`,
        {
          username: values.identifier,
          email: values.identifier,
          phone: values.identifier,
          password: values.password,
        }
      );
      console.log("ini respon", login);
      const token = login.data.token;
      localStorage.setItem("token", token);
      dispatch(userLogin());
      dispatch(setUser(login.data.isAccountExist));
      // document.location.href = "/";
      // alert("Login Success");
      <Alert status="success" variant="solid">
        <AlertIcon />
        Login Success!
      </Alert>;
    } catch (error) {
      console.log("ini error", error);
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

export const changePicture = (photo) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", photo);
    try {
      const respon = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon.data);
      alert("Your profile picture is change");
      document.location.href = "/profile";
    } catch (error) {
      console.log(error);
      alert("Failed, Maximum file is 1 mb");
    }
  };
};

export const {
  userLogin,
  userLoginFailed,
  userLogout,
  setUser,
  userName,
  userEmail,
  userPhone,
  keepLoginSuccess,
  changeUsername,
} = UserReducer.actions;
export default UserReducer.reducer;
