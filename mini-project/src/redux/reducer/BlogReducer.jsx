import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

export const makeArticle = (data, file) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    console.log(data);
    formData.append("data", JSON.stringify(data));
    formData.append("file", file);
    try {
      const respon = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Article telah dibuat");
      // document.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addToBookmark } = BlogReducer.actions;
export default BlogReducer.reducer;
