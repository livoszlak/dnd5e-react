import React, { useState, useEffect } from "react";
import useRaces from "../../hooks/useRaces";

export default function RacesPage() {
  const races = useRaces();

  return (
    <>
      <div>
        <p>This is the Races page</p>
      </div>
      <ul>
        {races.map((raceItem) => (
          <li key={raceItem.index}>{raceItem.name}</li>
        ))}
      </ul>
    </>
  );
}
