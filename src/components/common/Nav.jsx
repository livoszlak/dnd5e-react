import Menu from "./Menu";
import { Box } from "@mui/material";

export default function Nav() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "right",
        py: 4,
        px: 0,
      }}
    >
      <Menu />
    </Box>
  );
}
