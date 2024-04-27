import { useState, useEffect } from "react";
import { fetchClasses } from "../api/dnd5eApi.js";

function useClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getClasses = async () => {
      const classesFromApi = await fetchClasses();
      setClasses(classesFromApi);
    };

    getClasses();
  }, []);

  return classes;
}

export default useClasses;
