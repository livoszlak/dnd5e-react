import React, { useState, useEffect } from "react";
import useRaces from "../../hooks/useRaces";
import DataCard from "../common/Card";
import { Container, Box, Typography } from "@mui/material";

export default function RacesPage() {
  const races = useRaces();

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        className="headline"
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Typography variant="h2">Races</Typography>
      </Box>

      <Box
        className="races"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          paddingBottom: 2,
        }}
      >
        {races.map((raceItem, index) => {
          return <DataCard key={index} type={"races"} data={raceItem} />;
        })}
      </Box>
    </Container>
  );
}
