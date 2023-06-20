import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './reducer/CartReducer'

export const Store = configureStore ({
    reducer:{
        CartReducer:CartReducer
    },
})