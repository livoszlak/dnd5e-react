import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Container sx={{ bgcolor: "tomato" }}>
      <Box
        sx={{
          width: "100%",
          height: 200,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Typography sx={{ fontSize: 10 }}>
          This site is unofficial Fan Content permitted under the Fan Content
          Policy. Not approved/endorsed by Wizards. Portions of the materials
          used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
        </Typography>
      </Box>
    </Container>
  );
}
