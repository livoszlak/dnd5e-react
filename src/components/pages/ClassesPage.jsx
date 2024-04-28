import React, { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import DataCard from "../common/Card";
import { Container, Box, Typography } from "@mui/material";

export default function ClassesPage() {
  const classes = useClasses();

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
        <Typography variant="h2">Classes</Typography>
      </Box>

      <Box
        className="classes"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          paddingBottom: 2,
        }}
      >
        {classes.map((classItem, index) => {
          return <DataCard key={index} type={"classes"} data={classItem} />;
        })}
      </Box>
    </Container>
  );
}
