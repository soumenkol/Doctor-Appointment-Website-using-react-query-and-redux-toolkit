

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const alldoctorsAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.alldoctors)
    console.log(response.data,"alldoctors");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}









