import React, { useState, useEffect } from "react";
import useMonsters from "../../hooks/useMonsters";
import DataCard from "../common/Card";
import { Container, Box, Typography } from "@mui/material";

export default function MonstersPage() {
  const monsters = useMonsters();

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
        <Typography variant="h2">Monsters</Typography>
      </Box>

      <Box
        className="monsters"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          paddingBottom: 2,
        }}
      >
        {monsters.map((monsterItem, index) => {
          return <DataCard key={index} type={"monsters"} data={monsterItem} />;
        })}
      </Box>
    </Container>
  );
}
