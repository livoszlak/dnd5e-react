import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

export default function DataCard({ type, data }) {
  const navigate = useNavigate();
  const imageName = data.name.toLowerCase();
  const imagePath = images[type][imageName];

  return (
    <Card
      sx={{ minWidth: 275 }}
      onClick={() => navigate(`/${type}/${imageName}`)}
    >
      <CardContent>
        <img src={imagePath} alt={data.name} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.name}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
