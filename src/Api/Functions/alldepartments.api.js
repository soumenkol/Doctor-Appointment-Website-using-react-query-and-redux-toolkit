

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const alldepartmentAPI=async()=>{
  try {
    const response=await axiosInstance.get(endpoints.cms.alldepartments)
    console.log(response.data,"alldepartment");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}









