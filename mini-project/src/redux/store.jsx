import {configureStore} from '@reduxjs/toolkit'
import BlogReducer from './reducer/BlogReducer'
import UserReducer from './reducer/UserReducer'

export const store = configureStore({
    reducer:{
        BlogReducer: BlogReducer,
        UserReducer: UserReducer
    },
})