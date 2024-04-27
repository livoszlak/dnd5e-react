import { useState, useEffect } from "react";
import { fetchMonsters } from "../api/dnd5eApi.js";

function useMonsters() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const getMonsters = async () => {
      const monstersFromApi = await fetchMonsters();
      setMonsters(monstersFromApi);
    };

    getMonsters();
  }, []);

  return monsters;
}

export default useMonsters;
