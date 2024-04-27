const baseUrl = "https://www.dnd5eapi.co/api/";

export async function fetchRaces() {
  const response = await fetch(baseUrl + "races");
  const data = await response.json();
  return data.results;
}

export async function fetchRace(raceName) {
  const response = await fetch(baseUrl + "races/" + raceName);
  const data = await response.json();
  return data;
}

export async function fetchClasses() {
  const response = await fetch(baseUrl + "classes");
  const data = await response.json();
  return data.results;
}

export async function fetchClass(className) {
  const response = await fetch(baseUrl + "classes/" + className);
  const data = await response.json();
  return data;
}

export async function fetchMonsters() {
  const response = await fetch(baseUrl + "monsters");
  const data = await response.json();
  return data.results;
}
