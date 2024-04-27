import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

export default function DataCard({ type, data }) {
  const navigate = useNavigate();
  const imageName = data.name.toLowerCase();
  const imagePath = images[type][imageName];

  return (
    <Card
      sx={{ minWidth: 275, height: 200 }}
      onClick={() => navigate(`/${type}/${imageName}`)}
    >
      <CardContent>
        <Box
          component="img"
          src={imagePath}
          alt={data.name}
          sx={{ height: "100%", objectFit: "cover" }}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.name}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
