import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/Axios/axiosInstance";

export const allblogAPI = createAsyncThunk("blog/allblog", async () => {
  const response = await axiosInstance.get("/allblog");
  console.log(response.data, "allblogAPI");
  return response.data?.data;
});

export const searchAPI = createAsyncThunk("blog/blogsearch", async (input) => {
  const response = await axiosInstance.get(`/blogsearch/${input}`);
  console.log(response.data, "searchapi");
  return response.data?.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    error: null,
    allblogData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allblogAPI.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(allblogAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allblogData = action.payload;
        state.error = null;
      })
      .addCase(allblogAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.allblogData = [];
        state.error = action.error.message;
      })
      .addCase(searchAPI.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allblogData = action.payload;
        state.error = null;
      })
      .addCase(searchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.allblogData = [];
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
