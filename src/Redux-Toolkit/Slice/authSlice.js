import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/Axios/axiosInstance";
import { toast } from "react-toastify";

export const registrationAPI = createAsyncThunk(
  "auth/register",
  async (formdata) => {
    const response = await axiosInstance.post("/register", formdata);
    console.log(response.data);
    return response.data;
  }
);
export const loginAPI = createAsyncThunk("auth/login", async (formdata) => {
  const response = await axiosInstance.post("/login", formdata);
  console.log(response.data);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    redirect: null,
    isLogin: false,
    redirectLogin:null
  },
  reducers: {
    redirection(state, action) {
      state.redirect = action.payload;
    },
    logOut(state, action) {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
    redirectionRegistration(state,action){
         state.redirectLogin=action.payload
    },


    checkToken: (state, { payload }) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isLogin = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationAPI.pending, (state, action) => {
        state.status = "loading...";
      })
      .addCase(registrationAPI.fulfilled, (state, action) => {
        state.status = "idle";
        
        if (action.payload.success === true) {
          toast.success(action.payload.message);
          state.redirectLogin="/login"
        } else {
          if (action.payload.status === 400) {
            toast.error(action.payload.message);
          }
        }
      })
      .addCase(registrationAPI.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(loginAPI.pending, (state, action) => {
        state.status = "loading...";
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload?.status === 200) {
          state.redirect = "/";
          state.isLogin = true;
          localStorage.setItem("token", action.payload?.token);
          localStorage.setItem("name", action.payload?.data?.name);
          localStorage.setItem("userid", action.payload?.data?._id);
          localStorage.setItem("image", action.payload?.data?.image);
          localStorage.setItem("email", action.payload?.data?.email);
          localStorage.setItem("phone", action.payload?.data?.phone);
          toast.success(action.payload?.message);
        } else {
          if (action.payload?.status === 400) {
            toast.error(action.payload?.message);
            toast.error("Wrong Email!");
          }
        }
      })
      .addCase(loginAPI.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
export const { redirection, logOut, checkToken,redirectionRegistration } = authSlice.actions;
export default authSlice.reducer;
