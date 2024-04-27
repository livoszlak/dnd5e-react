import { useState, useEffect } from "react";
import { fetchRace } from "../api/dnd5eApi.js";

function useRace(raceName) {
  const [race, setRace] = useState([]);

  useEffect(() => {
    const getRace = async () => {
      const raceFromApi = await fetchRace(raceName);
      setRace(raceFromApi);
    };

    getRace();
  }, [raceName]);

  return race;
}

export default useRace;
