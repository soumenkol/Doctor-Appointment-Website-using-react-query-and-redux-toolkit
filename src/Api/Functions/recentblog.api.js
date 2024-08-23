

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const recentblogAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.recentblog)
    console.log(response.data,"recentblogAPI");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}









