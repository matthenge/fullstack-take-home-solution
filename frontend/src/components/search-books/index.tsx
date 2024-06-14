import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BookInterface from "../../interfaces/BookInterface";

interface SearchComponentProps {
  onAddToList: (books: BookInterface[]) => void;
  booksList: BookInterface[];
}

const SearchComponent = ({ booksList, onAddToList }: SearchComponentProps) => {
  const [selectedBooks, setSelectedBooks] = useState<BookInterface[]>([]);
  const [inputValue, setInputValue] = useState("");
  booksList = booksList.filter(
    (option) =>
      !selectedBooks.find((selected) => selected.title === option.title),
  );
  const handleAddBook = (event: React.MouseEvent, option: BookInterface) => {
    event.stopPropagation();
    setSelectedBooks((prevOptions) => {
      const newOptions = [...prevOptions, option];
      onAddToList(newOptions);
      return newOptions;
    });
  };
  const handleClearInput = () => {
    setInputValue("");
  };
  return (
    <Autocomplete
      disablePortal
      id="search-books"
      options={booksList}
      sx={{ width: { lg: "50%", xs: "100%" } }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      filterSelectedOptions
      getOptionLabel={(option) => option.title}
      getOptionKey={(option) => option.id}
      renderOption={(props, option: BookInterface) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #5ACCCC",
          }}
          component="li"
          key={option.id}
          {...props}
        >
          <Box sx={{ flex: 5 }}>
            <Typography
              aria-label="book title"
              sx={{ color: "#335C6E" }}
              padding={0}
              fontWeight={700}
              lineHeight={1.4}
              fontSize={16}
            >
              {option.title} by:
            </Typography>
            &nbsp; {option.author}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Button
              sx={{ borderRadius: "8px" }}
              variant="contained"
              color="primary"
              onClick={(event) => handleAddBook(event, option)}
              endIcon={<AddRoundedIcon sx={{ color: "#FFFFFF" }} />}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  lineHeight: "1.75",
                }}
              >
                add
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          sx={{ ml: 1, flex: 1, borderRadius: "8px" }}
          color="primary"
          placeholder="Search book by title"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {inputValue && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClearInput}>
                      <ClearRoundedIcon color="primary" sx={{ fontSize: 24 }} />
                    </IconButton>
                  </InputAdornment>
                )}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
            sx: {
              borderRadius: "8px",
              backgroundColor: "#f4f4f4",
              fontSize: "18px",
            },
          }}
        />
      )}
    />
  );
};

export default SearchComponent;
