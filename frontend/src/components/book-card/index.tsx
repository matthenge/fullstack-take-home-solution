import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import BookInterface from "../../interfaces/BookInterface";

interface BookCardProps {
  handleRemoveBook: (book: BookInterface) => void;
  book: BookInterface;
}

const BookCard = ({ book, handleRemoveBook }: BookCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 8px 20px 1px rgba(0, 0, 0, .05)",
        height: 290,
      }}
    >
      <CardMedia
        sx={{ height: 150 }}
        image={`../../${book.coverPhotoURL}`}
        title="Photo"
      />
      <CardContent sx={{ position: "relative", height: 80 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography fontSize={10} aria-label="book reading level">
                  {book.readingLevel}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#53C2C2",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#53C2C2",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography fontSize={10} aria-label="book author">
                  {book.author}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              aria-label="book title"
              sx={{ color: "#335C6E" }}
              padding={0}
              fontWeight={700}
              lineHeight={1.4}
              fontSize={16}
            >
              {book.title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleRemoveBook(book)}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              color: "#28B8B8",
            }}
          >
            Remove
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
