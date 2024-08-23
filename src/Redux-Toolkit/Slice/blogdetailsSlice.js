import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/Axios/axiosInstance";
import { toast } from "react-toastify";
// import { SignalCellularNullTwoTone } from "@mui/icons-material";
// import { blogdetailsAPI } from './blogdetailsSlice';

export const blogdetailsAPI = createAsyncThunk(
  "details/singleblog",
  async (id) => {
    const response = await axiosInstance.get(`/singleblog/${id}`);
    console.log(response.data, "blogdetailsapi");
    return response.data;
  }
);

export const commentfetchAPI = createAsyncThunk(
  "details/getblogcomment",
  async (id) => {
    const response = await axiosInstance.get(`/getblogcomment/${id}`);
    console.log(response.data, "commentFetch");
    return response.data?.data;
  }
);
export const createcommentAPI = createAsyncThunk(
  "deatils/createblogcomment",
  async (formdata) => {
    const response = await axiosInstance.post("/createblogcomment", formdata);
    console.log(response.data, "createcommentapi");
    return response.data?.data;
  }
);

const blogdetailsSlice = createSlice({
  name: "details",
  initialState: {
    isLoading: false,
    error: null,
    detailsData: [],
    comment: [],
    count: 0,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blogdetailsAPI.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(blogdetailsAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailsData = action.payload;
        state.error = null;
        localStorage.setItem("blogId", action.payload.data?._id);
      })
      .addCase(blogdetailsAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.detailsData = [];
        state.error = action.error.message;
      })

      .addCase(commentfetchAPI.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(commentfetchAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comment = action.payload;
        state.error = null;
      })
      .addCase(commentfetchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.comment = [];
        state.error = action.error.message;
      })

      .addCase(createcommentAPI.pending, (state, action) => {
        state.status = "loading...";
      })
      .addCase(createcommentAPI.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.status === 200) {
          toast.success(action.payload.message);
        }
      })
      .addCase(createcommentAPI.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
export default blogdetailsSlice.reducer;
