import { useQuery } from "@tanstack/react-query";
// import React from 'react'
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { alldoctorsAPI } from "../../../Api/Functions/alldoctors.api";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";
import Loader from "../../../Loader/Loader";
import { myproduct } from "../../../Api/Axios/axiosInstance";

export default function Doctors() {
  const { data: allDoc, isLoading } = useQuery({
    queryKey: ["alldoctors"],
    queryFn: () => alldoctorsAPI(),
  });
  console.log(allDoc, "alldoctors");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box mt={12}>
            <Grid container>
              <Grid
                item
                md={12}
                xs={12}
                lg={12}
                sx={{
                  backgroundImage: "url(/img/alldoc.jpg)",
                  backgroundRepeat: "no-repeat",

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 420,
                  opacity: 0.9,
                }}
              >
                <Typography
                  variant="h4"
                  mt={10}
                  sx={{ color: "white" }}
                  textAlign="center"
                >
                  Our DOCTORS
                </Typography>

                <Box
                  mt={2}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                      to="/"
                    >
                      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      <b>HOME</b>
                    </Link>
                    <Link
                      underline="hover"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                      to="/department"
                    >
                      <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      <b>Doctors</b>
                    </Link>
                  </Breadcrumbs>
                </Box>
              </Grid>
            </Grid>

            <Box
              mb={2}
              p={3}
              border={1}
              borderRadius={1}
              borderColor="grey.300"
            >
              <Typography variant="h4" textAlign="center">
                All Doctors
              </Typography>
              <Grid container spacing={3} mt={3}>
                {Array.isArray(allDoc) &&
                  allDoc.map((alldoctors, index) => (
                    <Grid item md={3} key={index}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 345 }}
                          image={myproduct(alldoctors?.image)}
                          title="green iguana"
                          component="img"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {alldoctors.name}
                          </Typography>
                          <Typography
                            sx={{ color: "blue" }}
                            gutterBottom
                            variant="body1"
                            component="div"
                          >
                            <b>
                              {alldoctors.department_details.map(
                                (list) => list.departmentName
                              )}
                            </b>
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {alldoctors.description.slice(0, 170)}
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {/* <Button size="small">Share</Button> */}

                          <Link to={`/docdetails/${alldoctors._id}`}>
                            <Button variant="contained" size="medium">
                              Read More...
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
