// import React from 'react'
// import { Container, Box } from '@mui/material'
// import Navbar from './components/Navbar'
// import CropForm from './components/CropForm'

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="sm">
//         <Box sx={{ mt: 5 }}>
//           <CropForm />
//         </Box>
//       </Container>
//     </>
//   )
// }

// export default App





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import CropForm from "./components/CropForm";
import ResultPage from "./pages/ResultPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/predict"
          element={
            <Container maxWidth="sm">
              <Box sx={{ mt: 5 }}>
                <CropForm />
              </Box>
            </Container>
          }
        />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
