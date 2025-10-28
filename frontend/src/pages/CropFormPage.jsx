import { useState } from "react";
import { Box } from "@mui/material";
import CropForm from "../components/CropForm";
import SoilInfoCard from "../components/SoilInfoCard";
import SeasonInfoCard from "../components/SeasonInfoCard";

const CropFormPage = () => {
  const [selectedSoil, setSelectedSoil] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 3,
        flexWrap: "wrap",
        padding: "30px 20px",
        minHeight: "100vh",
        backgroundColor: "#f1f8f4",
      }}
    >
      {/* Left Column — Soil Info */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SoilInfoCard selectedSoil={selectedSoil} />
      </Box>

      {/* Middle Column — Crop Form */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "600px",
          width: { xs: "100%", md: "600px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CropForm
          setSelectedSoil={setSelectedSoil}
          setSelectedSeason={setSelectedSeason}
        />
      </Box>

      {/* Right Column — Season Info */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SeasonInfoCard selectedSeason={selectedSeason} />
      </Box>
    </Box>
  );
};

export default CropFormPage;
