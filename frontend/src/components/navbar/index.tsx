import { Box, Typography } from "@mui/material";
import logo from "../../logo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "18px",
        paddingBottom: "18px",
        gap: 2,
        overflowY: "hidden",
        height: "10vh",
      }}
    >
      <img src={logo} alt="logo" width="62" height="42" />
      <Box
        sx={{
          display: { md: "block" },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          my={2}
          fontStyle="italic"
          fontWeight={300}
          fontSize={24}
          color="black"
          marginBottom="0px"
        >
          for Schools
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
