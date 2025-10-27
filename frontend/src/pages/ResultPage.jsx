import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ResultCard from "../components/ResultCard";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prediction = location.state?.prediction;

  if (!prediction) {
    return (
      <Box textAlign="center" mt={10}>
        <Typography variant="h6" color="text.secondary">
          No prediction found. Please go back and try again.
        </Typography>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      <ResultCard prediction={prediction} />
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
      >
        Back to Form
      </Button>
    </Box>
  );
};

export default ResultPage;
