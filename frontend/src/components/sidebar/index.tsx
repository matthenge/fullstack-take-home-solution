import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

const navLinks = [
  {
    name: "Reading List",
    link: "/reading-list",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        boxShadow: "0 8px 20px 1px rgba(0, 0, 0, .05)",
        padding: 2,
        borderRadius: 2,
        display: {
          xs: "none",
          lg: "flex",
        },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: "secondary.light",
                    color: "primary.dark",
                  },
                  backgroundColor: `${pathname === item.link ? "secondary.light" : ""}`,
                  color: `${pathname === item.link ? "primary.dark" : "#2D2D2D"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                <ListAltRoundedIcon />
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Typography fontWeight={600}>{item.name}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
