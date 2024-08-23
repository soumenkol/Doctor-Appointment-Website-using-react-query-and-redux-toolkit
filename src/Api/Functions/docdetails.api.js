import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";




export const docdetailsAPI=async(id)=>{
  try {
    const url=`${endpoints.cms.docdetails}/${id}`
    const response=await axiosInstance.get(url)
    console.log(response.data,"detailsapi");
    return response?.data?.data
  } catch (error) {
     console.log(error);
  }
}