import { useQuery } from "@tanstack/react-query";
import React from "react";

import { profileAPI } from "./../../../Api/Functions/profile.api";
import { Box, Paper, Typography, Grid } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { myproduct } from "../../../Api/Axios/axiosInstance";
import { Button } from "react-bootstrap";

export default function MyProfile() {
  const userID = localStorage.getItem("userid");
  const { data: profileData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profileAPI(userID),
  });
  console.log(profileData, "profileData");

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const image = localStorage.getItem("image");
  return (
    <>
      <div
        style={{
          marginBottom: "140px",
          justifyContent: "center",
          display: "flex",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "2rem", md: "8rem" },
            width: { xs: "90%", sm: "60%", md: "50%", lg: "30%" },
          }}
        >
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12}>
                {/* <img
                src={image}
                alt=""
                height={"270px"}
                width={"250px"}
                style={{ marginTop: "20px", borderRadius: "50%" }}
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Name: <b>{name}</b>{" "}
                  </Typography>

                  <Typography variant="h6" sx={{ color: "black" }}>
                    Email Id: <b>{email}</b>{" "}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Phone: <b>{phone}</b>{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "8px", color: "black" }}>
                    <FacebookIcon />
                  </Typography>
                  <Typography sx={{ paddingLeft: "8px", color: "black" }}>
                    <TwitterIcon />
                  </Typography>
                  <Typography sx={{ paddingLeft: "8px", color: "black" }}>
                    <InstagramIcon />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>

      <Box mt={-5}>
        <Typography variant="h3" textAlign="center">
          Your Appointment List
        </Typography>
      </Box>

      <Box
        mt={-5}
        mb={2}
        p={2}
        border={1}
        borderRadius={1}
        borderColor="grey.300"
        className="container mx-auto"
        style={{ marginTop: "4.9rem" }}
      >
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Doctor</th>

              <th className="px-4 py-1">Department</th>
              <th className="px-4 py-2">Phone no</th>
              <th className="px-4 py-1">Time</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(profileData) &&
              profileData.map((item) => (
                <tr className="bg-white" key={item.id}>
                  <td>
                    <img
                      src={myproduct(item.doctor_id?.image)}
                      height={"100px"}
                      width={"100px"}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />{" "}
                    <br />
                    <b>{item.doctor_id?.name}</b>
                  </td>

                  <td className="px-4 py-1">
                    <b>{item.department_id?.departmentName}</b>
                  </td>

                  <td className="px-4 py-1">
                    <b>{item?.phone}</b>
                  </td>

                  <td className="px-4 py-2">
                    {item.doctor_id?.aperture_time}-
                    {item.doctor_id?.departure_time}
                  </td>

                  <td className="px-4 py-1">{item.doctor_id?.date}</td>

                  <td className="px-4 py-2">
                    <b>Confirmed</b>
                  </td>

                  {/* <hr /> */}
                </tr>
              ))}
          </tbody>
        </table>

        <div></div>
      </Box>
    </>
  );
}
