import { useParams } from "react-router-dom";
import useClass from "../../hooks/useClass";
import images from "../../assets/images/images";
import { Container, Typography, Box, Grid } from "@mui/material";

export default function ClassDetailPage() {
  const { className } = useParams();
  const classDataResult = useClass(className);

  const imageName = className;
  const imagePath = images["classes"][imageName];

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">{classDataResult.name}</Typography>
      </Box>

      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={6} sx={{ padding: 2 }}>
          <Typography>{classDataResult.index}</Typography>
          <Typography>{classDataResult.hit_die}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            src={imagePath}
            alt={classDataResult.name}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
