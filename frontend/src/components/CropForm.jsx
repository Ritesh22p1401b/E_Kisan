import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Divider,
} from "@mui/material";
import axios from "axios";
import ResultCard from "./ResultCard";

const states = [
  "Gujarat",
  "West Bengal",
  "Telangana",
  "Kerala",
  "Haryana",
  "Karnataka",
  "Madhya Pradesh",
  "Punjab",
  "Bihar",
  "Rajasthan",
  "Maharashtra",
  "Odisha",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Uttar Pradesh",
];

const soilTypes = ["Alluvial", "Red", "Arid", "Laterite", "Mountain", "Black"];
const seasons = ["Zaid", "Kharif", "Rabi"];

const CropForm = ({ setSelectedSoil, setSelectedSeason }) => {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    state: "",
    soil_type: "",
    season: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update local form state
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Notify parent page for soil and season info update
    if (name === "soil_type" && setSelectedSoil) {
      setSelectedSoil(value);
    }
    if (name === "season" && setSelectedSeason) {
      setSelectedSeason(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
        nitrogen: parseFloat(formData.nitrogen),
        phosphorus: parseFloat(formData.phosphorus),
        potassium: parseFloat(formData.potassium),
      };

      const res = await axios.post("http://127.0.0.1:8000/api/predict/", payload);
      setPrediction(res.data);
    } catch (err) {
      console.error(err);
      alert("Error predicting crop");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        background: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: "#1b5e20" }}
      >
        🌾 Crop Prediction Form
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Form Inputs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <TextField
          select
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          size="small"
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Soil Type"
          name="soil_type"
          value={formData.soil_type}
          onChange={handleChange}
          required
          size="small"
        >
          {soilTypes.map((soil) => (
            <MenuItem key={soil} value={soil}>
              {soil}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Season"
          name="season"
          value={formData.season}
          onChange={handleChange}
          required
          size="small"
        >
          {seasons.map((season) => (
            <MenuItem key={season} value={season}>
              {season}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Temperature (°C)"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="Humidity (%)"
          name="humidity"
          value={formData.humidity}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="pH Value"
          name="ph"
          value={formData.ph}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="Rainfall (mm)"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="Nitrogen (N)"
          name="nitrogen"
          value={formData.nitrogen}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="Phosphorus (P)"
          name="phosphorus"
          value={formData.phosphorus}
          onChange={handleChange}
          required
          size="small"
        />
        <TextField
          label="Potassium (K)"
          name="potassium"
          value={formData.potassium}
          onChange={handleChange}
          required
          size="small"
        />
      </Box>

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="success"
          type="submit"
          sx={{
            px: 5,
            py: 1,
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Predict Crop
        </Button>
      </Box>

      {/* Prediction Result */}
      {prediction && (
        <Box sx={{ mt: 4 }}>
          <ResultCard prediction={prediction} />
        </Box>
      )}
    </Box>
  );
};

export default CropForm;
