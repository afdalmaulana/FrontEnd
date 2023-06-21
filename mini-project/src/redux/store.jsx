import {configureStore} from '@reduxjs/toolkit'
import BlogReducer from './reducer/BlogReducer'

export const store = configureStore({
    reducer:{
        BlogReducer: BlogReducer
    },
})