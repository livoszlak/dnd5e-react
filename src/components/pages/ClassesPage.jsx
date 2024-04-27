import React, { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import DataCard from "../common/Card";

export default function ClassesPage() {
  const classes = useClasses();

  return (
    <>
      <div>
        <p>This is the Classes page</p>
      </div>
      <ul>
        {classes.map((classItem, index) => {
          return <DataCard key={index} type={"classes"} data={classItem} />;
        })}
      </ul>
    </>
  );
}
