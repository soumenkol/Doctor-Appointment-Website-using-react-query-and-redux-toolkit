import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";




export const departmentwisedocAPI=async(id)=>{
  try {
    const url=`${endpoints.cms.departmentWiseDoc}/${id}`
    const response=await axiosInstance.get(url)
    console.log(response.data,"departmentwiseDoc");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}