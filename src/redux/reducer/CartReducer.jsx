import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart : [],
}
export const CartReducer = createSlice ({
    name : 'CartReducer',
    initialState,
    reducers : {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})
export const { addToCart } = CartReducer.actions;
export default CartReducer.reducer; 