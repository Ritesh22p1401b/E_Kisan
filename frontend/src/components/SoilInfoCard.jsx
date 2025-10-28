import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import TerrainIcon from "@mui/icons-material/Terrain";

const soilData = [
  { type: "Alluvial Soil", ph: "6.5 – 8.0", nitrogen: "280 – 450", phosphorus: "20 – 60", potassium: "250 – 500" },
  { type: "Black Soil", ph: "6.0 – 8.5", nitrogen: "250 – 400", phosphorus: "10 – 30", potassium: "300 – 600" },
  { type: "Red Soil", ph: "5.5 – 7.0", nitrogen: "150 – 300", phosphorus: "10 – 25", potassium: "100 – 300" },
  { type: "Laterite Soil", ph: "4.5 – 6.5", nitrogen: "100 – 200", phosphorus: "5 – 20", potassium: "50 – 150" },
  { type: "Arid (Desert) Soil", ph: "8.0 – 9.0", nitrogen: "50 – 150", phosphorus: "5 – 15", potassium: "100 – 200" },
  { type: "Mountain (Forest) Soil", ph: "5.0 – 6.5", nitrogen: "300 – 500", phosphorus: "20 – 40", potassium: "150 – 300" },
];

const SoilInfoCard = () => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        height: "fit-content",
        maxWidth: 350,
        overflowY: "auto",
        maxHeight: "calc(100vh - 160px)",
      }}
    >
      <CardContent>
        {/* ✅ Single Visible Title with Icon */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <TerrainIcon sx={{ color: "#1b5e20", fontSize: 22, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#1b5e20", textAlign: "center" }}
          >
            Soil Information
          </Typography>
        </Box>

        {/* Soil Data Grid */}
        <Grid container spacing={1}>
          {soilData.map((soil, i) => (
            <Grid item xs={12} key={i}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  p: 0,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  "&:hover": {
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    transform: "scale(1.01)",
                  },
                }}
              >
                <CardContent sx={{ p: 1.2 }}>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#1b5e20", mb: 0.3 }}
                  >
                    {soil.type}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    pH: {soil.ph}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    N: {soil.nitrogen} kg/ha
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    P: {soil.phosphorus} kg/ha
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    K: {soil.potassium} kg/ha
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SoilInfoCard;
