import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ClassCard({ classData }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ minWidth: 275 }}
      onClick={() => navigate(`/classes/${classData.name.toLowerCase()}`)}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {classData.name}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
