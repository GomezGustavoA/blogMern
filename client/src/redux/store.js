import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import publicationReducer from "./publicationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    publication: publicationReducer,
  },
});
