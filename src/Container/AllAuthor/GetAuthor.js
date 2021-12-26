import React, { useState, useEffect } from "react";
import Pagination from '@material-ui/lab/Pagination';
import ReactPaginate from "react-paginate";
import {
  Typography,
  Container,
  Button,
  Box,
  Grid
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import ListItemComponent from "../../Components/ListItemComponent";
// import {PhotoCamera} from '@mui/material'
const GetAuthor = () => {
  const [author, setAuthor] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

 
  useEffect(() => {
    getAuthor();
  }, [page]);

  const getAuthor = () => {
    fetch(`https://api.quotable.io/authors?limit=10&skip=20 `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0].bio);
        setAuthor(data.results);
      });
  };
  if (author.length === 0) return <div align="center">Loading ....</div>;
  // const usersPerPage =5;
  // const PagesVisited = pageNumber * usersPerPage;
  // const displayAuthors = author.slice(PagesVisited, PagesVisited+usersPerPage).map((authorsInformation) =>{})
  return (
    <>
      <Container maxWidth="md" >
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
              Here is you author list, you can go through different author and
              select you favorite one.
            </Typography>
          </Container>
        </Box>
        {author.map((authorsInformation) => (
          <ListItemComponent Details={authorsInformation} />
          
        ))}
        {/* code ends for card */}
        <Grid align="center">
         <Pagination  count={5}
        color="secondary"
        variant="outlined"
        defaultPage={page}
        hideNextButton={true}
        hidePrevButton={true} 
        onChange={(event,value) => setPage(value)}
        />
      </Grid>
      </Container>
      {/* <DataGrid
        page={page}
        onPageSizeChange={(newPageSize) => setPage(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...author}
      /> */}

    </>
  );
};

export default GetAuthor;
