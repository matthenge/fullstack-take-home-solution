import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "column",
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          color: "white",
          padding: {
            xs: "none",
            lg: "24px",
          },
          gap: 3,
          overflowY: "hidden",
        }}
      >
        <Sidebar />
        <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
