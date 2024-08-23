import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { docdetailsAPI } from "../../../Api/Functions/docdetails.api";
import { Box, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { myproduct } from "../../../Api/Axios/axiosInstance";

export default function DocDetails() {
  const { id } = useParams();
  console.log(id, "docID");

  const { data: docdetails } = useQuery({
    queryKey: ["docdetails"],
    queryFn: () => docdetailsAPI(id),
  });
  console.log(docdetails, "docdetails");

  return (
    <>
      <Paper>
        <Box mt={14}>
          <Grid container>
            <Grid item md={4}>
              <Card sx={{ maxWidth: 405 }}>
                <CardMedia
                  sx={{ height: 448 }}
                  image={myproduct(docdetails?.image)}
                  title="green iguana"
                  component="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {docdetails?.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={8}>
              <Typography variant="h4"></Typography>
              <Card sx={{ maxWidth: 900, height: "33rem" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Doctor Details Page
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {docdetails && docdetails?.description}
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    Department:{" "}
                    <b>
                      {" "}
                      {docdetails &&
                        docdetails?.department_id &&
                        docdetails?.department_id.departmentName}
                    </b>
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    Aperture Time:{" "}
                    <b>{docdetails && docdetails.aperture_time} </b>
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    Departure:{" "}
                    <b> {docdetails && docdetails.departure_time} </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/appoint/${docdetails?._id}`}>
                    <Button variant="contained" size="medium">
                      Book Appointment
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
