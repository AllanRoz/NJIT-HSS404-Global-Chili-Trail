// ReferencesPage.jsx
import React, { useEffect } from "react";
import { Box, Typography, Paper, Divider, Link } from "@mui/material";

export default function ReferencesPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        p: 4,
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        backgroundColor: "#242424",
      }}
    >
      <Paper sx={{ p: 4, maxWidth: "900px", mx: "auto" }} elevation={3}>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
          📚 Works Cited (MLA Format)
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Below are MLA-formatted citations for the sources used in the Global
          Chilli Trail project.
        </Typography>

        {/* 1. History Cooperative */}
        <Typography variant="h5">1. Origin of Chili Peppers</Typography>
        <Link
          href="https://historycooperative.org/origin-of-chili/"
          target="_blank"
        >
          History Cooperative – Origin of Chili
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “Origin of Chili.” <i>History Cooperative</i>,
          historycooperative.org/origin-of-chili/. Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 2. Legal Nomads */}
        <Typography variant="h5">2. Spread of Chilies Globally</Typography>
        <Link
          href="https://www.legalnomads.com/history-chili-peppers/"
          target="_blank"
        >
          Legal Nomads – History of Chili Peppers
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Lee, Jodi Ettenberg. “A Brief History of Chili Peppers.”{" "}
          <i>Legal Nomads</i>, www.legalnomads.com/history-chili-peppers/.
          Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 3. SpiceMad */}
        <Typography variant="h5">3. Chili Spread via Spice Routes</Typography>
        <Link
          href="http://www.spicemad.com/p/the-history-of-chilli-peppers.html"
          target="_blank"
        >
          SpiceMad – The History of Chilli Peppers
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “The History of Chilli Peppers.” <i>SpiceMad</i>,
          spicemad.com/p/the-history-of-chilli-peppers.html. Accessed 16 Nov.
          2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 4. Bangkok Post */}
        <Typography variant="h5">
          4. Portuguese Distribution of Chilies
        </Typography>
        <Link
          href="https://www.bangkokpost.com/life/social-and-lifestyle/1672304/chillis-complicated-history"
          target="_blank"
        >
          Bangkok Post – Chili’s Complicated History
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “Chilli’s Complicated History.” <i>Bangkok Post</i>,
          www.bangkokpost.com/life/social-and-lifestyle/1672304/chillis-complicated-history.
          Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5">5. Smithsonian – Chili Origins</Typography>
        <Link href="https://www.smithsonianmag.com/" target="_blank">
          Smithsonian Magazine – History of Chilies
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “The History of Chili Peppers.” <i>Smithsonian Magazine</i>,
          www.smithsonianmag.com/. Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">6. Thai Adoption of Chili Peppers</Typography>
        <Link
          href="https://www.bbc.com/travel/article/20200220-how-chillies-changed-thai-food"
          target="_blank"
        >
          BBC Travel – How Chillies Changed Thai Cuisine
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          Ho, Elaine. “How Chillies Changed Thai Food.” <i>BBC Travel</i>, 20
          Feb. 2020,
          www.bbc.com/travel/article/20200220-how-chillies-changed-thai-food.
          Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">7. History of Mole</Typography>
        <Link
          href="https://mexiconewsdaily.com/lifestyle/history-of-mole/"
          target="_blank"
        >
          Mexico News Daily – History of Mole
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “The History of Mole.” <i>Mexico News Daily</i>,
          mexiconewsdaily.com/lifestyle/history-of-mole/. Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">8. Bird’s Eye Chili (Thailand)</Typography>
        <Link
          href="https://www.chilipeppermadness.com/chili-pepper-types/medium-hot-chili-peppers/thai-peppers/"
          target="_blank"
        >
          Chili Pepper Madness – Thai Peppers
        </Link>
        <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
          “Thai Peppers.” <i>Chili Pepper Madness</i>,
          www.chilipeppermadness.com/chili-pepper-types/medium-hot-chili-peppers/thai-peppers/.
          Accessed 16 Nov. 2025.
        </Typography>

        <Divider sx={{ mt: 4 }} />
      </Paper>
    </Box>
  );
}
