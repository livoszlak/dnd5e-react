import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

export default function DataCard({ type, data }) {
  const navigate = useNavigate();
  const imageName =
    data.name.toLowerCase() == "half-elf" || "half-orc"
      ? data.name.toLowerCase().split("-").join("")
      : data.name.toLowerCase();
  const imagePath =
    type !== "monsters"
      ? images[type][imageName]
      : "http://dnd5eapi.co" + data.image;

  return (
    <Card
      sx={{
        bgcolor: "var(--bg-card)",
        minWidth: 275,
        height: 200,
        maxWidth: 300,
        display: "flex",
        py: 2,
        px: 1,
        alignItems: "center",
        gap: 1,
        justifyContent: "center",
      }}
      onClick={() => navigate(`/${type}/${data.name.toLowerCase()}`)}
    >
      {type !== "monsters" && (
        <Box
          component="img"
          src={imagePath}
          alt={data.name}
          sx={{
            height: "100%",
            objectFit: "contain",
          }}
        />
      )}
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        {data.name}
      </Typography>

      <CardActions></CardActions>
    </Card>
  );
}
