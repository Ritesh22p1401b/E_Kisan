import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img.jpg"; // 👈 your background image

const HomePage = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate("/predict");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          🌱 Welcome to E-Kisan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "600px",
            textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          Empowering farmers with AI-driven crop predictions. Discover the best
          crop for your soil, state, and season with just one click.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontSize: "1.2rem",
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#2e7d32",
              transform: "scale(1.05)",
              transition: "0.3s",
            },
          }}
          onClick={handlePredictClick}
        >
          🔍 Predict Now
        </Button>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          width: "100%",
          py: 2,
          textAlign: "center",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} E-Kisan | Smart Crop Prediction Platform
      </Box>
    </Box>
  );
};

export default HomePage;
