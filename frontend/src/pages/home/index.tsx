import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import Layout from "../../layout";
import GET_BOOKS from "../../api/queries/GetBooks";
import BookInterface from "../../interfaces/BookInterface";
import BookList from "../../components/book-list";
import SearchComponent from "../../components/search-books";

const Home = () => {
  const [bookList, setBookList] = useState<BookInterface[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<BookInterface[]>([]);
  const { data } = useQuery(GET_BOOKS, {
    onCompleted: (queryData) => {
      const { books } = queryData;
      setBookList(books);
    },
    onError: (errorData) => {
      console.log(errorData);
    },
  });
  const handleAddBookToList = (books: BookInterface[]) => {
    setSelectedBooks(books);
  };
  const handleRemoveBookFromList = (bookToRemove: BookInterface) => {
    setSelectedBooks((prevOptions) =>
      prevOptions.filter((book) => book.id !== bookToRemove.id),
    );
  };
  console.log(data);
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#FFFFFF",
            border: "none",
            boxShadow: "none",
          }}
        >
          <SearchComponent
            booksList={bookList}
            onAddToList={handleAddBookToList}
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {selectedBooks.length === 0 ? (
          <Box
            width="100%"
            sx={{
              marginTop: "20px",
              backgroundColor: "#F9FAFB",
              paddingBottom: "80px",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <img src="../../ello1.png" width="200" alt="Error Page" />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  color: "#335C6E",
                }}
              >
                The reading list is empty
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#335C6E",
                }}
              >
                It seems you've not added any books to the reading list. Kindly
                search for the books in the search bar and add them to the list.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Box width="100%">
              <Typography
                variant="h5"
                component="h1"
                my={6}
                sx={{ color: "#335C6E" }}
                aria-label="all books"
                fontWeight={700}
                lineHeight={1.4}
                fontSize={"26px"}
              >
                Reading List
              </Typography>
              <BookList
                bookList={selectedBooks}
                onRemoveFromList={handleRemoveBookFromList}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
