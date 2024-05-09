import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import notification from "../notifications/notificarion";
import textNotification from "../notifications/textNotification";

export const signInAsync = createAsyncThunk(
  "auth/signInAsync",
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/auth/signin",
        dataUser
      );
      return rejectWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "auth/signUpAsync",
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/auth/signup",
        dataUser
      );
      return rejectWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logout: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.rejected, (state, action) => {
        if (action.payload.response) {
          return notification.error(textNotification.error.loginError);
        }
        const { user, token } = action.payload;
        state.user = user;
        localStorage.setItem("token", token);
        notification.success(textNotification.success.loginSuccess);
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        const error = action.payload;

        if (error && error.response && error.response.data) {
          const errorCode = error.response.data.error;
          console.log(errorCode);
          switch (errorCode) {
            case "userName":
              return notification.error(
                textNotification.info.duplicateUserError
              );

            case "email":
              return notification.error(
                textNotification.info.duplicateEmailError
              );

            default:
              return notification.error(
                textNotification.error.registrationError
              );
          }
        }
        return notification.success(
          textNotification.success.registrationSuccess
        );
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
