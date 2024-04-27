import React, { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import ClassCard from "../cards/ClassCard";

export default function ClassesPage() {
  const classes = useClasses();

  return (
    <>
      <div>
        <p>This is the Classes page</p>
      </div>
      <ul>
        {classes.map((classItem) => {
          return (
            <ClassCard
              key={classItem.name}
              name={classItem.name}
              classData={classItem}
            />
          );
        })}
      </ul>
    </>
  );
}
