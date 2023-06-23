import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user : {
        id : null,
        username : "",
        email: "",
        phone : "",
        password : ""
    },
    login : false
}

export const UserReducer = createSlice({
    name : "UserReducer",
    initialState,
    reducers : {
        userLogin : (state, action) => {
            state.login = true;
            localStorage.setItem("token", action.payload)
        },
        userLogout : (state, action) => {
            state.login = false;
            localStorage.removeItem("token")
        }
    }
})

export const { userLogin, userLogout } = UserReducer.actions;
export default UserReducer.reducer;