import { Card, CardContent, Typography, Box } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import GrainIcon from "@mui/icons-material/Grain";

const seasonData = {
  Kharif: {
    months: "June – October",
    description:
      "Kharif crops are sown with the onset of the southwest monsoon and harvested in autumn. They thrive in warm, humid, and rainy weather.",
    crops: "Rice, Maize, Cotton, Soybean, Sugarcane, Millet",
    temperature: "25 – 35 °C",
    moisture: "High (70 – 90 %)",
    rainfall: "700 – 1200 mm",
  },
  Rabi: {
    months: "October – March",
    description:
      "Rabi crops are sown after monsoon withdrawal and harvested in spring. They prefer cool, dry climates with moderate irrigation.",
    crops: "Wheat, Barley, Mustard, Gram, Pea",
    temperature: "10 – 25 °C",
    moisture: "Low – Moderate (40 – 60 %)",
    rainfall: "100 – 200 mm",
  },
  Zaid: {
    months: "March – June",
    description:
      "Zaid crops are grown between Rabi and Kharif seasons using residual soil moisture and irrigation. They require warm temperatures and controlled watering.",
    crops: "Watermelon, Cucumber, Muskmelon, Vegetables, Fodder Crops",
    temperature: "25 – 40 °C",
    moisture: "Moderate (50 – 70 %)",
    rainfall: "150 – 300 mm",
  },
};

const SeasonInfoCard = ({ selectedSeason }) => {
  const info = seasonData[selectedSeason] || null;

  return (
    <Card
      sx={{
        borderRadius: "16px",
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        height: "fit-content",
        maxWidth: 350,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#1b5e20",
            mb: 1,
            textAlign: "center",
          }}
        >
          🌤️ Season Information
        </Typography>

        {info ? (
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "#2e7d32",
                textAlign: "center",
              }}
            >
              {selectedSeason} Season ({info.months})
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#444",
                mt: 1,
                lineHeight: 1.6,
                textAlign: "justify",
              }}
            >
              {info.description}
            </Typography>

            {/* Environmental Data Section */}
            <Box
              sx={{
                mt: 2,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#f3f8f3",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: "#1b5e20" }}
              >
                🌡️ Climate Data
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <ThermostatIcon sx={{ fontSize: 18, color: "#d32f2f", mr: 0.5 }} />
                <Typography variant="body2">
                  <b>Temperature:</b> {info.temperature}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <OpacityIcon sx={{ fontSize: 18, color: "#0288d1", mr: 0.5 }} />
                <Typography variant="body2">
                  <b>Moisture:</b> {info.moisture}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <GrainIcon sx={{ fontSize: 18, color: "#8d6e63", mr: 0.5 }} />
                <Typography variant="body2">
                  <b>Rainfall:</b> {info.rainfall}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                color: "#1b5e20",
                fontWeight: 500,
              }}
            >
              <b>Common Crops:</b> {info.crops}
            </Typography>
          </Box>
        ) : (
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              textAlign: "center",
              mt: 2,
            }}
          >
            Select a season in the form to view detailed data.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SeasonInfoCard;
