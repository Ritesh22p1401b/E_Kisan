import React, { useEffect } from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img.jpg";
import "../App.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = previous || "");
  }, []);

  const handlePredictClick = () => {
    navigate("/predict");
  };

  return (
    <Box
      className="homepage-container"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to slightly darken for text contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      <Box className="homepage-main" sx={{ zIndex: 1 }}>
        <Box className="homepage-card">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#fff",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            🌱 Welcome to E-Kisan
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: "720px",
              margin: "0 auto",
              color: "#f1f1f1",
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            Empowering farmers with AI-driven crop predictions. Discover the best
            crop for your soil, state, and season — with just one click.
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: "30px",
              textTransform: "none",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
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
      </Box>

      {/* Footer */}
      <Box className="homepage-footer">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              About E-Kisan
            </Typography>
            <Typography variant="body2">
              E-Kisan is an AI-powered platform that helps farmers make smarter
              crop decisions using soil, climate, and regional data.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2">📧 support@e-kisan.com</Typography>
            <Typography variant="body2">📞 +91 98765 43210</Typography>
            <Typography variant="body2">🌍 www.e-kisan.com</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link
              href="/predict"
              color="inherit"
              underline="hover"
              display="block"
            >
              Predict
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              About Us
            </Link>
          </Grid>
        </Grid>

        <Typography sx={{ mt: 2, fontSize: "0.8rem", opacity: 0.9 }}>
          © {new Date().getFullYear()} E-Kisan | Smart Crop Prediction Platform
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
