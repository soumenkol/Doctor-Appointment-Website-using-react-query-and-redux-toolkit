import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  useTheme,
  useMediaQuery,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DrawerComp from "./../../../COMPONENTS/DrawerComp";

import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { logOut } from "../../../Redux-Toolkit/Slice/authSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { IoIosArrowDropdown } from "react-icons/io";

function Header() {
  const name = localStorage.getItem("name");
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { status, isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <AppBar sx={{ backgroundColor: "#F5F5F5" }}>
      <Toolbar>
        {isMatch ? (
          <DrawerComp />
        ) : (
          <Grid container alignItems="center">
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", marginLeft: "20px" }}
              >
                <img
                  src="/img/logo.jpg"
                  alt="logo"
                  height="95px"
                  style={{ borderRadius: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
              >
                <Button
                  sx={{ fontSize: "16px" }}
                  color="primary"
                  component={Link}
                  to="/"
                >
                  Home
                </Button>
                <Button
                  sx={{ fontSize: "16px" }}
                  color="primary"
                  component={Link}
                  to="/about"
                >
                  About
                </Button>
                <Button
                  sx={{ fontSize: "16px" }}
                  color="primary"
                  component={Link}
                  to="/department"
                >
                  Department
                </Button>
                <Button
                  sx={{ fontSize: "16px" }}
                  color="primary"
                  component={Link}
                  to="/doc"
                >
                  Doctors
                </Button>
                <Button
                  sx={{ fontSize: "16px" }}
                  color="primary"
                  component={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
                <Button
                  sx={{ fontSize: "15px" }}
                  color="primary"
                  component={Link}
                  to="/contact"
                >
                  Contact Us
                </Button>
              </Tabs>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "revert-layer" }}
            >
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
              >
                {isLogin ? (
                  <>
                    <Button
                      sx={{ fontSize: "16px", minWidth: 150 }}
                      color="primary"
                      component={Link}
                    >
                      <Typography>{name}</Typography>
                      <Select value={age} onChange={handleChange}>
                        <MenuItem component={Link} to="/profile">
                          My Profile
                        </MenuItem>

                        <MenuItem
                          onClick={handleLogout}
                          component={Link}
                          to="/login"
                        >
                          Logout
                        </MenuItem>
                      </Select>
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      component={Link}
                      to="/department"
                      sx={{ minWidth: 150 }}
                    >
                      Book Appointment
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      sx={{ fontSize: "16px" }}
                      color="primary"
                      component={Link}
                      to="/login"
                    >
                      <IoKeySharp fontSize={21} />
                      Login
                    </Button>
                  </>
                )}
                <Button
                  sx={{ fontSize: "16px", marginLeft: "10px" }}
                  color="primary"
                  component={Link}
                >
                  <IoCallOutline fontSize={18} />
                  +891 0776 235
                </Button>
              </Tabs>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
