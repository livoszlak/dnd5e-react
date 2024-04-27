import React, { useState, useEffect } from "react";
import useMonsters from "../../hooks/useMonsters";

export default function MonstersPage() {
  const monsters = useMonsters();

  return (
    <>
      <div>
        <p>This is the Monsters page</p>
      </div>
      <ul>
        {monsters.map((monsterItem) => (
          <li key={monsterItem.index}>{monsterItem.name}</li>
        ))}
      </ul>
    </>
  );
}
