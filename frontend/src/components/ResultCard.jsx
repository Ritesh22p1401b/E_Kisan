import { Card, CardContent, Typography } from '@mui/material'

const ResultCard = ({ prediction }) => {
  return (
    <Card sx={{ mt: 3, borderLeft: '5px solid green' }}>
      <CardContent>
        <Typography variant="h6">🌾 Recommended Crop:</Typography>
        <Typography variant="h4" color="success.main">
          {prediction.crop}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Based on soil nutrients, pH, temperature, and rainfall.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ResultCard
