import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from '@mui/material/Link';
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { alldepartmentAPI } from "../../../Api/Functions/alldepartments.api";
// import { Card } from 'react-bootstrap';
import { Card, Button } from "@mui/material";
import { myproduct } from "../../../Api/Axios/axiosInstance";
import Loader from "../../../Loader/Loader";

export default function Department() {
  const {
    data: alldepartment,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["department"],
    queryFn: () => alldepartmentAPI(),
  });
  console.log(alldepartment, "alldepartment");

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

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
                  backgroundImage: "url(/img/depart.jpg)",
                  backgroundRepeat: "no-repeat",

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                  opacity: 1,
                }}
              >
                <Typography
                  variant="h3"
                  mt={10}
                  sx={{ color: "white" }}
                  textAlign="center"
                >
                  Department
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
                      <b>DEPARTMENT</b>
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
               <Typography variant="h4" textAlign="center">All Departments</Typography>
              <Grid container spacing={3} mt={1}>
                {Array.isArray(alldepartment) &&
                  alldepartment?.map((department, index) => (
                    <Grid item md={4} key={index}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 250 }}
                          title="green iguana"
                          component="img"
                          image={myproduct(department?.image)}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {department.departmentName}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {department.description.slice(0, 150)}
                          </Typography>
                        </CardContent>
                        <CardActions  
                        
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}

                        >
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Link to={`/departmentwisedoc/${department?._id}`}>
                              <Button variant="contained" size="medium">
                                Book Appoinment
                              </Button>
                            </Link>
                          </Box>
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
