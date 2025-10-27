import React from "react";
import { Box, Button, Typography, Container, Fade } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1598431264633-d7b61a0c1cfe?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          px: 2,
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container sx={{ zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: 1,
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            🌱 Welcome to E-Kisan
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            Predict the most suitable crop for your region using real-time soil and weather data.
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<AgricultureIcon />}
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              fontSize: "1.1rem",
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#43a047",
                transform: "scale(1.08)",
                boxShadow: "0 0 20px rgba(67,160,71,0.6)",
              },
            }}
            onClick={() => navigate("/")}
          >
            Predict Crop
          </Button>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            py: 2,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} E-Kisan | Empowering Indian Farmers 🌾
        </Box>
      </Box>
    </Fade>
  );
};

export default HomePage;
