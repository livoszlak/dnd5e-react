import { useState, useEffect } from "react";
import { fetchClass } from "../api/dnd5eApi.js";

export default function useClass(className) {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const getClassData = async () => {
      const classFromApi = await fetchClass(className);
      setClassData(classFromApi);
    };

    getClassData();
  }, [className]);

  return classData;
}
