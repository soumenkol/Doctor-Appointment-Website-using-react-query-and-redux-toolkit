import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function DrawerComp() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "skyBlue" } }}
        open={open}
        onClose={handleClose}
      >
        <List>
          <ListItemButton onClick={handleClose}>
            <ListItemIcon>
              <ul className="mobile-navigation">
                <h4>
                  {/* <Link to={"/"}>Home</Link> */}
                  <Link to={"/"} onClick={handleClose}>Home</Link>

                </h4>
                <h4>
                  <Link to={"/about"} onClick={handleClose}>About</Link>
                </h4>
                <h4>
                  <Link to={"/doc"} onClick={handleClose}>Doctors</Link>
                </h4>
                <h4>
                  <Link to={"/services"} onClick={handleClose}>Services</Link>
                </h4>
                <h4>
                  <Link to={"/blogs"} onClick={handleClose}>Blogs</Link>
                </h4>
                <h4>
                  <Link to={"/contact"} onClick={handleClose}>Contact Us</Link>
                </h4>
                <h4>
                  <Link to={"/login"} onClick={handleClose}>Login</Link>
                </h4>
              
              </ul>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
