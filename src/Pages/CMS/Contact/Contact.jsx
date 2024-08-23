import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Breadcrumbs,
} from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { contactAPI } from "../../../Api/Functions/contact.api";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: contactAPI,
    onSuccess: (data) => {
      if (data.status === true) {
        toast.success(data.message);
      } else {
        if (data.status === 400) {
          toast.error(data.message);
        }
      }
    },
  });

  const onSubmit = (data) => {
    const formdata = {
      name: data.name,
      email: data.email,
      topic: data.topic,
      phone: data.phone,
      msg: data.msg,
    };
    mutate(formdata);
  };

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
              backgroundImage: "url(/img/contact.jpg)",
              backgroundRepeat: "no-repeat",

              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 420,
              opacity: 1,
            }}
          >
            <Typography
              variant="h4"
              mt={10}
              sx={{ color: "white" }}
              textAlign="center"
            >
              Contact Us
            </Typography>

            <Box
              mt={2}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
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
                  <b>Contact Us</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={8} justifyContent="center" display="flex">
        <Container component="main" maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box mt={2}>
                <FaLocationDot style={{ fontSize: "2rem", color: "#87CEFA" }} />
                <Typography variant="">
                  <b style={{ fontSize: "1.6rem" }}>Address</b>
                </Typography>
                <Typography variant="subtitle1">
                  <b>
                    {" "}
                    Chetgiri Colony, Narayanpura, Chhatarpur, Madhya Pradesh
                    471001
                  </b>
                </Typography>

                <FiPhoneCall style={{ fontSize: "2rem", color: "#87CEFA" }} />
                <Typography variant="">
                  <b style={{ fontSize: "1.6rem" }}>Call Us</b>
                </Typography>
                <Typography>
                  <b>+891 0776 235</b>
                </Typography>

                <MdEmail style={{ fontSize: "2rem", color: "#87CEFA" }} />
                <Typography variant="">
                  <b style={{ fontSize: "1.6rem" }}>Email Us</b>
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kotharidocinfo@gmail.com</b>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h5" textAlign="center">
                    Get In Touch
                  </Typography>
                  <Box
                    sx={{ mt: 1 }}
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <TextField
                      {...register("name", { required: true })}
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      error={errors.name}
                      helperText={errors.name && "Name is requied"}
                      autoFocus
                    />
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Invalid email format",
                        },
                      })}
                      label="Your Email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      error={errors.email}
                      helperText={errors.email && errors.email.message}
                    />

                    <TextField
                      {...register("topic", { required: true })}
                      required
                      fullWidth
                      id="topic"
                      label="Topic"
                      name="topic"
                      type="text"
                      autoComplete="topic"
                      error={errors.topic}
                      helperText={errors.phone && "Topic is required"}
                    />

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
                      helperText={errors.phone && "Phone Number is required"}
                    />

                    <TextField
                      {...register("msg", { required: true })}
                      fullWidth
                      multiline
                      name="msg"
                      placeholder="Your Message"
                      required
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                        },
                      }}
                      error={errors.msg}
                      helperText={errors.msg && "Please Write a Message"}
                    />

                    {isPending ? (
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: "10%" }}
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        Send Message
                      </Button>
                    )}
                  </Box>
                </Container>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box mt={4}>
        <Grid container>
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58963.71755546857!2d88.28928001465724!3d22.532967429597203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765321b3ac7b%3A0x1202c35f978da22f!2sKothari%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1718464663554!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
