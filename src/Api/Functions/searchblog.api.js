import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";




export const searchblogAPI=async(query)=>{
  try {
    const url=`${endpoints.cms.searchblog}/${query}`
    const response=await axiosInstance.get(url)
    console.log(response.data,"searchblog");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}