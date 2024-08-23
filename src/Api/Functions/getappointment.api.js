

import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";


export const getappointmentAPI=async(formdata)=>{
  try {
    const response=await axiosInstance.post(endpoints.cms.getAppointment,formdata)
    console.log(response.data,"getappointmentapi");
    return response?.data
  } catch (error) {
     console.log(error);
  }
}









