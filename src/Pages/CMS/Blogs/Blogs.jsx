import { useQuery } from "@tanstack/react-query";
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
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import { recentblogAPI } from "../../../Api/Functions/recentblog.api";
import { Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import { allblogAPI, searchAPI } from "../../../Redux-Toolkit/Slice/blogSlice";
import { myproduct } from "../../../Api/Axios/axiosInstance";

export default function Blogs() {
  const { allblogData } = useSelector((state) => state.blog);
  console.log(allblogData, "allblogData");
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allblogAPI());
  }, []);

  const paginationData = Array.isArray(allblogData)
    ? allblogData?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data: recentblogData } = useQuery({
    queryKey: ["recentblog"],
    queryFn: () => recentblogAPI(),
  });
  console.log(recentblogData, "recentblogData");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAPI(input));
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
              backgroundImage: "url(/img/b1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: 250, md: 620 },
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
              All Blogs
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
                  <b>All Blogs</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ flexGrow: 1, margin: "1rem", backgroundColor: "white" }}
        mb={2}
        p={2}
        border={1}
        borderRadius={2}
        borderColor="grey.300"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {Array.isArray(paginationData) &&
              paginationData?.map((data) => (
                <Card
                  key={data._id}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    mb: 2,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={myproduct(data?.image)}
                      alt={data.title}
                      style={{ objectFit: "cover", height: "485px" }}
                    />
                    <CardContent>
                      <Typography variant="h4" component="h4" sx={{ mt: 1 }}>
                        {data.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        gutterBottom
                      >
                        {data.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/details/${data?._id}`}>
                        <Button
                          // component={Link}
                          // to={`/blogdetail/${data._id}`}
                          size="medium"
                          variant="contained"
                        >
                          <Typography style={{ color: "white" }}>
                            Read More...
                          </Typography>
                        </Button>
                      </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              ))}
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
              mb={2}
              p={2}
              border={1}
              borderRadius={1}
              borderColor="grey.300"
            >
              <Pagination
                count={Math.ceil(allblogData?.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <form action="" onSubmit={handleSubmit}>
                <TextField
                  value={input}
                  variant="outlined"
                  placeholder="Search..."
                  onChange={handleInput}
                />{" "}
                <FaSearch style={{ marginTop: "1rem" }} fontSize={20} />
              </form>
            </Box>

            <Box>
              <Typography variant="h4" textAlign="center" mb={2}>
                Recent Blogs
              </Typography>
              {Array.isArray(recentblogData) &&
                recentblogData?.map((recent) => (
                  <Link to={`/details/${recent?._id}`}>
                    <Card sx={{ maxWidth: 345, mb: 2 }} key={recent._id}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={myproduct(recent?.image)}
                          alt={recent.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            <b> {recent?.title}</b>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
