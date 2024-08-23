import React, { useEffect, useState } from "react";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import GrainIcon from "@mui/icons-material/Grain";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation, useQuery } from "@tanstack/react-query";
import { docdetailsAPI } from "../../../Api/Functions/docdetails.api";
import { useForm } from "react-hook-form";
import { getappointmentAPI } from "../../../Api/Functions/getappointment.api";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

const getRandomDate = (start, end) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  return new Date(startDate + Math.random() * (endDate - startDate));
};
export default function GetAppointment() {
  const [randomDate, setRandomDate] = useState("");
  const [user, setUser] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const { id } = useParams();
  console.log(id, "id");
  const user_id = localStorage.getItem("userid");
  const userName = localStorage.getItem("name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await docdetailsAPI(id);
        setUser(data);
        console.log(data, "updatedata");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (user) {
      setValue("name", user?.name);
      setValue("departmentName", user?.department_id.departmentName);
      const apptime = `${user?.aperture_time} - ${user?.departure_time}`;

      setValue("apptime", apptime);
    }
  }, [user, setValue]);

  useEffect(() => {
    const date = getRandomDate("2023-01-01", "2024-12-31");
    setRandomDate(date.toLocaleDateString());
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: getappointmentAPI,
    onSuccess: (data) => {
      if (data.status === true) {
        toast.success(data.message);
      } else {
        if (data.status === false) {
          toast.error(data.message);
        }
      }
    },
  });

  const onSubmit = (data) => {
    const formdata = {
      user_id: user_id,
      department_id: user.department_id,
      doctor_id: id,
      phone: data.phone,
      message: data.message,
    };
    mutate(formdata);
  };

  return (
    <>
      <Box mt={12}>
        <Grid container>
          <Grid
            item
            md={12}
            xs={12}
            lg={12}
            sx={{
              backgroundImage: "url(/img/appoint.jpg)",
              backgroundRepeat: "no-repeat",

              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 700,
            }}
          >
            <Typography
              variant="h3"
              mt={10}
              sx={{ color: "white" }}
              textAlign="center"
            >
              Book an Appointment
            </Typography>

            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...register("name")}
                          autoComplete="given-name"
                          name="name"
                          type="text"
                          required
                          fullWidth
                          id="name"
                          // label="Doctor Name"
                          autoFocus
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...register("departmentName")}
                          fullWidth
                          id="departmentName"
                          // label='Department Name'
                          name="departmentName"
                          autoComplete="family-name"
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="date"
                          label={randomDate}
                          autoComplete="date"
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...register("apptime")}
                          required
                          fullWidth
                          name="apptime"
                          // label="Appointment Time"

                          id="time"
                          autoComplete="time"
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="username"
                          required
                          fullWidth
                          id="firstName"
                          // label="User Name"
                          autoFocus
                          defaultValue={userName}
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...register("phone", { required: true })}
                          required
                          fullWidth
                          id="phone"
                          label="Phone Number"
                          name="phone"
                          type="number"
                          autoComplete="phone"
                          error={errors.phone}
                          helperText={
                            errors.phone && "Phone Number is required"
                          }
                          inputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          {...register("message", { required: true })}
                          fullWidth
                          multiline
                          name="message"
                          placeholder="Your Message"
                          required
                          InputProps={{
                            style: {
                              backgroundColor: "white",
                            },
                          }}
                          error={errors.message}
                          helperText={
                            errors.message && "Please Write a Message"
                          }
                        />
                      </Grid>
                    </Grid>

                    {isPending ? (
                      <Button
                        type="submit"
                        fullWidth
                        size="medium"
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        size="medium"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                      >
                        SUBMIT
                      </Button>
                    )}
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
