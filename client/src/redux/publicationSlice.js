import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import notification from "../notifications/notificarion";
import textNotification from "../notifications/textNotification";

const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: token,
  },
};
export const likePost = createAsyncThunk(
  "publication/likePost",
  async (publication) => {
    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/posts/likes",
        { publication },
        config
      );
      return data;
    } catch (error) {
      if (error) {
        console.log(error);
        return notification.error(textNotification.error.postError);
      }
    }
  }
);

export const createPost = createAsyncThunk(
  "publication/createPost",
  async (dataPost) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/posts/create-post",
        dataPost,
        config
      );
      return data;
    } catch (error) {
      if (error) {
        console.log(error);
        return notification.error(textNotification.error.likeError);
      }
    }
  }
);

export const getPosts = createAsyncThunk("publication/getPosts", async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/posts/",
      config
    );
    return data;
  } catch (error) {
    if (error) {
      return notification.error(textNotification.error.postError);
    }
  }
});

const publicationSlice = createSlice({
  name: "publication",
  initialState: {
    publication: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.publication = action.payload;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        state.publication = state.publication.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        );
      });
  },
});
export const {} = publicationSlice.actions;
export default publicationSlice.reducer;
