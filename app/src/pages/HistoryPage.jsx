// src/pages/HistoryPage.jsx
import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";
import {
  Flame,
  BookOpen,
  Palette,
  Leaf,
  LibraryBig,
  Flower2,
} from "lucide-react";

export default function HistoryPage() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <Box
      style={{
        backgroundColor: "#242424",
        height: "auto",
        minHeight: "calc(100vh - 64px)",
        overflowY: "visible",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 2,
          }}
        >
          🌶️ The History of Chillies
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#cccccc",
            maxWidth: "800px",
            margin: "0 auto 40px auto",
          }}
        >
          From ancient civilizations to modern kitchens, chillies have shaped
          culture, cuisine, and global trade for thousands of years.
        </Typography>

        {/* Content Grid */}
        <Grid container spacing={4}>
          {/* ORIGINS */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #b71c1c",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <BookOpen size={20} /> Origins & Global Spread
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Chillies originated in Central and South America over{" "}
                  <strong>6,000 years ago</strong>. They were cultivated by
                  Indigenous civilizations such as the Aztecs and Mayans.
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  In the 1500s, Portuguese traders carried chillies across
                  Africa, India, and Asia, making them one of the{" "}
                  <strong>fastest-spreading crops</strong> in history.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* COLORS */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #f9a825",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Palette size={20} /> Why Chillies Have Different Colors
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Color depends on ripeness and pigments:
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  • Green → unripe (chlorophyll) <br />
                  • Yellow/Orange → carotenoids <br />
                  • Red → capsanthin & capsorubin <br />• Purple/Black →
                  anthocyanins
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  Each color brings unique flavors, grassy greens, sweet reds,
                  and smoky dark varieties.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* NAMES */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #1565c0",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <LibraryBig size={20} /> Why They Look the Same but Have
                    Different Names
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Chillies often share appearances but differ in name due to:
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  • Regional languages <br />
                  • Fresh vs dried vs smoked forms <br />
                  • Trade routes & colonization <br />• Culinary naming
                  traditions
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* SPICE LEVEL */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #2e7d32",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Flame size={20} /> What Determines Spice Level?
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Heat comes from <strong>capsaicin</strong>. Key factors:
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  • Genetics (variety SHU rating) <br />
                  • Sunlight, soil, and stress <br />
                  • Ripeness, reds tend to be hotter <br />• Capsaicin in the
                  white pith (not seeds)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* DRIED VS FRESH */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #6a1b9a",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Leaf size={20} /> Are Chillies Better Dried?
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Drying chillies intensifies:
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  • Flavor depth <br />
                  • Smokiness <br />
                  • Sweetness <br />• Shelf life
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  Fresh = bright heat. Dried = complex, smoky, rich flavor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* EVOLUTION */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#303030",
                borderLeft: "6px solid #ef6c00",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Flower2 size={20} /> Evolution & Biodiversity
                  </Typography>
                }
              />
              <CardContent>
                <Typography color="#dddddd">
                  Over thousands of years, chillies evolved through trade,
                  selective breeding, and climate adaptation.
                </Typography>
                <Typography color="#dddddd" mt={1}>
                  Today, the world has over{" "}
                  <strong>4,000 known chilli varieties</strong>, each with
                  unique colors, heat levels, and shapes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
