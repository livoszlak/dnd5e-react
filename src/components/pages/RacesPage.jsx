import React, { useState, useEffect } from "react";
import useRaces from "../../hooks/useRaces";
import DataCard from "../common/Card";

export default function RacesPage() {
  const races = useRaces();

  return (
    <>
      <div>
        <p>This is the Races page</p>
      </div>
      <ul>
        {races.map((raceItem, index) => (
          <DataCard key={index} type="races" data={raceItem} />
        ))}
      </ul>
    </>
  );
}
