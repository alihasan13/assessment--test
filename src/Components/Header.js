import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Box,
  Stack,
  Copyright,
} from "@mui/material";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <PhotoCamera/> */}
          <Typography variant="h3">Author's</Typography>
        </Toolbar>
      </AppBar>
      </>
  );
};

export default Footer;
