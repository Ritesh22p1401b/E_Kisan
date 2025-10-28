import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img.jpg"; // your background image path
import "../App.css"; // ensure this import (or App.css is imported elsewhere in app)

const HomePage = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate("/predict");
  };

  return (
    /* NOTE: className must match the CSS .scrollable-root */
    <Box className="scrollable-root">
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
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
          overflowX: "hidden", // keep horizontal hidden inside wrapper
        }}
      >
        {/* Overlay for contrast */}
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
            py: 8,
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
            py: 4,
            px: 2,
            textAlign: "center",
            bgcolor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2,
            fontSize: "0.9rem",
            position: "relative",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ color: "#fff" }}
          >
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
              <Link href="/predict" color="inherit" underline="hover" display="block">
                Predict
              </Link>
              <Link href="/about" color="inherit" underline="hover" display="block">
                About Us
              </Link>
            </Grid>
          </Grid>

          <Typography sx={{ mt: 3, fontSize: "0.8rem", opacity: 0.8 }}>
            © {new Date().getFullYear()} E-Kisan | Smart Crop Prediction Platform
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
