

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const allpersonalcareAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.personalcare)
    console.log(response.data,"allpersonalcareapi");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}









