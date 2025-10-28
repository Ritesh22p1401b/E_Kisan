import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #2e7d32 0%, #66bb6a 100%)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar>
        {/* Logo + Title */}
        <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
          <AgricultureIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            letterSpacing: 0.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          E-Kisan Crop Predictor
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                transform: "scale(1.05)",
              },
              transition: "0.3s",
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            startIcon={<InfoIcon />}
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                transform: "scale(1.05)",
              },
              transition: "0.3s",
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
