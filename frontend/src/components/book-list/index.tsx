import { Grid, Paper } from "@mui/material";
import React from "react";
import BookCard from "../book-card";
import BookInterface from "../../interfaces/BookInterface";

interface BookListProps {
  onRemoveFromList: (book: BookInterface) => void;
  bookList: BookInterface[];
}

const BookList = ({ bookList, onRemoveFromList }: BookListProps) => {
  return (
    <Grid container spacing={2}>
      {bookList.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <BookCard book={item} handleRemoveBook={onRemoveFromList} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
