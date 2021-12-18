import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';


import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  Button,
  Link,
  
} from "@mui/material";
const ListItemComponent = ({ Details }) => {
  return (
    <>
      {/* code starts for card */}
      <Container sx={{ py: 2 }} maxWidth="md" align="center" >
    
        <Grid  item key={Details} md={10} align="center">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {Details.name}
              </Typography>
              <Typography>{Details.bio}</Typography>
              <Typography>
                <Link href={Details.link}>
                  More Information About {Details.name}...
                </Link>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add Fav</Button>
              <Button size="small">Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      
      </Container>
      {/* code ends for card */}
     
    </>
    
  );
};

export default ListItemComponent;
