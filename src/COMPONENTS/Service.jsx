import { useQuery } from "@tanstack/react-query";
import React from "react";
import { alldepartmentAPI } from "../Api/Functions/alldepartments.api";
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { myproduct } from "../Api/Axios/axiosInstance";

export default function Service() {
  const { data: alldepartment } = useQuery({
    queryKey: ["service"],
    queryFn: () => alldepartmentAPI(),
  });
  console.log(alldepartment, "alldepartment");
  return (
    <>
      <Box mt={5} border={2} borderRadius={2}>
        <Typography
          mt={2}
          sx={{ color: "blue", textAlign: "center" }}
          variant="h4"
        >
          Our Sevices
        </Typography>
        <Grid container spacing={3} mt={1}>
          {Array.isArray(alldepartment) &&
            alldepartment?.map((list) => (
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 205 }}
                    title="green iguana"
                    component="img"
                    image={myproduct(list?.image)}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {list.departmentName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {list.description.slice(0, 155)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
