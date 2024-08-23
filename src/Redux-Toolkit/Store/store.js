import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import blogSlice from "../Slice/blogSlice";
import blogdetailsSlice from "../Slice/blogdetailsSlice";
// import authSlice from "../Slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    blog:blogSlice,
    blogdetails:blogdetailsSlice
  },
});
