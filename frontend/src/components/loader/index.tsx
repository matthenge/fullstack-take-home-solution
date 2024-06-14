import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        height: "50vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          margin: "85px",
          color: "rgba(44, 179, 74, 1)",
        }}
      />
    </Box>
  );
}
