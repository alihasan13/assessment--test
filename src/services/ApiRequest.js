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
const ApiRequest = () => {
 
 
  const getAuthor = () => {
    fetch(`https://api.quotable.io/authors?limit=10&skip=20 `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0].bio);
        setAuthor(data.results);
      });
  };
  
  return (
    
    <>
    
    </>
  );
};

export default ApiRequest;
