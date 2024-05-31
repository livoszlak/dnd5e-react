import { useParams } from "react-router-dom";
import useRace from "../../hooks/useRace";
import { Container, Typography, Box } from "@mui/material";

export default function RaceDetailPage() {
  const { raceName } = useParams();
  const raceData = useRace(raceName);

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box>
        <Typography variant="h5">{raceData.name}</Typography>
      </Box>
    </Container>
  );
}
