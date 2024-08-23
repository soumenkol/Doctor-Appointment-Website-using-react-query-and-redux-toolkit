

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const allchildcareAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.childcare)
    console.log(response.data,"allchildcareapi");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}









