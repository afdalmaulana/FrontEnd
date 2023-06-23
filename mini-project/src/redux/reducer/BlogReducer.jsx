import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    blog : [],
}


export const BlogReducer = createSlice({
    name: 'BlogReducer',
    initialState,
    reducers:{
        addToBookmark : (state, action) => {
            state.blog.push(action.payload)
        }
    }
})

export const { addToBookmark } = BlogReducer.actions;
export default BlogReducer.reducer;