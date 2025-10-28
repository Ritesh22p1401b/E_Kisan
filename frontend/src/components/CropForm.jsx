
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  MenuItem,
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

const CropForm = () => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <Card
      elevation={4}
      sx={{
        mt: 4,
        maxHeight: "85vh", // slightly smaller than full viewport
        overflowY: "auto", // internal scroll
        p: 1,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Crop Prediction Form
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5, // tighter spacing
          }}
        >
          {/* Moved state, soil, season to top */}
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

          {/* Other weather & soil parameters */}
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

          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ mt: 1.5, alignSelf: "center", width: "60%" }}
          >
            Predict Crop
          </Button>
        </Box>

        {prediction && (
          <Box sx={{ mt: 3 }}>
            <ResultCard prediction={prediction} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CropForm;