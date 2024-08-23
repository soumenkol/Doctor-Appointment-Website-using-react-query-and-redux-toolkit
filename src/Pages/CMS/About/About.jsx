import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Breadcrumbs,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allpersonalcareAPI } from "../../../Api/Functions/allpersonalcare.api";
import { Card } from "react-bootstrap";
import { myproduct } from "../../../Api/Axios/axiosInstance";
import { allchildcareAPI } from "../../../Api/Functions/allchildcare.api";

export default function About() {
  const { data: personalCare } = useQuery({
    queryKey: ["personalCare"],
    queryFn: () => allpersonalcareAPI(),
  });
  console.log(personalCare, "personalCare");

  const { data: childCare } = useQuery({
    queryKey: ["childCare"],
    queryFn: () => allchildcareAPI(),
  });
  console.log(childCare, "childlCare");
  return (
    <>
      <Box mt={12}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              backgroundImage: "url(/img/a1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: 210, md: 620 },

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textAlign: "center",
                mt: { xs: 4, md: 10 },
              }}
            >
              About Us
            </Typography>

            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center", color: "white" }}
                  to="/"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  <b>HOME</b>
                </Link>
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center", color: "white" }}
                  to="/department"
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  <b>About</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid container>
          {Array.isArray(personalCare) &&
            personalCare.map((list) => (
              <Box textAlign="center">
                <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
                  {list.departmentName}
                </Typography>
                <Grid container spacing={2}>
                  {list.doctor_id.map((doc) => (
                    <Grid item md={4} xs={12}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="300"
                          image={myproduct(doc.image)}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {doc.name}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {doc.description.slice(0, 155)}
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Link to={`/docdetails/${doc?._id}`}>
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
            ))}

          {Array.isArray(childCare) &&
            childCare.map((list) => (
              <Box textAlign="center" mt={4}>
                <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
                  {list.departmentName}
                </Typography>
                <Grid container spacing={2} mt={3}>
                  {list.doctor_id.map((doc) => (
                    <Grid item md={4} xs={12}>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="300"
                          image={myproduct(doc.image)}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {doc.name}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {doc.description.slice(0, 155)}
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Link to={`/docdetails/${doc?._id}`}>
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
            ))}
        </Grid>
      </Box>
    </>
  );
}
