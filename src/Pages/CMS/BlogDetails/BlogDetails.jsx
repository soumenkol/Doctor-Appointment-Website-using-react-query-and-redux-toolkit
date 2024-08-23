import usePagination from "@mui/material/usePagination/usePagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  blogdetailsAPI,
  commentfetchAPI,
  createcommentAPI,
} from "../../../Redux-Toolkit/Slice/blogdetailsSlice";
import { Box, Breadcrumbs, Grid, Paper, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { myproduct } from "../../../Api/Axios/axiosInstance";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { FaComment } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Button from "@mui/material/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWikipediaW } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { WiTime8 } from "react-icons/wi";
import { useForm } from "react-hook-form";

export default function BlogDetails() {
  const user_id = localStorage.getItem("userid");
  const blog_id = localStorage.getItem("blogId");
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const { detailsData, comment, status } = useSelector(
    (state) => state.blogdetails
  );
  console.log(comment, "blogComment");
  const { id } = useParams();
  console.log(id, "blogID");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogdetailsAPI(id));
    dispatch(commentfetchAPI(id));
  }, [dispatch]);

  const onSubmit = (data) => {
    const formdata = {
      blog_Id: blog_id,
      user_id: user_id,
      comment: data.comment,
    };

    dispatch(createcommentAPI(formdata)).then(() => {
      dispatch(commentfetchAPI(id));
    });
    reset();
  };

  return (
    <>
      <Box mt={12}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: "url(/img/d1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: 250, md: 410 },
              opacity: 1,
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
              Blog Details
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
                  <b>Blog Details</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={8} boxShadow={5} boxSizing={3}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Paper>
              <Box>
                <Card sx={{ maxWidth: 745 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={detailsData?.data?.title || "Blog image"}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                        height: "600px",
                      }}
                      image={myproduct(detailsData?.data?.image)}
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box>
              <Typography variant="h3" textAlign="center" mt={2}>
                {detailsData?.data && detailsData.data?.title}
              </Typography>
              <Typography variant="body1" mt={2} textAlign="center">
                {detailsData?.data && detailsData.data?.description}
              </Typography>
              <Box mt={2} ml={2}>
                <FaComment style={{ color: "blue" }} /> <b>07 Comments</b>
                <FaEye style={{ color: "blue", marginLeft: "15px" }} />{" "}
                <b>36K Views</b>
              </Box>

              <Box mt={2} sx={{ marginLeft: "20px" }}>
               
                <Button
                  variant="contained"
                  sx={{ width: "20%", fontSize: "1rem", textAlign: "center" }}
                >
                  <FaFacebookF />
                  Facebook
                </Button>

                <Button
                  sx={{
                    width: "20%",
                    fontSize: "1rem",
                    textAlign: "center",
                    backgroundColor: "#87CEFA",
                    marginLeft: "15px",
                  }}
                >
                  <FaTwitter />
                  Twitter
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    width: "20%",
                    fontSize: "1rem",
                    textAlign: "center",
                    backgroundColor: "white",
                    marginLeft: "15px",
                  }}
                >
                  <FaWikipediaW color="black" />
                  <Typography color="black" ml={1}>
                    Wikipedia
                  </Typography>
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    width: "20%",
                    fontSize: "1rem",
                    textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  <FcGoogle /> GOOGLE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Grid container spacing={10}>
          <Grid item md={5} xs={12}>
            {Array.isArray(comment) &&
              comment.map((data) => {
                return (
                  <>
                    <Box
                      key={data._id}
                      mb={2}
                      p={2}
                      border={1}
                      borderRadius={1}
                      borderColor="grey.300"
                    >
                      {/* <img src={myproduct(data?.user_id?.image)} alt="" /> */}
                      <Typography variant="h6">{data.user_id.name}</Typography>
                      <Typography>
                        <MdEmail style={{ color: "red" }} />
                        {data.user_id.email}
                      </Typography>

                      <Typography variant="body1">
                        {" "}
                        <FaComment style={{ color: "blue" }} />
                        {data.comment}
                      </Typography>
                      <Typography>
                        <WiTime8 /> {data.createdAt}
                      </Typography>
                    </Box>
                  </>
                );
              })}
          </Grid>
          <Grid item md={5}>
            <Box
              mb={2}
              p={2}
              border={1}
              borderRadius={1}
              borderColor="grey.300"
            >
              <Typography variant="h5" textAlign="center">
                Write Comment
              </Typography>
              <form
                style={{ alignItems: "center", justifyContent: "center" }}
                onClick={handleSubmit(onSubmit)}
              >
                <TextField
                  {...register("comment", { required: true })}
                  label="Comment here"
                  error={errors.comment}
                  fullWidth
                  required
                  name="comment"
                  type="text"
                  helperText={errors.comment && "Please write a Comment"}
                />
                {status === "idle" ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    size="medium"
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    size="medium"
                  >
                    Loading...
                  </Button>
                )}
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
