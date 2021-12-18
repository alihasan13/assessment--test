import React, { useState } from "react";
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
// import {PhotoCamera} from '@mui/material'
const ListItemComponent = (author, favAuthor) => {
  const [Author, setAuthor] = useState([]);

  const getAuthor = () => {
    fetch("https://api.quotable.io/authors?limit=5&skip=20 ")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0].bio);
        setAuthor(data.results);
      });
  };
  return (
    <>
      
      <main>
        <div>
          <Container maxWidth="md">
            <button onClick={getAuthor}>get author</button>
            {Author.name}
            {Author.map(() => (
              <Card>
                <h1> {Author.name}</h1>
              </Card>
            ))}
            {/* code starts for card */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 4,
                pb: 6,
              }}
            >
              <Container maxWidth="md">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Author's List
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Here is you author list, you can go through different author and select you favorite one.
                </Typography>
               
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={2}>
                {Author.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Name Here
                        </Typography>
                        <Typography>
                       {/* { card.results.bio} */}
                          BIO: This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                        <Typography>
                          Link: abc
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Add Fav</Button>
                        <Button size="small">Remove</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>

            {/* code ends for card */}
          </Container>
        </div>
      </main>
      
    </>
  );
};

export default ListItemComponent;
