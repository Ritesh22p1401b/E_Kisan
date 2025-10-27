// import { Card, CardContent, Typography } from '@mui/material'

// const ResultCard = ({ prediction }) => {
//   return (
//     <Card sx={{ mt: 3, borderLeft: '5px solid green' }}>
//       <CardContent>
//         <Typography variant="h6">🌾 Recommended Crop:</Typography>
//         <Typography variant="h4" color="success.main">
//           {prediction.crop}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//           Based on soil nutrients, pH, temperature, and rainfall.
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// export default ResultCard




import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Divider, Tooltip } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const ResultCard = ({ prediction }) => {
  if (!prediction) return null;

  return (
    <Card
      sx={{
        mt: 4,
        p: 2,
        borderRadius: 4,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent>
        {/* Title */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <AgricultureIcon color="success" />
          <Typography variant="h6" fontWeight={600}>
            Recommended Crop
          </Typography>
        </Box>

        {/* Predicted Crop */}
        <Typography
          variant="h4"
          color="success.main"
          fontWeight="bold"
          sx={{
            mb: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          🌾 {prediction.crop}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Information Chips */}
        <Box display="flex" flexWrap="wrap" gap={1.5}>
          <Tooltip title="State where prediction is based" arrow>
            <Chip
              icon={<LocationOnIcon />}
              label={`State: ${prediction.state}`}
              color="success"
              variant="outlined"
            />
          </Tooltip>

          <Tooltip title="Soil type used in prediction" arrow>
            <Chip
              icon={<TerrainIcon />}
              label={`Soil: ${prediction.soil_type}`}
              color="success"
              variant="outlined"
            />
          </Tooltip>

          <Tooltip title="Season selected for prediction" arrow>
            <Chip
              icon={<CalendarMonthIcon />}
              label={`Season: ${prediction.season}`}
              color="success"
              variant="outlined"
            />
          </Tooltip>

          <Tooltip title="Temperature used in prediction" arrow>
            <Chip
              icon={<WbSunnyIcon />}
              label={`Temperature: ${prediction.temperature}°C`}
              color="warning"
              variant="outlined"
            />
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResultCard;




