// import axiosInstance from "../Axios/axiosInstance"
// import { endpoints } from "../Endpoints/endpoints";

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";




export const featuredDocAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.featuredDoc)
    console.log(response.data,"featuredDoctors");
    return response?.data.data
  } catch (error) {
     console.log(error);
  }
}









