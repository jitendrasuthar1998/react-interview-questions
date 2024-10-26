import React from "react";
import { Name } from "../types/Person.types";

// array of objects

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
