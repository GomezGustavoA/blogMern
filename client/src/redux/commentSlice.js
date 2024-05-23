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
export const likeComment = createAsyncThunk(
  "comment/likeComment",
  async (comment) => {
    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/comments/likes",
        { comment },
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
export const createComment = createAsyncThunk(
  "comment/createComment",
  async (dataComment) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/comments/create-comment",
        dataComment,
        config
      );
      console.log(data);
    } catch (error) {
      if (error) {
        console.log(error);
        return notification.error(textNotification.error.CommentError);
      }
    }
  }
);

export const getComments = createAsyncThunk("comment/getPosts", async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/comments",
      config
    );
    return data;
  } catch (error) {
    if (error) {
      return notification.error(textNotification.error.postError);
    }
  }
});

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
  },
});
export const {} = commentSlice.actions;
export default commentSlice.reducer;
