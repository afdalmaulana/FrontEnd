import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    password: "",
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
    userLogin: (state, action) => {
      state.login = true;
      localStorage.setItem("token", action.payload);
    },
    userLogout: (state, action) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    userName: (state, action) => {
      state.username.push(action.payload);
    },
    userEmail(state, action){
        state.email.push(action.payload)
    },
    userPhone(state, action){
        state.phone.push(action.payload)
    }
  },
});

export const { userLogin, userLogout, userName, userEmail, userPhone } = UserReducer.actions;
export default UserReducer.reducer;
