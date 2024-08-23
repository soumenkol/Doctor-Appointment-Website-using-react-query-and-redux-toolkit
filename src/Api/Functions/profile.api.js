import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";




export const profileAPI=async(userID)=>{
  try {
    const url=`${endpoints.cms.profile}/${userID}`
    const response=await axiosInstance.get(url)
    console.log(response.data,"profileapi");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}