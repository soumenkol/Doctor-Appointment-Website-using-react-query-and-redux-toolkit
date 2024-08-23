import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

export default function CardInfo() {
  return (
    <Box marginTop={2} >
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} sm={6} md={4} lg={3}  >
          <Card
            // sx={{ maxWidth: 345, backgroundColor: "#87CEFA", height: "380px" ,gap:"2rem"}}


            sx={{
              maxWidth: 345,
              backgroundColor: "#87CEFA",
              height: "380px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "beige" }}
              >
                Emergency Cases
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt eius ipsa eveniet, natus voluptatem, nobis voluptatibus
                laudantium illum optio accusantium repellendus corporis sunt
                pariatur repudiandae explicabo quae tempore, dolor est?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
                omnis voluptatum? Natus magnam quod accusantium vitae culpa
                earum voluptatem eum nam laborum dolorem perferendis
                necessitatibus rem incidunt delectus, laudantium iure.corporis
                sunt pariatur repudiandae explicabo quae tempore,
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            // sx={{ maxWidth: 345, backgroundColor: "#B0C4DE", height: "380px" }} 

            sx={{
              maxWidth: 345,
              backgroundColor: "#ADD8E6",
              height: "380px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "beige" }}
              >
                Doctors Timetable
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt eius ipsa eveniet, natus voluptatem, nobis voluptatibus
                laudantium illum optio accusantium repellendus corporis sunt
                pariatur repudiandae explicabo quae tempore, dolor est?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. jsfk uiidi
                jnjhi oioqehjkn nnmn cbwjd ijodjwheui.corporis sunt pariatur
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            // sx={{ maxWidth: 345, backgroundColor: "#B0E0E6", height: "380px" }}

            sx={{
              maxWidth: 345,
              backgroundColor: "#B0C4DE",
              height: "380px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}

          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "beige" }}
              >
                Openinig Hours
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Monday-Friday:
              </Typography>
              <Typography variant="h5">8.00 AM-9.00 PM</Typography>

              <br />
              <Typography variant="h5" color="text.secondary">
                Saturday:
              </Typography>
              <Typography variant="h5">9.00 AM-8.00 PM</Typography>
              <br />
              <Typography variant="h5" color="text.secondary">
                Sunday:
              </Typography>
              <Typography variant="h5">CLOSED</Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
