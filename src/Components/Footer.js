import React from 'react'
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
        
              <Container maxWidth="sm">
                 
                
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Footer content goes here!
      </Typography>
    </Box>
    </Container>
    )
}

export default Footer
