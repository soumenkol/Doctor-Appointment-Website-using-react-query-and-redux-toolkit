import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      className="footer"
      sx={{ backgroundColor: "#87CEEB", marginTop: "2.1rem" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Chetgiri Colony, Narayanpura, Chhatarpur, Madhya Pradesh 471001
            </Typography>
            <Typography variant="body2">
              Email: Kotharidocinfo@gmail.com
            </Typography>
            <Typography variant="body2">Phone:  +891 0776 235</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" underline="none">
              About Us
            </Link>
            <br />
            <Link href="/products" color="inherit" underline="none">
              Products
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="none">
              Contact Us
            </Link>
            <br />
            <Link href="/faq" color="inherit" underline="none">
              FAQ
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Link href="/shipping" color="inherit" underline="none">
              Emergency
            </Link>
            <br />
            <Link href="/returns" color="inherit" underline="none">
              Returns Policy
            </Link>
            <br />
            <Link href="/privacy" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <br />
            <Link href="/terms" color="inherit" underline="none">
              Terms & Conditions
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box className="social-icons">
              <Link
                href="https://www.facebook.com"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.twitter.com"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.youtube.com" color="inherit">
                <YouTube />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()}{" "}
            <b style={{ fontSize: "1.2rem" }}>By Soumen Koley</b>. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
