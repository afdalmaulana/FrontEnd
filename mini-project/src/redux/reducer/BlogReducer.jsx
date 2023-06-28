import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blog: [],
  newArticle: [],
};

export const BlogReducer = createSlice({
  name: "BlogReducer",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      state.blog.push(action.payload);
    },
    getArticle: (state, action) => {
      state.newArticle = [...state.newArticle, ...action.payload];
    },
  },
});

export const { addToBookmark } = BlogReducer.actions;
export default BlogReducer.reducer;
