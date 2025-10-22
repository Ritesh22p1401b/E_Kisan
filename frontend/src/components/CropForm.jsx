// import { useState } from 'react'
// import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material'
// import axios from 'axios'
// import ResultCard from './ResultCard'

// const CropForm = () => {
//   const [formData, setFormData] = useState({
//     temperature: '',
//     humidity: '',
//     ph: '',
//     rainfall: '',
//     nitrogen: '',
//     phosphorus: '',
//     potassium: '',
//   })
//   const [prediction, setPrediction] = useState(null)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await axios.post('/api/predict/', formData)
//       setPrediction(res.data)
//     } catch (err) {
//       console.error(err)
//       alert('Error predicting crop')
//     }
//   }

//   return (
//     <Card elevation={4} sx={{ mt: 4 }}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Enter Soil and Weather Information
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//         >
//           <TextField label="Temperature (°C)" name="temperature" value={formData.temperature} onChange={handleChange} required />
//           <TextField label="Humidity (%)" name="humidity" value={formData.humidity} onChange={handleChange} required />
//           <TextField label="pH Value" name="ph" value={formData.ph} onChange={handleChange} required />
//           <TextField label="Rainfall (mm)" name="rainfall" value={formData.rainfall} onChange={handleChange} required />
//           <TextField label="Nitrogen (N)" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
//           <TextField label="Phosphorus (P)" name="phosphorus" value={formData.phosphorus} onChange={handleChange} required />
//           <TextField label="Potassium (K)" name="potassium" value={formData.potassium} onChange={handleChange} required />

//           <Button variant="contained" color="success" type="submit">
//             Predict Crop
//           </Button>
//         </Box>

//         {prediction && <ResultCard prediction={prediction} />}
//       </CardContent>
//     </Card>
//   )
// }

// export default CropForm




//new form


import { useState } from 'react'
import { TextField, Button, Box, Card, CardContent, Typography, MenuItem } from '@mui/material'
import axios from 'axios'
import ResultCard from './ResultCard'

// You can replace these arrays with actual unique values from your CSV
const states = [
  'Gujarat',
  'West Bengal',
  'Telangana',
  'Kerala',
  'Haryana',
  'Karnataka',
  'Madhya Pradesh',
  'Punjab',
  'Bihar',
  'Rajasthan',
  'Maharashtra',
  'Odisha',
  'Andhra Pradesh',
  'Tamil Nadu',
  'Uttar Pradesh'
];

const soilTypes = [
  'Alluvial',
  'Red',
  'Arid',
  'Laterite',
  'Mountain',
  'Black'
];

const seasons = [
  'Zaid',
  'Kharif',
  'Rabi'
];


const CropForm = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    state: '',
    soil_type: '',
    season: '',
  })
  const [prediction, setPrediction] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Convert numeric fields to float
      const payload = {
        ...formData,
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
        nitrogen: parseFloat(formData.nitrogen),
        phosphorus: parseFloat(formData.phosphorus),
        potassium: parseFloat(formData.potassium),
      }

      const res = await axios.post('/api/predict/', payload)
      setPrediction(res.data)
    } catch (err) {
      console.error(err)
      alert('Error predicting crop')
    }
  }

  return (
    <Card elevation={4} sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Enter Soil and Weather Information
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Temperature (°C)"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
          />
          <TextField
            label="Humidity (%)"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            required
          />
          <TextField
            label="pH Value"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
            required
          />
          <TextField
            label="Rainfall (mm)"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            required
          />
          <TextField
            label="Nitrogen (N)"
            name="nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phosphorus (P)"
            name="phosphorus"
            value={formData.phosphorus}
            onChange={handleChange}
            required
          />
          <TextField
            label="Potassium (K)"
            name="potassium"
            value={formData.potassium}
            onChange={handleChange}
            required
          />

          {/* Dropdowns for State, Soil Type, Season */}
          <TextField
            select
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
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
          >
            {seasons.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" color="success" type="submit">
            Predict Crop
          </Button>
        </Box>

        {prediction && <ResultCard prediction={prediction} />}
      </CardContent>
    </Card>
  )
}

export default CropForm
