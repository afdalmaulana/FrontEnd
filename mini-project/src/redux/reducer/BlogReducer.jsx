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

export const makeArticle = (data, file, toast) => {
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
      toast({
        title: "Article have been upload",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        document.location.href = "/";
      }, 2500);
    } catch (error) {
      console.log(error);
      toast({
        title: "Image size are to large",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
};

export const likeBlog = (blogId, toast) => {
  return async () => {
    const token = localStorage.getItem("token");
    try {
      const respon = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/like",
        {
          BlogId: blogId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon);
      toast({
        title: "You like this content",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
      // alert("Blog liked");
      // window.location.reload();
    } catch (error) {
      console.log("ini error like", error);
    }
  };
};

export const dislikeBlog = (blogId, toast) => {
  return async () => {
    const token = localStorage.getItem("token");
    console.log("id blog direducer yang mau di delete", blogId);
    try {
      const respon = await axios.delete(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/unlike/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("respon dislike", respon);
      toast({
        title: "Dislike Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
};

export const viewArticle = (blogId, blogTitle) => {
  return async () => {
    const token = localStorage.getItem("token");
    try {
      const respon = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?sortBy=title&size=20&search=${blogTitle}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addToBookmark } = BlogReducer.actions;
export default BlogReducer.reducer;
