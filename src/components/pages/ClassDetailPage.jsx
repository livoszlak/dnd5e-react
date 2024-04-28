import { useParams } from "react-router-dom";
import useClass from "../../hooks/useClass";
import { Container, Typography } from "@mui/material";

export default function ClassDetailPage() {
  const { className } = useParams();
  const classDataResult = useClass(className);

  return (
    <Container sx={{ width: "100vw", display: "flex", height: "100%" }}>
      <Typography>{classDataResult.name}</Typography>
      <Typography>{classDataResult.index}</Typography>
      <Typography>{classDataResult.hit_die}</Typography>
    </Container>
  );
}
