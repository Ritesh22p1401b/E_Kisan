import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🌱 E-Kisan Crop Prediction
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
