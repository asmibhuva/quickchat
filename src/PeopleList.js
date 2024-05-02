import React from "react";
import { ListBar } from "./ListBar";

const data = [
  {
    id: 1,
    text: "Asmi",
  },
  {
    id: 2,
    text: "Diya",
  },
  {
    id: 3,
    text: "Densy",
  },
  {
    id: 4,
    text: "Freya",
  },
  {
    id: 5,
    text: "Janvi",
  },
  {
    id: 6,
    text: "Avani",
  },
  {
    id: 7,
    text: "Siya",
  },
  {
    id: 8,
    text: "Aahna",
  },
  {
    id: 9,
    text: "Liza",
  },
  {
    id: 10,
    text: "Niya",
  },
];

export const PeopleList = () => {
  return (
    <>
      <ListBar heading="Active Conversations" data={data} />
      <ListBar heading="Archived Conversations" data={data} />
    </>
  );
};
