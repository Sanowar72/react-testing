import React from "react";
import { Item } from "../utils";
import ItemCard from "./ItemCard";

const List = ({
  items,
  onDelete,
}: {
  items: Item[];
  onDelete: (id: string) => void;
}) => {
  console.log({ items, onDelete });
  return (
    <>
      <h1>this is list card</h1>
    </>
  );
};

export default List;
