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

export const createPost = createAsyncThunk(
  "publication/createPost",
  async (dataPost) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/posts/create-post",
        dataPost,
        config
      );
      return notification.success(textNotification.success.postCreated);
    } catch (error) {
      if (error) {
        console.log(error);
        return notification.error(textNotification.error.postError);
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
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.publication = action.payload;
    });
  },
});
export const {} = publicationSlice.actions;
export default publicationSlice.reducer;
