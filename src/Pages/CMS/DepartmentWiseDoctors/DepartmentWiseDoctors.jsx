import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { departmentwisedocAPI } from "../../../Api/Functions/departmentWiseDoc.api";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { myproduct } from "../../../Api/Axios/axiosInstance";

export default function DepartmentWiseDoctors() {
  const { id } = useParams();
  console.log((id, "departmentwiseID"));
  const { data: departmentwiseDoc } = useQuery({
    queryKey: ["departmentwiseDoc"],
    queryFn: () => departmentwisedocAPI(id),
  });
  console.log(departmentwiseDoc, "departmentwiseDoc");
  return (
    <>
      <Box mt={16}>
        <Typography variant="h3" textAlign="center">
          Select Doctor
        </Typography>
        <Grid container mt={2} spacing={3}>
          {Array.isArray(departmentwiseDoc) &&
            departmentwiseDoc.map((departmentwise) => (
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 348 }}
                    image={myproduct(departmentwise?.image)}
                    title="green iguana"
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {departmentwise.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {departmentwise.description.slice(0, 155)}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`/docdetails/${departmentwise?._id}`}>
                      <Button variant="contained" size="medium">
                        Book Appointment
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
