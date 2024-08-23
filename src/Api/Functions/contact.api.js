

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const contactAPI=async(formdata)=>{
  try {
    const response=await axiosInstance.post(endpoints.cms.contact,formdata)
    console.log(response.data,"contactapi");
    return response?.data
  } catch (error) {
     console.log(error);
  }
}









