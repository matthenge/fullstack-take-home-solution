import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Error = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        maxWidth: "100%",
        maxHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
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
        <img src="../../notfound.png" width="200" alt="Error Page" />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "30px",
            color: "#335C6E",
          }}
        >
          Ello can't find the page you are looking for
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#335C6E",
          }}
        >
          It seems you've wandered into Ello's reading jungle, but the page you
          were searching for isn't here.
        </Typography>
        <Button
          sx={{ borderRadius: "50px", padding: "12px 32px" }}
          variant="contained"
          color="primary"
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              color: "#FFFFFF",
            }}
          >
            Return to Home Page
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
};

export default Error;
