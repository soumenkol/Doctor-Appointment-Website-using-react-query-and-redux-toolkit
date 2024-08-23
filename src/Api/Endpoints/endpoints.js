export const endpoints = {
 
  cms: {
    featuredDoc: "/featured",
    alldepartments:"/alldepartment",
    alldoctors:"/alldoctordepartment",
    docdetails:"/doctordetails",
    departmentWiseDoc:"/departmentidwisedoctor",
    getAppointment:"/createappointment",
    contact:"/createcontact",
    profile:"/userdash",
    allblog:"/allblog",
    recentblog:"/recentblog",
    personalcare:"/personalcare",
    childcare:"/childcare"

  },
};
export const sucessNotificationEndPoints = [
  
  endpoints.cms.featuredDoc,
  endpoints.cms.alldepartments,
  endpoints.cms.alldoctors,
  endpoints.cms.docdetails,
  endpoints.cms.departmentWiseDoc,
  endpoints.cms.getAppointment,
  endpoints.cms.contact,
  endpoints.cms.profile,
  endpoints.cms.allblog,
  endpoints.cms.recentblog,
  endpoints.cms.personalcare,
  endpoints.cms.childcare
  // endpoints.cms.searchblog

 
];
