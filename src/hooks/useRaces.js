import { useState, useEffect } from "react";
import { fetchRaces } from "../api/dnd5eApi.js";

function useRaces() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const getRaces = async () => {
      const racesFromApi = await fetchRaces();
      setRaces(racesFromApi);
    };

    getRaces();
  }, []);

  return races;
}

export default useRaces;
