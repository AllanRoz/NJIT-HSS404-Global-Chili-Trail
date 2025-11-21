import React from "react";
import { Box, Typography } from "@mui/material";

export default function DishImageBox({ name, image }) {
  return (
    <Box
      sx={{
        width: "360px",
        p: 1,
        borderRadius: "12px",
        backgroundColor: "#333",
        textAlign: "center",
        mb: 2,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      {/* <Typography
        variant="subtitle2"
        sx={{ mt: 1, color: "white", fontWeight: "bold" }}
      >
        {name}
      </Typography> */}
    </Box>
  );
}
