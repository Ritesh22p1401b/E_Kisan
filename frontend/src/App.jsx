import React from 'react'
import { Container, Box } from '@mui/material'
import Navbar from './components/Navbar'
import CropForm from './components/CropForm'

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box sx={{ mt: 5 }}>
          <CropForm />
        </Box>
      </Container>
    </>
  )
}

export default App
