import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Paper } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ChilliMap from "./ChilliMap";
import { FixLeafletIcons } from "./leafletFix";
import ReferencesPage from "./pages/ReferencesPage";
import HistoryPage from "./pages/HistoryPage";
import ImageBox from "./components/ImageBox";

FixLeafletIcons();

function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 64px)" }}>
      {/* Left Side - Map */}
      <Box sx={{ width: "65%", height: "100%" }}>
        <ChilliMap onRegionSelect={setSelectedRegion} />
      </Box>

      {/* Right Side - Information */}
      <Paper
        elevation={4}
        sx={{
          width: "35%",
          p: 3,
          borderRadius: 0,
          color: "white",
          overflowY: "auto",
          borderLeft: "2px solid #ddd",
          backgroundColor: "#242424",
        }}
      >
        {!selectedRegion ? (
          <Typography variant="h6" color="white">
            Click a region on the map to learn about its chili history and
            iconic dish.
          </Typography>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{ mb: 2, color: "red", fontWeight: "bold" }}
            >
              {selectedRegion.region}{" "}
              {
                <span
                  className={`fi fi-${selectedRegion.flagCode}`}
                  style={{
                    fontSize: "48px",
                    display: "inline-block",
                    paddingBottom: "10px",
                    borderRadius: "4px",
                  }}
                ></span>
              }
            </Typography>

            <Typography variant="subtitle1">
              <strong>Arrival:</strong> {selectedRegion.arrival}
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              <strong>Came From:</strong> {selectedRegion.cameFrom}
            </Typography>

            {/* Chili Image */}
            <ImageBox
              name={selectedRegion.region + " Chili"}
              image={selectedRegion.chiliImage}
            />

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Cultural Impact:</strong> {selectedRegion.culturalImpact}
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 3, fontWeight: "bold", color: "lightblue" }}
            >
              🍽 Iconic Dish: {selectedRegion.dish}
            </Typography>

            {/* Iconic Dish Image */}
            <ImageBox
              name={selectedRegion.region + " Chili"}
              image={selectedRegion.dishImage}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/NJIT-HSS404-Global-Chili-Trail">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/references" element={<ReferencesPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ px: 2 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          🌶️ Global Chili Pepper Trail
        </Typography>
        <Button color="inherit" onClick={() => navigate("/history")}>
          History
        </Button>
        <Button color="inherit" onClick={() => navigate("/references")}>
          References
        </Button>
      </Toolbar>
    </AppBar>
  );
}
